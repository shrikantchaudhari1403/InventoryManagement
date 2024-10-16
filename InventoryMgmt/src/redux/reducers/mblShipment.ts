import { MBL_SHIPMENTS,HBL_SHIPMENTS, SHIPMENTS } from "../types/index";
import { Action, Reducer } from "redux";
import {
  IShipment,
  ShipmentDataResponse,
} from "../interfaces/INativeShipments";
import { IHBLShipment } from "../interfaces/IHBLShipment";
import { IMBLShipment } from "../interfaces/IMBLShipment";




const initialState:IMBLShipment =
{
  fileNo:"",
  hblData:[]
};

export interface IDispatchAction extends Action<MBL_SHIPMENTS> {
  payload: IMBLShipment;
}

export const MblShipment: Reducer<any, IDispatchAction> = (
  state = initialState,
  action
) => {
  switch (action.type)
  {
    case MBL_SHIPMENTS.SAVE_HBL_SHIPMENT:
      return{...state ,hblData: [...state.hblData,action?.payload]
    };
    case MBL_SHIPMENTS.GET_ALL_MBL_SHIPMENTS:
      return { ...state, data: action.payload };
    case MBL_SHIPMENTS.GET_ALL_MBL_SHIPMENTS_DATA:
      return { ...state, data: action.payload };
    case MBL_SHIPMENTS.GET_ALL_MBL_SHIPMENTS_DATA_ERROR:
      return { ...state, data: [] };
    case MBL_SHIPMENTS.REMOVE_MBL_SHIPMENT:
      const mblShipments = [...state];
      const shipmentIndex = mblShipments.findIndex((x) => x == action.payload);
      mblShipments.splice(shipmentIndex, 1);
      return { ...state, data: mblShipments };
    default:
      return state;
  }
};
