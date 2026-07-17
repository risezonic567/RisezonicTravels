import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactusPage'
import ScrollTop from './components/ScrollTop'
import FlightBooking from './pages/FlightBookingPage'
import NotFoundPage from './pages/404Page'
import HotelPage from './pages/HotelPage'
import CarPage from './pages/CarPage'
import PrivacyPolicy from './pages/Policies/Privacy-Policy'
import TermsConditions from './pages/Policies/TermsConditions'
import RefundPolicy from './pages/Policies/Refund-Policy'
import Cancillation from './pages/Policies/Cancillation'
import FaqFlightPage from './pages/FaqFlightPage'
import Testimonials from './components/Testimonial'
import CorporateTravel from './components/CorporateTravel/CorporateTravel'
import Flights from './pages/Flights'
import LoginPage from './pages/user/Login'
import Signup from './pages/user/Singup'
import PostDetail from './pages/PostDetail'
import BlogPage from './pages/BlogPage'
import Blogs from './pages/Blogs'
import PackagePage from './pages/PackagePage'
import PackageDetails from './pages/Destinations/PackageDetailsPage'



export default function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollTop/>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about-us' element={<AboutPage/>} />
        <Route path='/contact-us' element={<ContactPage/>}/>
        <Route path='/hotels' element={<HotelPage/>}/>
        <Route path='/car' element={<CarPage/>}/>


        <Route path='/flights' element={<FlightBooking/>}/>

        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/terms-condition' element={<TermsConditions/>}/>
        <Route path='/refund-policy' element={<RefundPolicy/>}/>
        <Route path='/cancellation-policy' element={<Cancillation/>}/>

        <Route path='/faq' element={<FaqFlightPage/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>

        <Route  path='/corporate-travel' element={<CorporateTravel/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>
        <Route path='/flight' element={<Flights/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/blog/:slug" element={<PostDetail />} />

      <Route path="/package" element={<PackagePage />} />
       
      <Route path="/package/:slug" element={<PackageDetails />} />
      

      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
