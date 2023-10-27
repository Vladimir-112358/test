import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Login, LoginSuccess} from "./auth.actions";
import {AuthService} from "../AuthService";
import {switchMap, of, map} from "rxjs";
import {AuthComponent} from "../auth/auth.component";
import {ApolloQueryResult} from "@apollo/client";
import {AuthDataLogin} from "../interfaces"
@Injectable()
export class AuthEffects{
     userLogin: string
     password: string

   login$ = createEffect(()=> this.actions$.pipe(
     ofType(Login),
     switchMap(action =>this.authService.onLogin(action.userLogin, action.password)
         .pipe(map((result: ApolloQueryResult<AuthDataLogin>) => {
             return LoginSuccess({accessToken: "", refreshToken: ""})
         }))))
   );
  constructor(private actions$: Actions, private authService: AuthService) {

  }
}
