import {Component} from '@angular/core';
import { AuthService } from '../AuthService';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { gql } from 'apollo-angular';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
// export class AuthComponent implements OnInit {
//   authForm: FormGroup;
//   userLogin: string ; // логин пользователя
//   password: string ; // пароль пользователя
//   message: string ; // сообщение об ошибке или успешном входе


//   constructor(private authService: AuthService) {
//     this.authForm = new FormGroup<any>({
//         userLogin: new FormControl(null, Validators.required),
//         password: new FormControl(null, Validators.required)
//   })
// }
// ngOnInit(): void {
//   this.userLogin = ''; // инициализируем логин с пустым значением
//   this.password = ''; // инициализируем пароль с пустым значением
//   this.message = ''; // инициализируем сообщение с пустым значением
// }

// authorization() {
//   const userLogin = this.authForm.get('userLogin').value;
//   const password = this.authForm.get('password').value;

//   if (this.authForm.get('password').value.length < 5 || this.authForm.get('password').value.length > 30) {
//       this.message = "Длина пароля должна быть в диапазоне от 5 до 30 символов"
//   }


//   // вызываем метод login из сервиса AuthService, передавая логин и пароль пользователя
//   this.authService.login(userLogin, password).subscribe(
//       (data: any) => {
//           // получаем объект data из ответа сервера
//           const accessToken = data.login.accessToken; // получаем accessToken из data.login
//           const refreshToken = data.login.refreshToken; // получаем refreshToken из data.login
//           if (accessToken && refreshToken) {
//               // если оба токена получены, то сохраняем их в local storage
//               localStorage.setItem('accessToken', accessToken);
//               localStorage.setItem('refreshToken', refreshToken);
//               // выводим сообщение об успешной авторизации
//               this.message = 'Авторизация прошла успешно';
//               window.alert(this.message)
//           } else {
//               // если что-то пошло не так - выводим
//               this.message = 'Неверный логин или пароль';

//           }
//       },
//       (error) => {
//           // если сервер вернул ошибку, то выводим ее сообщение
//           this.message = 'ошибка' + error.message;
//           window.alert(this.message)
//       }
//   );
// }
//}

export class AuthComponent{
  message: string
  myForm: FormGroup
  constructor(private autService: AuthService){
    this.myForm = new FormGroup({
      "userLogin": new FormControl("", Validators.required),
      "password": new FormControl("", [Validators.required, Validators.min(5)])

    })
  }
  authorization(){
    const userLogin = this.myForm.value.userLogin
    const password = this.myForm.value.password

    this.autService.onLogin(userLogin, password).subscribe((data: any ) => {
        const accessToken = data.data.authorization.accessToken;
        const refreshToken = data.data.authorization.refreshToken;

        if(this.myForm.value.password.length < 5){
          this.message = "Длинна пароля должна быть не менее 5 символов"

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
