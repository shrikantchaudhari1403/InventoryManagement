import './filterabletable.css'
import { useState } from 'react';
import CustomSelect from "../common/select/custom-select/custom-select";
import { Offices } from "../common/select/custom-select/data";

const Accouting = () => {
  return <>
    <div className='accounting-container'>
    <div className='button-container mt-2'>
          <div style={{ display: 'flex' }}>



            <div className='container-create-btn copy-btn container-ml5'>
              <div className='create-btn-text'>Destination Revenue(Invoice/AR)</div>
            </div>
            <div className='container-create-btn copy-btn container-ml5'>
              <div className='create-btn-text'>Origin Revenue/Cost(D/C Note)</div>
            </div>
            <div className='container-create-btn copy-btn container-ml5'>
              <div className='create-btn-text'>Destination Cost(AP)</div>
            </div>


          </div>
          <div>
            <div >

            </div>
          </div>
        </div>
    <table className="table table-bordered mt-3">
  <thead>
    <tr>
      <th className="th-text" scope="col"></th>
      <th className="th-text">Reference No</th>
      <th className="th-text">Party</th>
      <th className="th-text">Revenue</th>
      <th className="th-text">Cost</th>
      <th className="th-text">Balance</th>
      <th className="th-text">Status</th>
      <th className="th-text">Date</th>
      <th className="th-text">Email</th>
      <th className="th-text">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className='p-0'>
        <div className='accounting-grey-btn'>Invoice(A/R)</div>
      </th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row" className='p-0'>
        <div className='accounting-grey-btn'>D/C Note</div>
      </th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row" className='p-0'>
        <div className='accounting-grey-btn'>Cost(A/P)</div>
      </th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>

  </tbody>
    </table>
    </div>

  </>
}
export default Accouting;
