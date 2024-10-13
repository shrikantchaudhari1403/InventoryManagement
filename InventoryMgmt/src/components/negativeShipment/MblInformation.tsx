
import './filterabletable.css'
import CustomSelect from "../common/select/custom-select/custom-select";
import { stateOptions, updatedCountries } from "../common/select/custom-select/data";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import {
  ForwardingAgent,
  Coloader,
  AgentRefNo,
  OBLTypes,
  BLAcctCarriers,
  OPS,
  Vessels,
  Portofloading,
  PlaceofDelivery1,
  FinalDestination1,
  BusinessReferredBy,
  containerQty,
  Offices,
  ServiceTerms1,
  ServiceTerms2,
  Freight
} from "../common/select/custom-select/data";
import { useState } from 'react';

function MblInformation() {
  interface MBLResponseModel {
    operationType?: any;
    fileNo?: any;
    mblNo?: any;
    office?: any;
    blType?: any;
    postDate?: any;
    carrierBkgNo?: any;
    itnNo?: any;
    carrier?: any;
    blAcctCarrier?: any;
    shippingAgent?: any;
    overseaAgent?: any;
    notify?: any;
    forwardingAgent?: any;
    coLoader?: any;
    isCoExists?: any;
    co?: any;
    directMaster?: any;
    vessel?: any;
    voyage?: any;
    planceOfReceipt?: any;
    placeOfReceptETD?: any;
    portOfLoading?: any;
    etd?: any;
    placeOfDischarge?: any;
    placeOfReceiptETD?: any;
    portOfDischarge?: any;
    eta?: any;
    placeOfDelivery?: any;
    placeOfDeliveryETA?: any;
    finalDestination?: any;
    finalETA?: any;
    emptyPickup?: any;
    deliveryToPier?: any;
    freight?: any;
    shipMode?: any;
    svcTermFrom?: any;
    svcTermTo?: any;
    containerQty?: any;
    oblType?: any;
    docCutOfDate?: any;
    postCutOfDate?: any;
    railCutOfDate?: any;
    blCancelled?: any;
    blCancelledDate?: any;
    reasonForCancel?: any;
    cancelledBy?: any;
    businessRefferedBy?: any;
    bookingAgent?: any;
    frtReleased?: any;
    frtReleasedDate?: any;
    releasedBy?: any;
  }
  const [formData, setForData] = useState<MBLResponseModel>({});
  const [startDate, setStartDate] = useState(null);
  const [ETD, setETD] = useState(null)
  const [placeDelevery, setPlaceDelivery] = useState(null)
  const [ETA, setETA] = useState(null)
  const [finalETA, setFinaleta] = useState(null)
  const [releaseDate, setReleasedDate] = useState(null)
  const [fileNo, setFileNo] = useState('')
  const [mblno, setMblNo] = useState('')
  const [Office, setOffice] = useState(formData.office)
  const [OBLType, setOblType] = useState(formData.oblType)
  const [postdate, setPostDate] = useState('')
  const [overseaAgent, setOverseaAgent] = useState('')
  const [carrier, setCarrier] = useState('')
  const [BLAcctcarrier, setBLAcctcarrier] = useState(formData.blAcctCarrier)
  const [forwardingAgent, setforwardingAgent] = useState(formData.forwardingAgent)
  const [coloader, setColoader] = useState(formData.coLoader)
  const [agentRefNo, setAgentRefNo] = useState({})
  const [subBLNo, setSubBLNo] = useState('')
  const [OP, setOP] = useState()
  const [directMaster, setDirectMaster] = useState(false)
  const [vessel, setVessel] = useState(formData.vessel)
  const [voyage, setVoyoge] = useState('')
  const [CYlocation, setCYLocation] = useState({})
  const [CFSLocation, setCFSLocation] = useState({})
  const [portloading, setPortofloading] = useState(formData.portOfLoading)
  const [PortofDischarge, setPortofDischarge] = useState('')
  const [placeofDelivery1, setPlaceofDelivery1] = useState(formData.placeOfDelivery)
  const [finalDestination, setFinalDestination] = useState(formData.finalDestination)
  const [freight, setFreight] = useState({})
  const [shipmode, setShipmode] = useState('')
  const [serviceTerm1, setServiceTerm1] = useState(formData.svcTermFrom)
  const [serviceTerm2, setServiceTerm2] = useState(formData.svcTermTo)
  const [containerqty, setContainerQty] = useState(formData.containerQty)
  const [businessReferredBy, setBusinessReferredBy] = useState(formData.businessRefferedBy)

  const handleChange = (event: any) => {
    console.log("event.name", event.name)
    const name = event['name'] ? event['name'] : event.target.name;
    const value = event['value'] ? event['value'] : event.target.value;
    setForData((values) => ({ ...values, [name]: value }));
  };

  const postMbl = (e: any) => {
    e.preventDefault();
    formData.etd = ETD;
    formData.placeOfDeliveryETA = placeDelevery;
    formData.eta = ETA ;
    formData.finalETA = finalETA;
    formData.frtReleasedDate = releaseDate
    console.log("fhfhf", formData)

  };

  return (
    <div>
      <div className='space mb-2'>
        <div className='row mt-2'>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'> <span className='red-star'></span>File No</label>
              </div>
              <div className='col-8 p-0'>
                <input className='input-box'
                name='fileNo'
                defaultValue={formData.fileNo || ""}
                onChange={e => handleChange(e)}></input>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>MB/L No*</label>
              </div>
              <div className='col-8 p-0'>
                <input className='mblbox'
                name='mblNo'
                defaultValue={formData.mblNo || ""}
                onChange={e => handleChange(e)} ></input>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Office*</label>
              </div>
              <div className='col-8 p-0'>
                <CustomSelect
                  value={Office}
                  options={Offices}
                  fetchingData={false}
                  onChange={(value: any) => { handleChange(value) }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Post Date</label>
              </div>
              <div className='col-8 p-0'>
                <input className='input-box'
                name='postDate'
                defaultValue={formData.postDate || ""}
                onChange={e => handleChange(e)}></input>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text text-primary'>Oversea Agent</label>
              </div>
              <div className='col-8 p-0'>
                <input className='mblbox'
                name='overseaAgent'
                defaultValue={formData.overseaAgent || ""}
                onChange={e => handleChange(e)}></input>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text text-primary'>Carrier</label>
              </div>
              <div className='col-8 p-0'>
                <input className='mblbox'
                name='carrier'
                defaultValue={formData.carrier}
                onChange={e => handleChange(e.target.value)}></input>
              </div>
            </div>
          </div>


        </div>
        <div className='row mt-2'>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Forwarding Agent</label>
              </div>
              <div className='col-8 p-0'>
                <CustomSelect
                  value={forwardingAgent}
                  options={ForwardingAgent}
                  fetchingData={false}
                  onChange={(value: any) => { handleChange(value) }}
                />
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Co-loader</label>
              </div>
              <div className='col-8 p-0'>
                <CustomSelect
                  value={coloader}
                  options={Coloader}
                  fetchingData={false}
                  onChange={(value: any) => { handleChange(value) }}
                />
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Agent Ref No.</label>
              </div>
              <div className='col-8 p-0'>
                <CustomSelect
                  value={agentRefNo}
                  options={AgentRefNo}
                  fetchingData={false}
                  onChange={(value: any) => { setAgentRefNo(value) }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>OB/L Type</label>
              </div>
              <div className='col-8 p-0'>
                <CustomSelect
                  options={OBLTypes}
                  fetchingData={false}
                  onChange={(value: any) => { setOblType(value) }}
                  value={OBLType}
                />
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>B/L Acct. Carrier</label>
              </div>
              <div className='col-8 p-0'>
                <CustomSelect
                  options={BLAcctCarriers}
                  fetchingData={false}
                  onChange={(value: any) => { setBLAcctcarrier(value) }}
                  value={BLAcctcarrier}
                />
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Sub B/L No.</label>
              </div>
              <div className='col-8 p-0'>
                <input className='mblbox'
                defaultValue={subBLNo} onChange={e => setSubBLNo(e.target.value)}></input>
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>OP</label>
              </div>
              <div className='col-8 p-0'>
                <CustomSelect
                  value={OP}
                  options={stateOptions}
                  fetchingData={false}
                  onChange={(value: any) => { setOP(value) }}
                />
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Direct Master</label>
              </div>
              <div className='col-8 p-0'>
                <input className="form-check-input" type="checkbox" defaultValue={directMaster} onChange={() => { setDirectMaster(!directMaster) }} id="flexCheckDefault" />
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>

          </div>

        </div>


      </div>
      <div className='space mb-2'>
        <div className='row mt-2'>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Vessel</label>
              </div>
              <div className='col-8 p-0'>
                <CustomSelect
                  value={vessel}
                  options={Vessels}
                  fetchingData={false}
                  onChange={(value: any) => { handleChange(value) }}
                />
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Voyage</label>
              </div>
              <div className='col-8 p-0'>
                <input className='mblbox'
                name='voyage'
                defaultValue={formData.voyage}
                onChange={e => handleChange(e)}></input>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text text-primary'>CY Location </label>
              </div>
              <div className='col-8 p-0'>
                <CustomSelect
                  value={CYlocation}
                  options={stateOptions}
                  fetchingData={false}
                  onChange={(value: any) => { setCYLocation(value) }}
                />
              </div>
            </div>
          </div>

        </div>
        <div className='row mt-2'>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Port of loading</label>
              </div>
              <div className='col-8 p-0'>
                <CustomSelect
                  value={portloading}
                  options={Portofloading}
                  fetchingData={false}
                  onChange={(value: any) => { handleChange(value) }}
                />
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text text-primary'>ETD*</label>
              </div>
              <div className='col-8 row'>
                <div className='col-10 p-0'>
                  <DatePicker
                    selected={ETD}
                    onChange={(date: any) => setETD(date)}
                    required
                    form="ETD"
                  />
                </div>
                <div className='col-2'>
                  <form id="ETD">
                    <button type="submit" className='date-icon bgt'></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Port of Discharge</label>
              </div>
              <div className='col-8 p-0'>
                <input className='mblbox'
                name='portOfDischarge'
                defaultValue={formData.portOfDischarge}
                onChange={e => handleChange(e)}></input>
              </div>
            </div>
          </div>

        </div>
        <div className='row mt-2'>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Place of Delivery</label>
              </div>
              <div className='col-8 p-0'>
                <CustomSelect
                  value={placeofDelivery1}
                  options={PlaceofDelivery1}
                  fetchingData={false}
                  onChange={(value: any) => { handleChange(value) }}
                />
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Place of Delivery(ETA)</label>
              </div>
              <div className='col-8 row'>
                <div className='col-10 p-0'>
                  <DatePicker
                    selected={placeDelevery}
                    onChange={(date: any) => setPlaceDelivery(date)}
                    required
                    form="peta"
                  />
                </div>
                <div className='col-2'>
                  <form id="peta">
                    <button type="submit" className='date-icon bgt'></button>

                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text text-primary'>Final Destination</label>
              </div>
              <div className='col-8 p-0'>
                <CustomSelect
                  value={finalDestination}
                  options={FinalDestination1}
                  fetchingData={false}
                  onChange={(value: any) => { setFinalDestination(value) }}
                />
              </div>
            </div>
          </div>


        </div>
        <div className='row mt-2'>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text text-primary'>CFS Location </label>
              </div>
              <div className='col-8 p-0'>
                <CustomSelect
                  value={CFSLocation}
                  options={stateOptions}
                  fetchingData={false}
                  onChange={(value: any) => { setCFSLocation(value) }}
                />
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text text-primary'>ETA</label>
              </div>
              <div className='col-8 row'>
                <div className='col-10 p-0'>
                  <DatePicker
                    selected={ETA}
                    onChange={(date: any) => setETA(date)}
                    required
                    form="eta"
                  />
                </div>
                <div className='col-2'>
                  <form id="eta">
                    <button type="submit" className='date-icon bgt'></button>

                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text text-primary'>Final ETA</label>
              </div>
              <div className='col-8 p-0 row'>
                <div className='col-10'>
                  <DatePicker
                    selected={finalETA}
                    onChange={(date: any) => setFinaleta(date)}
                    required
                    form="final-ETA"
                  />
                </div>
                <div className='col-2'>
                  <form id="final-ETA">
                    <button type="submit" className='date-icon bgt'></button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className='space mb-2'>
        <div className='row mt-2'>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Freight</label>
              </div>
              <div className='col-8 p-0'>
                <CustomSelect
                  value={formData.freight}
                  options={Freight}
                  fetchingData={false}
                  onChange={(value: any) => { handleChange(value) }}
                />
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text text-primary'>Ship Mode</label>
              </div>
              <div className='col-8 p-0'>
                <input className='mblbox'
                name='shipMode'
                defaultValue={formData.shipMode}
                onChange={e => handleChange(e)}></input>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Service Term</label>
              </div>
              <div className='col-8 p-0'>
                <div className='row'>
                  <div className='col-6'>
                    <CustomSelect
                      value={serviceTerm1}
                      options={ServiceTerms1}
                      fetchingData={false}
                      onChange={(value: any) => { handleChange(value) }}
                    />
                  </div>
                  <div className='col-6'>
                    <CustomSelect
                      value={serviceTerm2}
                      options={ServiceTerms2}
                      fetchingData={false}
                      onChange={(value: any) => { handleChange(value) }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='row mt-2'>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Telex release received</label>
              </div>
              <div className='col-8 p-0 row'>
                <div className='col-10'>
                  <DatePicker
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    required
                    form="telex"
                  />
                </div>
                <div className='col-2'>
                  <form id="telex">
                    <button type="submit" className='date-icon bgt'></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Released Date</label>
              </div>
              <div className='col-8 row'>
                <div className='col-10 p-0'>
                  <DatePicker
                    selected={releaseDate}
                    onChange={(date: any) => setReleasedDate(date)}
                    required
                    form="released"
                  />
                </div>
                <div className='col-2'>
                  <form id="released">
                    <button type="submit" className='date-icon bgt'></button>

                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Business Referred By</label>
              </div>
              <div className='col-8 p-0'>
                <CustomSelect
                  value={businessReferredBy}
                  options={BusinessReferredBy}
                  fetchingData={false}
                  onChange={(value: any) => { handleChange(value) }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col-md-4 col-sm-12'>
            <div className='row'>
              <div className='col-4'>
                <label className='label-text'>Container/Qty</label>
              </div>
              <div className='col-8 p-0'>
                <CustomSelect
                  value={containerqty}
                  options={containerQty}
                  fetchingData={false}
                  onChange={(value: any) => { handleChange(value) }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="d-flex justify-content-center">
        <button className='save' onClick={(e:any)=>{postMbl(e)}}>save</button>
      </div>
    </div>
  )
}
export default MblInformation;
