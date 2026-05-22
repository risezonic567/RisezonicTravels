import React from "react";
import { Percent, Search, Clock, ShieldCheck, ArrowRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function FlightDestination() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <Percent className="w-6 h-6 text-white" />,
      bg: "bg-red-500",
      title: "Quick & Easy Booking",
      desc: "Book domestic or international flights in just a few clicks—simple & secure.",
    },
    {
      icon: <Search className="w-6 h-6 text-white" />,
      bg: "bg-blue-600",
      title: "Unbeatable Airfare",
      desc: "Exclusive discounts on USA, Europe, and Canada routes with zero hidden fees.",
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      bg: "bg-orange-500",
      title: "24/7 Assistance",
      desc: "Dedicated support team available around the clock for all your travel needs.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      bg: "bg-green-600",
      title: "Trusted Service",
      desc: "Partnered with globally recognized airlines for a reliable travel experience.",
    },
  ];

  const destinations = [
    { name: "Kerala", price: "$399", img: "/images/Flight Destination Kerala.jpg.jpeg" },
    { name: "Rajasthan", price: "$199", img: "/images/Flight Destination Rajasthan.jpg.jpeg" },
    { name: "London", price: "$450", img: "/images/Flight Destination London.jpg.jpeg" },
    { name: "Santorini", price: "$150", img: "/images/Flight Destination Santorini.jpg.jpeg" },
    { name: "Srinagar", price: "$420", img: "/images/Flight Destination Srinagar.jpg.jpeg" },
    { name: "USA", price: "$180", img: "/images/Flight Destination USA.jpg.jpeg" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
     
      <motion.div 
        initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="text-center px-6 max-w-4xl mx-auto mb-16"
      >
        <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-3 block">Premium Travel Experience</span>
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">
          Fly to Your Favorite Destinations at <span className="text-red-600">Unbeatable Prices!</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Discover cheap flights from the USA to Europe and Canada with top airlines. Enjoy smooth booking and flexible fares.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 mb-24">
        {features.map((f, i) => (
          <motion.div
            key={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            transition={{ delay: i * 0.1 }}
            className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500"
          >
            <div className={`${f.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform`}>
              {f.icon}
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-800">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-black/60 py-24 px-6 rounded-[3rem] mx-4 md:mx-10 shadow-2xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 italic">Explore Your Dream Destinations</h2>
          <p className="text-slate-400">Handpicked deals for your next big adventure. Prices updated daily.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {destinations.map((item, i) => (
            <motion.div
              key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group h-80 rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.img} alt={item.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-red-500 font-bold text-sm mb-1 uppercase tracking-widest">Starting From</p>
                <div className="flex justify-between items-end">
                  <h3 className="text-white font-bold text-3xl">{item.name}</h3>
                  <span className="text-white bg-red-600 px-3 py-1 rounded-lg font-bold">{item.price}</span>
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-white text-sm font-medium">
                  View Deals <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}