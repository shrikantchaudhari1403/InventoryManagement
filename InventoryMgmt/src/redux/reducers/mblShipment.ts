import { MBL_SHIPMENTS, SHIPMENTS } from "../types/index";
import { Action, Reducer } from "redux";
import {
  IShipment,
  ShipmentDataResponse,
} from "../interfaces/INativeShipments";
import { IHBLShipment } from "../interfaces/IHBLShipment";
import { IMBLShipment } from "../interfaces/IMBLShipment";

const hblDataModel: IHBLShipment[] = [{}];

const initialState: IMBLShipment[] = [
  {
    hblData: hblDataModel,
  },
];

export interface IDispatchAction extends Action<MBL_SHIPMENTS> {
  payload: IMBLShipment;
}

export const MblShipment: Reducer<IMBLShipment[], IDispatchAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
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
