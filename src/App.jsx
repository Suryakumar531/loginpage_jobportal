import './App.css'
import {Login} from './Components/Login.jsx'
import {Employer} from './Components/Employer.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([{
  path: '/loginpage_jobportal/',
  element: <Login />,
},
{
  path: '/loginpage_jobportal/employers',
  element: <Employer />,
}])

function App() {
  return (<>
    <RouterProvider router={router} />
  </>)
}

export default App
