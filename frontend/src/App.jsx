import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Doctor from './Pages/Doctor'
import Login from './Pages/Login'
import Appointments from './Pages/Appointments'
import MyProfile from './Pages/myProfile'
import MyAppointments from './Pages/MyAppointments'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/doctors' element = {<Doctor></Doctor>}></Route>
        <Route path='/doctors/:speciality' element = {<Doctor></Doctor>}></Route>
        <Route path='/login' element = {<Login></Login>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='/contact' element = {<Contact></Contact>}></Route>
        <Route path='/my-profile' element = {<MyProfile></MyProfile>}></Route>
        <Route path='/my-appointments' element = {<MyAppointments></MyAppointments>}></Route>
        <Route path='/appointments/:docId' element = {<Appointments></Appointments>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App