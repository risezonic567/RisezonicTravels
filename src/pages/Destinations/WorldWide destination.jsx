import React from "react";
import { PlaneTakeoff, RotateCcw, CreditCard, Undo2, Plane } from "lucide-react";
import { Link } from "react-router-dom";

export default function WorldWideDestinations() {

  const destinations = [
    {
      name: "Barcelona",
      img: "/Images/barcelona.jpg.jpeg",
    },
    {
      name: "Berlin",
      img: "/Images/Berlin.jpg.jpeg",
    },
    {
      name: "San Francisco",
      img: "/Images/San Francisco.jpg.jpeg",
    },
    {
      name: "Venice",
      img: "/Images/Venice.jpg.jpeg",
    },
    {
      name: "Washington",
      img: "/Images/Washington.jpg.jpeg",
    },
    {
      name: "Los Angeles",
      img: "/Images/Los Angeles.jpg.jpeg",
    },
  ];

  const benefits = [
    {
      icon: <CreditCard className="w-5 h-5 text-red-600" />,
      text: "Easy Bookings",
    },
    {
      icon: <RotateCcw className="w-5 h-5 text-red-600" />,
      text: "Cheapest Airfare",
    },
    {
      icon: <PlaneTakeoff className="w-5 h-5 text-red-600" />,
      text: "Flexible Changes",
    },
    {
      icon: <Undo2 className="w-5 h-5 text-red-600" />,
      text: "Fast Cancellations",
    },
  ];

  return (
    <section className="relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-teal-400/10 to-indigo-700/10" />

      <div className="absolute left-10 top-20 opacity-25">
        <Plane size={60} />
      </div>

      <div className="absolute right-12 bottom-24 opacity-20">
        <Plane size={45} />
      </div>

      <section className="py-24 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

          <div className="mb-16">
            <span className="text-red-600 font-semibold tracking-[0.2em] uppercase text-md mb-4 block">
              Travel Destinations
            </span>
            <h2 className="text-xl md:text-3xl font-black mb-6 text-slate-900 tracking-tight">
              Top Flight Routes <br />
              <span className="bg-gradient-to-r from-red-800 via-red-600 to-indigo-600 bg-clip-text text-transparent">
                USA to Europe & Canada
              </span>
            </h2>
            <p className="text-slate-800 max-w-2xl mx-auto text-lg leading-relaxed">
              Discover the most popular air routes at unbeatable prices. Fly from major U.S. cities
              to top international destinations without overspending.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {destinations.map((city, i) => (
              <div key={i} className="group relative">
                <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">

                  <img
                    src={city.img}
                    alt={city.name}
                    className="w-full h-full  object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0  to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                    <p className="text-white font-bold text-xl mb-1 transform transition-transform duration-500 group-hover:translate-x-1">
                      {city.name}
                    </p>
                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                    TOP ROUTE
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
            <Link to="tel:++18448215950">
              <button className="group relative px-10 py-5 bg-red-600 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:shadow-[0_20px_50px_rgba(13,_148,_136,_0.3)] active:scale-95">
                <div className="absolute inset-0 w-0  transition-all duration-500 ease-out group-hover:w-full"></div>
                <span className="relative z-10 flex items-center gap-3">
                  Contact Our Travel Experts
                </span>
              </button>
            </Link>
          </div>

        </div>
      </section>

      <div className="bg-white relative z-10 py-20 px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <p className="italic text-gray-700 mb-2">
              Choosing Airlines Ticket Booking
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
              Your Path to Affordable Flights & Dream Vacations
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Finding great flight deals has never been this easy! With Airlines
              Ticket Booking, you can explore worldwide destinations and book
              flights at unbeatable prices in just a few clicks.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 hover:shadow-lg hover:scale-105 transition"
                >
                  {b.icon}
                  <span className="font-medium text-gray-800">{b.text}</span>
                </div>
              ))}


              <div className="col-span-2 flex justify-center mt-4">
                <Link to="tel:+18448215950">
                  <button className="text-white bg-red-600 px-6 py-3 rounded-full hover:bg-red-700 hover:scale-105 transition">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <img
              src="https://i.postimg.cc/xdchzHjk/Your-Path-to-the-Best-Flight-Deals-1.jpg"
              alt="Airport Traveler"
              className="rounded-br-3xl object-cover w-full h-64 md:h-72 shadow-lg hover:scale-105 transition"
            />

            <img
              src="https://i.postimg.cc/VNdpCMsN/Your-Path-to-the-Best-Flight-Deals-2.jpg"
              alt="Airplane in Sky"
              className="rounded-br-3xl object-cover w-full h-64 md:h-72 shadow-lg hover:scale-105 transition"
            />
          </div>

        </div>
      </div>
    </section>
  );
}