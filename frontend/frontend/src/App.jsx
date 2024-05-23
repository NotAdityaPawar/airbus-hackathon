import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/header/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FlightInfo from './pages/FlightInfo'
import AirTraffic from './pages/AirTraffic'
import History from './pages/History'
import Notifications from './pages/Notification'
import OperationalMetrix from './pages/OperationalMetrix'
import SystemHealth from './pages/SystemHealth'
import UserMonitoring from './pages/UserMonitoring'
Home
export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/flightinfo' element = {<FlightInfo/>} />
          <Route path='/airtraffic' element = {<AirTraffic/>} />
          <Route path='/historicaldata' element = {<History/>} />
          <Route path='/alerts' element = {<Notifications/>} />
          <Route path='/data' element = {<OperationalMetrix/>} />
          <Route path='/systemhealth' element = {<SystemHealth/>} />
          <Route path='/monitoring' element = {<UserMonitoring/>} />
        </Routes>
      </BrowserRouter>
  )
}