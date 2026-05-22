import React from "react";
import { motion } from "framer-motion";

export default function CarDestination() {
  const services = [
    {
      name: "Delhi to Manali",
      desc: "Enjoy a scenic road trip to the mountains with breathtaking views.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
      alt: "Manali mountains road trip",
    },
    {
      name: "Mumbai to Goa",
      desc: "Experience the ultimate beach road trip with friends and music.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      alt: "Goa beach road trip",
    },
    {
      name: "Delhi to Rishikesh",
      desc: "Perfect weekend getaway with adventure and peaceful vibes.",
      img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
      alt: "Rishikesh river and mountains",
    },
    {
      name: "Jaipur to Udaipur",
      desc: "Explore royal Rajasthan with lakes, palaces, and culture.",
      img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
      alt: "Udaipur lake palace",
    },
    {
      name: "Leh Ladakh Road Trip",
      desc: "The most adventurous and thrilling high-altitude road trip.",
      img: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=600&q=80",
      alt: "Leh Ladakh highway",
    },
    {
      name: "Bangalore to Coorg",
      desc: "Drive through lush greenery and coffee plantations.",
      img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
      alt: "Coorg hills and greenery",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-t bg-clip-text text-transparent from-red-600 to-indigo-500">
            Popular Destinations
          </span>
        </h1>
        <p className="text-gray-600 font-semibold text-lg max-w-2xl mx-auto">
          Enjoy smooth and reliable car rental services for every journey — city rides, outstation trips, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-lg p-4 text-center rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
          >
            {/* Image */}
            <img
              src={service.img}
              alt={service.alt}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.name}
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