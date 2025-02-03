import React from 'react'
import Navbar from './component/navbar/Navbar'
import Sidebar from './component/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/add/Add'
import List from './pages/list/List'
import Order from './pages/order/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  const url = "http://localhost:4000"

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <duv className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add  url={url}/>} />
          <Route path="/list" element={<List  url={url}/>} />
          <Route path="/order" element={<Order url={url} />} />
        </Routes>
      </duv>
    </div>
  )
}

export default App