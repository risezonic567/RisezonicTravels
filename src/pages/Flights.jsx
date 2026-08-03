import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion"; // Ensure this is installed
import {
  Filter,
  Plane,
  ArrowRight,
  RotateCcw,
  Clock,
  Zap,
  Sun,
  Sunset,
  Moon,
  Sunrise,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  Calendar as CalendarIcon,
  Users,
  ChevronDown,
  CheckCircle2,
  PlaneTakeoff,
  PlaneLanding,
  MapPin,
  ArrowLeftRight,
} from "lucide-react";
import Calendar from "react-calendar"; // Ensure this is installed
import "react-calendar/dist/Calendar.css";

// --- REUSABLE COMPONENTS ---
const FilterSection = React.memo(({ title, children, onReset }) => (
  <div className="border-b border-gray-100 py-5">
    <div className="flex justify-between items-center mb-3">
      <p className="text-xs font-bold text-gray-800 uppercase tracking-tight">
        {title}
      </p>
      {onReset && (
        <button
          onClick={onReset}
          className="text-[10px] font-bold text-blue-500 uppercase hover:underline"
        >
          Clear
        </button>
      )}
    </div>
    {children}
  </div>
));


const API_BASE = window.location.hostname === "localhost"
  ? "http://localhost:7000"
  : "https://www.risezonictravel.com"; // Live hone par ye kaam aayega

