
import { NativeShipments } from "../../redux/reducers/NativeShipments"
import { useSelector } from 'react-redux'
import FilterableTable from "react-filterable-table"


function NegativeShipment() {
  const localData = useSelector((state: any) => state)
  console.log("kddkd",localData.NativeShipments.data)
  const fields = [
    { name: 'createdBy', displayName: "Created By", inputFilterable: true, sortable: true },
    { name: 'profit', displayName: "Profit", inputFilterable: true, exactFilterable: true, sortable: true },
    { name: 'mawbNo', displayName: "No", inputFilterable: true, exactFilterable: true, sortable: true }
  ];

  return (<>
    <div>
      <FilterableTable
        namespace="People"
        initialSort="name"
        data={localData.NativeShipments.data}
        fields={fields}
        noRecordsMessage="There are no people to display"
        noFilteredRecordsMessage="No people match your filters!"
      />
    </div>
  </>)
}
export default NegativeShipment;
