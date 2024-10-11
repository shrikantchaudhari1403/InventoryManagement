import React from "react";
import "./index.css";

export const stateOptions = [
  { id: "AL", value: "AL", label: "Alabama" },
  { id: "AK", value: "AK", label: "Alaska" },
  { id: "AS", value: "AS", label: "American Samoa" },
  { id: "AZ", value: "AZ", label: "Arizona" },
  { id: "AR", value: "AR", label: "Arkansas" },
  { id: "CA", value: "CA", label: "California" },
  { id: "CO", value: "CO", label: "Colorado" },
  { id: "CT", value: "CT", label: "Connecticut" },
  { id: "DE", value: "DE", label: "Delaware" },
  { id: "DC", value: "DC", label: "District Of Columbia" },
  { id: "FM", value: "FM", label: "Federated States Of Micronesia" },
  { id: "FL", value: "FL", label: "Florida" },
  { id: "GA", value: "GA", label: "Georgia" },
  { id: "GU", value: "GU", label: "Guam" },
  { id: "HI", value: "HI", label: "Hawaii" },
  { id: "ID", value: "ID", label: "Idaho" },
  { id: "IL", value: "IL", label: "Illinois" },
  { id: "IN", value: "IN", label: "Indiana" },
  { id: "IA", value: "IA", label: "Iowa" },
  { id: "KS", value: "KS", label: "Kansas" },
  { id: "KY", value: "KY", label: "Kentucky" },
  { id: "LA", value: "LA", label: "Louisiana" },
  { id: "ME", value: "ME", label: "Maine" },
  { id: "MH", value: "MH", label: "Marshall Islands" },
  { id: "MD", value: "MD", label: "Maryland" },
  { id: "MA", value: "MA", label: "Massachusetts" },
  { id: "MI", value: "MI", label: "Michigan" },
  { id: "MN", value: "MN", label: "Minnesota" },
  { id: "MS", value: "MS", label: "Mississippi" },
  { id: "MO", value: "MO", label: "Missouri" },
  { id: "MT", value: "MT", label: "Montana" },
  { id: "NE", value: "NE", label: "Nebraska" },
  { id: "NV", value: "NV", label: "Nevada" },
  { id: "NH", value: "NH", label: "New Hampshire" },
  { id: "NJ", value: "NJ", label: "New Jersey" },
  { id: "NM", value: "NM", label: "New Mexico" },
  { id: "NY", value: "NY", label: "New York" },
  { id: "NC", value: "NC", label: "North Carolina" },
  { id: "ND", value: "ND", label: "North Dakota" },
  { id: "MP", value: "MP", label: "Northern Mariana Islands" },
  { id: "OH", value: "OH", label: "Ohio" },
  { id: "OK", value: "OK", label: "Oklahoma" },
  { id: "OR", value: "OR", label: "Oregon" },
  { id: "PW", value: "PW", label: "Palau" },
  { id: "PA", value: "PA", label: "Pennsylvania" },
  { id: "PR", value: "PR", label: "Puerto Rico" },
  { id: "RI", value: "RI", label: "Rhode Island" },
  { id: "SC", value: "SC", label: "South Carolina" },
  { id: "SD", value: "SD", label: "South Dakota" },
  { id: "TN", value: "TN", label: "Tennessee" },
  { id: "TX", value: "TX", label: "Texas" },
  { id: "UT", value: "UT", label: "Utah" },
  { id: "VT", value: "VT", label: "Vermont" },
  { id: "VI", value: "VI", label: "Virgin Islands" },
  { id: "VA", value: "VA", label: "Virginia" },
  { id: "WA", value: "WA", label: "Washington" },
  { id: "WV", value: "WV", label: "West Virginia" },
  { id: "WI", value: "WI", label: "Wisconsin" },
  { id: "WY", value: "WY", label: "Wyoming" }
];

