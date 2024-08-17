
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from '../components/home/Home';
import Dashboard from '../components/dashboard/Dashboard';
import Settings from '../components/settings/Settings';
import Login from "../components/login/Login"
import Layout from "../components/layout"
import NegativeShipment from "../components/negativeShipment/NegativeShipment"
export const router = createBrowserRouter([
  {
    element: <><Layout /> <Outlet/></>,
    children: [
      { path: '/', element: <Layout/>, },
    { path: '/home', element: <Home />, },
    { path: '/login', element: <Login/> },
    { path: '/dashboard', element: <Dashboard />},
    { path: '/settings', element: <Settings />},
    { path: '/negative-shipment', element: <NegativeShipment />},
    ],
  },
])
