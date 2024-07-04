import React from 'react'
import {Routes , Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import "./App.css"

const App = () => {
  return (
    <div>
      <div className=' bg-slate-900'>
        <Navbar></Navbar>
      </div>
      <div>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
