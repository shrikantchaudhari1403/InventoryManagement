import { SHIPMENTS } from '../types/index'
import { Action, Reducer } from 'redux'
import {IShipments} from '../interfaces/INativeShipments'
const initialState: IShipments = {
  data: [
    {
      "id": 1,
      "departmentName": null,
      "fileNo": "qwqaa",
      "mawbNo": "aqqaa",
      "edt": null,
      "eta": null,
      "profit": "122",
      "createdBy": "admin",
      "createdDate": "2024-08-04T15:40:10.687",
      "modifiedBy": null,
      "modifiedDate": null
    },
    {
      "id": 2,
      "departmentName": null,
      "fileNo": "wewewe",
      "mawbNo": "sdsdsds",
      "edt": null,
      "eta": null,
      "profit": "232",
      "createdBy": "admin",
      "createdDate": "2024-08-04T15:40:10.687",
      "modifiedBy": null,
      "modifiedDate": null
    },
    {
      "id": 1,
      "departmentName": null,
      "fileNo": "qwqaa",
      "mawbNo": "aqqaa",
      "edt": null,
      "eta": null,
      "profit": "122",
      "createdBy": "admin",
      "createdDate": "2024-08-04T15:40:10.687",
      "modifiedBy": null,
      "modifiedDate": null
    },
    {
      "id": 2,
      "departmentName": null,
      "fileNo": "wewewe",
      "mawbNo": "sdsdsds",
      "edt": null,
      "eta": null,
      "profit": "232",
      "createdBy": "admin",
      "createdDate": "2024-08-04T15:40:10.687",
      "modifiedBy": null,
      "modifiedDate": null
    },
    {
      "id": 1,
      "departmentName": null,
      "fileNo": "qwqaa",
      "mawbNo": "aqqaa",
      "edt": null,
      "eta": null,
      "profit": "122",
      "createdBy": "admin",
      "createdDate": "2024-08-04T15:40:10.687",
      "modifiedBy": null,
      "modifiedDate": null
    },
    {
      "id": 2,
      "departmentName": null,
      "fileNo": "wewewe",
      "mawbNo": "sdsdsds",
      "edt": null,
      "eta": null,
      "profit": "232",
      "createdBy": "admin",
      "createdDate": "2024-08-04T15:40:10.687",
      "modifiedBy": null,
      "modifiedDate": null
    },
    {
      "id": 1,
      "departmentName": null,
      "fileNo": "qwqaa",
      "mawbNo": "aqqaa",
      "edt": null,
      "eta": null,
      "profit": "122",
      "createdBy": "admin",
      "createdDate": "2024-08-04T15:40:10.687",
      "modifiedBy": null,
      "modifiedDate": null
    },
    {
      "id": 2,
      "departmentName": null,
      "fileNo": "wewewe",
      "mawbNo": "sdsdsds",
      "edt": null,
      "eta": null,
      "profit": "232",
      "createdBy": "admin",
      "createdDate": "2024-08-04T15:40:10.687",
      "modifiedBy": null,
      "modifiedDate": null
    },
    {
      "id": 1,
      "departmentName": null,
      "fileNo": "qwqaa",
      "mawbNo": "aqqaa",
      "edt": null,
      "eta": null,
      "profit": "122",
      "createdBy": "admin",
      "createdDate": "2024-08-04T15:40:10.687",
      "modifiedBy": null,
      "modifiedDate": null
    },
    {
      "id": 2,
      "departmentName": null,
      "fileNo": "wewewe",
      "mawbNo": "sdsdsds",
      "edt": null,
      "eta": null,
      "profit": "232",
      "createdBy": "admin",
      "createdDate": "2024-08-04T15:40:10.687",
      "modifiedBy": null,
      "modifiedDate": null
    },
    {
      "id": 1,
      "departmentName": null,
      "fileNo": "qwqaa",
      "mawbNo": "aqqaa",
      "edt": null,
      "eta": null,
      "profit": "122",
      "createdBy": "admin",
      "createdDate": "2024-08-04T15:40:10.687",
      "modifiedBy": null,
      "modifiedDate": null
    },
    {
      "id": 2,
      "departmentName": null,
      "fileNo": "wewewe",
      "mawbNo": "sdsdsds",
      "edt": null,
      "eta": null,
      "profit": "232",
      "createdBy": "admin",
      "createdDate": "2024-08-04T15:40:10.687",
      "modifiedBy": null,
      "modifiedDate": null
    },
    {
      "id": 1,
      "departmentName": null,
      "fileNo": "qwqaa",
      "mawbNo": "aqqaa",
      "edt": null,
      "eta": null,
      "profit": "122",
      "createdBy": "admin",
      "createdDate": "2024-08-04T15:40:10.687",
      "modifiedBy": null,
      "modifiedDate": null
    },
    {
      "id": 2,
      "departmentName": null,
      "fileNo": "wewewe",
      "mawbNo": "sdsdsds",
      "edt": null,
      "eta": null,
      "profit": "232",
      "createdBy": "admin",
      "createdDate": "2024-08-04T15:40:10.687",
      "modifiedBy": null,
      "modifiedDate": null
    }
  ],
}

export interface IDispatchAction extends Action<SHIPMENTS> {
  payload: IShipments
}

export const NativeShipments: Reducer<IShipments, IDispatchAction> = (
  state = initialState,
  action,
) => {

  switch (action.type) {
    case SHIPMENTS.GET_ALL_SHIPMENTS:
      return { ...state, data: action.payload.data }
    default:
      return state
  }

}