function Flights() {
  const location = useLocation();
  const navigate = useNavigate();
  const flightsData = useMemo(
    () => location.state?.flights || [],
    [location.state?.flights],
  );
  const query = location.state?.searchQuery;

  // --- COLORS ---
  const primaryBlue = "#008CFF";

  // --- ALL YOUR ORIGINAL STATES ---
  const [maxPrice, setMaxPrice] = useState(5000);
  const [displayPrice, setDisplayPrice] = useState(50000);
  const [selectedStops, setSelectedStops] = useState([]);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [fareType, setFareType] = useState("Regular");
  const [sortBy, setSortBy] = useState("cheapest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [from, setFrom] = useState(query?.from || "");
  const [to, setTo] = useState(query?.to || "");
  const [departure, setDeparture] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);
  const [showTravellers, setShowTravellers] = useState(false);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tripType, setTripType] = useState("oneway");
  const [showDepCal, setShowDepCal] = useState(false);
  const [showRetCal, setShowRetCal] = useState(false);
  const [datePrices, setDatePrices] = useState([]);
  const [dateOffset, setDateOffset] = useState(0);
  const [fareCalendar, setFareCalendar] = useState([]);
  const [isCalendarLoading, setIsCalendarLoading] = useState(false);
  // const [cabinPrices, setCabinPrices] = useState({});
  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    cabin: "Economy",
  });
  const flightsPerPage = 10;

  const depRef = React.useRef(null);
  const retRef = React.useRef(null);
  const travRef = React.useRef(null);

  const formatCabinClass = (cabin) => {
    switch (cabin) {
      case "Economy":
        return "economy";

      case "Premium Economy":
        return "premium_economy";

      case "Business":
        return "business";

      case "First":
        return "first";

      default:
        return "economy";
    }
  };

  const fetchFareCalendar = async () => {
    try {
      setIsCalendarLoading(true);

      const res = await axios.get(
        // "http://localhost:7000/api/flights/fare-calendar",
        `${API_BASE}/api/flights/fare-calendar`,
        {
          params: {
            origin: from,
            destination: to,
            departure_date: formatLocalDate(departure),
          },
        },
      );

      setFareCalendar(res.data.data || []);
    } catch (err) {
      console.log(err);
    } finally {
      setIsCalendarLoading(false);
    }
  };


  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "USD", // Aap USD bhi rakh sakte hain
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // local date formatter
  const formatLocalDate = (dateInput) => {
    if (!dateInput) return "";

    const d = new Date(dateInput);

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const getPriceForDate = useCallback(
    (dateString) => {
      if (!flightsData || flightsData.length === 0) return null;

      const prices = flightsData
        .filter((f) => {
          const flightDate = formatLocalDate(f.slices?.[0]?.departure_time);
          return flightDate === dateString;
        })
        .map((f) => Number(f.total_amount));

      if (prices.length === 0) return null;
      return Math.min(...prices)
    },
    [flightsData],
  );

  const getCalendarPrice = useCallback(
    (formattedDate) => {
      if (isCalendarLoading) return null
      const dayData = fareCalendar.find((item) => item.date === formattedDate);
      return dayData ? dayData.price : getPriceForDate(formattedDate);
    },
    [fareCalendar, isCalendarLoading, getPriceForDate],
  );

  // Search button click par ya initial load par call karein
  useEffect(() => {
    if (from && to && departure) {
      fetchFareCalendar();
    }
  }, [from, to, departure]);

  // --- ALL YOUR ORIGINAL HANDLERS ---
  const searchAirports = async (query, type) => {
    if (query.length < 2) {
      type === "from" ? setFromSuggestions([]) : setToSuggestions([]);
      return;
    }
    try {
      const res = await axios.get(
        `${API_BASE}/api/flights/airports?query=${query}`,
      );
      if (type === "from") setFromSuggestions(res.data);
      else setToSuggestions(res.data);
    } catch (error) {
      console.log("Airport search error", error);
    }
  };

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    if (!from || !to) return alert("Please select both origin and destination");
    setLoading(true);
    const searchData = {
      from,
      to,
      date: formatDate(departure),
      adults: travellers.adults,
      children: travellers.children,
      infants: travellers.infants,
      cabin_class: formatCabinClass(travellers.cabin),
      return_date: tripType === "round" ? formatDate(returnDate) : null,
    };
    try {
      const response = await axios.post(
        `${API_BASE}/api/flights/search`,
        searchData,
      );
      console.log(response.data);

      navigate("/flight", {
        state: {
          flights: response.data.flights || [],
          searchQuery: searchData,
        },
      });
    } catch (error) {
      alert(
        "Error: " + (error.response?.data?.details || "Server not responding"),
      );
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateInput) => {
    if (!dateInput) return "";

    const d = new Date(dateInput);

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
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

  useEffect(() => {
    setCurrentPage(1);
  }, [maxPrice, selectedStops, selectedAirlines, selectedTimes, sortBy]);
  useEffect(() => {
    const timer = setTimeout(() => setMaxPrice(displayPrice), 150);
    return () => clearTimeout(timer);
  }, [displayPrice]);

  const toggleFilter = useCallback((setList, value) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value],
    );
  }, []);

  const availableAirlines = useMemo(
    () => [...new Set(flightsData.map((f) => f.airline_name))].filter(Boolean),
    [flightsData],
  );

  const pricesByDate = useMemo(() => {
    const map = {};

    flightsData.forEach((flight) => {
      const departureTime = flight?.slices?.[0]?.departure_time;

      if (!departureTime) return;


      const localDate = formatLocalDate(new Date(departureTime));

      const price = Number(flight.total_amount);

      if (!map[localDate]) {
        map[localDate] = price;
      } else {
        map[localDate] = Math.min(map[localDate], price);
      }
    });

    return map;
  }, [flightsData]);

  const nearbyDates = useMemo(() => {
    const dates = [];

    for (let i = -3; i <= 3; i++) {
      const d = new Date(departure);
      d.setDate(d.getDate() + i);

      dates.push({
        date: new Date(d),
        formatted: formatLocalDate(d),
      });
    }

    return dates;
  }, [departure]);

  const getPriceForSpecificFlight = (date, airlineName) => {
    const price = flightsData.find(
      (f) =>
        formatLocalDate(f.slices?.[0]?.departure_time) === date &&
        f.airline_name === airlineName,
    );
    return price ? price.total_amount : null;
  };

  //  DYNAMIC DATES
  const dynamicDates = useMemo(() => {
    const dates = [];

    for (let i = dateOffset; i < dateOffset + 7; i++) {
      const d = new Date(departure);

      d.setDate(d.getDate() + i);

      dates.push({
        formatted: formatLocalDate(d),
        display: d.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
        }),
      });
    }
    return dates;
  }, [departure, dateOffset]);

  // --- ORIGINAL FILTER LOGIC ---
  const filteredFlights = useMemo(() => {
    // console.log("Total flights from API:", flightsData.length);
    return flightsData
      .filter((flight) => {
        const price = Number(flight.total_amount);
        if (price > maxPrice) return false;
        const slice = flight.slices?.[0] || {};
        const stopLabel =
          slice.stops === 0 ? "Non-stop" : `${slice.stops} Stop`;
        if (selectedStops.length > 0 && !selectedStops.includes(stopLabel))
          return false;
        if (
          selectedAirlines.length > 0 &&
          !selectedAirlines.includes(flight.airline_name)
        )
          return false;
        if (selectedTimes.length > 0) {
          const hour = new Date(slice.departure_time).getHours();
          let slot = "Night";
          if (hour >= 6 && hour < 12) slot = "6AM-12PM";
          else if (hour >= 12 && hour < 18) slot = "12PM-6PM";
          else if (hour >= 18) slot = "After 6PM";
          else if (hour < 6) slot = "Before 6AM";
          if (!selectedTimes.includes(slot)) return false;
        }
        return true;
      })
      .sort((a, b) =>
        sortBy === "cheapest"
          ? (Number(a.total_amount) || 0) - (Number(b.total_amount) || 0)
          : 0,
      );
  }, [
    maxPrice,
    selectedStops,
    selectedAirlines,
    selectedTimes,
    sortBy,
    flightsData,
  ]);

  const currentFlights = filteredFlights.slice(
    (currentPage - 1) * flightsPerPage,
    currentPage * flightsPerPage,
  );
  const totalPages = Math.ceil(filteredFlights.length / flightsPerPage);
  const absoluteMinPrice = useMemo(
    () =>
      flightsData.length === 0
        ? 5000
        : Math.min(...flightsData.map((f) => Number(f.total_amount))),
    [flightsData],
  );

  const getMinPriceForStop = (stopLabel) => {
    const filtered = flightsData.filter((f) => {
      const stops = f.slices?.[0]?.stops;
      const label = stops === 0 ? "Non-stop" : `${stops} Stop`;
      return label === stopLabel;
    });
    if (filtered.length === 0) return "N/A";
    const min = Math.min(...filtered.map((f) => Number(f.total_amount)));
    return `$ ${Math.floor(min).toLocaleString()}`;
  };

  const FilterContent = () => (
    <div className="space-y-2">
      <FilterSection title="Popular Filters">
        <div className="space-y-2">
          {["Non-stop", "1 Stop", "2 Stop"].map((stop) => (
            <label
              key={stop}
              className="flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedStops.includes(stop)}
                  onChange={() => toggleFilter(setSelectedStops, stop)}
                  className="w-4 h-4 accent-blue-500"
                />
                <span className="text-sm text-gray-600">{stop}</span>
              </div>
              <span className="text-[10px] text-gray-400">
                {getMinPriceForStop(stop)}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="One Way Price">
        <input
          type="range"
          min="100"
          max="5000"
          step="50"
          value={displayPrice}
          onChange={(e) => setDisplayPrice(Number(e.target.value))}
          className="w-full accent-blue-600 h-1"
        />
        <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-500">
          <span>$ {Math.floor(absoluteMinPrice).toLocaleString()}</span>
          <span>$ {displayPrice.toLocaleString()}</span>
        </div>
      </FilterSection>

      <FilterSection title="Departure Time">
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Before 6AM", icon: <Sunrise size={14} /> },
            { label: "6AM-12PM", icon: <Sun size={14} /> },
            { label: "12PM-6PM", icon: <Sunset size={14} /> },
            { label: "After 6PM", icon: <Moon size={14} /> },
          ].map((t) => (
            <button
              key={t.label}
              onClick={() => toggleFilter(setSelectedTimes, t.label)}
              className={`p-2 border rounded flex flex-col items-center gap-1 transition-all ${selectedTimes.includes(t.label) ? "border-blue-500 bg-blue-50 text-blue-600" : "border-gray-200 text-gray-500"}`}
            >
              {t.icon} <span className="text-[9px] font-medium">{t.label}</span>
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Airlines">
        <div className="max-h-48 overflow-y-auto space-y-2 custom-scrollbar">
          {availableAirlines.map((airline) => (
            <label
              key={airline}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedAirlines.includes(airline)}
                onChange={() => toggleFilter(setSelectedAirlines, airline)}
                className="w-4 h-4 accent-blue-500"
              />
              <span className="text-sm text-gray-600">{airline}</span>
            </label>
          ))}
        </div>
      </FilterSection>
    </div>
  );

  return (
    <div className="bg-[#f2f2f2] min-h-screen font-sans mt-20 px-2 md:px-0">

      <div className="flex bg-gray-200/50 p-1 rounded-xl w-fit mb-6 mx-auto md:mx-0">
        {["oneway", "round"].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => {
              setTripType(type);
              if (type === "round" && !returnDate) setReturnDate(new Date());
            }}
            className={`px-6 md:px-10 py-2 rounded-lg text-xs md:text-sm font-black transition-all ${tripType === type ? "bg-white text-red-600 shadow-sm" : "text-gray-400"}`}
          >
            {type === "oneway" ? "One Way" : "Round Trip"}
          </button>
        ))}
      </div>


      <div className="sticky top-0 z-40 bg-[#f2f2f2] py-2">
        <div className="max-w-[1220px] mx-auto bg-white rounded-2xl md:rounded-[3rem] p-2 md:p-0 shadow-xl border border-gray-100 overflow-visible">
          <form
            onSubmit={handleSearch}
            className="grid grid-cols-2 md:flex items-center relative"
          >
            {/* FROM */}
            <div className="col-span-1 md:flex-1 p-3 md:p-6 border-r border-b md:border-b-0 relative group rounded-tl-2xl md:rounded-l-[3rem]">
              <label className="flex items-center gap-2 text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1">
                <PlaneTakeoff size={14} className="text-red-600" /> From
              </label>
              <input
                type="text"
                placeholder="Origin"
                className="w-full text-sm md:text-xl font-black focus:outline-none bg-transparent"
                value={from}
                onChange={(e) => {
                  setFrom(e.target.value);
                  searchAirports(e.target.value, "from");
                }}
              />
              <AnimatePresence>
                {fromSuggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-[100%] right-0 w-full md:w-[120%] bg-white shadow-2xl z-[100] rounded-2xl border border-gray-100 overflow-hidden"
                  >
                    {fromSuggestions.map((ap) => (
                      // <div key={ap.iata_code} onClick={() => { setFrom(`${ap.city_name} (${ap.iata_code})`); setFromSuggestions([]); }} className="p-3 hover:bg-red-50 cursor-pointer flex items-center gap-3">
                      <div
                        key={ap.iata_code}
                        onClick={() => {
                          setFrom(`${ap.iata_code}`);
                          setFromSuggestions([]);
                        }}
                        className="p-3 hover:bg-red-50 cursor-pointer flex items-center gap-3"
                      >
                        <MapPin size={16} className="text-gray-400" />
                        <div className="font-bold text-xs md:text-sm">
                          {ap.city_name}{" "}
                          <span className="text-red-600">{ap.iata_code}</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                type="button"
                onClick={handleSwap}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 bg-white p-1.5 md:p-2 rounded-full shadow-md text-red-600 border border-gray-100 hidden md:block"
              >
                <ArrowLeftRight size={16} />
              </button>
            </div>

            {/* TO */}
            <div className="col-span-1 md:flex-1 p-3 md:p-6 border-b md:border-b-0 border-r-0 md:border-r relative group">
              <label className="flex items-center gap-2 text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1">
                <PlaneLanding size={14} className="text-red-600" /> To
              </label>
              <input
                type="text"
                placeholder="Destination"
                className="w-full text-sm md:text-xl font-black focus:outline-none bg-transparent"
                value={to}
                onChange={(e) => {
                  setTo(e.target.value);
                  searchAirports(e.target.value, "to");
                }}
              />
              <AnimatePresence>
                {toSuggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-[100%] right-0 w-[200%] md:w-[120%] bg-white shadow-2xl z-[100] rounded-2xl border border-gray-100 overflow-hidden"
                  >
                    {toSuggestions.map((ap) => (
                      // <div key={ap.iata_code} onClick={() => { setTo(`${ap.city_name} (${ap.iata_code})`); setToSuggestions([]); }} className="p-3 hover:bg-red-50 cursor-pointer flex items-center gap-3">
                      <div
                        key={ap.iata_code}
                        onClick={() => {
                          setTo(`${ap.iata_code}`);
                          setToSuggestions([]);
                        }}
                        className="p-3 hover:bg-red-50 cursor-pointer flex items-center gap-3"
                      >
                        <MapPin size={16} className="text-gray-400" />
                        <div className="font-bold text-xs md:text-sm">
                          {ap.city_name}{" "}
                          <span className="text-red-600">{ap.iata_code}</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* DEPARTURE */}
            <div
              ref={depRef}
              onClick={() => setShowDepCal(!showDepCal)}
              className="col-span-1 md:flex-1 p-3 md:p-6 border-r cursor-pointer hover:bg-gray-50 relative"
            >
              <label className="text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1 flex gap-1">
                <CalendarIcon size={12} className="text-red-600" /> Dep.
              </label>
              <div className="text-xs md:text-xl font-black">
                {departure.toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                })}
              </div>
              {showDepCal && (
                <div
                  className="absolute top-[100%] left-0 z-[110] shadow-2xl bg-white rounded-xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Calendar
                    minDate={new Date()}
                    value={departure}
                    onChange={(val) => {
                      setDeparture(val);
                      setShowDepCal(false);
                    }}
                  />
                </div>
              )}
            </div>

       
            <div
              ref={retRef}
              onClick={() => tripType === "round" && setShowRetCal(!showRetCal)}
              className={`col-span-1 md:flex-1 p-3 md:p-6 md:border-r relative ${tripType === "oneway" ? "bg-gray-50/50 cursor-not-allowed" : "cursor-pointer hover:bg-gray-50"}`}
            >
              <label className="text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1">
                Return
              </label>
              <div className="text-xs md:text-xl font-black">
                {tripType === "round" && returnDate
                  ? returnDate.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                  })
                  : "— —"}
              </div>
              {showRetCal && (
                <div
                  className="absolute top-[100%] right-0 md:left-0 z-[110] shadow-2xl bg-white rounded-xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Calendar
                    minDate={departure}
                    value={returnDate}
                    onChange={(val) => {
                      setReturnDate(val);
                      setShowRetCal(false);
                    }}
                  />
                </div>
              )}
            </div>

       
            <div
              ref={travRef}
              onClick={() => setShowTravellers(!showTravellers)}
              className="col-span-2 md:flex-1 p-3 md:p-6 cursor-pointer hover:bg-gray-50 relative md:rounded-r-[3rem]"
            >
              <label className="text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1 flex gap-1">
                <Users size={12} className="text-red-600" /> Travellers
              </label>
              <div className="text-xs md:text-lg font-black">
                {travellers.adults + travellers.children} Pax,{" "}
                {travellers.cabin}
              </div>
              <AnimatePresence>
                {showTravellers && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute top-[105%] right-0 z-[120] bg-white shadow-2xl p-4 md:p-6 w-72 md:w-80 rounded-2xl border border-gray-100"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-black text-sm">Travellers</h4>
                      <X
                        size={18}
                        className="text-gray-300 cursor-pointer"
                        onClick={() => setShowTravellers(false)}
                      />
                    </div>
                    {["adults", "children", "infants"].map((type) => (
                      <div
                        key={type}
                        className="flex justify-between items-center mb-4"
                      >
                        <div>
                          <div className="font-black text-xs md:text-sm capitalize">
                            {type}
                          </div>

                          <div className="text-[8px] text-gray-400 font-bold uppercase">
                            {type === "adults" ? "12+ Yrs" : "0-12 Yrs"}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => handleTravellerChange(type, "dec")}
                            className="w-6 h-6 flex items-center justify-center border rounded font-black"
                          >
                            -
                          </button>

                          <span className="font-black text-xs">
                            {travellers[type]}
                          </span>

                          <button
                            type="button"
                            onClick={() => handleTravellerChange(type, "inc")}
                            className="w-6 h-6 flex items-center justify-center border rounded font-black"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}

                    {/* YAHI PASTE KARNA HAI */}
                    <div className="mt-4">
                      <p className="font-bold text-sm mb-2">Cabin Class</p>

                      <select
                        value={travellers.cabin}
                        onChange={(e) =>
                          setTravellers({
                            ...travellers,
                            cabin: e.target.value,
                          })
                        }
                        className="w-full border rounded-lg p-2"
                      >
                        <option>Economy</option>
                        <option>Premium Economy</option>
                        <option>Business</option>
                        <option>First</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SEARCH BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="col-span-2 md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-[-35px] bg-red-600 text-white font-black py-3 md:py-4 px-10 md:px-20 rounded-xl md:rounded-2xl shadow-xl hover:bg-red-700 transition-all flex items-center justify-center gap-3"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Search size={20} />
              )}
              <span className="text-xs md:text-base uppercase tracking-widest">
                {loading ? "Searching..." : "Search"}
              </span>
            </button>
          </form>
        </div>
      </div>

      
      <div className="max-w-[1250px] mx-auto py-10 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Sidebar Filters */}
        <aside
          className={`${isFilterOpen ? "fixed inset-0 z-[150] bg-white p-6 overflow-y-auto" : "hidden md:block"} md:col-span-3`}
        >
          <div className="flex justify-between items-center md:hidden mb-4">
            <h3 className="font-black text-lg">Filters</h3>
            <button onClick={() => setIsFilterOpen(false)}>
              <X />
            </button>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200 sticky top-32">
            <FilterContent />
          </div>
        </aside>

        {/* Flight Results */}
        <main className="md:col-span-9 space-y-4">
          <div className="md:hidden flex justify-between items-center bg-white p-3 rounded-xl border">
            <span className="text-xs font-bold">
              {filteredFlights.length} Flights Found
            </span>
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-blue-600 font-bold text-xs"
            >
              <Filter size={14} /> Filters
            </button>
          </div>

          <div className="space-y-3">
            {currentFlights.map((flight, idx) => (
              <FlightCard
                key={`${flight.id || idx}-${flight.total_amount}`}
                flight={flight}
                pricesByDate={pricesByDate}
                dynamicDates={dynamicDates}
                setDateOffset={setDateOffset}
                dateOffset={dateOffset}
                formatLocalDate={formatLocalDate}
                getPriceForDate={getPriceForDate}
                formatCurrency={formatCurrency}
                getCalendarPrice={getCalendarPrice}
                isCalendarLoading={isCalendarLoading}
                cabinPrices={flight.cabin_prices || []}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8 pb-10">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="p-2 bg-white rounded-full border shadow-sm disabled:opacity-30"
              >
                <ChevronLeft />
              </button>
              <span className="font-bold text-gray-600 text-xs">
                Page {currentPage} / {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="p-2 bg-white rounded-full border shadow-sm disabled:opacity-30"
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </main>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `.no-scrollbar::-webkit-scrollbar { display: none; } .custom-scrollbar::-webkit-scrollbar { width: 4px; } .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }`,
        }}
      />
    </div>
  );
}

const FlightCard = React.memo(
  ({
    flight,
    // pricesByDate,
    dynamicDates,
    setDateOffset,
    // dateOffset,
    formatLocalDate,
    // getPriceForDate,
    formatCurrency,
    // getCalendarPrice,
    // isCalendarLoading,
    cabinPrices,
  }) => {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 md:p-5 hover:shadow-md transition-all">
        {flight.slices?.map((slice, index) => (
          <div
            key={`${slice.origin_code}-${slice.destination_code}-${slice.departure_time}-${index}`}
            className={`flex flex-col md:flex-row md:items-center gap-4 ${index > 0 ? "mt-4 pt-4 border-t border-dashed" : ""}`}
          >
            <div className="flex flex-col w-full min-w-0">
              {/* Left Part */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full">
                <div className="flex items-center gap-3 w-full lg:w-[180px] flex-shrink-0">
                  <img
                    src={flight.airline_logo}
                    className="w-8 h-8 object-contain"
                    alt="logo"
                  />
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-blue-500 uppercase">
                      {index === 0 ? "Departure" : "Return"}
                    </p>
                    <p className="font-bold text-sm text-gray-800">
                      {flight.airline_name}
                    </p>
                  </div>
                </div>

                {/* Center */}
                <div className="flex flex-1 justify-between items-center gap-3 px-1 md:px-6 min-w-0">
                  <div className="text-left">
                    <p className="text-lg md:text-xl font-black">
                      {new Date(slice.departure_time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })}
                    </p>
                    <p className="text-[10px] font-bold text-gray-400">
                      {slice.origin_code}
                    </p>
                  </div>
                  <div className="flex-1 px-4 text-center relative">
                    <div className="h-[2px] bg-gray-100 w-full mb-1"></div>
                    <p className="text-[8px] text-emerald-600 font-bold uppercase">
                      {slice.stops === 0 ? "Non-stop" : `${slice.stops} Stop`}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="text-right">
                    <p className="text-lg md:text-xl font-black">
                      {new Date(slice.arrival_time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })}
                    </p>
                    <p className="text-[10px] font-bold text-gray-400">
                      {slice.destination_code}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 w-full overflow-hidden">
                {/* PREV */}
                <button
                  onClick={() => setDateOffset((prev) => Math.max(prev - 7, 0))}
                  className="flex-shrink-0 border rounded-full p-2 bg-white shadow"
                >
                  <ChevronLeft size={16} />
                </button>

                {/* DATES */}
                {/* FlightCard ke andar ka Date Slider section */}
                {/* FlightCard ke andar ka slider part */}
                <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
                  {dynamicDates.map((d) => {
                    const isSelected =
                      d.formatted ===
                      formatLocalDate(flight.slices[0].departure_time);

                    const price = isSelected
                      ? Number(flight.total_amount)
                      : null;

                    return (
                      <div
                        key={d.formatted}
                        className={`flex-shrink-0 min-w-[100px] p-2 rounded-lg border text-center transition-all 
                        ${isSelected
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 bg-white"
                          }`}
                      >
                        <p className="text-[10px] font-bold text-gray-500 uppercase">
                          {d.display}
                        </p>

                        <p
                          className={`text-sm font-bold ${price ? "text-blue-700" : "text-gray-300"
                            }`}
                        >
                          {price ? formatCurrency(price) : "N/A"}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* NEXT */}
                <button
                  onClick={() => setDateOffset((prev) => prev + 7)}
                  className="flex-shrink-0 border rounded-full p-2 bg-white shadow"
                >
                  <ChevronRight size={16} />
                </button>
                {/* CABIN PRICES */}
              </div>
              <div className="flex gap-2 overflow-x-auto py-2 mt-2 no-scrollbar">
                {cabinPrices.map((cabin, index) => (
                  <div
                    key={`${cabin.cabin_class}-${index}`}
                    className="min-w-[110px] bg-gray-50 border rounded-lg px-3 py-2 text-center"
                  >
                    <p className="text-[10px] font-bold text-gray-500 uppercase">
                      {cabin.cabin_class.replace("_", " ")}
                    </p>

                    <p className="text-sm font-black text-blue-600">
                      {cabin.price
                        ? `$${Number(cabin.price).toLocaleString()}`
                        : "N/A"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Price */}
            {index === 0 && (
              <div className="flex flex-row md:flex-col justify-between items-center md:items-center w-full md:w-[220px] md:border-l md:pl-6 pt-4 md:pt-0 border-t md:border-t-0 gap-4">
                <div className="text-right">
                  <p className="text-xl md:text-2xl font-black text-gray-900">
                    $ {Number(flight.total_amount).toLocaleString()}
                  </p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">
                    Total Fare
                  </p>
                </div>
                <button className="bg-blue-600 text-white text-[10px] font-black py-2 px-6 rounded-full uppercase shadow-md transition-transform active:scale-95">
                  Book
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  },
);

export default Flights;
