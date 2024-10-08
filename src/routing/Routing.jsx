import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Details from '../components/Details'
import { Navbar } from 'react-bootstrap'

const Routing = () => {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/details/:coinId" element={<Details />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing

