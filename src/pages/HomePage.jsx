import React from "react";
import FlightSearchBox from "./FlightSearchBox";
import HomeAboutPage from "./HomeAboutPage";
import FlightDestination from "./Destinations/FlightDestination";
import FlightFAQ from "./FaqPage";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "../components/Testimonial";
import { Helmet } from "react-helmet";


export default function HomePage() {
  return (
    <>
    <Helmet>
        <link rel="canonical" href="https://risezonictravel.com/"/>
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
          src="/video/new/Home page vide.mp4"
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

    <section id="about">
      <HomeAboutPage/>
    </section>
    <WhyChooseUs/>
    <FlightDestination/>

    <FlightFAQ/>
    
    <Testimonials/>

    </>
  );
}