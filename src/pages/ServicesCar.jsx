import React from "react";
import { Car, MapPin, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesCarPage() {
  const services = [
    {
      icon: <Car size={40} />,
      title: "Car Rentals",
      desc: "Choose from a wide range of cars for daily, weekly, or monthly rentals at best prices.",
    },
    {
      icon: <MapPin size={40} />,
      title: "Outstation Trips",
      desc: "Book comfortable rides for outstation travel with experienced drivers.",
    },
    {
      icon: <Clock size={40} />,
      title: "Hourly Packages",
      desc: "Flexible hourly car rental packages for city travel and quick trips.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Safe & Secure",
      desc: "Well-maintained vehicles with verified drivers ensuring your safety.",
    },
  ];

  return (
    <div className=" bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
           <span className="bg-gradient-to-t bg-clip-text text-transparent from-red-600 to-indigo-500">Car Services</span>
        </h1>
        <p className="text-gray-600 font-semibold text-lg max-w-2xl mx-auto">
          Enjoy smooth and reliable car rental services for every journey — city rides, outstation trips, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-lg p-6 text-center rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
          >
            <div className="text-red-600 mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-md leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
