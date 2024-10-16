import { useNavigate } from "react-router-dom";
import { IShipment } from "../../interfaces/INativeShipments";
import baseApiService from "../../types/BaseApiService";
import { MBL_SHIPMENTS, SHIPMENTS } from "../../types/index";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import { MblRequestModel } from "../../../shared/request/mbl";
import { IMBLShipment } from "../../interfaces/IMBLShipment";

export class MBLShipmentDispatcher {
  private readonly dispatch: Dispatch;
  constructor(dispatch: Dispatch) {
    this.dispatch = dispatch;
  }

  getAllMBLShipments = async (data: any): Promise<void> => {
    this.dispatch({
      payload: { data: data },
      type: MBL_SHIPMENTS.GET_ALL_MBL_SHIPMENTS,
    });
  };

  getAllMBLShipmentsData = async (): Promise<void> => {
    try {
      const result = await baseApiService.get("api/OceanExport/GetAllMBLData");
      this.dispatch({
        type: MBL_SHIPMENTS.GET_ALL_MBL_SHIPMENTS,
        payload: result,
      });
    } catch (error: any) {
      this.dispatch({
        payload: { data: {} },
        type: MBL_SHIPMENTS.GET_ALL_MBL_SHIPMENTS_DATA_ERROR,
      });
    }
  };

  updateMBLShipmentsData = async (data: MblRequestModel): Promise<void> => {
    try {
      const formData = new FormData();
      formData.append("_method", "put");
      formData.append("FileNo", data?.fileNo ?? "");
      formData.append("Profit", data?.blType ?? "");
      formData.append("mblNo", data?.mblNo ?? "");
      //formData.append('Id', data?.?.toString());
      const result = await baseApiService.put(
        "api/OceanExport/UpdateNewShipmentMblData",
        formData
      );
      toast.success("Details updated successfully");
      this.dispatch({
        type: MBL_SHIPMENTS.GET_ALL_MBL_SHIPMENTS_DATA,
        payload: result,
      });
    } catch (error: any) {
      toast.error("Something went wrong! please check with administrator");
      this.dispatch({
        payload: { data: {} },
        type: MBL_SHIPMENTS.GET_ALL_MBL_SHIPMENTS_DATA_ERROR,
      });
    }
  };

  AddMBLShipmentsData = async (data: IMBLShipment): Promise<void> => {
    try {
      //     const formData = new FormData();
      //     formData.append('_method', 'post');
      //     formData.append('FileNo', data?.fileNo ?? '');
      //   //  formData.append('Profit', data?.profit ?? '');
      //   //  formData.append('MawbNo', data?.mawbNo ?? '');
      //    // formData.append('Id', data?.id?.toString());
      const result = await baseApiService.post(
        "api/OceanExport/AddMblData",
        data
      );
      toast.success("Record added succesfully");
      this.dispatch({
        type: MBL_SHIPMENTS.GET_ALL_MBL_SHIPMENTS_DATA,
        payload: result,
      });
    } catch (error: any) {
      toast.error("Something went wrong! please check with administrator");
      this.dispatch({
        payload: { data: {} },
        type: MBL_SHIPMENTS.GET_ALL_MBL_SHIPMENTS_DATA_ERROR,
      });
    }
  };

  deleteMblShipmentRecord = async (id: any): Promise<void> => {
    try {
      const rowId = id;
      const result = await baseApiService.delete(
        "api/OceanExport/DeleteMblShipmentData",
        { params: { Id: rowId } }
      );
      //REMOVE_SHIPMENT
      toast.success("Record deleted succesfully");
      this.dispatch({
        type: MBL_SHIPMENTS.REMOVE_MBL_SHIPMENT,
        payload: +rowId,
      });
    } catch (error: any) {
      toast.error("Something went wrong! please check with administrator");
      this.dispatch({
        payload: { data: {} },
        type: MBL_SHIPMENTS.GET_ALL_MBL_SHIPMENTS_DATA_ERROR,
      });
    }
  };

  saveHBLShipmentRecord = async(data:any):Promise<void>=>{

    this.dispatch({
      type: MBL_SHIPMENTS.SAVE_HBL_SHIPMENT,
      payload: data,
    });

  }
}
