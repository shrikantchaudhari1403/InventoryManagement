import { MBL_SHIPMENTS } from '../../types/index/MBL_SHIPMENTS'
import { Dispatch } from 'redux'

import { IHBLShipment } from "../interfaces/IHBLShipment";
import { IMBLShipment } from "../interfaces/IMBLShipment";
import { toast } from 'react-toastify';;

export class NewShipments {
    private readonly dispatch: Dispatch
    constructor(dispatch: Dispatch) {
        this.dispatch = dispatch
    }


    saveHBL = async (model: IHBLShipment): Promise<void> => {
        try {

            this.dispatch({type: MBL_SHIPMENTS.SAVE_HBL_SHIPMENT, payload: []});

        } catch (error: any) {
            toast.error("Something went wrong! please check with administrator");

        }
    }
}

// export const UserLogin = (data: any) => async (dispatch: Dispatch<any>) => {
//     const response = await BaseApiService.post("/UserAuth/token", { data: data });
//     dispatch({ type: LOGIN.USER_LOGIN, data: response.data });
// };
