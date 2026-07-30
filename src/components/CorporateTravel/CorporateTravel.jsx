import React, { useState, useEffect } from 'react';
import { Users, Gift, Presentation, Globe, CheckCircle2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CorporateAbout from './CorporateAbout';
import ImagelPage from './CorporateTravelImg';
import { Helmet } from 'react-helmet';

const CorporateTravel = () => {
    const slides = [
    {
      id: 1,
      title: "Corporate Travel",
      subtitle: "Redefined",
      description: "Experience seamless business travel with our premium corporate solutions",
      image: "/images/Corporat1.jpeg",
    }
    ,
    {
      id: 2,
      title: "Efficiency",
      subtitle: "Comfort & Reliability",
      description: "Professional transportation services tailored for modern businesses",
     image: "/images/Corporate2.jpeg",
    }
  ];

  const services = [
    {
      title: "Meetings",
      desc: "High-tech boardroom setups and seamless executive retreats.",
      icon: <Users className="w-8 h-8 text-red-600" />
    },
    {
      title: "Incentives",
      desc: "Tailor-made luxury travel programs to reward your top performers.",
      icon: <Gift className="w-8 h-8 text-red-600" />
    },
    {
      title: "Conferences",
      desc: "End-to-end management for large scale global summits.",
      icon: <Presentation className="w-8 h-8 text-red-600" />
    },
    {
      title: "Exhibitions",
      desc: "Innovative stall designs and comprehensive visitor logistics.",
      icon: <Globe className="w-8 h-8 text-red-600" />
    }
  ];

  const [current,setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(()=>{
      setCurrent((prev)=>prev === slides.length -1 ?0 :prev+1)
    
    },5000)
    return ()=>clearInterval(timer)
  },[])

  return (
    <>
    
    <Helmet>
      <link rel="canonical" href="https://risezonictravel.com/corporate-travel" />
    </Helmet>
    <div className="bg-white font-sans text-slate-900">
    
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
          <div className="absolute inset-0 bg-black/50" /> 

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

      <div className="bg-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><h3 className="text-3xl font-bold text-red-600">500+</h3><p className="text-slate-600">Events Managed</p></div>
          <div><h3 className="text-3xl font-bold text-red-600">50+</h3><p className="text-slate-600">Destinations</p></div>
          <div><h3 className="text-3xl font-bold text-red-600">10k+</h3><p className="text-slate-600">Delegates Hosted</p></div>
          <div><h3 className="text-3xl font-bold text-red-600">100%</h3><p className="text-slate-600">Client Satisfaction</p></div>
        </div>
      </div>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Core Expertise</h2>
          <div className="h-1 w-20 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, idx) => (
            <div key={idx} className="p-8 border border-slate-100 rounded-2xl hover:shadow-2xl transition-all hover:-translate-y-2 group bg-white">
              <div className="mb-6 inline-block p-4 bg-blue-50 rounded-xl group-hover:bg-red-800/20 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CorporateAbout/>
      <ImagelPage/>
    </div>
    </>
  );
};

export default CorporateTravel;