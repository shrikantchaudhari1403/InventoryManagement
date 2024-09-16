
import './filterabletable.css'
import CustomSelect from "../common/select/custom-select/custom-select";
import { stateOptions, updatedCountries } from "../common/select/custom-select/data";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from 'react-icons/fa';
import { useState } from 'react';


function NewShipments() {
  const [startDate, setStartDate] = useState(null);
  const [ETD,setETD] = useState(null)
  const [placeDelevery,setPlaceDelivery]=useState(null)
  const [ETA,setETA] = useState(null)
  const [finalETA,setFinaleta]= useState(null)
  const [releaseDate,setReleasedDate] = useState(null)
  const [fileNo,setFileNo] = useState('')
  const [mblno,setMblNo] = useState('')
  const [Office,setOffice] = useState({id: "AL", value: "AL", label: "Alabama"})
  const [OBLType,setOblType] = useState()
  const [postdate,setPostDate] = useState('')
  const [overseaAgent,setOverseaAgent] = useState('')
  const [carrier,setCarrier] = useState('')
  const [BLAcctcarrier,setBLAcctcarrier] = useState({})
  const [forwardingAgent,setforwardingAgent] = useState({})
  const [coloader,setColoader] = useState({})
  const [agentRefNo,setAgentRefNo] = useState({})
  const [subBLNo,setSubBLNo] =useState('')
  const [OP,setOP] = useState({})
  const [directMaster,setDirectMaster] = useState(false)
  const [vessel,setVessel] = useState({})
  const [voyage,setVoyoge] = useState('')
  const [CYlocation,setCYLocation] = useState({})
  const [CFSLocation,setCFSLocation ] = useState({})
  const [portloading,setPortofloading] = useState({})
  const [PortofDischarge, setPortofDischarge] = useState('')
  const [placeofDelivery,setPlaceofDelivery] = useState({})
  const [finalDestination,setFinalDestination] = useState({})
  const [freight,setFreight] = useState({})
  const [shipmode,setShipmode] = useState('')
  const [serviceTerm1,setServiceTerm1] = useState({})
  const [serviceTerm2,setServiceTerm2] = useState({})
  const [containerQty,setContainerQty] = useState({})
  const [businessReferredBy,setBusinessReferredBy] = useState({})

  return (<div style={{ margin: '45px 0px 0px 45px' }}>
    <div className="top-header tp-header">
      <div><img style={{ height: '17px', width: '17px', cursor: 'pointer', marginLeft: '10px' }} src={'../../../src/assets/home.svg'} /></div>
      <div className='breadscrumb-text'>Home <i className="ri-arrow-down-s-line breadscrumb__arrow"></i></div>
      <div className='breadscrumb-text'>New Shipment</div>
    </div>

    <div>
      <div className=''>
        <div className='row bg'>
          <form className='row'>
          <div className='col-md-10 col-sm-12 p-0 form-border'>
            <div className=" form-header">
              <div className='form-header-title'>MB/L Information</div>
              <i className="ri-arrow-down-s-line arrow"></i>
            </div>
            <div className='space mb-2'>
              <div className='row'>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>File No</label>
                    </div>
                    <div className='col-8 p-0'>
                      <input className='input-box' defaultValue={fileNo} onChange={e => setFileNo(e.target.value)}></input>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>MB/L No</label>
                    </div>
                    <div className='col-8 p-0'>
                      <input className='mblbox' defaultValue={mblno} onChange={e => setMblNo(e.target.value)} ></input>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Office</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        value={Office}
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { setOffice(Office) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>OB/L Type</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { setOblType(value) }}
                        value={OBLType}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Post Date</label>
                    </div>
                    <div className='col-8 p-0'>
                      <input className='input-box' defaultValue={postdate} onChange={e => setPostDate(e.target.value)}></input>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text text-primary'>Oversea Agent</label>
                    </div>
                    <div className='col-8 p-0'>
                      <input className='mblbox' defaultValue={overseaAgent}  onChange={e => setOverseaAgent(e.target.value)}></input>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text text-primary'>Carrier</label>
                    </div>
                    <div className='col-8 p-0'>
                      <input className='mblbox' defaultValue={carrier}  onChange={e => setCarrier(e.target.value)}></input>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>B/L Acct. Carrier</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { setBLAcctcarrier(value) }}
                        value={BLAcctcarrier}
                      />
                    </div>
                  </div>
                </div>

              </div>
              <div className='row'>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Forwarding Agent</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        value={forwardingAgent}
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { setforwardingAgent(value) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Co-loader</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        value={coloader}
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { setColoader(value) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Agent Ref No.</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        value={agentRefNo}
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { setAgentRefNo(value) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Sub B/L No.</label>
                    </div>
                    <div className='col-8 p-0'>
                      <input className='mblbox' defaultValue={subBLNo} onChange={e => setSubBLNo(e.target.value)}></input>
                    </div>
                  </div>
                </div>

              </div>
              <div className='row'>
                <div className='col-md-3 col-sm-12'>
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
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Direct Master</label>
                    </div>
                    <div className='col-8 p-0'>
                      <input className="form-check-input" type="checkbox" value ={directMaster} onChange={()=>{setDirectMaster(!directMaster)}} id="flexCheckDefault" />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>

                </div>
                <div className='col-md-3 col-sm-12'>

                </div>
              </div>

            </div>
            <div className='space mb-2'>
              <div className='row'>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Vessel</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        value={vessel}
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { setVessel( value) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Voyage</label>
                    </div>
                    <div className='col-8 p-0'>
                      <input className='mblbox' defaultValue={voyage} onChange={e => setVoyoge(e.target.value)}></input>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
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
                <div className='col-md-3 col-sm-12'>
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
              </div>
              <div className='row'>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Port of loading</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        value={portloading}
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { setPortofloading(value) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text text-primary'>ETD</label>
                    </div>
                    <div className='col-8 p-0 row'>
                    <div className='col-10'>
                      <DatePicker
                        selected={ETD}
                        onChange={(date:any) => setETD(date)}
                        required
                        form="ETD"
                      />
                      </div>
                      <div className='col-2'>
                      <form id="ETD">
                        <button type="submit" className='date-icon'></button>
                      </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Port of Discharge</label>
                    </div>
                    <div className='col-8 p-0'>
                      <input className='mblbox' defaultValue={PortofDischarge} onChange={e => setPortofDischarge(e.target.value)}></input>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text text-primary'>ETA</label>
                    </div>
                    <div className='col-8 p-0 row'>
                    <div className='col-10'>
                      <DatePicker
                        selected={ETA}
                        onChange={(date:any) => setETA(date)}
                        required
                        form="eta"
                      />
                      </div>
                      <div className='col-2'>
                      <form id="eta">
                        <button type="submit" className='date-icon'></button>
                        {/* <input type="submit" /> */}
                      </form>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className='row'>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Place of Delivery</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        value={placeofDelivery}
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { setPlaceofDelivery(value) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4 p-0'>
                      <label className='label-text'>Place of Delivery(ETA)</label>
                    </div>
                    <div className='col-8 p-0 row'>
                    <div className='col-10'>
                      <DatePicker
                        selected={placeDelevery}
                        onChange={(date:any) => setPlaceDelivery(date)}
                        required
                        form="peta"
                      />
                      </div>
                      <div className='col-2'>
                      <form id="peta">
                        <button type="submit" className='date-icon'></button>
                        {/* <input type="submit" /> */}
                      </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text text-primary'>Final Destination</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        value={finalDestination}
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { setFinalDestination(value) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text text-primary'>Final ETA</label>
                    </div>
                    <div className='col-8 p-0 row'>
                    <div className='col-10'>
                      <DatePicker
                        selected={finalETA}
                        onChange={(date:any) => setFinaleta(date)}
                        required
                        form="final-ETA"
                      />
                      </div>
                      <div className='col-2'>
                      <form id="final-ETA">
                        <button type="submit" className='date-icon'></button>
                        {/* <input type="submit" /> */}
                      </form>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              {/* <div className='row'>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Empty Pickup</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { console.log("dkkdkdk", value) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>B/L AccL Carrier</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { console.log("dkkdkdk", value) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>B/L AccL Carrier</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { console.log("dkkdkdk", value) }}
                      />
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
            <div className='space mb-2'>
              <div className='row'>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Freight</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        value={freight}
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { setFreight(value) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text text-primary'>Ship Mode</label>
                    </div>
                    <div className='col-8 p-0'>
                      <input className='mblbox' defaultValue={shipmode} onChange={e => setShipmode(e.target.value)}></input>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Service Term</label>
                    </div>
                    <div className='col-8 p-0'>
                      <div className='row'>
                        <div className='col-6'>
                          <CustomSelect
                            value={serviceTerm1}
                            options={stateOptions}
                            fetchingData={false}
                            onChange={(value: any) => { setServiceTerm1(value) }}
                          />
                        </div>
                        <div className='col-6'>
                          <CustomSelect
                            value={serviceTerm2}
                            options={stateOptions}
                            fetchingData={false}
                            onChange={(value: any) => { setServiceTerm2(value) }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Container/Qty</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        value={containerQty}
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { setContainerQty(value) }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>

                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4 p-0'>
                      <label className='label-text'>Telex release received</label>
                    </div>
                    <div className='col-8 p-0 row'>
                    <div className='col-10'>
                      <DatePicker
                        selected={startDate}
                        onChange={(date:any) => setStartDate(date)}
                        required
                        form="telex"
                      />
                      </div>
                      <div className='col-2'>
                      <form id="telex">
                        <button type="submit" className='date-icon'></button>
                      </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>Released Date</label>
                    </div>
                    <div className='col-8 p-0 row'>
                    <div className='col-10'>
                      <DatePicker
                        selected={releaseDate}
                        onChange={(date:any) => setReleasedDate(date)}
                        required
                        form="released"
                      />
                      </div>
                      <div className='col-2'>
                      <form id="released">
                        <button type="submit" className='date-icon'></button>
                        {/* <input type="submit" /> */}
                      </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4 p-0'>
                      <label className='label-text'>Business Referred By</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        value={businessReferredBy}
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { setBusinessReferredBy(value) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>

                </div>

              </div>
              {/* <div className='row'>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>B/L AccL Carrier</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { console.log("dkkdkdk", value) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>B/L AccL Carrier</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { console.log("dkkdkdk", value) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>B/L AccL Carrier</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { console.log("dkkdkdk", value) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>B/L AccL Carrier</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { console.log("dkkdkdk", value) }}
                      />
                    </div>
                  </div>
                </div>

              </div>
              <div className='row'>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>B/L AccL Carrier</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { console.log("dkkdkdk", value) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>B/L AccL Carrier</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { console.log("dkkdkdk", value) }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='row'>
                    <div className='col-4'>
                      <label className='label-text'>B/L AccL Carrier</label>
                    </div>
                    <div className='col-8 p-0'>
                      <CustomSelect
                        options={stateOptions}
                        fetchingData={false}
                        onChange={(value: any) => { console.log("dkkdkdk", value) }}
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="d-flex justify-content-center">
              <button className='save'>save</button>
            </div>
          </div>
          <div className='col-md-2 pl-0'>
            <div className='add-hbl-button'>+ Add HB/L</div>
          </div>

          </form>
        </div>
      </div>
    </div>
  </div>)
}
export default NewShipments;
