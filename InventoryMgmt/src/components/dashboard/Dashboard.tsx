import "antd/dist/reset.css"
import { Menu } from "antd";
import { Content } from "antd/es/layout/layout";

function Dashboard(){
    return( <>
      <div style={{ display: "flex", flexDirection:"row" }}>
       <Menu
        items={[
           {label: "Negative Shipment" ,key:"NegShip"  },
           {label: "Admin" ,key:"admin"  },
           {label: "Export" ,key:"exp"  },
           {label: "SignOut" ,key:"signOut"  },
        ]}
        >
       </Menu>
       <Content/>
      </div>
    </>)
}
export default Dashboard;