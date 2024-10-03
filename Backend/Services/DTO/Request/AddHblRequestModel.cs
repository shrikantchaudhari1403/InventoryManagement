using GoFreightHelpers.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.DTO.Request
{
    public class AddHblRequestModel
    {
        [ParameterName("prm_DMLType")]
        public string? OperationType { get; set; }

        [ParameterName("prm_File_No")]
        public string? FileNo { get; set; }

        [ParameterName("prm_MBL_NO")]
        public string? MblNo { get; set; }

        [ParameterName("prm_HBL_No")]
        public string? HblNo { get; set; }

        [ParameterName("prm_Booking_No")]
        public string? BookingNo { get; set; }

        [ParameterName("prm_ITN_No")]
        public string? ItnNo { get; set; }

        [ParameterName("prm_Customer_Ref_No")]
        public string? CustomerReferenceNo { get; set; }

        [ParameterName("prm_Document_No")]
        public string? DocumentNo { get; set; }

        [ParameterName("prm_Quotation_No")]
        public string? QuotationNo { get; set; }

        [ParameterName("prm_Actual_Shipper")]
        public string? ActualShipper { get; set; }

        [ParameterName("prm_Customer")]
        public string? Customer { get; set; }

        [ParameterName("prm_Bill_To")]
        public string? BillTo { get; set; }

        [ParameterName("prm_Consignee")]
        public string? Consignee { get; set; }

        [ParameterName("prm_Notify")]
        public string? Notify { get; set; }

        [ParameterName("prm_Customs_Broker")]
        public string? CustomerBroker { get; set; }

        [ParameterName("prm_Trucker")]
        public string? Tracker { get; set; }

        [ParameterName("prm_HBL_Agent")]
        public string? HblAgent { get; set; }

        [ParameterName("prm_Sales")]
        public string? Sales { get; set; }

        [ParameterName("prm_Sub_Agent_BL")]
        public string? SubAjentBl { get; set; }

        [ParameterName("prm_Place_Of_Receipt")]
        public string? PlaceOfReceipt { get; set; }

        [ParameterName("prm_Place_Of_Receipt_ETD")]
        public DateTime? PlaceOfReceiptETD { get; set; }

        [ParameterName("prm_Port_Of_Discharge")]
        public string? PortOfDischarge { get; set; }

        [ParameterName("prm_ETA")]
        public DateTime? ETA { get; set; }

        [ParameterName("prm_Place_Of_Delivery")]
        public string? PlaceOfDelivery { get; set; }

        [ParameterName("prm_Place_Of_Delivery_ETA")]
        public DateTime? PlaceOfDeliveryETA { get; set; }

        [ParameterName("prm_Final_Destination")]
        public string? FinalDestination { get; set; }

        [ParameterName("prm_Final_ETA")]
        public DateTime? FinalETA { get; set; }

        [ParameterName("prm_FBA_FC")]
        public string? FBAFC { get; set; }

        [ParameterName("prm_Empty_Pickup")]
        public DateTime? EmptyPickup { get; set; }

        [ParameterName("prm_Delivery_ToPier")]
        public string? DeliveryToPier { get; set; }

        [ParameterName("prm_Cargo_Ready_Date")]
        public DateTime? CargoReadyDate { get; set; }

        [ParameterName("prm_Cargo_Pickup")]
        public string? CargoPickup { get; set; }

        [ParameterName("prm_Ship_Mode")]
        public string? ShipMode { get; set; }

        [ParameterName("prm_Buying_Freight")]
        public string? BuyingFright { get; set; }

        [ParameterName("prm_Selling_Fright")]
        public string? SellingFright { get; set; }

        [ParameterName("@prm_Service_Term")]
        public string? ServiceTerm { get; set; }

        [ParameterName("@prm_Container_Qty")]
        public string? ContainerQty { get; set; }

        [ParameterName("@prm_Express_BL")]
        public string? ExpressBL { get; set; }

        [ParameterName("@prm_Cargo_Type")]
        public string? CargoType { get; set; }

        [ParameterName("@prm_sales_Type")]
        public string? SalesType { get; set; }

        [ParameterName("prm_WH_Cut_Off_Date")]
        public DateTime? CutOffDate { get; set; }

        [ParameterName("prm_Early_Return_Date")]
        public DateTime? EarlyReturnDate { get; set; }

        [ParameterName("@prm_LC_No")]
        public string? LCNo { get; set; }

        [ParameterName("@prm_LC_ISSUE_BANK")]
        public string? LCIssueBank { get; set; }

        [ParameterName("prm_LC_ISSUE_Date")]
        public DateTime? LCIssueDate { get; set; }

        [ParameterName("@prm_Onboard")]
        public DateTime? OnBoard { get; set; }

        [ParameterName("@prm_Stackable")]
        public string? Stackble { get; set; }

        [ParameterName("@prm_Hold")]
        public string? Hold { get; set; }

        [ParameterName("prm_Frt_Released")]
        public DateTime? FrtReleased { get; set; }

        [ParameterName("@prm_Released_By")]
        public string? ReleasedBy { get; set; }

        [ParameterName("prm_BL_Cancelled")]
        public DateTime? BLCancelled { get; set; }

        [ParameterName("@prm_Reason_For_Cancel")]
        public string? CancelledReason { get; set; }

    }
}
