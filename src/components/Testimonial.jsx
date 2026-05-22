import React from 'react'
import { Star, Quote, CheckCircle } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Ankit Sharma",
    location: "New Delhi",
    text: "Risezonic helped me book my last-minute flight to London at a price I couldn't find anywhere else. The support team was available even at 2 AM!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Ahmedabad",
    text: "The Dubai package was perfectly managed. From visa assistance to hotel transfers, everything was seamless. Truly the best travel agency.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Rahul Verma",
    location: "Gurugram",
    text: "I was skeptical about the low prices for USA flights, but Risezonic is legit. Saved almost ₹15,000 on my round trip. Highly recommended!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/85.jpg"
  },
  {
    id: 4,
    name: "Sonia Gill",
    location: "Canada",
    text: "Excellent service for NRI travelers. They understand the documentation required and make the booking process very easy.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <div className=" py-20   mt-5 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          {/* <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Testimonials</h2> */}
          <h1 className="text-4xl md:text-5xl text-black/90 font-extrabold  mb-6">
            What Our <span className="italic bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text">Travelers</span> Say
          </h1>
          <p className="text-gray-600 text-md font-semibold max-w-2xl mx-auto">
            Don't just take our word for it. We've helped over 50,000+ travelers explore the world with ease and confidence.
          </p>
        </div>  

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="flex items-center gap-2 bg-black/80 px-6 py-3 rounded-full border border-zinc-800">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-white font-medium">4.9/5 on Google</span>
          </div>
          <div className="flex items-center gap-2 bg-black/80 px-6 py-3 rounded-full border border-zinc-800">
            <CheckCircle className="text-green-500" size={20} />
            <span className="text-white font-medium">Verified Bookings Only</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-black/80 p-8 rounded-3xl border border-zinc-800  transition-all duration-300 relative overflow-hidden group"
            >
              {/* <Quote className="absolute top-4 right-8 text-zinc-800 group-hover:text-red-600/10 transition-colors" size={80} /> */}

              <div className="relative z-10">
                <div className="flex gap-1 mb-4 text-yellow-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="text-zinc-300 text-lg leading-relaxed mb-8 italic">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-red-600"
                  />

                  <div>
                    <h4 className="text-white font-bold text-lg">{item.name}</h4>
                    <p className="text-zinc-500 text-sm">{item.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;