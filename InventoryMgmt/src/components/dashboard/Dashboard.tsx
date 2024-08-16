import "antd/dist/reset.css"
import { Menu } from "antd";
import { Route, Routes } from "react-router-dom";
import NegativeShipment from "../negativeShipment/NegativeShipment";
import Export from "../export/Export";
import SignOut from "../signOut/SignOut";
import { Settings } from "@mui/icons-material";

function Dashboard(){
    return( <>
      <div style={{ display: "flex", flexDirection:"row" }}>
       <Menu
        items={[
           {label: "Negative Shipment" ,key:"NegShip"  },
          //  {label: "Admin" ,key:"admin"  },
           {label: "Export" ,key:"exp"  },
           {label: "SignOut" ,key:"signOut"  },
        ]}
        >
       </Menu>
      </div>
      <div>
         <Content/>
      </div>
    </>)
}

function Content(){
  return(<>
   <div>
    <Routes>
      <Route path="/" element={<NegativeShipment/>}></Route>
      <Route path="/export" element={<Export/>}></Route>
      <Route path="/settings" element={<Settings/>}></Route>
      <Route path="/SignOut" element={<SignOut/>}></Route>
    </Routes>
   </div>
  </>
  )
}
export default Dashboard;