import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'

import Navbar from './components/Navbar'
import About from './pages/About'
import Account from './pages/Account'
import Register from './pages/Register'
import "./App.css"
function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Account/>}></Route>
          <Route path='/register-user' element={<Register/>}></Route>
        </Routes>
      </Navbar>
    </div>
  )
}

export default App
