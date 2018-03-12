import { Action } from '@ngrx/store';

import { AuthActions, SET_AUTHENTICATED, SET_UNAUTHENTICATED  } from './auth.actions';

export interface State {
  isAuthenticated: boolean;
  access: string;
  uid: string;
}

const initialState: State = {
  isAuthenticated: false,
  access: null,
  uid: null
};

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        isAuthenticated: true,
        access: action.payload.access,
        uid: action.payload.uid
      };
    case SET_UNAUTHENTICATED:
      return {
        isAuthenticated: false,
        access: null,
        uid: null
      };
    default: {
      return state;
    }
  }
}

export const getIsAuthenticated = (state: State) => state.isAuthenticated;
export const getAccess = (state: State) => state.access;
export const getUID = (state: State) => state.uid;
