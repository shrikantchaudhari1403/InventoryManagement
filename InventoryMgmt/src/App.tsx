import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import LoginFinal from './components/login/Login';
import { RootLayout } from './components/root/RootLayout';
import ProtectedRoute from './components/protectedRoute/ProtectedRoutes';
import Dashboard from './components/dashboard/Dashboard';
import Settings from './components/settings/Settings';


const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    children: [{ path: '', element: <Home />, },
    { path: 'login', element: <LoginFinal /> },
    {
      path: 'dashboard',
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: 'settings',
      element: (
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      ),
    },
  ],
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
