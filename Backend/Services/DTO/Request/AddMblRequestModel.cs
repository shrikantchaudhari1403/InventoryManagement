using GoFreightHelpers.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.DTO.Request
{
    public class AddMblRequestModel
    {
        [ParameterName("prm_DMLType")]
        public string? OperationType { get; set; }

        [ParameterName("prm_File_No")]
        public string? FileNo { get; set; }

        [ParameterName("prm_MBL_NO")]
        public string? MblNo { get; set; }

        [ParameterName("prm_Office")]
        public string? Office { get; set; }

        [ParameterName("prm_BL_Type")]
        public string? BLType { get; set; }


        [ParameterName("prm_Post_Date")]
        public DateTime? PostDate { get; set; }

        [ParameterName("prm_Carrier_Bkg_No")]
        public string? CarrierBkgNo { get; set; }


        [ParameterName("prm_ITN_No")]
        public string? ITNNo { get; set; }


        [ParameterName("prm_Carrier")]
        public string? Carrier { get; set; }

        [ParameterName("prm_BL_Acct_Carrier")]
        public string? BLAcctCarrier { get; set; }

        [ParameterName("prm_Shipping_Agent")]
        public string? ShippingAgent { get; set; }

        [ParameterName("prm_Oversea_Agent")]
        public string? OverseaAgent { get; set; }

        [ParameterName("prm_Notify")]
        public string? Notify { get; set; }

        [ParameterName("prm_Forwarding_Agent")]
        public string? ForwardingAgent { get; set; }

        [ParameterName("prm_Co_Loader")]
        public string? CoLoader { get; set; }

        [ParameterName("prm_isCOExists")]
        public string? IsCoExists { get; set; }

        [ParameterName("prm_CO")]
        public string? CO { get; set; }

        [ParameterName("prm_Direct_Master")]
        public string? DirectMaster { get; set; }

        [ParameterName("prm_Vessel")]
        public string? Vessel { get; set; }

        [ParameterName("prm_Voyage")]
        public string? Voyage { get; set; }

        [ParameterName("prm_Place_of_Receipt")]
        public string? PlanceOfReceipt { get; set; }

        [ParameterName("prm_Place_of_Receipt_ETD")]
        public string? PlaceOfReceptETD { get; set; }

        [ParameterName("prm_Port_of_Loading")]
        public string? PortOfLoading { get; set; }

        [ParameterName("prm_ETD")]
        public DateTime? ETD { get; set; }

        [ParameterName("prm_Place_Of_Discharge")]
        public string? PlaceOfDischarge { get; set; }


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

        [ParameterName("prm_Empty_Pickup")]
        public DateTime? EmptyPickup { get; set; }

        [ParameterName("prm_Delivery_ToPier")]
        public string? DeliveryToPier { get; set; }


        [ParameterName("prm_Freight")]
        public string? Freight { get; set; }

        [ParameterName("prm_Ship_Mode")]
        public string? ShipMode { get; set; }

        [ParameterName("prm_SVC_TermFrom")]
        public string? SvcTermFrom { get; set; }

        [ParameterName("prm_SVC_TermTo")]
        public string? SvcTermTo { get; set; }

        [ParameterName("prm_Container_Qty")]
        public string? ContainerQty { get; set; }

        [ParameterName("prm_OBL_Type")]
        public string? OblType { get; set; }

        [ParameterName("prm_Doc_Cut_Of_Date")]
        public DateTime? DocCutOfDate { get; set; }

        [ParameterName("prm_Post_cut_Of_Date")]
        public DateTime? PostCutOfDate { get; set; }

        [ParameterName("prm_Rail_cut_Of_Date")]
        public DateTime? RailCutOfDate { get; set; }

        [ParameterName("prm_BL_Cancelled")]
        public string? BLCancelled { get; set; }

        [ParameterName("prm_BL_Cancelled_Date")]
        public DateTime? BLCancelledDate { get; set; }

        [ParameterName("prm_Reasons_For_Cancel")]
        public string? ReasonForCancel { get; set; }

        [ParameterName("prm_Cancelled_By")]
        public string? CancelledBy { get; set; }

        [ParameterName("prm_Bussiness_Reffered_By")]
        public string? BusinessRefferedBy { get; set; }

        [ParameterName("prm_Booking_Agent")]
        public string? BookingAgent { get; set; }

        [ParameterName("prm_Frt_Released")]
        public string? FrtReleased { get; set; }

        [ParameterName("prm_Frt_Released_Date")]
        public DateTime? FrtReleasedDate { get; set; }


        [ParameterName("prm_Released_By")]
        public string? ReleasedBy { get; set; }

    }
}
