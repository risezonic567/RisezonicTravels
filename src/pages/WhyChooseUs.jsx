import React, { useState } from 'react';
import { PlaneTakeoff, ShieldCheck, Headphones, Users, MapPin, Calendar } from 'lucide-react';

export default function WhyChooseUs(){
//   const [tripType, setTripType] = useState('one-way');

  return (
    <div className=" bg-gray-200 text-white font-sans">
      
      {/* <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109c055?auto=format&fit=crop&q=80&w=2070" 
            alt="Travel BG" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            Fly Beyond <span className="text-red-600 italic">Boundaries</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
            Book international flights at unbeatable prices. Special deals for USA, Europe, and Canada.
          </p>

          <div className="bg-white p-2 md:p-6 rounded-2xl shadow-2xl text-zinc-800">
            <div className="flex gap-4 mb-4 ml-2">
              {['one-way', 'round-trip'].map((type) => (
                <button 
                  key={type}
                  onClick={() => setTripType(ty text-zinc-600pe)}
                  className={`text-sm font-bold uppercase tracking-wider ${tripType === type ? 'text-red-600 border-b-2 border-red-600' : 'text-zinc-600'}`}
                >
                  {type.replace('-', ' ')}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-cen text-zinc-600ter gap-3 p-3 border rounded-xl border-zinc-200 focus-within:border-red-500 transition-all">
                <MapPin className="text-zinc-600" size={20} />
                <div className="text-le text-zinc-600ft">
                  <p className="text-[10px] uppercase font-bold text-zinc-600">From</p>
                  <input type="text" placeholder="New Delhi (DEL)" className="w-full outline-none font-semibold text-zinc-700" />
                </div>
              </div>

              <div className="flex items-center ga text-zinc-600p-3 p-3 border rounded-xl border-zinc-200 focus-within:border-red-500 transition-all">
                <PlaneTakeoff className="text-zinc-600" size={20} />
                <div className="text-le text-zinc-600ft">
                  <p className="text-[10px] uppercase font-bold text-zinc-600">To</p>
                  <input type="text" placeholder="Dubai (DXB)" className="w-full outline-none font-semibold text-zinc-700" />
                </div>
              </div>

              <div className="flex items-cente text-zinc-600r gap-3 p-3 border rounded-xl border-zinc-200 focus-within:border-red-500 transition-all">
                <Calendar className="text-zinc-600" size={20} />
                <div className="text-le text-zinc-600ft">
                  <p className="text-[10px] uppercase font-bold text-zinc-600">Departure</p>
                  <input type="date" className="w-full outline-none font-semibold text-zinc-700" />
                </div>
              </div>

              <button className="bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-red-500/30 transition-all py-4 md:py-0">
                Search Now
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-500 md:text-5xl font-bold mb-4">Why Choose Us?</h2>
          <div className="h-1 w-20 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white border  p-8 rounded-3xl hover:border-red-600/50 transition-all group">
            <div className="bg-red-600/10  w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
              <Users className="text-red-600  group-hover:text-white" />
            </div>
            <h3 className="text-4xl text-zinc-600 font-bold mb-2">50K+</h3>
            <p className="text-zinc-600 font-medium">Happy Clients Served Worldwide</p>
          </div>

          <div className="bg-white border  p-8 rounded-3xl hover:border-red-600/50 transition-all group">
            <div className="bg-red-600/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
              <ShieldCheck className="text-red-600 group-hover:text-white" />
            </div>
            <h3 className="text-4xl text-zinc-600 font-bold mb-2">10+ Years</h3>
            <p className="text-zinc-600 font-medium">Experience in Travel Industry</p>
          </div>

          <div className="bg-white border  p-8 rounded-3xl hover:border-red-600/50 transition-all group">
            <div className="bg-red-600/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
              <Headphones className="text-red-600 group-hover:text-white" />
            </div>
            <h3 className="text-4xl text-zinc-600 font-bold mb-2">24/7</h3>
            <p className="text-zinc-600 font-medium">Premium Customer Support</p>
          </div>

          <div className="bg-white border  p-8 rounded-3xl hover:border-red-600/50 transition-all group">
            <div className="bg-red-600/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
              <PlaneTakeoff className="text-red-600 group-hover:text-white" />
            </div>
            <h3 className="text-4xl text-zinc-600 font-bold mb-2">120+</h3>
            <p className="text-zinc-600 font-medium">Global Airline Partners</p>
          </div>
        </div>
      </section>

    </div>
  );
}