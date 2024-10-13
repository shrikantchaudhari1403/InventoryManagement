import { useNavigate } from "react-router-dom";
import { IShipment } from "../../interfaces/INativeShipments";
import baseApiService from "../../types/BaseApiService";
import { HBL_SHIPMENTS, MBL_SHIPMENTS, SHIPMENTS } from "../../types/index";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import { MblRequestModel } from "../../../shared/request/mbl";
import { HblRequestModel } from "../../../shared/request/hbl";

export class HBLShipmentDispatcher {
  private readonly dispatch: Dispatch;
  constructor(dispatch: Dispatch) {
    this.dispatch = dispatch;
  }

  getAllHBLShipments = async (data: any): Promise<void> => {
    this.dispatch({
      payload: { data: data },
      type: HBL_SHIPMENTS.GET_ALL_HBL_SHIPMENTS,
    });
  };

  getAllHBLShipmentsData = async (): Promise<void> => {
    try {
      const result = await baseApiService.get("api/OceanExport/GetAllHBLData");
      this.dispatch({
        type: HBL_SHIPMENTS.GET_ALL_HBL_SHIPMENTS_DATA,
        payload: result,
      });
    } catch (error: any) {
      this.dispatch({
        payload: { data: {} },
        type: HBL_SHIPMENTS.GET_ALL_HBL_SHIPMENTS_DATA_ERROR,
      });
    }
  };

  updateHBLShipmentsData = async (data: HblRequestModel): Promise<void> => {
    try {
      // const formData = new FormData();
      // formData.append('_method', 'put');
      // formData.append('FileNo', data?.fileNo ?? '');
      // formData.append('Profit', data?.blType ?? '');
      // formData.append('mblNo', data?.mblNo ?? '');
      //formData.append('Id', data?.?.toString());
      const result = await baseApiService.put(
        "api/OceanExport/UpdateNewShipmentHblData",
        data
      );
      toast.success("Details updated successfully");
      this.dispatch({
        type: HBL_SHIPMENTS.GET_ALL_HBL_SHIPMENTS_DATA,
        payload: result,
      });
    } catch (error: any) {
      toast.error("Something went wrong! please check with administrator");
      this.dispatch({
        payload: { data: {} },
        type: HBL_SHIPMENTS.GET_ALL_HBL_SHIPMENTS_DATA_ERROR,
      });
    }
  };

  AddMHBLShipmentsData = async (data: HblRequestModel): Promise<void> => {
    try {
      //     const formData = new FormData();
      //     formData.append('_method', 'post');
      //     formData.append('FileNo', data?.fileNo ?? '');
      //   //  formData.append('Profit', data?.profit ?? '');
      //   //  formData.append('MawbNo', data?.mawbNo ?? '');
      //    // formData.append('Id', data?.id?.toString());
      const result = await baseApiService.post(
        "api/OceanExport/AddHblData",
        data
      );
      toast.success("Record added succesfully");
      this.dispatch({
        type: HBL_SHIPMENTS.GET_ALL_HBL_SHIPMENTS_DATA,
        payload: result,
      });
    } catch (error: any) {
      toast.error("Something went wrong! please check with administrator");
      this.dispatch({
        payload: { data: {} },
        type: HBL_SHIPMENTS.GET_ALL_HBL_SHIPMENTS_DATA_ERROR,
      });
    }
  };

  deleteHblpmentRecord = async (id: any): Promise<void> => {
    try {
      const rowId = id;
      const result = await baseApiService.delete(
        "api/OceanExport/DeleteHblData",
        { params: { Id: rowId } }
      );
      //REMOVE_SHIPMENT
      toast.success("Record deleted succesfully");
      this.dispatch({
        type: HBL_SHIPMENTS.REMOVE_HBL_SHIPMENT,
        payload: +rowId,
      });
    } catch (error: any) {
      toast.error("Something went wrong! please check with administrator");
      this.dispatch({
        payload: { data: {} },
        type: HBL_SHIPMENTS.GET_ALL_HBL_SHIPMENTS_DATA_ERROR,
      });
    }
  };
}
