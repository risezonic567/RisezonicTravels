
import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  PlaneTakeoff,
  PlaneLanding,
  Calendar as CalendarIcon,
  Search,
  ArrowLeftRight,
  Users,
  MapPin,
  X
} from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE = window.location.hostname === "localhost" 
  ? "http://localhost:7000" 
  : "https://www.risezonictravel.com";

export default function FlightSearchBox() {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);

  const [showDepCal, setShowDepCal] = useState(false);
  const [showRetCal, setShowRetCal] = useState(false);
  const [showTravellers, setShowTravellers] = useState(false);
  const [loading, setLoading] = useState(false);

  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);

  const depRef = useRef(null);
  const retRef = useRef(null);
  const travRef = useRef(null);

  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    cabin: "Economy",
  });

  const searchAirports = async (query, type) => {
    if (query.length < 2) {
      type === "from" ? setFromSuggestions([]) : setToSuggestions([]);
      return;
    }
    try {
      // const res = await axios.get(`http://localhost:7000/api/flights/airports?query=${query}`);
      const res = await axios.get(`${API_BASE}/api/flights/airports?query=${query}`);
      if (type === "from") setFromSuggestions(res.data);
      else setToSuggestions(res.data);
    } catch (error) {
      console.log("Airport search error", error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!from || !to) return alert("Please select both origin and destination");
    
    setLoading(true);
    const searchData = {
      from: from.split('(')[1]?.replace(')', '') || from, // Extract IATA if present
      to: to.split('(')[1]?.replace(')', '') || to,
      date: formatDate(departure),
      adults: travellers.adults,
      children: travellers.children,
      infants: travellers.infants,
      cabin_class: travellers.cabin.toLowerCase(),
      return_date: tripType === "round" ? formatDate(returnDate) : null,
    };

    try {
      // const response = await axios.post("http://localhost:7000/api/flights/search", searchData);
      const response = await axios.post(`${API_BASE}/api/flights/search`, searchData);
      navigate("/flight", {
        state: {
          flights: response.data.flights || [],
          searchQuery: searchData
        }
      });
      console.log("flight data", response.data.flights);
    } catch (error) {
      alert("Error: " + (error.response?.data?.details || "Server not responding"));
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleTravellerChange = (type, operation) => {
    setTravellers((prev) => {
      let value = prev[type];
      if (operation === "inc") value++;
      if (operation === "dec") value--;
      if (type === "adults" && value < 1) return prev;
      if (type !== "adults" && value < 0) return prev;
      return { ...prev, [type]: value };
    });
  };

  return (
    <div className="max-w-7xl mx-auto mt-24 p-6 relative">
      {/* Trip Type Toggle */}
      <div className="flex bg-gray-100 p-1.5 rounded-2xl w-fit mb-8 shadow-inner">
        {["oneway", "round"].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => {
              setTripType(type);
              if (type === "round" && !returnDate) setReturnDate(new Date());
            }}
            className={`px-10 py-2.5 rounded-xl text-sm font-black transition-all ${
              tripType === type ? "bg-white text-red-600 shadow-sm scale-105" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {type === "oneway" ? "One Way" : "Round Trip"}
          </button>
        ))}
      </div>

      <form onSubmit={handleSearch} className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-visible">
          
          {/* FROM SECTION */}
          <div className="lg:col-span-3 p-6 border-r relative group hover:bg-gray-50 transition-all rounded-l-[2.5rem]">
            <label className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2">
              <PlaneTakeoff size={14} className="text-red-600" /> From
            </label>
            <input
              type="text"
              placeholder="Origin City"
              className="w-full text-xl font-black focus:outline-none bg-transparent placeholder:text-gray-300"
              value={from}
              onChange={(e) => { setFrom(e.target.value); searchAirports(e.target.value, "from"); }}
            />
            
            <AnimatePresence>
              {fromSuggestions.length > 0 && (
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="absolute top-[105%] left-0 w-[120%] bg-white shadow-2xl z-[50] rounded-3xl border border-gray-100 overflow-hidden">
                  {fromSuggestions.map((ap) => (
                    <div key={ap.iata_code} onClick={() => { setFrom(`${ap.city_name} (${ap.iata_code})`); setFromSuggestions([]); }} className="p-4 hover:bg-red-50 cursor-pointer flex items-center gap-4 transition-colors">
                      <div className="bg-gray-100 p-2 rounded-xl group-hover:bg-white"><MapPin size={18} className="text-gray-400"/></div>
                      <div className="flex-1">
                        <div className="font-black text-gray-800">{ap.city_name} <span className="text-red-600">{ap.iata_code}</span></div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{ap.airport_name}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <button type="button" onClick={handleSwap} className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 bg-white p-2.5 rounded-full shadow-lg text-red-600 border border-gray-50 hover:rotate-180 transition-transform duration-500">
              <ArrowLeftRight size={18} />
            </button>
          </div>

          {/* TO SECTION */}
          <div className="lg:col-span-3 p-6 border-r relative group hover:bg-gray-50 transition-all">
            <label className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2">
              <PlaneLanding size={14} className="text-red-600" /> To
            </label>
            <input
              type="text"
              placeholder="Destination City"
              className="w-full text-xl font-black focus:outline-none bg-transparent placeholder:text-gray-300"
              value={to}
              onChange={(e) => { setTo(e.target.value); searchAirports(e.target.value, "to"); }}
            />
            <AnimatePresence>
              {toSuggestions.length > 0 && (
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="absolute top-[105%] left-0 w-[120%] bg-white shadow-2xl z-[50] rounded-3xl border border-gray-100 overflow-hidden">
                  {toSuggestions.map((ap) => (
                    <div key={ap.iata_code} onClick={() => { setTo(`${ap.city_name} (${ap.iata_code})`); setToSuggestions([]); }} className="p-4 hover:bg-red-50 cursor-pointer flex items-center gap-4 transition-colors">
                      <div className="bg-gray-100 p-2 rounded-xl"><MapPin size={18} className="text-gray-400"/></div>
                      <div className="flex-1">
                        <div className="font-black text-gray-800">{ap.city_name} <span className="text-red-600">{ap.iata_code}</span></div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{ap.airport_name}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* DATES & TRAVELLERS */}
          <div ref={depRef} onClick={() => setShowDepCal(!showDepCal)} className="lg:col-span-2 p-6 border-r cursor-pointer hover:bg-gray-50 transition-all relative">
            <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2 flex gap-2"><CalendarIcon size={14} className="text-red-600" /> Departure</label>
            <div className="text-xl font-black">{departure.toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}</div>
            <div className="text-[10px] font-bold text-gray-400">{departure.toLocaleDateString("en-GB", { weekday: 'long' })}</div>
            {showDepCal && <div className="absolute top-[105%] left-0 z-[100] shadow-2xl rounded-3xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}><Calendar minDate={new Date()} value={departure} onChange={(val) => { setDeparture(val); setShowDepCal(false); }} /></div>}
          </div>

          <div ref={retRef} onClick={() => tripType === "round" && setShowRetCal(!showRetCal)} className={`lg:col-span-2 p-6 border-r transition-all relative ${tripType === "oneway" ? "bg-gray-50/50 cursor-not-allowed" : "cursor-pointer hover:bg-gray-50"}`}>
            <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2">Return</label>
            <div className="text-xl font-black">{tripType === "round" && returnDate ? returnDate.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }) : "— —"}</div>
            {tripType === "round" && <div className="text-[10px] font-bold text-gray-400">{returnDate?.toLocaleDateString("en-GB", { weekday: 'long' }) || "Add trip"}</div>}
            {showRetCal && <div className="absolute top-[105%] left-0 z-[100] shadow-2xl rounded-3xl overflow-hidden border border-gray-100" onClick={(e) => e.stopPropagation()}><Calendar minDate={departure} value={returnDate} onChange={(val) => { setReturnDate(val); setShowRetCal(false); }} /></div>}
          </div>

          <div ref={travRef} onClick={() => setShowTravellers(!showTravellers)} className="lg:col-span-2 p-6 cursor-pointer hover:bg-gray-50 transition-all rounded-r-[2.5rem] relative">
            <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2 flex gap-2"><Users size={14} className="text-red-600" /> Travellers</label>
            <div className="text-xl font-black">{travellers.adults + travellers.children} Pax</div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{travellers.cabin}</p>
            
            <AnimatePresence>
              {showTravellers && (
                <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.95}} className="absolute top-[105%] right-0 z-[100] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.15)] p-6 w-80 rounded-[2rem] border border-gray-100" onClick={(e) => e.stopPropagation()}>
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-black text-gray-800 text-sm">Select Travellers</h4>
                    <X size={18} className="text-gray-300 cursor-pointer" onClick={() => setShowTravellers(false)}/>
                  </div>
                  {["adults", "children", "infants"].map((type) => (
                    <div key={type} className="flex justify-between items-center mb-5">
                      <div>
                        <div className="font-black text-sm capitalize">{type}</div>
                        <div className="text-[9px] text-gray-400 font-bold uppercase">{type === 'adults' ? '12+ Years' : type === 'children' ? '2-12 Years' : '0-2 Years'}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button type="button" onClick={() => handleTravellerChange(type, "dec")} className="w-8 h-8 flex items-center justify-center border-2 border-gray-100 rounded-xl font-black hover:border-red-500 hover:text-red-500 transition-colors">-</button>
                        <span className="font-black w-4 text-center">{travellers[type]}</span>
                        <button type="button" onClick={() => handleTravellerChange(type, "inc")} className="w-8 h-8 flex items-center justify-center border-2 border-gray-100 rounded-xl font-black hover:border-red-500 hover:text-red-500 transition-colors">+</button>
                      </div>
                    </div>
                  ))}
                  <div className="mt-6 pt-6 border-t border-gray-50 flex flex-wrap gap-2">
                    {["Economy", "Business", "First"].map(c => (
                      <button key={c} type="button" onClick={() => setTravellers({...travellers, cabin: c})} className={`px-4 py-2 rounded-xl text-[10px] font-black transition-all ${travellers.cabin === c ? 'bg-red-600 text-white shadow-lg shadow-red-200' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}>{c}</button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* SEARCH BUTTON - PULSING EFFECT */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-40">
          <button
            type="submit"
            disabled={loading}
            className={`group bg-red-600 text-white font-black px-20 py-6 rounded-2xl shadow-[0_15px_40px_rgba(220,38,38,0.3)] border-4 border-white flex items-center gap-4 hover:bg-red-700 transition-all hover:scale-105 active:scale-95 ${loading ? 'opacity-80' : ''}`}
          >
            {loading ? (
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Search size={24} className="group-hover:rotate-12 transition-transform" />
            )}
            <span className="tracking-widest uppercase">{loading ? "Searching..." : "Search Flights"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}