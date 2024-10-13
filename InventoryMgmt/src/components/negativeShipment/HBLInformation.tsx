
import './filterabletable.css'
import CustomSelect from "../common/select/custom-select/custom-select";
import {
  DeliveryToPier,
  stateOptions,
  ActualShipper,
  QuotationNo,
  Notify,
  Tracker,
  SellingFreight,
  ServiceTerm1,
  CargoType,
  HBLAgent,
  Placeofreceipt,
  PortofDischarges,
  PlaceofDelivery,
  FinalDestination,
  FBAFC,
  EmptyPickup,
  ShipMode,
  SalesType,
  containerQty,
  CustomerBroker,
  Consignees
} from "../common/select/custom-select/data";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';


function HBLInformation() {
  interface HBLResponseModel {
    operationType?: any;
    fileNo?: any;
    mblNo?: any;
    hblNo?: any;
    bookingNo?: any;
    itnNo?: any;
    customerReferenceNo?: any;
    documentNo?: any;
    quotationNo?: any;
    actualShipper?: any;
    customer?: any;
    billTo?: any;
    consignee?: any;
    notify?: any;
    customerBroker?: any;
    tracker?: any;
    hblAgent?: any;
    sales?: any;
    subAjentBl?: any;
    placeOfReceipt?: any;
    placeOfReceiptETD?: any;
    portOfDischarge?: any;
    eta?: any;
    placeOfDelivery?: any;
    placeOfDeliveryETA?: any;
    finalDestination?: any;
    finalETA?: any;
    fbafc?: any;
    emptyPickup?: any;
    deliveryToPier?: any;
    cargoReadyDate?: any;
    cargoPickup?: any;
    shipMode?: any;
    buyingFright?: any;
    sellingFright?: any;
    serviceTerm?: any;
    containerQty?: any;
    expressBL?: any;
    cargoType?: any;
    salesType?: any;
    cutOffDate?: any;
    earlyReturnDate?: any;
    lcNo?: any;
    lcIssueBank?: any;
    lcIssueDate?: any;
    onBoard?: any;
    stackble?: any;
    hold?: any;
    frtReleased?: any;
    releasedBy?: any;
    blCancelled?: any;
    cancelledReason?: any
  }


  const [directMaster, setDirectMaster] = useState(false)
  const [containerQty, setContainerQty] = useState({})
  const [PiaceofReceiptETD, setPiaceofReceiptETD] = useState(null)
  const [PlaceofDeliveryETA, setPlaceofDeliveryETA] = useState(null)
  const [CargoReadyDate, setCargoReadyDate] = useState(null)
  const [WHCuttOfDate, setWHCuttOfDate] = useState(null)
  const [EarlyReturnDate, setEarlyReturnDate] = useState(null)
  const [LCIssueDate, setLCIssueDate] = useState(null)
  const [onboard, setOnboard] = useState(null)
  const [BLCancelled, setBLCancelled] = useState(null)
  const [ETA, setETA] = useState(null)
  const [businessReferredBy, setBusinessReferredBy] = useState({})
  const [formData, setForData] = useState<HBLResponseModel>({});
  const [actualShipper, setActualShipper] = useState(formData.actualShipper)
  const [consignee, setCoasignee] = useState(formData.consignee)
  const [notify, setNotify] = useState()
  const [customerBroker, setCustomerBroker] = useState(formData.customerBroker)
  const [tracker, setTracker] = useState(formData.tracker)
  const [hblAgent, sethblAgent] = useState(formData.hblAgent)
  const [placeOfReceipt, setPlaceOfReceipt] = useState(formData.placeOfReceipt)
  const [portOfDischarge, setPortOfDischarge] = useState(formData.portOfDischarge)
  const [placeDelivery, setPlaceofDelivery] = useState(formData.placeOfDelivery)
  const [finalDestination, setFinalDestination] = useState(formData.finalDestination)
  const [fbafc, setfbafc] = useState(formData.fbafc)
  const [emptyPickup, setEmptyPickup] = useState(formData.emptyPickup)
  const [deliveryToPier, setDeliveryToPier] = useState(formData.deliveryToPier)
  const [shipMode, setShipMode] = useState(formData.shipMode)
  const [sellingFright, setSellingFright] = useState(formData.sellingFright)
  const [serviceTerm, setServiceTerm] = useState(formData.serviceTerm)
  const [cargoType, setCargoType] = useState(formData.cargoType)
  const [salesType, setSalesType] = useState(formData.salesType)
  const [quotationNo, setquotationNo] = useState(formData.quotationNo)


  const handleChange = (event: any) => {
    console.log("event.name", event.name)
    const name = event['name'] ? event['name'] : event.target.name;
    const value = event['value'] ? event['value'] : event.target.value;
    setForData((values) => ({ ...values, [name]: value }));
  };

  const postHBL = (e: any) => {
    e.preventDefault();
    formData.eta = ETA;
    formData.earlyReturnDate = EarlyReturnDate;
    formData.lcIssueDate = LCIssueDate;
    formData.cargoReadyDate = CargoReadyDate;    
    formData.onBoard = onboard;
    formData.blCancelled = BLCancelled;
    formData.placeOfDeliveryETA = PlaceofDeliveryETA;
    formData.placeOfReceiptETD = PiaceofReceiptETD;
    formData.cutOffDate = WHCuttOfDate;
   
    console.log("fhfhf", formData)
  };

  return (
    <div>
      <form method="POST" encType="multipart/form-data">
        <div className='space mb-4'>
          <div className='row'>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>
                    <span className='red-star'>*</span>HB/L No</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <input className='mblbox'
                    name="HBLno"
                    defaultValue={formData.hblNo || ""}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Booking No</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <input className='mblbox'
                    name="bookingNo"
                    value={formData.bookingNo || ""}
                    onChange={handleChange}
                  >
                  </input>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>file No</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <input className='mblbox'
                    name="fileNo"
                    value={formData.fileNo || ""}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Container Ref No</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <input className='mblbox'
                    name="HBLno"
                  //  value={formData.HBLno || ""}
                  //  onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Document No</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <input className='mblbox'
                    name="documentNo"
                    value={formData.documentNo || ""}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Quotation No</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    name="quotationNo"
                    value={quotationNo}
                    options={QuotationNo}
                    fetchingData={false}
                    onChange={(e: any) => { handleChange(e) }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Actual Shipper</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    name="actualShipper"
                    value={actualShipper}
                    options={ActualShipper}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Container</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    name="containerQty"
                    value={businessReferredBy}
                    options={containerQty}
                    fetchingData={false}
                    onChange={(value: any) => { console.log("ddjd") }}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Exit To</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    value={businessReferredBy}
                    options={stateOptions}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Consignee</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    name="consignee"
                    value={consignee}
                    options={Consignees}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Notify</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    name="notify"
                    value={notify}
                    options={Notify}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Customer Broker</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    name="customerBroker"
                    value={customerBroker}
                    options={CustomerBroker}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>

          </div>
          <div className='row mt-2'>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Tracker</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    name="tracker"
                    value={tracker}
                    options={Tracker}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>HB/L Agent</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    name="hblAgent"
                    value={hblAgent}
                    options={HBLAgent}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'> Sub HB/L Agent</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="subAjentBl"
                    defaultValue={formData.subAjentBl}
                    onChange={() => { handleChange(!formData.subAjentBl) }} id="flexCheckDefault" />
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
            </div>
          </div>
        </div>
        <div className='space mb-2'>
          <div className='row mt-2'>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Place of receipt</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    name="placeOfReceipt"
                    value={placeOfReceipt}
                    options={Placeofreceipt}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>

            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Piace of Receipt ETD</label>
                </div>
                <div className='col-md-8 col-sm-12 row'>
                  <div className='col-10 p-0'>
                    <DatePicker
                      selected={PiaceofReceiptETD}
                      onChange={(date: any) => setPiaceofReceiptETD(date)}
                      required
                      form="PiaceofReceiptETD"

                    />
                  </div>
                  <div className='col-2'>
                    <form id="PiaceofReceiptETD">
                      <button type="submit" className='date-icon bgt'></button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Port of Discharge</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    name="portOfDischarge"
                    value={portOfDischarge}
                    options={PortofDischarges}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>ETA</label>
                </div>

                <div className='col-md-8 col-sm-12 row'>
                  <div className='col-10 p-0'>
                    <DatePicker
                      selected={ETA}
                      onChange={(date: any) => setETA(date)}
                      required
                      form="etas"
                    />
                  </div>
                  <div className='col-2'>
                    <form id="etas">
                      <button type="submit" className='date-icon bgt'></button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Place of Delivery</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    value={placeDelivery}
                    options={PlaceofDelivery}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Place of Delivery ETA</label>
                </div>
                <div className='col-md-8 col-sm-12 row'>
                  <div className='col-10 p-0'>
                    <DatePicker
                      selected={PlaceofDeliveryETA}
                      onChange={(date: any) => setPlaceofDeliveryETA(date)}
                      required
                      form="PlaceofDeliveryETA"
                    />
                  </div>
                  <div className='col-2'>
                    <form id="PlaceofDeliveryETA">
                      <button type="submit" className='date-icon bgt'></button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Final Destination</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    value={finalDestination}
                    options={FinalDestination}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>FBA FC</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    value={fbafc}
                    options={FBAFC}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Empty Pickup</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    name="emptyPickup"
                    value={emptyPickup}
                    options={EmptyPickup}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Delivery To/Pier</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    value={deliveryToPier}
                    options={DeliveryToPier}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Cargo Ready Date</label>
                </div>
                <div className='col-md-8 col-sm-12 row'>
                  <div className='col-10 p-0'>
                    <DatePicker
                      selected={CargoReadyDate}
                      onChange={(date: any) => setCargoReadyDate(date)}
                      required
                      form="CargoReadyDate"
                    />
                  </div>
                  <div className='col-2'>
                    <form id="CargoReadyDate">
                      <button type="submit" className='date-icon bgt'></button>

                    </form>
                  </div>
                </div>

              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Cargo Pickup</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <input className='mblbox'
                    name='cargoPickup'
                    defaultValue={formData.cargoPickup}
                    onChange={e => handleChange(e)} ></input>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Ship Mode</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    value={shipMode}
                    options={ShipMode}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Buying Freight</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <input className='mblbox'
                    name="buyingFright"
                    defaultValue={formData.buyingFright || ""}
                    onChange={e => handleChange(e)} ></input>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Selling Freight</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    value={sellingFright}
                    options={SellingFreight}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Service Term</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <div className='row'>
                    <div className='col-md-12 col-sm-12'>
                      <CustomSelect
                        value={serviceTerm}
                        options={ServiceTerm1}
                        fetchingData={false}
                        onChange={(value: any) => { handleChange(value) }}
                      />
                    </div>
                    {/* <div className='col-md-6 col-sm-12'>
                                  <CustomSelect
                                    value={serviceTerm2}
                                    options={ServiceTerm2}
                                    fetchingData={false}
                                    onChange={(value: any) => { setServiceTerm2(value) }}
                                  />
                                </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Container Qty</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <input className='input-box'
                    name='containerQty'
                    defaultValue={formData.containerQty || ""}
                    onChange={e => handleChange(e)} ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='space mb-2'>
          <div className='row mt-2'>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Express B/L</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <input className='mblbox'
                    name='expressBL'
                    defaultValue={formData.expressBL || ""}
                    onChange={e => handleChange(e)} ></input>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Cargo Type</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    value={cargoType}
                    options={CargoType}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Sales Type</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <CustomSelect
                    value={salesType}
                    options={SalesType}
                    fetchingData={false}
                    onChange={(value: any) => { handleChange(value) }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>W/H Cutt Of Date</label>
                </div>
                <div className='col-md-8 col-sm-12 row'>
                  <div className='col-10 p-0'>
                    <DatePicker
                      selected={WHCuttOfDate}
                      onChange={(date: any) => setWHCuttOfDate(date)}
                      required
                      form="WHCuttOfDate"
                    />
                  </div>
                  <div className='col-2'>
                    <form id="WHCuttOfDate">
                      <button type="submit" className='date-icon bgt'></button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Early Return Date</label>
                </div>
                <div className='col-md-8 col-sm-12 row p-0'>
                  <div className='col-10'>
                    <DatePicker
                      selected={EarlyReturnDate}
                      onChange={(date: any) => setEarlyReturnDate(date)}
                      required
                      form="EarlyReturnDate"
                    />
                  </div>
                  <div className='col-2'>
                    <form id="EarlyReturnDate">
                      <button type="submit" className='date-icon bgt'></button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>L/C No</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <input className='mblbox'
                    name="lcNo"
                    defaultValue={formData.lcNo || ""}
                    onChange={e => handleChange(e)} ></input>
                </div>
              </div>
            </div>

          </div>
          <div className='row mt-2'>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>L/C Issue Bank</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <input className='mblbox'
                    name="lcIssueBank"
                    defaultValue={formData.lcIssueBank}
                    onChange={e => handleChange(e)} ></input>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>L/C Issue Date</label>
                </div>
                <div className='col-md-8 col-sm-12 row'>
                  <div className='col-10 p-0'>
                    <DatePicker
                      selected={LCIssueDate}
                      onChange={(date: any) => setLCIssueDate(date)}
                      required
                      form="LCIssueDate"
                    />
                  </div>
                  <div className='col-2'>
                    <form id="LCIssueDate">
                      <button type="submit" className='date-icon bgt'></button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Onboard</label>
                </div>
                <div className='col-md-8 col-sm-12 row'>
                  <div className='col-10 p-0'>
                    <DatePicker
                      selected={onboard}
                      onChange={(date: any) => setOnboard(date)}
                      required
                      form="onboard"
                    />
                  </div>
                  <div className='col-2'>
                    <form id="onboard">
                      <button type="submit" className='date-icon bgt'></button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>Hold</label>
                </div>
                <div className='col-md-8 col-sm-12 p-0'>
                  <div className='row'>
                    {/* <div className='col-1'>
                                  <input className="form-check-input" type="checkbox" value={directMaster} onChange={() => { setDirectMaster(!directMaster) }} id="flexCheckDefault" />
                                  </div> */}
                    <div className='col-12'>
                      <input className='input-box'
                        name="hold"
                        defaultValue={formData.hold || " "}
                        onChange={e => handleChange(e)} ></input>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <label className='label-text'>B/L Cancelled</label>
                </div>
                <div className='col-md-8 col-sm-12 row'>
                  <div className='col-md-1 p-0'>
                    <input className="form-check-input" type="checkbox" value={directMaster} onChange={() => { setDirectMaster(!directMaster) }} id="flexCheckDefault" />
                  </div>
                  <div className='col-md-9 p-0'>
                    <DatePicker
                      selected={BLCancelled}
                      onChange={(date: any) => setBLCancelled(date)}
                      required
                      form="BLCancelled"
                    />
                  </div>
                  <div className='col-md-2'>
                    <form id="BLCancelled">
                      <button type="submit" className='date-icon bgt'></button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 p-0'>

            </div>
            <div className='row mt-2'>
              <div className='col-md-4 col-sm-12 p-0'>
                <div className='row'>
                  <div className='col-md-4 col-sm-12'>
                    <label className='label-text'>Created By</label>
                  </div>
                  <div className='col-md-8 col-sm-12 p-0'>
                    <input className='input-box' onChange={e => setMblNo(e.target.value)} ></input>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-12 p-0'>
                <div className='row'>
                  <div className='col-md-4 col-sm-12'>
                    <label className='label-text'>Reason for cancel</label>
                  </div>
                  <div className='col-md-8 col-sm-12 p-0'>
                    <input className='mblbox'
                      name="cancelledReason"
                      defaultValue={formData.cancelledReason || ""}
                      onChange={e => handleChange(e)} ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className='save' type='submit' onClick={(e) => { postHBL(e) }}>save</button>
        </div>
      </form>
    </div>
  )
}
export default HBLInformation;
