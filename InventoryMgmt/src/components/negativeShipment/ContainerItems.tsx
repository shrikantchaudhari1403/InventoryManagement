import './filterabletable.css'
import { useState } from 'react';
import CustomSelect from "../common/select/custom-select/custom-select";
import { Offices } from "../common/select/custom-select/data";

const ContainerItems = () => {
  return <>
    <div style={{ margin: '5px 0px 0px 10px' }}>
      <div className='row'>
        <div className='button-container mt-2'>
          <div style={{ display: 'flex' }}>
            <div className='container-title'>Container List</div>
            <div className='document-container-left'>
              <div className='container-icon'>+</div>
            </div>
            <div className='document-container-5'>
              <div className='container-5-title'>+5</div>
            </div>
            <div className='document-container-5 container-ml5'>
              <div className='container-title2'>++</div>
            </div>
            <div className='document-container-5 container-ml5'>
            <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '5px 0px 0px 8px' }} src={'../../../src/assets/files.svg'} />
            </div>
            <div className='document-container-5'>
            <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '5px 0px 0px 8px' }} src={'../../../src/assets/delete.svg'} />
            </div>
            <div className='document-container-left container-ml5 container-create-btn'>
              <div className='create-btn-text'>Create Pier Pass A/P</div>
            </div>
            <div className='container-create-btn copy-btn container-ml5'>
              <div className='create-btn-text'>Copy Data from All HB/L</div>
            </div>
            <div className='document-container-5 container-ml5 infobtn'>
              <div className='info-title'>Container info to clipboard</div>
            </div>

          </div>
          <div>
            <div className='document-container-right'>
              <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '5px 0px 0px 8px' }} src={'../../../src/assets/edit.svg'} />
            </div>
          </div>
        </div>
        <div>
          <table className="table table-bordered mt-5">
            <thead>
              <tr>
                <th className='th-text'>
                </th>
                <th className='th-text'>#</th>
                <th className='th-text'>Pier Pass A/P</th>
                <th className='th-text'>Container No</th>
                <th className='th-text'>TP/SZ</th>
                <th className='th-text'>Seal No</th>
                {/* <th className='th-text'>LFD</th>
                <th className='th-text'>FDD</th> */}
                <th className='th-text'>
                  <div style={{ display: "flex" }}>
                    <div>PKG</div>
                    <div style={{marginLeft:'5px'}}><select className="form-select" aria-label="Default select example">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select></div>


                  </div>

                </th>
                <th className='th-text'>
                <div style={{ display: "flex" }}>
                    <div>Weight</div>
                    <div style={{marginLeft:'5px'}}><select className="form-select" aria-label="Default select example">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select></div>


                  </div>
                  </th>
                <th className='th-text'>
                <div style={{ display: "flex" }}>
                    <div>Measurement</div>
                    <div style={{marginLeft:'5px'}}>
                      <select className="form-select" aria-label="Default select example">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select></div>


                  </div>

                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th><div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div></th>
                <th scope="row">1</th>
                <td></td>
                <td>
                  <input className="mblbox" name="mblNo" value="" />
                </td>
                <td><input className="mblbox" name="mblNo" value="" /></td>
                <td><input className="mblbox" name="mblNo" value="" /></td>
                <td><input className="mblbox" name="mblNo" value="" /></td>
                <td>
                <div>
                  <div style={{display:"flex"}}>
                  <input className="mblbox" name="fileNo" value=""/>
                   <div className='total-input fwb mt-3'>CBM</div>
                  </div>

                  <div className='total-input fwb'>353.15 CFT</div>
                  </div>
                </td>
                <td>
                <div>
                  <div style={{display:"flex"}}>
                  <input className="mblbox" name="fileNo" value=""/>
                   <div className='total-input fwb mt-3'>CBM</div>
                  </div>

                  <div className='total-input fwb'>353.15 CFT</div>
                  </div>
                </td>
              </tr>


            </tbody>
            <tfoot>
              <tr style={{ backgroundColor: '#FFFFFF' }}>
                <td colSpan={4}></td>
                <td colSpan={2}>
                  <div>
                    <div className='total-inp fwb'>Total</div>
                    <div className='total-inp'><input type="checkbox" className="mr2"id="vehicle1" name="vehicle1" value="Bike"/>Input total number</div>
                  </div>
                </td>
                <td>
                  <div>
                  <input className="input-box" name="fileNo" value=""/>
                  <div className='total-inp fwb'>CARTON(S)</div>
                  </div>
                </td>
                <td>
                <div>
                  <div style={{display:"flex"}}>
                  <input className="input-box" name="fileNo" value=""/>
                   <div className='total-inp fwb mt-3'>KG</div>
                  </div>

                  <div className='total-inp fwb'>959.01LB</div>
                  </div>
                </td>
                <td>
                <div>
                  <div style={{display:"flex"}}>
                  <input className="input-box" name="fileNo" value=""/>
                   <div className='total-inp fwb mt-3'>CBM</div>
                  </div>

                  <div className='total-inp fwb'>353.15 CFT</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={7}></td>
                <td colSpan={2}>
                  <div className='textright'>
                    <span style={{fontSize:'12px'}}>Display Unit</span>
                    <span>
                      <select className="display-unit" aria-label="Default select example">
                      <option value="1">Show Both</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      </select>
                    </span>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className='row ml2 mt-4'>
          <div className='col-md-6'>
          <label htmlFor="exampleFormControlTextarea1" className="form-label fwb f-11">Mark</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={2}></textarea>
          </div>
          <div className='col-md-6'>
          <label htmlFor="exampleFormControlTextarea1" className="form-label fwb f-11">Description</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={2}></textarea>
          </div>

        </div>
        <div className='row ml2 mt-4 mb-4'>
          <div className='col-md-12'>
          <label htmlFor="exampleFormControlTextarea1" className="form-label fwb f-11">Domestick Routing/Export Instruction</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={2}></textarea>
          </div>


        </div>

      </div>
    </div>

  </>
}
export default ContainerItems;
