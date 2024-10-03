using Services.DTO.Request;
using Services.DTO.Response;
using Services.Interface;
using Services.Wrapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WorldCargoHelpers;

namespace Services.ConcreteClass
{
    public class OceanExportService : BaseService, IOceanExportService
    {
        public OceanExportService() { }

        public List<OceanExportHblInformationDTO> GetOceanExportHblData()
        {
            object dataParams = new object();
            List<OceanExportHblInformationDTO> lstResult = new List<OceanExportHblInformationDTO>();
            var data = _repo.OceanExportData.GetOceanExportHblData(DatabaseHelper.GetParamList(dataParams)).ToList();
            data.ForEach((x) =>
            {
                lstResult.Add(new OceanExportHblInformationDTO()
                {
                    HBL_Id=x.HBL_Id,
                    Actual_Shipper = x.Actual_Shipper,
                    Bill_To = x.Bill_To,
                    BL_Cancelled = x.BL_Cancelled,
                    Booking_No = x.Booking_No,
                    Buying_Freight = x.Buying_Freight,
                    Cancelled_By = x.Cancelled_By,
                    Cargo_Pickup = x.Cargo_Pickup,
                    Cargo_Ready_Date = x.Cargo_Ready_Date,
                    Cargo_Type = x.Cargo_Type,
                    Consignee = x.Consignee,
                    Container_Qty = x.Container_Qty,
                    Customer = x.Customer,
                    Customer_Ref_No = x.Customer_Ref_No,
                    Customs_Broker = x.Customs_Broker,
                    Delivery_ToPier = x.Delivery_ToPier,
                    Document_No = x.Document_No,
                    Early_Return_Date = x.Early_Return_Date,
                    Empty_Pickup = x.Empty_Pickup,
                    ETA = x.ETA,
                    Express_BL = x.Express_BL,
                    FBA_FC = x.FBA_FC,
                    File_No = x.File_No,
                    Final_Destination = x.Final_Destination,
                    Final_ETA = x.Final_ETA,
                });
            }); 

            return lstResult;
        }

        public Task<Boolean> AddHblData(AddHblRequestModel model)
        {
            var data = _repo.OceanExportData.AddHblData(DatabaseHelper.GetParamList(model)).Result;
            return Task.FromResult(data);
        }

        public Task<Boolean> AddMblData(AddMblRequestModel model)
        {
            var data = _repo.OceanExportData.AddMblData(DatabaseHelper.GetParamList(model)).Result;
            return Task.FromResult(data);
        }
    }
}
