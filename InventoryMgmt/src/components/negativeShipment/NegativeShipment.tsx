
import { NativeShipments } from "../../redux/reducers/NativeShipments"
import { useSelector } from 'react-redux'
import FilterableTable from "react-filterable-table"
import './filterabletable.css'

function NegativeShipment() {
  const localData = useSelector((state: any) => state)
  console.log("kddkd", localData.NativeShipments.data)
  const fields = [
    { name: 'mawbNo', displayName: "Department", inputFilterable: false, exactFilterable: false, sortable: true },
    { name: 'mawbNo', displayName: "File No", inputFilterable: false, exactFilterable: false, sortable: true },
    { name: 'mawbNo', displayName: "ETD", inputFilterable: false, exactFilterable: false, sortable: true },
    { name: 'mawbNo', displayName: "ETA", inputFilterable: false, exactFilterable: false, sortable: true },
    { name: 'createdBy', displayName: "Created By", inputFilterable: false, sortable: true },
    { name: 'profit', displayName: "Profit", inputFilterable: false, exactFilterable: false, sortable: true },
    { name: 'mawbNo', displayName: "No", inputFilterable: false, exactFilterable: false, sortable: true },
    {
      name: '', displayName: "Action", inputFilterable: false, exactFilterable: false, sortable: false,
      render: () => {
        return <>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
        </>
      }
    }
  ];

  return (<>
    <div>

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
        <div>
          <FilterableTable
            namespace="People"
            initialSort="name"
            data={localData.NativeShipments.data}
            fields={fields}
            noRecordsMessage="There are no people to display"
            noFilteredRecordsMessage="No people match your filters!"
            showHeaderFilters={false}
            pageSize={10}
            pagesizes={10}
            pagersVisible={true}
            topPagerVisible={false}
          />
        </div>

      </div>

    </div>
  </>)
}
export default NegativeShipment;
