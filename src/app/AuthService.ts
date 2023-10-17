import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import { gql } from 'apollo-angular';

const TOKENS = gql`query Query{
  authorization(login: "dev", password: "KWLD:qojdlmaldq;w") {
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
