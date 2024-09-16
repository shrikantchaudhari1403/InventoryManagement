import { SHIPMENTS } from '../types/index'
import { Action, Reducer } from 'redux'
import { IShipment, ShipmentDataResponse } from '../interfaces/INativeShipments'

const resultState: IShipment[] = [{
}];

const initialState: ShipmentDataResponse = {
  data: resultState,
};

export interface IDispatchAction extends Action<SHIPMENTS> {
  payload: ShipmentDataResponse
}

export const NativeShipments: Reducer<ShipmentDataResponse, IDispatchAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case SHIPMENTS.GET_ALL_SHIPMENTS:
      return { ...state, data: action.payload.data };
    case SHIPMENTS.GET_ALL_SHIPMENTS_DATA:
      return { ...state, data: action.payload.data }
    case SHIPMENTS.GET_ALL_SHIPMENTS_DATA_ERROR:
      return { ...state, data: [] };
    case SHIPMENTS.REMOVE_SHIPMENT:
       const shipments= [...state.data];
       const shipmentIndex= shipments.findIndex(x=>x.id== action.payload);
       shipments.splice(shipmentIndex, 1);
       return { ...state, data: shipments };  
    default:
      return state
  }

}
