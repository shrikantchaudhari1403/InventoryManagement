import './filterabletable.css'
import { useState } from 'react';



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
            <div className='document-container-5 container-ml5'></div>
            <div className='document-container-5'></div>
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
                <th className='th-text'>Test</th>
                <th className='th-text'>LFD</th>
                <th className='th-text'>FDD</th>
                <th className='th-text'>PKG</th>
                <th className='th-text'>Weight</th>
                <th className='th-text'>Measurement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th><div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div></th>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th><div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div></th>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>

            </tbody>
            <tfoot>
              <tr style={{backgroundColor: '#FFFFFF'}}>
                <td colSpan="4"></td>
                <td colSpan="3">21,000</td>
                <td>21,000</td>
                <td>21,000</td>
                <td>21,000</td>
                <td>21,000</td>
                <td>21,000</td>
              </tr>
              <tr>
              <td colSpan="6"></td>
                <td colSpan="2">21,000</td>
                <td>21,000</td>
                <td>21,000</td>
                <td>21,000</td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    </div>

  </>
}
export default ContainerItems;
