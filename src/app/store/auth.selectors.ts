import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AUTH_FEATURE_NAME, AuthState} from "./auth.reducer";
import {state} from "@angular/animations";

const getFeature = createFeatureSelector<AuthState>(AUTH_FEATURE_NAME);

export const getLoading = createSelector(
  getFeature,
  state => state.loading
);

export const getLoaded = createSelector(
  getFeature,
  state => state.loaded
)

export const getServerError = createSelector(
  getFeature,
  state => state.serverError
)

export const getData = createSelector(
  getFeature,
  state => state.authData
)

export const getAccessToken = createSelector(
  getData,
  authData => authData && authData.accessToken
)

export const getRefreshToken = createSelector(
  getData,
  authData => authData && authData.refreshToken,
)

export const isAuth = createSelector(
  getAccessToken,
  accessToken => !!accessToken
)
