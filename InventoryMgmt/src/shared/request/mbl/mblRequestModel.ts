export interface MblRequestModel {
  operationType?: string;
  fileNo?: string;
  mblNo?: string;
  office?: string;
  etd?: Date;
  blType?: string;
  postDate?: Date;
  carrierBkgNo?: string;
  itnNo?: string;
  carrier?: string;
  blAcctCarrier?: string;
  shippingAgent?: string;
  overseaAgent?: string;
  notify?: string;
  forwardingAgent?: string;
  coLoader?: string;
  isCoExists?: string;
  co?: string;
  directMaster?: string;
  vessel?: string;
  voyage?: string;
  planceOfReceipt?: string;
  placeOfReceptETD?: Date;
  portOfLoading?: string;
  placeOfDischarge?: string;
  placeOfReceiptETD?: Date;
  portOfDischarge?: string;
  eta?: Date;
  placeOfDelivery?: string;
  placeOfDeliveryETA?: Date;
  finalDestination?: string;
  finalETA?: Date;
  emptyPickup?: string;
  deliveryToPier?: string;
  freight?: string;
  shipMode?: string;
  svcTermFrom?: string;
  svcTermTo?: string;
  containerQty?: string;
  oblType?: string;
  docCutOfDate?: Date;
  postCutOfDate?: Date;
  railCutOfDate?: Date;
  blCancelled?: string;
  blCancelledDate?: Date;
  reasonForCancel?: String;
  cancelledBy?: string;
  businessRefferedBy?: string;
  bookingAgent?: string;
  frtReleased?: string;
  frtReleasedDate?: Date;
  releasedBy?: string;
}



