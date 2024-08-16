import './App.css'
import { RouterProvider, BrowserRouter, Outlet } from "react-router-dom";
import { router } from "./routes/routes"


function App(props: any) {

  return (
    <>
      <div>
        <div className='container'>
          <RouterProvider router={router} ></RouterProvider>
        </div>
      </div>


    </>
  )
}

export default App
