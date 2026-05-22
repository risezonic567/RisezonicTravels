import { Headphones, PlaneTakeoff, ShieldCheck, Users } from 'lucide-react'
import React from 'react'

export default function WhyChooseUsHotel() {
  return (
    <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl m-5 p-5 font-bold mt-5 mb-5 text-center'>
        Why Choose Us for <span className='bg-gradient-to-r from-red-600 to-indigo-500 text-transparent bg-clip-text'>Your Hotel Bookings?</span> 
        </h2>
         <div className="grid mt-10 mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white border  p-8 rounded-3xl hover:border-red-600/50 transition-all group">
            <div className="bg-red-600/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
              <Users className="text-red-600 group-hover:text-white" />
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
     
    </div>
  )
}
