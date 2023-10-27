import {createReducer, on} from "@ngrx/store";
import {Login, LoginFailure, LoginSuccess} from "./auth.actions";

export const AUTH_FEATURE_NAME: string = 'auth'

export interface AuthData{
  accessToken: string
  refreshToken: string
}

export interface AuthState{
  loading: boolean
  loaded: boolean
  serverError: string
  authData?: AuthData
}

const initialState: AuthState = {
  loading: false,
  loaded: false,
  serverError: ''
}

export const authReducer = createReducer(
  initialState,
  on(Login, state => ({
    ...state,
    loading: true,
    loaded: false,
    serverError: ''
  })),
  on(LoginSuccess, (state, {accessToken, refreshToken}) =>({
    ...state,
    authData: {
        accessToken,
        refreshToken
    },
    loaded: true,
    loading: false,
    serverError: ''
  })),
  on(LoginFailure, (state, {serverError}) => ({
    ...state,
    authData: null,
    loaded: true,
    loading: false,
    serverError
  }))
)
