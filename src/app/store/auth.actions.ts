import { createAction, props } from "@ngrx/store";
import {AuthDataLogin} from "../interfaces";

export const Login = createAction(
  '[Auth] Login',
  props<{userLogin: string; password: string}>())

export const LoginSuccess = createAction(
  '[Auth] Login Success',
  props<{accessToken: string; refreshToken: string /*authDataLogin: AuthDataLogin*/}>());

export const LoginFailure = createAction(
  '[Auth] Login Failure',
  props<{serverError: string}>());


