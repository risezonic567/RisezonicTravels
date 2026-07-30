import React from 'react'
import ServicesCarPage from './ServicesCar'
import CarDestination from './Destinations/CarDestinations'
import FaqFlightPage from './FaqFlightPage'
import Testimonials from '../components/Testimonial'
import { Helmet } from 'react-helmet'

export default function CarPage() {
  return (
    <>
    <Helmet>
      <link rel="canonical" href="https://risezonictravel.com/car" />
    </Helmet>
    <section className="relative min-h-screen w-full font-sans antialiased">

      <div className="absolute inset-0 z-0">
        <img 
          src="/images/Travel Car Banner.jpg.jpeg" 
          alt="Luxury Car" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/15"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">

        <div className="w-full max-w-md">

          <div className="text-center  mx-2 mb-10 mt-10">
            <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-wide">
              <span className="text-red-600">Luxury</span> Limo Hire
            </h1>
            <p className="text-gray-200 font-semibold mt-3 text-md">
              Premium chauffeur-driven rides in elite vehicles.
            </p>
          </div>

         <form action="">
           <div className="bg-white/30 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-6 border border-white/20">

            <div className="space-y-4">

              <div className="flex items-center bg-white/10 rounded-xl px-4 border border-white/20">
                <input type="text" placeholder="Pick Up Address"
                  className="bg-transparent w-full p-3  placeholder-black outline-none"/>
              </div>

              <div className="flex items-center bg-white/10 rounded-xl px-4 border border-white/20">
                <input type="text" placeholder="Drop Off Address"
                  className="bg-transparent w-full p-3  placeholder-black outline-none"/>
              </div>

              <div className="flex items-center bg-white/10 rounded-xl px-4 border border-white/20">
                <input type="date"
                  className="bg-transparent w-full p-3 text-black  outline-none"/>
              </div>

              <div className="flex items-center bg-white/10 rounded-xl px-4 border border-white/20">
                <input type="time"
                  className="bg-transparent w-full p-3 text-black placeholder-black outline-none"/>
              </div>

              {/* <div className="flex items-center bg-white/10 rounded-xl px-4 border border-white/20">
                <select className="bg-transparent w-full p-3 text-black outline-none">
                  <option className="text-black">Select Car Type</option>
                  <option className="text-black">Sedan</option>
                  <option className="text-black">SUV</option>
                  <option className="text-black">Stretch Limo</option>
                  <option className="text-black">Luxury Van</option>
                </select>
              </div> */}

              <button className="w-full mt-4 py-4 bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold rounded-xl hover:scale-[1.02] hover:shadow-red-500/20 transition-all shadow-xl active:scale-95">
                Book Now
              </button>

            </div>
          </div>
         </form>

        </div>
      </div>

    </section>
    <ServicesCarPage/>
    <CarDestination/>
    <FaqFlightPage/>

    <Testimonials/>
    
    </>
  )
}