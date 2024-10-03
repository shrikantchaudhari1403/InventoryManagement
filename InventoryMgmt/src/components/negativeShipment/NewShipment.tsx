
import './filterabletable.css'
import CustomSelect from "../common/select/custom-select/custom-select";
import { stateOptions, updatedCountries } from "../common/select/custom-select/data";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from 'react-icons/fa';
import { useState } from 'react';
import { MblRequestModel } from '../../shared/request/mbl';


function NewShipments() {
  const [activeTabId, setActiveTabId] = useState('tabs-1')
  const [activeAccordian, setActiveAccordian] = useState('collapseOne')
  const [startDate, setStartDate] = useState(null);
  const [ETD, setETD] = useState(null)
  const [placeDelevery, setPlaceDelivery] = useState(null)
  const [ETA, setETA] = useState(null)
  const [finalETA, setFinaleta] = useState(null)
  const [releaseDate, setReleasedDate] = useState(null)
  const [fileNo, setFileNo] = useState('')
  const [mblno, setMblNo] = useState('')
  const [Office, setOffice] = useState({ id: "AL", value: "AL", label: "Alabama" })
  const [OBLType, setOblType] = useState()
  const [postdate, setPostDate] = useState('')
  const [overseaAgent, setOverseaAgent] = useState('')
  const [carrier, setCarrier] = useState('')
  const [BLAcctcarrier, setBLAcctcarrier] = useState({})
  const [forwardingAgent, setforwardingAgent] = useState({})
  const [coloader, setColoader] = useState({})
  const [agentRefNo, setAgentRefNo] = useState({})
  const [subBLNo, setSubBLNo] = useState('')
  const [OP, setOP] = useState({})
  const [directMaster, setDirectMaster] = useState(false)
  const [vessel, setVessel] = useState({})
  const [voyage, setVoyoge] = useState('')
  const [CYlocation, setCYLocation] = useState({})
  const [CFSLocation, setCFSLocation] = useState({})
  const [portloading, setPortofloading] = useState({})
  const [PortofDischarge, setPortofDischarge] = useState('')
  const [placeofDelivery, setPlaceofDelivery] = useState({})
  const [finalDestination, setFinalDestination] = useState({})
  const [freight, setFreight] = useState({})
  const [shipmode, setShipmode] = useState('')
  const [serviceTerm1, setServiceTerm1] = useState({})
  const [serviceTerm2, setServiceTerm2] = useState({})
  const [containerQty, setContainerQty] = useState({})
  const [businessReferredBy, setBusinessReferredBy] = useState({})
  const [formData, setForData] = useState<MblRequestModel>({});
 // const saveData
 
 const saveMblData = (event: any) => {
   
};  

  return (<div style={{ margin: '45px 0px 0px 45px' }}>
    <div className="top-header tp-header">
      <div><img style={{ height: '17px', width: '17px', cursor: 'pointer', marginLeft: '10px' }} src={'../../../src/assets/home.svg'} /></div>
      <div className='breadscrumb-text'>Home <img className="arrow-right" src={'../../../src/assets/right-arrow.svg'} /></div>
      <div className='breadscrumb-text'>Ocean Import <img className="arrow-right" src={'../../../src/assets/right-arrow.svg'} /></div>
      <div className='breadscrumb-text'>New Shipment</div>
    </div>


    <div className="mgl">
      <ul className="nav nav-tabs tp-header" role="tablist">
        <li className="nav-item" onClick={() => { setActiveTabId('tabs-1') }}>
          <a className={activeTabId == "tabs-1" ? "nav-link active" : "nav-link"} data-toggle="tab" href="#tabs-1" role="tab">Basic</a>
        </li>
        <li className="nav-item" onClick={() => { setActiveTabId('tabs-2') }}>
          <a className={activeTabId == "tabs-2" ? "nav-link active" : "nav-link"} data-toggle="tab" href="#tabs-2" role="tab">Container & Item</a>
        </li>
        <li className="nav-item" onClick={() => { setActiveTabId('tabs-3') }}>
          <a className={activeTabId == "tabs-3" ? "nav-link active" : "nav-link"} data-toggle="tab" href="#tabs-3" role="tab">Accounting</a>
        </li>
        <li className="nav-item" onClick={() => { setActiveTabId('tabs-4') }}>
          <a className={activeTabId == "tabs-4" ? "nav-link active" : "nav-link"} data-toggle="tab" href="#tabs-1" role="tab">Doc Center</a>
        </li>
        <li className="nav-item" onClick={() => { setActiveTabId('tabs-5') }}>
          <a className={activeTabId == "tabs-5" ? "nav-link active" : "nav-link"} data-toggle="tab" href="#tabs-2" role="tab">Work Order</a>
        </li>
        <li className="nav-item" onClick={() => { setActiveTabId('tabs-6') }}>
          <a className={activeTabId == "tabs-6" ? "nav-link active" : "nav-link"} data-toggle="tab" href="#tabs-2" role="tab">Status</a>
        </li>
      </ul>
      <div className="tab-content">
        <div className={activeTabId == "tabs-1" ? "tab-pane mlt active" : "tab-pane mlt p-3"} id="tabs-1" role="tabpanel">
          <div className='row'>
            <div className='col-md-10 col-sm-2 p-0'>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item mt-2 accordion-container">
                  <div className={activeAccordian == 'collapseOne'?"accordion-header-active" :"accordion-header"} id="headingOne" onClick={() => { setActiveAccordian('collapseOne') }}>
                    <div className='form-header-title'>MB/L Information</div>
                    <div>
                      {activeAccordian == 'collapseOne' ? <i className="ri-arrow-down-s-line arrow"></i> : <img className="accordion-arrow-left" src="../../../src/assets/left-arrow.svg" />}
                    </div>

                  </div>
                  <div id="collapseOne" className={activeAccordian == 'collapseOne' ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className='space mb-2'>
                      <div className='row'>
                        <div className='col-md-4 col-sm-12'>
                          <div className='row'>
                            <div className='col-4'>
                              <label className='label-text'> <span className='red-star'>*</span>File No</label>
                            </div>
                            <div className='col-8 p-0'>
                              <input className='input-box' defaultValue={fileNo} onChange={e => setFileNo(e.target.value)}></input>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-4 col-sm-12'>
                          <div className='row'>
                            <div className='col-4'>
                              <label className='label-text'>MB/L No</label>
                            </div>
                            <div className='col-8 p-0'>
                              <input className='mblbox' defaultValue={mblno} onChange={e => setMblNo(e.target.value)} ></input>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-4 col-sm-12'>
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
                      </div>
                      <div className='row'>
                        <div className='col-md-4 col-sm-12'>
                          <div className='row'>
                            <div className='col-4'>
                              <label className='label-text'>Post Date</label>
                            </div>
                            <div className='col-8 p-0'>
                              <input className='input-box' defaultValue={postdate} onChange={e => setPostDate(e.target.value)}></input>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-4 col-sm-12'>
                          <div className='row'>
                            <div className='col-4'>
                              <label className='label-text text-primary'>Oversea Agent</label>
                            </div>
                            <div className='col-8 p-0'>
                              <input className='mblbox' defaultValue={overseaAgent} onChange={e => setOverseaAgent(e.target.value)}></input>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-4 col-sm-12'>
                          <div className='row'>
                            <div className='col-4'>
                              <label className='label-text text-primary'>Carrier</label>
                            </div>
                            <div className='col-8 p-0'>
                              <input className='mblbox' defaultValue={carrier} onChange={e => setCarrier(e.target.value)}></input>
                            </div>
                          </div>
                        </div>


                      </div>
                      <div className='row'>
                        <div className='col-md-4 col-sm-12'>
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
                        <div className='col-md-4 col-sm-12'>
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
                        <div className='col-md-4 col-sm-12'>
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
                      </div>
                      <div className='row'>
                        <div className='col-md-4 col-sm-12'>
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
                        <div className='col-md-4 col-sm-12'>
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
                        <div className='col-md-4 col-sm-12'>
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
                              <input className="form-check-input" type="checkbox" value={directMaster} onChange={() => { setDirectMaster(!directMaster) }} id="flexCheckDefault" />
                            </div>
                          </div>
                        </div>
                        <div className='col-md-4 col-sm-12'>

                        </div>

                      </div>


                    </div>
                    <div className='space mb-2'>
                      <div className='row'>
                        <div className='col-md-4 col-sm-12'>
                          <div className='row'>
                            <div className='col-4'>
                              <label className='label-text'>Vessel</label>
                            </div>
                            <div className='col-8 p-0'>
                              <CustomSelect
                                value={vessel}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { setVessel(value) }}
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
                              <input className='mblbox' defaultValue={voyage} onChange={e => setVoyoge(e.target.value)}></input>
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
                      <div className='row'>
                        <div className='col-md-4 col-sm-12'>
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
                        <div className='col-md-4 col-sm-12'>
                          <div className='row'>
                            <div className='col-4'>
                              <label className='label-text text-primary'>ETD</label>
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
                              <input className='mblbox' defaultValue={PortofDischarge} onChange={e => setPortofDischarge(e.target.value)}></input>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className='row'>
                        <div className='col-md-4 col-sm-12'>
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
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { setFinalDestination(value) }}
                              />
                            </div>
                          </div>
                        </div>


                      </div>
                      <div className='row'>
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
                      <div className='row'>
                        <div className='col-md-4 col-sm-12'>
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
                        <div className='col-md-4 col-sm-12'>
                          <div className='row'>
                            <div className='col-4'>
                              <label className='label-text text-primary'>Ship Mode</label>
                            </div>
                            <div className='col-8 p-0'>
                              <input className='mblbox' defaultValue={shipmode} onChange={e => setShipmode(e.target.value)}></input>
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

                      </div>
                      <div className='row'>
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
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { setBusinessReferredBy(value) }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-4 col-sm-12'>
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

                    </div>
                    <div className="d-flex justify-content-center">
                      <button className='save' onClick={saveMblData}>save</button>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className={activeAccordian == 'collapseTwo'?"accordion-header-active" :"accordion-header"} id="headingTwo" onClick={() => { setActiveAccordian('collapseTwo') }}>
                    <div className='form-header-title '> HB/L 1234567811111</div>
                    <div>
                      {activeAccordian == 'collapseTwo' ? <i className="ri-arrow-down-s-line arrow"></i> : <img className="accordion-arrow-left" src="../../../src/assets/left-arrow.svg" />}
                    </div>
                  </div>
                  <div id="collapseTwo" className={activeAccordian == 'collapseTwo' ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className='space mb-4'>
                        <div className='row'>
                          <div className='col-md-4 col-sm-12 p-0'>
                            <div className='row'>
                              <div className='col-md-4 col-sm-12'>

                                <label className='label-text'> <span className='red-star'>*</span>HB/L No</label>
                              </div>
                              <div className='col-md-8 col-sm-12 p-0'>
                                <input className='mblbox' defaultValue={mblno} onChange={e => setMblNo(e.target.value)} ></input>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-4 col-sm-12 p-0'>
                            <div className='row'>
                              <div className='col-md-4 col-sm-12'>
                                <label className='label-text'>Booking No</label>
                              </div>
                              <div className='col-md-8 col-sm-12 p-0'>
                                <input className='mblbox' defaultValue={mblno} onChange={e => setMblNo(e.target.value)} ></input>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-4 col-sm-12 p-0'>
                            <div className='row'>
                              <div className='col-md-4 col-sm-12'>
                                <label className='label-text'>file No</label>
                              </div>
                              <div className='col-md-8 col-sm-12 p-0'>
                                <input className='mblbox' defaultValue={mblno} onChange={e => setMblNo(e.target.value)} ></input>
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
                                <input className='mblbox' defaultValue={mblno} onChange={e => setMblNo(e.target.value)} ></input>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-4 col-sm-12 p-0'>
                            <div className='row'>
                              <div className='col-md-4 col-sm-12'>
                                <label className='label-text'>Document No</label>
                              </div>
                              <div className='col-md-8 col-sm-12 p-0'>
                                <input className='mblbox' defaultValue={mblno} onChange={e => setMblNo(e.target.value)} ></input>
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
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { setBusinessReferredBy(value) }}
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
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { console.log("ddjd") }}
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
                                value={businessReferredBy}
                                options={stateOptions}
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
                                onChange={(value: any) => { setBusinessReferredBy(value) }}
                              />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='row mt-2'>
                          <div className='col-md-4 col-sm-12 p-0'>
                            <div className='row'>
                              <div className='col-md-4 col-sm-12'>
                                <label className='label-text'>Coregistree</label>
                              </div>
                              <div className='col-md-8 col-sm-12 p-0'>
                              <CustomSelect
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { setBusinessReferredBy(value) }}
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
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { setBusinessReferredBy(value) }}
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
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { setBusinessReferredBy(value) }}
                              />
                              </div>
                            </div>
                          </div>

                        </div>
                        <div className='row mt-2'>
                        <div className='col-md-4 col-sm-12 p-0'>
                            <div className='row'>
                              <div className='col-md-4 col-sm-12'>
                                <label className='label-text'>Trucker</label>
                              </div>
                              <div className='col-md-8 col-sm-12 p-0'>
                              <CustomSelect
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { console.log("ddjd") }}
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
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { console.log("ddjd") }}
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
                              <input className="form-check-input" type="checkbox" value={directMaster} onChange={() => { setDirectMaster(!directMaster) }} id="flexCheckDefault" />
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
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { console.log("ddjd") }}
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
                          <div className='col-md-4 col-sm-12 p-0'>
                            <div className='row'>
                              <div className='col-md-4 col-sm-12'>
                                <label className='label-text'>Port of Discharge</label>
                              </div>
                              <div className='col-md-8 col-sm-12 p-0'>
                              <CustomSelect
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { console.log("ddjd") }}
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
                                  selected={releaseDate}
                                  onChange={(date: any) => console.log("date")}
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
                          <div className='col-md-4 col-sm-12 p-0'>
                            <div className='row'>
                              <div className='col-md-4 col-sm-12'>
                                <label className='label-text'>Place of Delivery</label>
                              </div>
                              <div className='col-md-8 col-sm-12 p-0'>
                              <CustomSelect
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { setBusinessReferredBy(value) }}
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
                        </div>
                        <div className='row mt-2'>
                          <div className='col-md-4 col-sm-12 p-0'>
                            <div className='row'>
                              <div className='col-md-4 col-sm-12'>
                                <label className='label-text'>Final Destination</label>
                              </div>
                              <div className='col-md-8 col-sm-12 p-0'>
                              <CustomSelect
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { setBusinessReferredBy(value) }}
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
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { setBusinessReferredBy(value) }}
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
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { console.log("ddjd") }}
                              />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='row mt-2'>
                          <div className='col-md-4 col-sm-12 p-0'>
                            <div className='row'>
                              <div className='col-md-4 col-sm-12'>
                                <label className='label-text'>Delivery To/Pler</label>
                              </div>
                              <div className='col-md-8 col-sm-12 p-0'>
                              <CustomSelect
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { setBusinessReferredBy(value) }}
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
                          <div className='col-md-4 col-sm-12 p-0'>
                            <div className='row'>
                              <div className='col-md-4 col-sm-12'>
                                <label className='label-text'>Cargo Pickup</label>
                              </div>
                              <div className='col-md-8 col-sm-12 p-0'>
                                <input className='mblbox' onChange={e => setMblNo(e.target.value)} ></input>
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
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { setBusinessReferredBy(value) }}
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
                                <input className='mblbox' onChange={e => setMblNo(e.target.value)} ></input>
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
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { setBusinessReferredBy(value) }}
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
                                <div className='col-md-6 col-sm-12'>
                                  <CustomSelect
                                    value={serviceTerm1}
                                    options={stateOptions}
                                    fetchingData={false}
                                    onChange={(value: any) => { setServiceTerm1(value) }}
                                  />
                                </div>
                                <div className='col-md-6 col-sm-12'>
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
                          <div className='col-md-4 col-sm-12 p-0'>
                            <div className='row'>
                              <div className='col-md-4 col-sm-12'>
                                <label className='label-text'>Container Qty</label>
                              </div>
                              <div className='col-md-8 col-sm-12 p-0'>
                                <input className='input-box' onChange={e => setMblNo(e.target.value)} ></input>
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
                                <input className='mblbox' onChange={e => setMblNo(e.target.value)} ></input>
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
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { setBusinessReferredBy(value) }}
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
                                value={businessReferredBy}
                                options={stateOptions}
                                fetchingData={false}
                                onChange={(value: any) => { setBusinessReferredBy(value) }}
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
                          <div className='col-md-4 col-sm-12 p-0'>
                            <div className='row'>
                              <div className='col-md-4 col-sm-12'>
                                <label className='label-text'>Early Return Date</label>
                              </div>
                              <div className='col-md-8 col-sm-12 row p-0'>
                              <div className='col-10'>
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
                          <div className='col-md-4 col-sm-12 p-0'>
                            <div className='row'>
                              <div className='col-md-4 col-sm-12'>
                                <label className='label-text'>L/C No</label>
                              </div>
                              <div className='col-md-8 col-sm-12 p-0'>
                                <input className='mblbox' onChange={e => setMblNo(e.target.value)} ></input>
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
                                <input className='mblbox' onChange={e => setMblNo(e.target.value)} ></input>
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
                          <div className='col-md-4 col-sm-12 p-0'>
                            <div className='row'>
                              <div className='col-md-4 col-sm-12'>
                                <label className='label-text'>Onboard</label>
                              </div>
                              <div className='col-md-8 col-sm-12 row'>
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
                        </div>
                        <div className='row mt-2'>
                        <div className='col-md-4 col-sm-12 p-0'>
                            <div className='row'>
                              <div className='col-md-4 col-sm-12'>
                                <label className='label-text'>Hold</label>
                              </div>
                              <div className='col-md-8 col-sm-12 p-0'>
                                <div className='row'>
                                  <div className='col-1'>
                                  <input className="form-check-input" type="checkbox" value={directMaster} onChange={() => { setDirectMaster(!directMaster) }} id="flexCheckDefault" />
                                  </div>
                                  <div className='col-11'>
                                  <input className='input-box' onChange={e => setMblNo(e.target.value)} ></input>
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
                              <div className='col-1'>
                                  <input className="form-check-input" type="checkbox" value={directMaster} onChange={() => { setDirectMaster(!directMaster) }} id="flexCheckDefault" />
                                  </div>
                              <div className='col-9 '>
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
                          <div className='col-md-4 col-sm-12 p-0'>

                          </div>
                          <div className='row'>
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
                                <input className='mblbox' onChange={e => setMblNo(e.target.value)} ></input>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                      <button className='save'>save</button>
                    </div>
                    </div>
                    <div className='accordion-footer'>

                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="headingThree" onClick={() => { setActiveAccordian('collapseThree') }}>
                    <div className='form-header-title'></div>
                    <div>
                      {activeAccordian == 'collapseThree' ? <i className="ri-arrow-down-s-line arrow"></i> : <img className="accordion-arrow-left" src="../../../src/assets/left-arrow.svg" />}
                    </div>
                  </div>
                  <div id="collapseThree" className={activeAccordian == 'collapseThree' ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-2 col-sm-2 p-0'>
              <div className='add-hbl-button' onClick={() => { setActiveAccordian('collapseTwo') }}>+ Add HB/L</div>
            </div>
          </div>

        </div>
        <div className={activeTabId == "tabs-2" ? "tab-pane  active" : "tab-pane p-3"} id="tabs-2" role="tabpanel">
          <div className="accordion-header">
          <div className='form-header-title'>MB/L</div>
          </div>
          <div className='accordion-body'>
              <div style={{height:'100px',width:'100%'}}></div>
          </div>
        </div>
        <div className={activeTabId == "tabs-3" ? "tab-pane  active" : "tab-pane p-3"} id="tabs-3" role="tabpanel">
          <div className="accordion-header"></div>
        </div>
        <div className={activeTabId == "tabs-4" ? "tab-pane  active" : "tab-pane p-3"} id="tabs-3" role="tabpanel">
          <div className="accordion-header"></div>
        </div>
        <div className={activeTabId == "tabs-5" ? "tab-pane  active" : "tab-pane p-3"} id="tabs-3" role="tabpanel">
          <div className="accordion-header"></div>
        </div>
        <div className={activeTabId == "tabs-6" ? "tab-pane  active" : "tab-pane p-3"} id="tabs-3" role="tabpanel">
          <div className="accordion-header"></div>
        </div>
      </div>
    </div>
  </div>)
}
export default NewShipments;
