import './App.css'
import { RouterProvider, BrowserRouter, Outlet } from "react-router-dom";
import { router } from "./routes/routes"
import { Provider } from 'react-redux'
import ConfigureStore from './redux/store/configureStore'
 const store = ConfigureStore()

function App(props: any) {

  return (
    <>
    <Provider store={store}>
      <div>
        <div className='container'>
          <RouterProvider router={router} ></RouterProvider>
        </div>
      </div>
      </Provider>

    </>
  )
}

export default App
