using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.DTO.Response
{
    public  class OceanExportHblInformationDTO
    {
        //HBL_Id
        public string HBL_Id { get; set; }

        public string File_No { get; set; }

        public string MBL_No { get; set; }

        public string HBL_No { get; set; }

        public string Booking_No { get; set; }

        public string ITN_No { get; set; }

        public string Customer_Ref_No { get; set; }

        public string Document_No { get; set; }

        public string Quotation_No { get; set; }

        public string Actual_Shipper { get; set; }

        public string Customer { get; set; }

        public string Bill_To { get; set; }

        public string Consignee { get; set; }

        public string Notify { get; set; }

        public string Customs_Broker { get; set; }

        public string Trucker { get; set; }

        public string HBL_Agent { get; set; }

        public string Sales { get; set; }

        public bool? Sub_Agent_BL { get; set; }

        public string Place_Of_Receipt { get; set; }

        public DateTime? Place_Of_Receipt_ETD { get; set; }

        public string Port_Of_Discharge { get; set; }

        public DateTime? ETA { get; set; }

        public string Place_Of_Delivery { get; set; }

        public DateTime? Place_Of_Delivery_ETA { get; set; }

        public string Final_Destination { get; set; }

        public DateTime? Final_ETA { get; set; }

        public string FBA_FC { get; set; }

        public string Empty_Pickup { get; set; }

        public string Delivery_ToPier { get; set; }

        public DateTime? Cargo_Ready_Date { get; set; }

        public string Cargo_Pickup { get; set; }

        public string Ship_Mode { get; set; }

        public string Buying_Freight { get; set; }

        public string Selling_Fright { get; set; }

        public string Service_Term { get; set; }

        public int? Container_Qty { get; set; }

        public bool? Express_BL { get; set; }

        public string Cargo_Type { get; set; }

        public string sales_Type { get; set; }

        public DateTime? WH_Cut_Off_Date { get; set; }

        public DateTime? Early_Return_Date { get; set; }

        public string LC_No { get; set; }

        public string LC_ISSUE_Bank { get; set; }

        public DateTime? LC_ISSUE_Date { get; set; }

        public DateTime? Onboard { get; set; }

        public bool? Stackable { get; set; }

        public bool? Hold { get; set; }

        public DateTime? Frt_Released { get; set; }

        public string Released_By { get; set; }

        public DateTime? BL_Cancelled { get; set; }

        public string Cancelled_By { get; set; }

        public string Reason_For_Cancel { get; set; }

    }
}
