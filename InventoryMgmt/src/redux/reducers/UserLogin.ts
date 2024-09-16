import { LOGIN } from '../types/index'
import { Action, Reducer } from 'redux'
import { UserDataResponseModel } from '../../shared/response/login'
import { loginResponse } from '../../shared/response/login/userDataResponseModel';

const resultState: UserDataResponseModel = {
};

const initialState: loginResponse = {
  data : resultState,
};

export interface IDispatchAction extends Action<LOGIN> {
  payload: loginResponse
}

export const UserLogin : Reducer<loginResponse, IDispatchAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case LOGIN.LOGIN_LOADING:
      return {...state, data:{}};
     case LOGIN.LOGIN_SUCCESS :
      return {...state, data: action.payload.data};
     case LOGIN.LOGIN_FAILURE :
      return {...state, data: {}};   
    default:
      return state;
  }
}
