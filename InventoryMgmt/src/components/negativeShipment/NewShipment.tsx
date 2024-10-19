
import './filterabletable.css'
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { useState } from 'react';
import MblInformation from "./MblInformation"
import HBLInformation from "./HBLInformation"
import ContainerItems from "./ContainerItems"
import Accouting from "./Accouting"
function NewShipments() {
  const [activeTabId, setActiveTabId] = useState('tabs-1')
  const [activeAccordian, setActiveAccordian] = useState('collapseOne')
  const MblShipment = useSelector((state: any) => state.MblShipment);

  const updateAccordian =(value:any)=>{
    setActiveAccordian(value)
  }

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
          <a className={activeTabId == "tabs-4" ? "nav-link active" : "nav-link"} data-toggle="tab" href="#tabs-4" role="tab">Doc Center</a>
        </li>
        <li className="nav-item" onClick={() => { setActiveTabId('tabs-5') }}>
          <a className={activeTabId == "tabs-5" ? "nav-link active" : "nav-link"} data-toggle="tab" href="#tabs-5" role="tab">Work Order</a>
        </li>
        <li className="nav-item" onClick={() => { setActiveTabId('tabs-6') }}>
          <a className={activeTabId == "tabs-6" ? "nav-link active" : "nav-link"} data-toggle="tab" href="#tabs-6" role="tab">Status</a>
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
                    <MblInformation></MblInformation>

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
                      <HBLInformation updateAccordian={updateAccordian}/>
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
              {MblShipment.hblData.length > 0 ?<>
              <div className='hbl-card'>
                {MblShipment.hblData.map((item:any)=>{return<div className='hbl-text'>{item.HBLno}</div>
                })}
               </div>
               <div className='add-hbl-button bg-blue'>

               </div>
               </>:<></>}
            </div>
          </div>

        </div>
        <div className={activeTabId == "tabs-2" ? "tab-pane  active" : "tab-pane p-3"} id="tabs-2" role="tabpanel">
        <div className='row'>
            <div className='col-md-10 col-sm-2 p-0'>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item mt-2 accordion-container">
                  <div className={"accordion-header"} id="headingOne" onClick={() => { setActiveAccordian('collapseOne') }}>
                    <div className='form-header-title'>MB/L Information</div>
                    <div>
                      {  <img className="accordion-arrow-left" src="../../../src/assets/left-arrow.svg" />}
                    </div>

                  </div>
                  <div id="collapseOne" className={ "accordion-collapse collapse show"} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <ContainerItems></ContainerItems>

                  </div>
                </div>

              </div>
            </div>
            <div className='col-md-2 col-sm-2 p-0'>
              <div className='add-hbl-button' onClick={() => { setActiveAccordian('collapseTwo') }}>+ Add HB/L</div>
            </div>
          </div>
        </div>
        <div className={activeTabId == "tabs-3" ? "tab-pane  active" : "tab-pane p-3"} id="tabs-3" role="tabpanel">
        <div className='row'>
            <div className='col-md-10 col-sm-2 p-0'>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item mt-2 accordion-container">
                  <div className={"accordion-header"} id="headingOne" onClick={() => { setActiveAccordian('collapseOne') }}>
                    <div className='form-header-title'>MB/L Information</div>
                    <div>
                      {  <img className="accordion-arrow-left" src="../../../src/assets/left-arrow.svg" />}
                    </div>

                  </div>
                  <div id="collapseOne" className={ "accordion-collapse collapse show"} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <Accouting/>

                  </div>
                </div>

              </div>
            </div>
            <div className='col-md-2 col-sm-2 p-0'>
              <div className='add-hbl-button' onClick={() => { setActiveAccordian('collapseTwo') }}>+ Add HB/L</div>
            </div>
          </div>
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
