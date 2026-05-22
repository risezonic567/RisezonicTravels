// import React, { useState, useEffect, useRef } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ChevronDown,
//   PlaneTakeoff,
//   PlaneLanding,
//   Calendar as CalendarIcon,
//   Search,
//   ArrowLeftRight,
//   Users,
// } from "lucide-react";

// export default function FlightSearchBox() {
//   const [tripType, setTripType] = useState("oneway");
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [departure, setDeparture] = useState(new Date());
//   const [returnDate, setReturnDate] = useState(null);

//   const [showDepCal, setShowDepCal] = useState(false);
//   const [showRetCal, setShowRetCal] = useState(false);
//   const [showTravellers, setShowTravellers] = useState(false);

//   const depRef = useRef(null);
//   const retRef = useRef(null);
//   const travRef = useRef(null);

//   const [travellers, setTravellers] = useState({
//     adults: 1,
//     children: 0,
//     infants: 0,
//     cabin: "Economy",
//   });

//   const priceData = {
//     "2026-04-24": 8706,
//     "2026-04-25": 8738,
//     "2026-04-26": 9108,
//     "2026-04-27": 8145,
//   };

//   const formatDate = (date) => {
//     if (!date) return "";
//     const d = new Date(date);
//     d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
//     return d.toISOString().split("T")[0];
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (depRef.current && !depRef.current.contains(event.target)) setShowDepCal(false);
//       if (retRef.current && !retRef.current.contains(event.target)) setShowRetCal(false);
//       if (travRef.current && !travRef.current.contains(event.target)) setShowTravellers(false);
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSwap = () => {
//     const temp = from;
//     setFrom(to);
//     setTo(temp);
//   };

//   const handleTravellerChange = (type, operation) => {
//     setTravellers((prev) => {
//       let value = prev[type];
//       if (operation === "inc") value++;
//       if (operation === "dec") value--;
//       if (type === "adults" && value < 1) return prev;
//       if (type !== "adults" && value < 0) return prev;
//       return { ...prev, [type]: value };
//     });
//   };

//   return (
//     <div className="max-w-7xl mx-auto mt-24 p-6 pb-20  rounded-3xl shadow-2xl border border-none relative">

//       <div className="flex bg-gray-100 p-1 rounded-xl w-fit mb-6">
//         {["oneway", "round"].map((type) => (
//           <button
//           type="button"
//             key={type}
//             onClick={() => {
//               setTripType(type)
//               if (type === "round" && !returnDate) setReturnDate(new Date())
//             }}
//             className={`px-8 py-2 rounded-lg text-sm font-bold transition-all ${
//               tripType === type ? "bg-white text-red-600 shadow-md" : "text-gray-500 hover:text-gray-700"
//             }`}
//           >
//             {type === "oneway" ? "One Way" : "Round Trip"}
//           </button>
//         ))}
//       </div>

//      <form>
//        <div className="grid grid-cols-1 lg:grid-cols-12 border-2 border-gray-100 rounded-3xl shadow-sm relative overflow-visible bg-white">

//         <div className="lg:col-span-3 p-5 border-b lg:border-b-0 lg:border-r relative hover:bg-blue-50 transition-colors rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
//           <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-1">
//             <PlaneTakeoff size={16} className="text-red-600" /> From
//           </label>
//           <input
//             type="text"
//             placeholder="Delhi"
//             className="w-full text-xl font-black focus:outline-none bg-transparent"
//             value={from}
//             onChange={(e) => setFrom(e.target.value)}
//           />
//           <p className="text-xs text-gray-400 truncate">{from || "Enter Departure City"}</p>

//           <button
//           type="button"
//             onClick={handleSwap}
//             className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 bg-white p-2.5 rounded-full shadow-lg border border-gray-100 text-red-600 hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 hidden lg:flex"
//           >
//             <ArrowLeftRight size={18} />
//           </button>
//         </div>

//         <div className="lg:col-span-3 p-5 border-b lg:border-b-0 lg:border-r hover:bg-blue-50 transition-colors">
//           <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-1">
//             <PlaneLanding size={16} className="text-red-600" /> To
//           </label>
//           <input
//             type="text"
//             placeholder="Dubai"
//             className="w-full text-xl font-black focus:outline-none bg-transparent"
//             value={to}
//             onChange={(e) => setTo(e.target.value)}
//           />
//           <p className="text-xs text-gray-400 truncate">{to || "Enter Arrival City"}</p>
//         </div>

//         <div
//           ref={depRef}
//           onClick={() => setShowDepCal(!showDepCal)}
//           className="lg:col-span-2 p-5 border-b lg:border-b-0 lg:border-r cursor-pointer relative hover:bg-blue-50 transition-colors"
//         >
//           <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-1">
//             <CalendarIcon size={16} className="text-red-600" /> Departure
//           </label>
//           <div className="flex justify-between items-center text-xl font-black">
//             {departure.toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}
//             <ChevronDown size={18} className={`text-gray-300 transition-transform ${showDepCal ? "rotate-180" : ""}`} />
//           </div>
//           <p className="text-xs text-gray-400">{departure.toLocaleDateString("en-GB", { weekday: "long" })}</p>

//           <AnimatePresence>
//             {showDepCal && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute top-full left-0 z-[100] mb-4 bg-white shadow-2xl rounded-2xl border p-2"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <Calendar
//                   minDate={new Date()}
//                   value={departure}
//                   onChange={(val) => { setDeparture(val); setShowDepCal(false); }}
//                   tileContent={({ date, view }) => {
//                     const price = priceData[formatDate(date)];
//                     return view === "month" && price ? <p className="text-[10px] text-green-600 font-bold">₹{price}</p> : null;
//                   }}
//                 />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         <div
//           ref={retRef}
//           onClick={() => tripType === "round" && setShowRetCal(!showRetCal)}
//           className={`lg:col-span-2 p-5 border-b lg:border-b-0 lg:border-r relative transition-all ${
//             tripType === "oneway" ? "bg-gray-50 opacity-60 cursor-not-allowed" : "hover:bg-blue-50 cursor-pointer"
//           }`}
//         >
//           <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-1">
//             <CalendarIcon size={16} className={tripType === "round" ? "text-red-600" : "text-gray-300"} /> Return
//           </label>
//           <div className="flex justify-between items-center text-xl font-black">
//             {tripType === "round" && returnDate ? returnDate.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }) : "— —"}
//             {tripType === "round" && <ChevronDown size={18} className={`text-gray-300 transition-transform ${showRetCal ? "rotate-180" : ""}`} />}
//           </div>
//           <p className="text-xs text-gray-400">{tripType === "round" && returnDate ? returnDate.toLocaleDateString("en-GB", { weekday: "long" }) : "Add return"}</p>

//           <AnimatePresence>
//             {showRetCal && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute top-full left-0 z-[100] mb-4 bg-white shadow-2xl rounded-2xl border p-2"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <Calendar minDate={departure} value={returnDate} onChange={(val) => { setReturnDate(val); setShowRetCal(false); }} />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         <div
//           ref={travRef}
//           onClick={() => setShowTravellers(!showTravellers)}
//           className="lg:col-span-2 p-5 cursor-pointer relative overflow-visible hover:bg-blue-50 transition-colors lg:rounded-r-3xl"
//         >
//           <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-1">
//             <Users size={16} className="text-red-600" /> Travellers
//           </label>
//           <div className="text-xl font-black truncate">
//             {travellers.adults + travellers.children} Pax
//           </div>
//           <p className="text-xs text-gray-400 truncate">{travellers.cabin}</p>

//           <AnimatePresence>
//             {showTravellers && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute top-full z-[999] right-0 lg:left-1/2 lg:-translate-x-1/2 mb-2 bg-white shadow-2xl rounded-2xl border p-5 w-72"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {["adults", "children", "infants"].map((type) => (
//                   <div key={type} className="flex justify-between items-center mb-4 last:mb-0">
//                     <div>
//                       <p className="font-bold capitalize text-gray-800">{type}</p>
//                       <p className="text-[10px] text-gray-400 font-medium">
//                         {type === "adults" ? "12+ yrs" : type === "children" ? "2-12 yrs" : "0-2 yrs"}
//                       </p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <button onClick={() => handleTravellerChange(type, "dec")} type="button" className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100 font-bold">-</button>
//                       <span className="w-4 text-center font-bold">{travellers[type]}</span>
//                       <button onClick={() => handleTravellerChange(type, "inc")} type="button" className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100 font-bold">+</button>
//                     </div>
//                   </div>
//                 ))}
//                 <div className="mt-4 pt-4 border-t z-[999">
//                   <p className="text-xs font-bold text-gray-400 mb-2 uppercase">Cabin Class</p>
//                   <div className="grid grid-cols-2 gap-2">
//                     {["Economy", "Business", "First"].map((c) => (
//                       <button key={c} onClick={() => setTravellers(p => ({ ...p, cabin: c }))} type="button"
//                         className={`text-[10px] p-2  border rounded-lg font-bold transition-all ${travellers.cabin === c ? "bg-red-600 text-white border-red-600" : "text-gray-600 hover:border-red-600"}`}>
//                         {c}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-40">
//         <button className="bg-red-600 hover:bg-red-600 text-white font-black px-16 py-5 rounded-full shadow-2xl shadow-red-400 transition-all transform active:scale-95 flex items-center gap-3 group border-4 border-white">
//           <Search size={26} className="group-hover:rotate-12 transition-transform" />
//           SEARCH FLIGHTS
//         </button>
//       </div>

//      </form>

//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios"
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ChevronDown,
//   PlaneTakeoff,
//   PlaneLanding,
//   Calendar as CalendarIcon,
//   Search,
//   ArrowLeftRight,
//   Users,
// } from "lucide-react";

// export default function FlightSearchBox() {
//   // 1. All Necessary States
//   const [tripType, setTripType] = useState("oneway");
//   const [from, setFrom] = useState({ name: "", iata: "" });
//   const [to, setTo] = useState({ name: "", iata: "" });
//   const [fromSuggestions, setFromSuggestions] = useState([]);
//   const [toSuggestions, setToSuggestions] = useState([]);

//   const [departure, setDeparture] = useState(new Date());
//   const [returnDate, setReturnDate] = useState(null);
//   const [showDepCal, setShowDepCal] = useState(false);
//   const [showRetCal, setShowRetCal] = useState(false);
//   const [showTravellers, setShowTravellers] = useState(false);

//   const [travellers, setTravellers] = useState({
//     adults: 1,
//     children: 0,
//     infants: 0,
//     cabin: "economy",
//   });

//   // 2. REFS for handling click outside
//   const fromRef = useRef(null);
//   const toRef = useRef(null);

//   // 3. Close suggestions when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (fromRef.current && !fromRef.current.contains(event.target)) setFromSuggestions([]);
//       if (toRef.current && !toRef.current.contains(event.target)) setToSuggestions([]);
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // 4. API Logic for Airport Search
//   const fetchAirports = async (query, type) => {
//     if (query.length < 2) return;
//     try {
//       const res = await axios.get(`http://localhost:7000/api/airports?query=${query}`);
//       if (type === "from") setFromSuggestions(res.data);
//       else setToSuggestions(res.data);
//     } catch (err) {
//       console.error("Airport fetch error", err);
//     }
//   };

//   // 5. Debounce effect for performance
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (from.name.length >= 2 && !from.iata) fetchAirports(from.name, "from");
//     }, 500);
//     return () => clearTimeout(timer);
//   }, [from.name]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (to.name.length >= 2 && !to.iata) fetchAirports(to.name, "to");
//     }, 500);
//     return () => clearTimeout(timer);
//   }, [to.name]);

//   // 6. Main Search Submission
//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!from.iata || !to.iata) {
//       alert("Please select airports from the suggestions list.");
//       return;
//     }

//     const payload = {
//       from: from.iata,
//       to: to.iata,
//       date: departure.toISOString().split("T")[0],
//       return_date: returnDate ? returnDate.toISOString().split("T")[0] : null,
//       passengers: travellers,
//       cabin_class: travellers.cabin
//     };

//     console.log("Sending to Backend:", payload);
//     // API Call here: axios.post('...', payload)
//   };

//   const handleSwap = () => {
//     const temp = from;
//     setFrom(to);
//     setTo(temp);
//     setFromSuggestions([]);
//     setToSuggestions([]);
//   };

//   return (
//     <div className="max-w-7xl mx-auto mt-24 p-6 pb-20 rounded-3xl relative">
//       {/* Trip Type Tabs */}
//       <div className="flex bg-gray-100 p-1 rounded-xl w-fit mb-6">
//         {["oneway", "round"].map((type) => (
//           <button
//             key={type}
//             type="button"
//             onClick={() => setTripType(type)}
//             className={`px-8 py-2 rounded-lg text-sm font-bold transition-all ${
//               tripType === type ? "bg-white text-red-600 shadow-md" : "text-gray-500"
//             }`}
//           >
//             {type === "oneway" ? "One Way" : "Round Trip"}
//           </button>
//         ))}
//       </div>

//       <form onSubmit={handleSearch}>
//         <div className="grid grid-cols-1 lg:grid-cols-12 border-2 border-gray-100 rounded-3xl bg-white relative overflow-visible shadow-sm">

//           {/* FROM SECTION */}
//           <div ref={fromRef} className="lg:col-span-3 p-5 border-r relative hover:bg-blue-50 transition-colors">
//             <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-1">
//               <PlaneTakeoff size={16} className="text-red-600" /> From
//             </label>
//             <input
//               type="text"
//               placeholder="Source City"
//               className="w-full text-xl font-black focus:outline-none bg-transparent"
//               value={from.name}
//               onChange={(e) => setFrom({ iata: "", name: e.target.value })}
//             />

//             <AnimatePresence>
//               {fromSuggestions.length > 0 && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   className="absolute left-0 top-full w-full bg-white shadow-2xl z-[999] rounded-b-xl border max-h-60 overflow-y-auto"
//                 >
//                   {fromSuggestions.map((item) => (
//                     <div
//                       key={item.iata_code}
//                       className="p-4 hover:bg-red-50 cursor-pointer border-b last:border-0 flex justify-between items-center"
//                       onClick={() => {
//                         setFrom({ name: item.city_name, iata: item.iata_code });
//                         setFromSuggestions([]);
//                       }}
//                     >
//                       <div>
//                         <p className="font-bold text-gray-800">{item.city_name}</p>
//                         <p className="text-xs text-gray-500">{item.name}</p>
//                       </div>
//                       <span className="bg-gray-100 px-2 py-1 rounded font-mono text-sm font-bold">{item.iata_code}</span>
//                     </div>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <button type="button" onClick={handleSwap} className="absolute -right-5 top-1/2 -translate-y-1/2 z-[100] bg-white p-2 rounded-full shadow-lg border hover:bg-red-600 hover:text-white transition-all lg:flex hidden">
//                <ArrowLeftRight size={18} />
//             </button>
//           </div>

//           {/* TO SECTION */}
//           <div ref={toRef} className="lg:col-span-3 p-5 border-r relative hover:bg-blue-50 transition-colors">
//             <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-1">
//               <PlaneLanding size={16} className="text-red-600" /> To
//             </label>
//             <input
//               type="text"
//               placeholder="Destination City"
//               className="w-full text-xl font-black focus:outline-none bg-transparent"
//               value={to.name}
//               onChange={(e) => setTo({ iata: "", name: e.target.value })}
//             />

//             <AnimatePresence>
//               {toSuggestions.length > 0 && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   className="absolute left-0 top-full w-full bg-white shadow-2xl z-[999] rounded-b-xl border max-h-60 overflow-y-auto"
//                 >
//                   {toSuggestions.map((item) => (
//                     <div
//                       key={item.iata_code}
//                       className="p-4 hover:bg-red-50 cursor-pointer border-b last:border-0 flex justify-between items-center"
//                       onClick={() => {
//                         setTo({ name: item.city_name, iata: item.iata_code });
//                         setToSuggestions([]);
//                       }}
//                     >
//                       <div>
//                         <p className="font-bold text-gray-800">{item.city_name}</p>
//                         <p className="text-xs text-gray-500">{item.name}</p>
//                       </div>
//                       <span className="bg-gray-100 px-2 py-1 rounded font-mono text-sm font-bold">{item.iata_code}</span>
//                     </div>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* DEPARTURE */}
//           <div onClick={() => setShowDepCal(!showDepCal)} className="lg:col-span-3 p-5 border-r cursor-pointer hover:bg-blue-50 relative">
//             <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-1">
//                <CalendarIcon size={16} className="text-red-600" /> Departure
//             </label>
//             <div className="text-xl font-black">
//                {departure.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
//             </div>
//             {showDepCal && (
//               <div className="absolute top-full left-0 z-[100] bg-white p-2 shadow-2xl rounded-xl border mt-2">
//                 <Calendar minDate={new Date()} value={departure} onChange={(val) => { setDeparture(val); setShowDepCal(false); }} />
//               </div>
//             )}
//           </div>

//           {/* TRAVELLERS */}
//           <div onClick={() => setShowTravellers(!showTravellers)} className="lg:col-span-3 p-5 cursor-pointer hover:bg-blue-50 relative">
//              <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-1">
//                <Users size={16} className="text-red-600" /> Travellers
//             </label>
//             <div className="text-xl font-black">{travellers.adults + travellers.children} Pax</div>
//             <p className="text-xs text-gray-400 uppercase font-bold">{travellers.cabin}</p>
//           </div>
//         </div>

//         {/* SEARCH BUTTON */}
//         <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-40">
//           <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-black px-12 py-4 rounded-full shadow-2xl flex items-center gap-3 border-4 border-white transition-all transform hover:scale-105 active:scale-95">
//             <Search size={24} /> SEARCH FLIGHTS
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
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
  : "https://api.risezonictravel.com"; // Live hone par ye kaam aayega

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