const countries = [
  {
    id: "NG",
    value: "NG",
    label: "Nigeria",
    flag: "https://www.countryflags.io/NG/shiny/32.png"
  },
  {
    id: "US",
    value: "US",
    label: "United States",
    flag: "https://www.countryflags.io/US/shiny/32.png"
  },
  {
    id: "IL",
    value: "IL",
    label: "Isreal",
    flag: "https://www.countryflags.io/IL/shiny/32.png"
  },
  {
    id: "RO",
    value: "RO",
    label: "Romania",
    flag: "https://www.countryflags.io/RO/shiny/32.png"
  },
  {
    id: "DE",
    value: "DE",
    label: "Germany",
    flag: "https://www.countryflags.io/DE/shiny/32.png"
  },
  {
    id: "BS",
    value: "BS",
    label: "Bahamas",
    flag: "https://www.countryflags.io/BS/shiny/32.png"
  },
  {
    id: "CN",
    value: "CN",
    label: "China",
    flag: "https://www.countryflags.io/CN/shiny/32.png"
  },
  {
    id: "SO",
    value: "SO",
    label: "Somalia",
    flag: "https://www.countryflags.io/SO/shiny/32.png"
  }
];

export const ActualShipper = [
  { id: 0, value: "ActualShipper1", label: "ActualShipper1",name:"actualShipper" },
  { id: 1, value: "ActualShipper2", label: "ActualShipper2",name:"actualShipper" },
  { id: 2, value: "ActualShipper3", label: "ActualShipper3",name:"actualShipper" },
  { id: 3, value: "ActualShipper4", label: "ActualShipper4",name:"actualShipper" },
]
export const Container =[
  { id: 0, value: "Container1", label: "Container1",name:"container" },
  { id: 1, value: "Container2", label: "Container2",name:"container" },
  { id: 2, value: "Container3", label: "Container3",name:"container" },
  { id: 3, value: "Container4", label: "Container4",name:"container" },
]
export const containerQty =[
  { id: 0, value: "Container1", label: "Container1",name:"containerQty" },
  { id: 1, value: "Container2", label: "Container2",name:"containerQty" },
  { id: 2, value: "Container3", label: "Container3",name:"containerQty" },
  { id: 3, value: "Container4", label: "Container4",name:"containerQty" },
]


export const QuotationNo =[
  {id: 0, value: "QuotationNo1", label: "QuotationNo1",name:"quotationNo" },
  {id: 1, value: "QuotationNo2", label: "QuotationNo2",name:"quotationNo" },
  {id: 2, value: "QuotationNo3", label: "QuotationNo3",name:"quotationNo" },
  {id: 3, value: "QuotationNo4", label: "QuotationNo4",name:"quotationNo" },
]

export const Consignees =[
  {id: 0, value: "Coregistree1", label: "Coregistree1",name:"consignee" },
  {id: 1, value: "Coregistree2", label: "Coregistree2",name:"consignee" },
  {id: 2, value: "Coregistree3", label: "Coregistree3",name:"consignee" },
  {id: 3, value: "Coregistree4", label: "Coregistree4",name:"consignee" },
]

export const Notify = [
  {id: 0, value: "Notify1", label: "Notify1",name:"notify" },
  {id: 1, value: "Notify2", label: "Notify2",name:"notify" },
  {id: 2, value: "Notify3", label: "Notify3",name:"notify" },
  {id: 3, value: "Notify4", label: "Notify4",name:"notify" },
]
export const CustomerBroker = [
  {id: 0, value: "CustomerBroker1", label: "CustomerBroker1",name:"customerBroker" },
  {id: 1, value: "CustomerBroker2", label: "CustomerBroker2",name:"customerBroker" },
  {id: 2, value: "CustomerBroker3", label: "CustomerBroker3",name:"customerBroker" },
  {id: 3, value: "CustomerBroker4", label: "CustomerBroker4",name:"customerBroker" },
]

export const Tracker=[
  {id: 0, value: "Tracker1", label: "Tracker1",name:"tracker" },
  {id: 1, value: "Tracker2", label: "Tracker2",name:"tracker" },
  {id: 2, value: "Tracker3", label: "Tracker3",name:"tracker" },
  {id: 3, value: "Tracker4", label: "Tracker4",name:"tracker" },
]

