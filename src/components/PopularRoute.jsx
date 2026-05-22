import React from "react";
import { Plane, ArrowRight, MapPin } from "lucide-react"

const routes = [
  { from: "Delhi", to: "Mumbai", price: "₹4,500", tag: "Popular" },
  { from: "Delhi", to: "Dubai", price: "₹14,500", tag: "International" },
  { from: "Bangalore", to: "Goa", price: "₹3,200", tag: "Best Value" },
  { from: "Mumbai", to: "Singapore", price: "₹18,000", tag: "Trending" },
  { from: "Hyderabad", to: "Chennai", price: "₹2,800", tag: "Cheapest" },
  { from: "Delhi", to: "Bangkok", price: "₹16,500", tag: "Top Rated" },
];

export default function PopularRoutes() {
  return (
    <div className="py-16 px-6 bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            ✈️ Explore <span className="text-red-600">Popular Routes</span>
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            Best deals on top domestic and international destinations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <span className="absolute top-4 right-4 bg-blue-50 text-red-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {route.tag}
              </span>

              <div className="flex items-center justify-between mt-4">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 uppercase font-semibold">From</span>
                  <span className="text-xl font-bold text-gray-800">{route.from}</span>
                </div>
                
                <div className="flex flex-col items-center px-4">
                   <Plane size={18} className="text-red-600 mb-1" />
                   <div className="w-12 h-[2px] bg-gray-200 relative">
                      <div className="absolute top-[-4px] right-0 w-2 h-2 rounded-full bg-red-600"></div>
                   </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-400 uppercase font-semibold">To</span>
                  <span className="text-xl font-bold text-gray-800">{route.to}</span>
                </div>
              </div>

              <hr className="my-6 border-gray-50" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Starting at</p>
                  <p className="text-2xl font-black text-gray-900">
                    {route.price}
                  </p>
                </div>
                
                <button className="bg-red-600  text-white p-3 rounded-2xl transition-colors group-hover:scale-110 duration-200">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}