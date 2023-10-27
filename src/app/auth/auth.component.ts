import {Component, OnInit} from '@angular/core';
import { AuthService } from '../AuthService';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { gql } from 'apollo-angular';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getLoaded, getLoading, getServerError} from "../store/auth.selectors";
import {Login, LoginSuccess} from "../store/auth.actions";

interface   AuthorizationData{
  data: {
    authorization: {
    accessToken: string,
    refreshToken: string
    }
  }
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})



export class AuthComponent implements OnInit{
  message: string
  myForm: FormGroup

  loading$: Observable<boolean> = this.store$.pipe(select(getLoading))
  loaded$: Observable<boolean> = this.store$.pipe(select(getLoaded))
  serverError$: Observable<string> = this.store$.pipe(select(getServerError))




  ngOnInit() {
    this.serverError$.subscribe(error =>{
      this.message = error
    })
  }

  constructor(private autService: AuthService, private store$: Store){
    this.myForm = new FormGroup({
      "userLogin": new FormControl("", Validators.required),
      "password": new FormControl("", [Validators.required, Validators.min(5)])

    })
  }
  authorization(){
    const userLogin = this.myForm.value.userLogin
    const password = this.myForm.value.password

    this.store$.dispatch(Login({userLogin, password}))

    this.autService.onLogin(userLogin, password).subscribe((result ) => {
        const data = result as AuthorizationData
        const accessToken = data.data.authorization.accessToken;
        const refreshToken = data.data.authorization.refreshToken;

        if(this.myForm.value.password.length < 5){
          this.message = "Длинна пароля должна быть не менее 5 символов"
          window.alert(this.message)
        }

        if(accessToken && refreshToken){
          localStorage.setItem('accessToken', accessToken)
          localStorage.setItem('refreshToken', refreshToken)
          this.message = "Успешная авторизация"
          window.document.write(this.message)
        }
      },
      error => {
        window.alert("ошибка " + error.message)
      })
  }
}
