import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import { gql } from 'apollo-angular';
import {Auth, Scalars} from "../__generated__/graphql";

const TOKENS = gql`query Query($login: String!, $password: String!){
  authorization(login: $login, password: $password) {
    accessToken
    refreshToken
  }
}`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apollo: Apollo) { }

  onLogin(login: string, password: string) {
    // возвращаем результат выполнения запроса с помощью метода query из apollo
    return this.apollo.query({
      query: TOKENS,
      variables: {
        login,
        password
      }
    });
  }
}