export const HBLAgent = [
  {id: 0, value: "HBLAgent1", label: "HBLAgent1",name:"hblAgent" },
  {id: 1, value: "HBLAgent2", label: "HBLAgent2",name:"hblAgent" },
  {id: 2, value: "HBLAgent3", label: "HBLAgent3",name:"hblAgent" },
  {id: 3, value: "HBLAgent4", label: "HBLAgent4",name:"hblAgent" },
]

export const Placeofreceipt = [
  {id: 0, value: "Placeofreceipt1", label: "Placeofreceipt1",name:"placeOfReceipt" },
  {id: 1, value: "Placeofreceipt2", label: "Placeofreceipt2",name:"placeOfReceipt" },
  {id: 2, value: "Placeofreceipt3", label: "Placeofreceipt3",name:"placeOfReceipt" },
  {id: 3, value: "Placeofreceipt4", label: "Placeofreceipt4",name:"placeOfReceipt" },
]
export const PiaceofReceiptETD =[
  {id: 0, value: "PiaceofReceiptETD1", label: "PiaceofReceiptETD1",name:"PiaceofReceiptETD" },
  {id: 1, value: "PiaceofReceiptETD2", label: "PiaceofReceiptETD2",name:"PiaceofReceiptETD" },
  {id: 2, value: "PiaceofReceiptETD3", label: "PiaceofReceiptETD3",name:"PiaceofReceiptETD" },
  {id: 3, value: "PiaceofReceiptETD4", label: "PiaceofReceiptETD4",name:"PiaceofReceiptETD" },
]
export const PortofDischarges = [
  {id: 0, value: "PortofDischarge1", label: "PortofDischarge1",name:"portOfDischarge" },
  {id: 1, value: "PortofDischarge2", label: "PortofDischarge2",name:"portOfDischarge" },
  {id: 2, value: "PortofDischarge3", label: "PortofDischarge3",name:"portOfDischarge" },
  {id: 3, value: "PortofDischarge4", label: "PortofDischarge4",name:"portOfDischarge" },
]
export const PlaceofDelivery = [
  {id: 0, value: "PlaceofDelivery1", label: "PlaceofDelivery1",name:"placeOfDelivery" },
  {id: 1, value: "PlaceofDelivery2", label: "PlaceofDelivery2",name:"placeOfDelivery" },
  {id: 2, value: "PlaceofDelivery3", label: "PlaceofDelivery3",name:"placeOfDelivery" },
  {id: 3, value: "PlaceofDelivery4", label: "PlaceofDelivery4",name:"placeOfDelivery" },
]
export const FinalDestination=[
  {id: 0, value: "FinalDestination1", label: "FinalDestination1",name:"finalDestination" },
  {id: 1, value: "FinalDestination2", label: "FinalDestination2",name:"finalDestination" },
  {id: 2, value: "FinalDestination3", label: "FinalDestination3",name:"finalDestination" },
  {id: 3, value: "FinalDestination4", label: "FinalDestination4",name:"finalDestination" },
]
export const FBAFC=[
  {id: 0, value: "FBAFC1", label: "FBAFC1",name:"fbafc" },
  {id: 1, value: "FBAFC2", label: "FBAFC2",name:"fbafc" },
  {id: 2, value: "FBAFC3", label: "FBAFC3",name:"fbafc" },
  {id: 3, value: "FBAFC4", label: "FBAFC4",name:"fbafc" },
]
export const EmptyPickup =[
  {id: 0, value: "EmptyPickup1", label: "EmptyPickup1",name:"emptyPickup" },
  {id: 1, value: "EmptyPickup2", label: "EmptyPickup2",name:"emptyPickup" },
  {id: 2, value: "EmptyPickup3", label: "EmptyPickup3",name:"emptyPickup" },
  {id: 3, value: "EmptyPickup4", label: "EmptyPickup4",name:"emptyPickup" },
]
export const DeliveryToPier = [
  {id: 0, value: "DeliveryToPler1", label: "DeliveryToPler1",name:"deliveryToPier" },
  {id: 1, value: "DeliveryToPler2", label: "DeliveryToPler2",name:"deliveryToPier" },
  {id: 2, value: "DeliveryToPler3", label: "DeliveryToPler3",name:"deliveryToPier" },
  {id: 3, value: "DeliveryToPler4", label: "DeliveryToPler4",name:"deliveryToPier" },
]
export const ShipMode=[
  {id: 0, value: "ShipMode1", label: "ShipMode1",name:"shipMode" },
  {id: 1, value: "ShipMode2", label: "ShipMode2",name:"shipMode" },
  {id: 2, value: "ShipMode3", label: "ShipMode3",name:"shipMode" },
  {id: 3, value: "ShipMode4", label: "ShipMode4",name:"shipMode" },
]
export const SellingFreight = [
  {id: 0, value: "SellingFreight1", label: "SellingFreight1",name:"SellingFreight" },
  {id: 1, value: "SellingFreight2", label: "SellingFreight2",name:"SellingFreight" },
  {id: 2, value: "SellingFreight3", label: "SellingFreight3",name:"SellingFreight" },
  {id: 3, value: "SellingFreight4", label: "SellingFreight4",name:"SellingFreight" },
]
export const ServiceTerm1 =[
  {id: 0, value: "ServiceTerm1", label: "ServiceTerm1",name:"svcTermFrom" },
  {id: 1, value: "ServiceTerm2", label: "ServiceTerm2",name:"svcTermFrom" },
  {id: 2, value: "ServiceTerm3", label: "ServiceTerm3",name:"svcTermFrom" },
  {id: 3, value: "ServiceTerm4", label: "ServiceTerm4",name:"svcTermFrom" },
]
export const ServiceTerms1 =[
  {id: 0, value: "ServiceTerm1", label: "ServiceTerm1",name:"svcTermFrom" },
  {id: 1, value: "ServiceTerm2", label: "ServiceTerm2",name:"svcTermFrom" },
  {id: 2, value: "ServiceTerm3", label: "ServiceTerm3",name:"svcTermFrom" },
  {id: 3, value: "ServiceTerm4", label: "ServiceTerm4",name:"svcTermFrom" },
]
export const ServiceTerms2 =[
  {id: 0, value: "ServiceTerm1", label: "ServiceTerm1",name:"svcTermTo" },
  {id: 1, value: "ServiceTerm2", label: "ServiceTerm2",name:"svcTermTo" },
  {id: 2, value: "ServiceTerm3", label: "ServiceTerm3",name:"svcTermTo" },
  {id: 3, value: "ServiceTerm4", label: "ServiceTerm4",name:"svcTermTo" },
]
export const SalesType =[
  {id: 0, value: "SalesType1", label: "SalesType1",name:"salesType" },
  {id: 1, value: "SalesType2", label: "SalesType2",name:"salesType" },
  {id: 2, value: "SalesType3", label: "SalesType3",name:"salesType" },
  {id: 3, value: "SalesType4", label: "SalesType4",name:"salesType" },
]
export const Offices =[
  {id: 0, value: "Office1", label: "Office1",name:"Office" },
  {id: 1, value: "Office2", label: "Office2",name:"Office" },
  {id: 2, value: "Office3", label: "Office3",name:"Office" },
  {id: 3, value: "Office4", label: "Office4",name:"Office" },
]
export const ForwardingAgent =[
  {id: 0, value: "ForwardingAgent1", label: "ForwardingAgent1",name:"forwardingAgent" },
  {id: 1, value: "ForwardingAgent2", label: "ForwardingAgent2",name:"forwardingAgent" },
  {id: 2, value: "ForwardingAgent3", label: "ForwardingAgent3",name:"forwardingAgent" },
  {id: 3, value: "ForwardingAgent4", label: "ForwardingAgent4",name:"forwardingAgent" },
]
export const Coloader =[
  {id: 0, value: "Coloader1", label: "Coloader1",name:"coLoader" },
  {id: 1, value: "Coloader2", label: "Coloader2",name:"coLoader" },
  {id: 2, value: "Coloader3", label: "Coloader3",name:"coLoader" },
  {id: 3, value: "Coloader4", label: "Coloader4",name:"coLoader" },
]
export const AgentRefNo =[
  {id: 0, value: "AgentRefNo1", label: "AgentRefNo1",name:"AgentRefNo" },
  {id: 1, value: "AgentRefNo2", label: "AgentRefNo2",name:"AgentRefNo" },
  {id: 2, value: "AgentRefNo3", label: "AgentRefNo3",name:"AgentRefNo" },
  {id: 3, value: "AgentRefNo4", label: "AgentRefNo4",name:"AgentRefNo" },
]
export const OBLTypes =[
  {id: 0, value: "OBLType1", label: "OBLType1",name:"oblType" },
  {id: 1, value: "OBLType2", label: "OBLType2",name:"oblType" },
  {id: 2, value: "OBLType3", label: "OBLType3",name:"oblType" },
  {id: 3, value: "OBLType4", label: "OBLType4",name:"oblType" },
]
export const BLAcctCarriers =[
  {id: 0, value: "BLAcctCarrier1", label: "BLAcctCarrier1",name:"blAcctCarrier" },
  {id: 1, value: "BLAcctCarrier2", label: "BLAcctCarrier2",name:"blAcctCarrier" },
  {id: 2, value: "BLAcctCarrier3", label: "BLAcctCarrier3",name:"blAcctCarrier" },
  {id: 3, value: "BLAcctCarrier4", label: "BLAcctCarrier4",name:"blAcctCarrier" },
]
export const SubBLNo =[
  {id: 0, value: "SubBLNo1", label: "SubBLNo1",name:"subAjentBl" },
  {id: 1, value: "SubBLNo2", label: "SubBLNo2",name:"subAjentBl" },
  {id: 2, value: "SubBLNo3", label: "SubBLNo3",name:"subAjentBl" },
  {id: 3, value: "SubBLNo4", label: "SubBLNo4",name:"subAjentBl" },
]
export const OPS =[
  {id: 0, value: "OP1", label: "OP1",name:"OP" },
  {id: 1, value: "OP2", label: "OP2",name:"OP" },
  {id: 2, value: "OP3", label: "OP3",name:"OP" },
  {id: 3, value: "OP4", label: "OP4",name:"OP" },
]
export const Vessels =[
  {id: 0, value: "Vessel1", label: "Vessel1",name:"vessel" },
  {id: 1, value: "Vessel2", label: "Vessel2",name:"vessel" },
  {id: 2, value: "Vessel3", label: "Vessel3",name:"vessel" },
  {id: 3, value: "Vessel4", label: "Vessel4",name:"vessel" },
]
export const CYLocation =[
  {id: 0, value: "CYLocation1", label: "CYLocation1",name:"CYLocation" },
  {id: 1, value: "CYLocation2", label: "CYLocation2",name:"CYLocation" },
  {id: 2, value: "CYLocation3", label: "CYLocation3",name:"CYLocation" },
  {id: 3, value: "CYLocation4", label: "CYLocation4",name:"CYLocation" },
]
export const Portofloading =[
  {id: 0, value: "Portofloading1", label: "Portofloading1",name:"portOfLoading" },
  {id: 1, value: "Portofloading2", label: "Portofloading2",name:"portOfLoading" },
  {id: 2, value: "Portofloading3", label: "Portofloading3",name:"portOfLoading" },
  {id: 3, value: "Portofloading4", label: "Portofloading4",name:"portOfLoading" },
]
export const FinalDestination1 =[
  {id: 0, value: "FinalDestination1", label: "FinalDestination1",name:"finalDestination" },
  {id: 1, value: "FinalDestination2", label: "FinalDestination2",name:"finalDestination" },
  {id: 2, value: "FinalDestination3", label: "FinalDestination3",name:"finalDestination" },
  {id: 3, value: "FinalDestination4", label: "FinalDestination4",name:"finalDestination" },
]
export const PlaceofDelivery1 =[
  {id: 0, value: "PlaceofDelivery1", label: "PlaceofDelivery1",name:"placeOfDelivery" },
  {id: 1, value: "PlaceofDelivery2", label: "PlaceofDelivery2",name:"placeOfDelivery" },
  {id: 2, value: "PlaceofDelivery3", label: "PlaceofDelivery3",name:"placeOfDelivery" },
  {id: 3, value: "PlaceofDelivery4", label: "PlaceofDelivery4",name:"placeOfDelivery" },
]
export const CFSLocation =[
  {id: 0, value: "CFSLocation1", label: "CFSLocation1",name:"CFSLocation" },
  {id: 1, value: "CFSLocation2", label: "CFSLocation2",name:"CFSLocation" },
  {id: 2, value: "CFSLocation3", label: "CFSLocation3",name:"CFSLocation" },
  {id: 3, value: "CFSLocation4", label: "CFSLocation4",name:"CFSLocation" },
]
export const Freight =[
  {id: 0, value: "Freight1", label: "Freight1",name:"freight" },
  {id: 1, value: "Freight2", label: "Freight2",name:"freight" },
  {id: 2, value: "Freight3", label: "Freight3",name:"freight" },
  {id: 3, value: "Freight4", label: "Freight4",name:"freight" },
]
export const ServiceTerm =[
  {id: 0, value: "ServiceTerm1", label: "ServiceTerm1",name:"ServiceTerm" },
  {id: 1, value: "ServiceTerm2", label: "ServiceTerm2",name:"ServiceTerm" },
  {id: 2, value: "ServiceTerm3", label: "ServiceTerm3",name:"ServiceTerm" },
  {id: 3, value: "ServiceTerm4", label: "ServiceTerm4",name:"ServiceTerm" },
]
export const BusinessReferredBy =[
  {id: 0, value: "BusinessReferredBy1", label: "BusinessReferredBy1",name:"businessRefferedBy" },
  {id: 1, value: "BusinessReferredBy1", label: "BusinessReferredBy2",name:"businessRefferedBy" },
  {id: 2, value: "BusinessReferredBy3", label: "BusinessReferredBy3",name:"businessRefferedBy" },
  {id: 3, value: "BusinessReferredBy4", label: "BusinessReferredBy4",name:"businessRefferedBy" },
]
export const ContainerQty =[
  {id: 0, value: "ContainerQty1", label: "ContainerQty1",name:"ContainerQty" },
  {id: 1, value: "ContainerQty2", label: "ContainerQty2",name:"ContainerQty" },
  {id: 2, value: "ContainerQty3", label: "ContainerQty3",name:"ContainerQty" },
  {id: 3, value: "ContainerQty4", label: "ContainerQty4",name:"ContainerQty" },
]
export const CargoPickup =[
  {id: 0, value: "CargoPickup1", label: "CargoPickup1",name:"cargoPickup" },
  {id: 1, value: "CargoPickup2", label: "CargoPickup2",name:"cargoPickup" },
  {id: 2, value: "CargoPickup3", label: "CargoPickup3",name:"cargoPickup" },
  {id: 3, value: "CargoPickup4", label: "CargoPickup4",name:"cargoPickup" },
]
export const CargoType =[
  {id: 0, value: "CargoType1", label: "CargoType1",name:"cargoType" },
  {id: 1, value: "CargoType2", label: "CargoType2",name:"cargoType" },
  {id: 2, value: "CargoType3", label: "CargoType3",name:"cargoType" },
  {id: 3, value: "CargoType4", label: "CargoType4",name:"cargoType" },
]




export const updatedCountries = countries.map((item) => {
  item.label = (
    <div className="label">
      <span>{item.label}</span>
      <img src={item.flag} alt="flag" />
    </div>
  );
  return item;
});
