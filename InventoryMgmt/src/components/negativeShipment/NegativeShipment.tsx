

import { useSelector, useDispatch } from 'react-redux'

import FilterableTable from "react-filterable-table"
import './filterabletable.css'
import { useEffect, useState } from "react"
import { NativeShipmentDispatcher } from "../../redux/actions/nativeShipments/nativeShipments"
import Modal from 'react-modal';
import { IShipment } from '../../redux/interfaces/INativeShipments'


function NegativeShipment() {
  const localData = useSelector((state: any) => state.NativeShipments)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [rowData, setRowData] = useState<IShipment>({});
  const [formData, setFormData]= useState<IShipment>({});
  const [isEdit, setIsEdit] = useState(false)
  const [department, setDepartment] = useState()
  const [fileNo, setFileNo] = useState()
  const [profit, setProfit] = useState()
  const [rowId, setRowId] = useState()
  const dispatch = useDispatch()
  const PanelsDispatch = new NativeShipmentDispatcher(dispatch)
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '400px'

    },
  };

  useEffect(() => {
    PanelsDispatch.getAllNativeShipmentsData();
  }, [])

  const editRow = (rowData: any) => {
    setDepartment(rowData.record.mawbNo)
    setFileNo(rowData.record.fileNo);
    setProfit(rowData.record.profit);
    setRowId(rowData.record.id);
    setIsEdit(true)
    
    setFormData(values => ({...values,["mawbNo"]: rowData.record.mawbNo}));
    setFormData(values => ({...values,["fileNo"]: rowData.record.fileNo}))
    setFormData(values => ({...values,["profit"]: rowData.record.profit}))
    setFormData(values => ({...values,["id"]: rowData.record.id}))
    
    //const value = event.target.value;
   // setForData(values => ({...values, [name]: value}))
    //setFormData(rowData => ({...rowData}));
  }

   const updateRow = (e:any) => {
    e.preventDefault();
    console.log("dkkd", formData)
    PanelsDispatch.updateNativeShipmentsData(formData);
    setIsEdit(false);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(values => ({...values, [name]: value}))
  }

  function deleteRecord(rowData:any) {
    setIsOpen(true)
    setRowId(rowData.record.id);
    //setIsOpen(false); id
  }

  function confirmDelete(e:any){
    e.preventDefault();
    setIsOpen(false);
    PanelsDispatch.deleteNativeShipmentRecord(rowId);
  }

  const fields = [
    { id:'id',name: 'mawbNo', displayName: "MAWB Number", inputFilterable: false, exactFilterable: false, sortable: true },
    { id:'id',name: 'fileNo', displayName: "File No", inputFilterable: false, exactFilterable: false, sortable: true },
    // { id:'id',name: 'mawbNo', displayName: "ETD", inputFilterable: false, exactFilterable: false, sortable: true },
    // { id:'id',name: 'mawbNo', displayName: "ETA", inputFilterable: false, exactFilterable: false, sortable: true },
    { id:'id',name: 'createdBy', displayName: "Created By", inputFilterable: false, sortable: true },
    { id:'id',name: 'profit', displayName: "Profit", inputFilterable: false, exactFilterable: false, sortable: true },
    // { id:'id',name: 'mawbNo', displayName: "No", inputFilterable: false, exactFilterable: false, sortable: true },
    {
      name: '', displayName: "Action", inputFilterable: false, exactFilterable: false, sortable: false,

      render: (rowData: any) => {
        return <>
          <div>
            <span onClick={() => {
              editRow(rowData)
            }}>
              <img style={{ height: '20px', width: '30px', cursor: 'pointer' }} src={'../src/assets/edit.svg'} /></span>
            <span
            onClick={()=>{
              deleteRecord(rowData)
            }}
            ><img style={{ height: '20px', width: '30px', cursor: 'pointer' }} src={'../src/assets/trash.svg'} /></span>
          </div>
          {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input> */}
        </>
      }
    }
  ];

  return (<>
    <div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
        >

          <form style={{ textAlign: 'center' }}>
            <div className=''>
              <div className=''>
                <h3>Are you sure you want delete this record?</h3>
                <button className="btn-login" onClick={()=>{confirmDelete(event)}}>Yes</button>
                <button className="btn-login" style={{ marginLeft: '10px', backgroundColor: '#1a213d' }} onClick={()=>{closeModal()}}>No</button>
              </div>

            </div>
          </form>
        </Modal>
      </div>
      <div className="table-card">
        <div className="title-card">
          <div className="row">
            <div className="col-md-6 title row">
              <div>
                <span className="title-text">NEGATIVE PROFIT SHIPMENTS</span>
                <span className="info-text">Export ETD,Import ETA:: 11-10-2020 - 05-09-2021</span>
              </div>

            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
        {!isEdit ? <div>
          <FilterableTable
            namespace="People"
            initialSort="name"
            data={localData.data}
            fields={fields}
            noRecordsMessage="There are no people to display"
            noFilteredRecordsMessage="No people match your filters!"
            showHeaderFilters={false}
            pageSize={10}
            pagesizes={10}
            pagersVisible={true}
            topPagerVisible={false}
          />
        </div> : <>
          <form style={{ padding: '30px' }}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">MAWB Number</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" name="mawbNo" value={formData?.mawbNo || ''}  aria-describedby="emailHelp" placeholder="Department Name" defaultValue={department} onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">File No.</label> 
                  <input type="text" className="form-control" id="exampleInputEmail1"  name="fileNo" value={formData?.fileNo || ''}  aria-describedby="emailHelp" placeholder="File No."
                    defaultValue={fileNo}
                    onChange={handleChange} />
                </div>
              </div>
            </div>
            <div className="row" style={{ paddingTop: '30px' }}>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Profit</label>
                  <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Profit" name="profit" value={formData?.profit || ''} defaultValue={profit} onChange={handleChange}/>

                </div>
              </div>
              <div className="col-md-6">
                {/* <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                </div> */}
              </div>
            </div>
            {/* <div className="row" style={{ paddingTop: '30px' }}>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                </div>
              </div>
            </div> */}
            <button type="submit" className="btn-login" style={{ float: 'right', marginTop: "20px" }} 
            onClick={()=>updateRow(event)}>Submit</button>
          </form>
        </>}

      </div>

    </div>
  </>)
}
export default NegativeShipment;
