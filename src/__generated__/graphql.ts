/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A 64-bit signed integer */
  Long: { input: any; output: any; }
};

export type Auth = {
  onLogin: any;
  __typename?: 'Auth';
  accessExpiresIn: Scalars['Int']['output'];
  accessToken: Scalars['String']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  refreshToken: Scalars['String']['output'];
  scope: Scalars['String']['output'];
  sessionConfiguration: SessionConfiguration;
  userInfo: UserInfo;
};

export type Query = {
  __typename?: 'Query';
  apiVersion: Scalars['Int']['output'];
  /** Authorization for web */
  authorization: Auth;
  /** Authorization for mobile */
  authorizationMob: Auth;
  refresh: Auth;
};


export type QueryAuthorizationArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type QueryAuthorizationMobArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type QueryRefreshArgs = {
  refreshToken: Scalars['String']['input'];
};

export type SessionConfiguration = {
  __typename?: 'SessionConfiguration';
  showAdmin: Scalars['Boolean']['output'];
  showDirectoryEmployee: Scalars['Boolean']['output'];
};

export type UserInfo = {
  __typename?: 'UserInfo';
  email?: Maybe<Scalars['String']['output']>;
  employeeId: Scalars['Int']['output'];
  exp: Scalars['Long']['output'];
  firstName: Scalars['String']['output'];
  guid: Scalars['String']['output'];
  iat: Scalars['Long']['output'];
  lastName: Scalars['String']['output'];
  secondName: Scalars['String']['output'];
};
