import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Plane, ShieldCheck, Users } from 'lucide-react';
import Testimonials from '../components/Testimonial';
import { Helmet } from 'react-helmet';

const slides = [
  {
    id: 1,
    title: "Corporate Travel",
    subtitle: "Redefined",
    description: "Experience seamless business travel with our premium corporate solutions",
    image: "/images/TravelAbout1.jpeg",
    tagline: "BEYOND LIMITS"
  },
  {
    id: 2,
    title: "Efficiency",
    subtitle: "Comfort & Reliability",
    description: "Professional transportation services tailored for modern businesses",
    image: "/images/TravelAbout2.jpeg",
    tagline: "YOUR CORPORATE TRANSPORT"
  },
  {
    id: 3,
    title: "Global Reach",
    subtitle: "Worldwide Connections",
    description: "Connecting you to the world with our extensive global network",
    image: "/images/TravelAbout3.jpeg",
    tagline: "EXPLORE THE WORLD"
  }
];

export default function HeroSection () {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <Helmet>

      <link rel="canonical" href="https://risezonictravel.com/about-us" />
    </Helmet>
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-black/40" /> 

          <div className="relative h-full flex flex-col justify-center px-10 md:px-24 text-white">
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-400 font-bold tracking-widest mb-4"
            >
              {slides[current].tagline}
            </motion.span>
            
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight"
            >
              {slides[current].title} <br />
              <span className="text-gray-300 font-light">{slides[current].subtitle}</span>
            </motion.h1>

            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 max-w-lg text-lg text-gray-200"
            >
              {slides[current].description}
            </motion.p>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10"
            >
              <button className="bg-white text-black px-8 py-3 font-semibold hover:bg-red-600 cursor-pointer   hover:text-white transition-all duration-300 rounded-sm">
                DISCOVER MORE
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-10 left-10 md:left-24 flex items-center gap-4 text-white">
        <span className="text-xl font-bold">0{current + 1}</span>
        <div className="w-20 h-[2px] bg-gray-500 relative">
          <motion.div 
            className="absolute h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            key={current}
            transition={{ duration: 5, ease: "linear" }}
          />
        </div>
        <span className="text-gray-400">0{slides.length}</span>
      </div>
      
    </div>
   
   <div className="bg-white mt-5">
      <section className=' text-white py-20 text-center'>
        <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-red-500 text-4xl sm:text-5xl font-black mb-4'>
          About Us
        </h2>
        <p className='text-md max-w-2xl text-gray-500 font-semibold mx-auto sm:text-base opacity-90'>
           Discover who we are and why thousands of travelers trust us for their journeys.
        </p>
      </section>

     <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

        <div className="relative">
          <img
            src="/images/Travel About Intro (580x500).jpg.jpeg"
            alt="travel"
            className="rounded-3xl shadow-md shadow-olive-600 w-full h-full object-cover"
          />

          <div className="absolute bottom-6 left-6 bg-white px-5 py-3 rounded-xl shadow-xl">
            <p className="text-2xl font-black text-red-600">10+</p>
            <p className="text-xs text-gray-500">Years Experience</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your Trusted Travel Partner 🌍
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We are dedicated to helping travelers find the best flight deals at unbeatable prices.
            Our platform is designed to provide a smooth, secure, and enjoyable booking experience.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether you're planning a vacation, business trip, or last-minute getaway,
            we make travel easy and affordable.
          </p>

          <button className="bg-red-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-red-700 transition">
            Book Your Flight
          </button>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Plane className="text-red-600 mb-3" size={28} />
            <h3 className="font-bold text-lg">Easy Booking</h3>
            <p className="text-sm text-gray-500">Fast and hassle-free booking experience</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Globe className="text-red-600 mb-3" size={28} />
            <h3 className="font-bold text-lg">Global Coverage</h3>
            <p className="text-sm text-gray-500">Flights to destinations worldwide</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <ShieldCheck className="text-red-600 mb-3" size={28} />
            <h3 className="font-bold text-lg">Secure Payments</h3>
            <p className="text-sm text-gray-500">100% safe and secure transactions</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Users className="text-red-600 mb-3" size={28} />
            <h3 className="font-bold text-lg">24/7 Support</h3>
            <p className="text-sm text-gray-500">We’re here whenever you need us</p>
          </div>

        </div>
      </section>

      <section className="py-16 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">

          <div>
            <h2 className="text-3xl font-black text-red-600">50K+</h2>
            <p className="text-gray-500 text-sm">Happy Customers</p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-red-600">100+</h2>
            <p className="text-gray-500 text-sm">Destinations</p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-red-600">12+</h2>
            <p className="text-gray-500 text-sm">Awards</p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-red-600">24/7</h2>
            <p className="text-gray-500 text-sm">Support</p>
          </div>
        </div>
      </section>
      <Testimonials/>

   </div>
    </>
  );
}