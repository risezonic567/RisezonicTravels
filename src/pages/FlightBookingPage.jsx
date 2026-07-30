import React from 'react'
import FlightSearchBox from './FlightSearchBox'
import FaqFlightPage from './FaqFlightPage'
import PopularRoutes from '../components/PopularRoute'
import Testimonials from '../components/Testimonial'
import { Helmet } from 'react-helmet'

export default function FlightBooking() {
  return (
    <>
    <Helmet>
      <link rel="canonical" href="https://risezonictravel.com/flights" />
    </Helmet>
      <div className="relative w-full h-screen overflow-visible">
            
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="/video/Home page video.mp4"
                type="video/mp4"
              />
            </video>
      
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
      
              <div className="md:mt-10  w-full flex justify-center">
                <FlightSearchBox />
              </div>
      
            </div>
        </div>
    <PopularRoutes/>
    <FaqFlightPage/>
    <Testimonials/>
    </>
  )
}
