import { combineReducers } from 'redux'
import { NativeShipments } from './NativeShipments'
import { UserLogin } from './UserLogin'
import {MblShipment} from './mblShipment'

const rootReducer = combineReducers({
  NativeShipments,
  MblShipment,
  authResponse:UserLogin
})

export default rootReducer
