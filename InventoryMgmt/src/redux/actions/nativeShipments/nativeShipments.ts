import { useNavigate } from 'react-router-dom'
import { IShipment } from '../../interfaces/INativeShipments'
import baseApiService from '../../types/BaseApiService'
import {SHIPMENTS} from '../../types/index'
import {Dispatch} from 'redux'

export class NativeShipmentDispatcher {
    private readonly dispatch: Dispatch
    constructor(dispatch: Dispatch) {
        this.dispatch = dispatch
    }
   
    getAllNativeShipments = async (data: any): Promise<void> => {
        this.dispatch({
            payload: {data: data},
            type: SHIPMENTS.GET_ALL_SHIPMENTS,
        })
    }

       getAllNativeShipmentsData = async (): Promise<void> => {
        try {
            // this.dispatch({ type: LOGIN.USER_LOGIN });
            const result= await baseApiService.get("api/GoFrightShipment/GetAllNegativeShipmentData");
           // sessionStorage.setItem("isAuthenticated",JSON.parse(result.data.isAuthenticated));
           //sessionStorage.setItem("token",result.data.token);
            this.dispatch({type: SHIPMENTS.GET_ALL_SHIPMENTS_DATA, payload: result});
            
        } catch (error: any) {
            this.dispatch({
                payload: { data: {} },
                type: SHIPMENTS.GET_ALL_SHIPMENTS_DATA_ERROR,
            })
        }
    }

      updateNativeShipmentsData = async (data:IShipment): Promise<void> => {
        try {
            const formData = new FormData();
            formData.append('_method', 'put');
            formData.append('FileNo', data?.fileNo ?? '');
            formData.append('Profit', data?.profit ?? '');
            formData.append('MawbNo', data?.mawbNo ?? '');
            formData.append('Id', data?.id?.toString());
            const result= await baseApiService.put("api/GoFrightShipment/UpdateNegativeShipmentData",formData
              );
            this.dispatch({type: SHIPMENTS.GET_ALL_SHIPMENTS_DATA, payload: result});
        } catch (error: any) {
            this.dispatch({
                payload: { data: {} },
                type: SHIPMENTS.GET_ALL_SHIPMENTS_DATA_ERROR,
            })
        }
    }

    deleteNativeShipmentRecord = async (id:any): Promise<void> => {
        try {
            const rowId = id; 
            const result= await baseApiService.delete("api/GoFrightShipment/DeleteNegativeShipmentData", 
                {params: { Id: rowId}}
              );
               //REMOVE_SHIPMENT
            this.dispatch({type: SHIPMENTS.REMOVE_SHIPMENT, payload: +rowId});
        } catch (error: any) {
            this.dispatch({
                payload: { data: {} },
                type: SHIPMENTS.GET_ALL_SHIPMENTS_DATA_ERROR,
            })
        }
    }

}
