import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import LoginFinal from './components/login/Login';
import { RootLayout } from './components/root/RootLayout';


const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    children: [{ path: '', element: <Home />, },
    { path: 'login', element: <LoginFinal /> }]
  },

])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
