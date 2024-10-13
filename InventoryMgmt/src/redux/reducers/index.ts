import { combineReducers } from 'redux'
import { NativeShipments } from './NativeShipments'
import { UserLogin } from './UserLogin'

const rootReducer = combineReducers({
  NativeShipments,
  
  authResponse:UserLogin
})

export default rootReducer
