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

}
