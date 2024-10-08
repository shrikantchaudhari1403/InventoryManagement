using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WorldCargoRepository.Repository.Data.Models;

namespace WorldCargoRepository.Repository.Data
{
    public class OcianExportDataManagement
    {
        public IEnumerable<dynamic> GetMblData(string connectionString, Dictionary<string, string> parameters)
        {
            List<SqlParameter> sqlParameters = new List<SqlParameter>();
            foreach (var parameter in parameters)
            {
                sqlParameters.Add(new SqlParameter(parameter.Key, parameter.Value));
            }

            DataSet ds = ConfigDB.query(connectionString, "dbo.sp_HBL_Information_Get", sqlParameters);

            return ds.Tables[0].AsEnumerable().Select(x => new OceanExportHblInformationModel
            {
                HBL_Id = x["HBL_Id"] == DBNull.Value ? null : Convert.ToString(x["HBL_Id"]),
                Actual_Shipper = x["Actual_Shipper"] == DBNull.Value ? null : Convert.ToString(x["Actual_Shipper"]),
                Bill_To = x["Bill_To"] == DBNull.Value ? null : Convert.ToString(x["Bill_To"]),
                BL_Cancelled = x["BL_Cancelled"] != DBNull.Value ? Convert.ToDateTime(x["BL_Cancelled"]) : null,
                Booking_No = x["Booking_No"] == DBNull.Value ? null : Convert.ToString(x["Booking_No"]),
                Buying_Freight = x["Buying_Freight"] == DBNull.Value ? null : Convert.ToString(x["Buying_Freight"]),
                Cancelled_By = x["Cancelled_By"] == DBNull.Value ? null : Convert.ToString(x["Cancelled_By"]),
                Cargo_Pickup = x["Cargo_Pickup"] == DBNull.Value ? null : Convert.ToString(x["Cargo_Pickup"]),
                Cargo_Ready_Date = x["Cargo_Ready_Date"] != DBNull.Value ? Convert.ToDateTime(x["Cargo_Ready_Date"]) : null,
                Cargo_Type = x["Cargo_Type"] == DBNull.Value ? null : Convert.ToString(x["Cargo_Type"]),
                Consignee = x["Consignee"] == DBNull.Value ? null : Convert.ToString(x["Consignee"]),
                Container_Qty = x["Container_Qty"] == DBNull.Value ? null : Convert.ToInt32(x["Container_Qty"]),
                Customer = x["Customer"] == DBNull.Value ? null : Convert.ToString(x["Customer"]),
                Customer_Ref_No = x["Customer_Ref_No"] == DBNull.Value ? null : Convert.ToString(x["Customer_Ref_No"]),
                Customs_Broker = x["Customs_Broker"] == DBNull.Value ? null : Convert.ToString(x["Customs_Broker"]),
                Delivery_ToPier = x["Delivery_ToPier"] == DBNull.Value ? null : Convert.ToString(x["Delivery_ToPier"]),
                Document_No = x["Document_No"] == DBNull.Value ? null : Convert.ToString(x["Document_No"]),
                Early_Return_Date = x["Early_Return_Date"] != DBNull.Value ? Convert.ToDateTime(x["Early_Return_Date"]) : null,
                Empty_Pickup = x["Empty_Pickup"] == DBNull.Value ? null : Convert.ToString(x["Empty_Pickup"]),
                ETA = x["ETA"] != DBNull.Value ? Convert.ToDateTime(x["ETA"]) : null,
                Express_BL = x["Express_BL"] != DBNull.Value ? Convert.ToBoolean(x["Express_BL"]) : null,

            });
        }

        public Task<Boolean> AddHblData(string connectionString, Dictionary<string, string> parameters)
        {
            List<SqlParameter> sqlParameters = new List<SqlParameter>();
            foreach (var parameter in parameters)
            {
                sqlParameters.Add(new SqlParameter(parameter.Key, parameter.Value));
            }

            try
            {
                ConfigDB.ExecuteNonQuery(connectionString, "dbo.sp_HBL_Information_DML", sqlParameters);
            }
            catch (Exception ex)
            {
                return Task.FromResult(false);
            }
            return Task.FromResult(true);
        }

        public Task<Boolean> AddMblData(string connectionString, Dictionary<string, string> parameters)
        {
            List<SqlParameter> sqlParameters = new List<SqlParameter>();
            foreach (var parameter in parameters)
            {
                sqlParameters.Add(new SqlParameter(parameter.Key, parameter.Value));
            }

            try
            {
                ConfigDB.ExecuteNonQuery(connectionString, "dbo.sp_MBL_Information_DML", sqlParameters);
            }
            catch (Exception ex)
            {
                return Task.FromResult(false);
            }
            return Task.FromResult(true);
        }
    }
}
