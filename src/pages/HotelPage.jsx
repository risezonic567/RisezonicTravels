import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { 
  Calendar as CalendarIcon, 
  Search, 
  Users, 
  Clock, 
  Plus, 
  Minus, 
  MapPin 
} from "lucide-react";
import HotelDestinationPage from "./Destinations/HotelDestinations";
import Testimonials from "../components/Testimonial";
import WhyChooseUsHotel from "./WhyChooseUsHotel";
import { Helmet } from "react-helmet";

const formatDate = (date) => {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default function HotelPage() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );

  const [checkInTime, setCheckInTime] = useState("12:00");
  const [checkOutTime, setCheckOutTime] = useState("11:00");

  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [showGuests, setShowGuests] = useState(false);

  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);
  const guestRef = useRef(null);

  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (checkInRef.current && !checkInRef.current.contains(event.target)) setShowCheckIn(false);
      if (checkOutRef.current && !checkOutRef.current.contains(event.target)) setShowCheckOut(false);
      if (guestRef.current && !guestRef.current.contains(event.target)) setShowGuests(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleGuestChange = (type, op) => {
    setGuests((prev) => {
      let val = prev[type];
      if (op === "inc") val++;
      if (op === "dec") val--;

      if ((type === "adults" || type === "rooms") && val < 1) return prev;
      if (type === "children" && val < 0) return prev;

      return { ...prev, [type]: val };
    });
  };

  const handleCheckInChange = (date) => {
    setCheckIn(date);
    if (date >= checkOut) {
      const nextDay = new Date(date);
      nextDay.setDate(date.getDate() + 1);
      setCheckOut(nextDay);
    }
    setShowCheckIn(false);
  };

  return (
    <>
    <Helmet>
      <link rel="canonical" href="https://risezonictravel.com/hotels" />
    </Helmet>
    <div className="relative min-h-screen flex items-center justify-center p-4">
      {/* <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://raw.githubusercontent.com/Ashish-Kaintura/risezomic-travel2025/main/src/video/Risezonic%20Travel%20website%20video.mp4" type="video/mp4" />
      </video> */}
      <img src="/images/Travel Hotel Banner.jpg.jpeg" alt="Travel Hotel Banner" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative  z-20 w-full max-w-6xl">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl lg:rounded-full shadow-2xl overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            
            <div className="p-5 flex flex-col justify-center">
              <label className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1 mb-1">
                <MapPin size={14} /> Location
              </label>
              <input
                type="text"
                placeholder="Where are you going?"
                className="bg-transparent font-semibold text-gray-800 outline-none placeholder:text-gray-400"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div ref={checkInRef} className="p-5 relative cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => setShowCheckIn(!showCheckIn)}>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1 mb-1">
                <CalendarIcon size={14} /> Check-in
              </label>
              <div className="font-semibold text-gray-800">{formatDate(checkIn)}</div>
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                <Clock size={12} />
                <input 
                  type="time" 
                  value={checkInTime} 
                  className="bg-transparent outline-none cursor-pointer"
                  onChange={(e) => setCheckInTime(e.target.value)}
                  onClick={(e) => e.stopPropagation()} 
                />
              </div>
              {showCheckIn && (
                <div className="absolute top-full left-0 lg:left-auto mt-2 z-50 bg-white rounded-2xl shadow-2xl p-2 border border-gray-100">
                  <Calendar minDate={new Date()} value={checkIn} onChange={handleCheckInChange} />
                </div>
              )}
            </div>

            <div ref={checkOutRef} className="p-5 relative cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => setShowCheckOut(!showCheckOut)}>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1 mb-1">
                <CalendarIcon size={14} /> Check-out
              </label>
              <div className="font-semibold text-gray-800">{formatDate(checkOut)}</div>
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                <Clock size={12} />
                <input 
                  type="time" 
                  value={checkOutTime} 
                  className="bg-transparent outline-none cursor-pointer"
                  onChange={(e) => setCheckOutTime(e.target.value)}
                  onClick={(e) => e.stopPropagation()} 
                />
              </div>
              {showCheckOut && (
                <div className="absolute top-full left-0 lg:left-auto mt-2 z-50 bg-white rounded-2xl shadow-2xl p-2 border border-gray-100">
                  <Calendar minDate={checkIn} value={checkOut} onChange={(v) => { setCheckOut(v); setShowCheckOut(false); }} />
                </div>
              )}
            </div>

            <div ref={guestRef} className="p-5 relative cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => setShowGuests(!showGuests)}>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1 mb-1">
                <Users size={14} /> Guests
              </label>
              <div className="font-semibold text-gray-800">
                {guests.adults + guests.children} Guests, {guests.rooms} Room
              </div>
              {showGuests && (
                <div className="absolute top-full right-0 mt-2 z-50 bg-white rounded-2xl shadow-2xl p-6 w-72 border border-gray-100" onClick={(e) => e.stopPropagation()}>
                  {["adults", "children", "rooms"].map((type) => (
                    <div key={type} className="flex justify-between items-center mb-4 last:mb-0">
                      <span className="capitalize font-medium text-gray-700">{type}</span>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => handleGuestChange(type, "dec")}
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-4 text-center font-bold">{guests[type]}</span>
                        <button 
                          onClick={() => handleGuestChange(type, "inc")}
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-3 flex items-center">
              <button className="w-full h-full min-h-[60px] bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white rounded-xl lg:rounded-full flex justify-center items-center gap-2 font-bold transition-all transform hover:scale-[1.02] active:scale-95">
                <Search size={20} />
                <span>Search Hotels</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    
    </div>
    <HotelDestinationPage/>
    <WhyChooseUsHotel/>
    
    <Testimonials/>
    </>
  );
}