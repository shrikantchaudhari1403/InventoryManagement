import "antd/dist/reset.css"
import { Menu } from "antd";
import { Route, Routes } from "react-router-dom";
import NegativeShipment from "../negativeShipment/NegativeShipment";
import Export from "../export/Export";
import SignOut from "../signOut/SignOut";
import { Settings } from "@mui/icons-material";

function Dashboard() {
  return (<>
    <div style={{ display: "flex", flexDirection: "row" }}>
      Dashboard
    </div>
  </>)
}


export default Dashboard;
