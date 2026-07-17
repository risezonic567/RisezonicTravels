import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const location = useLocation()
  const isHomePage = location.pathname === "/";

  const menuItems = [
    { name: 'About', path: '/about-us' },
    { name: 'Book Flights', path: '/flights' },
    { name: 'Corporate Travels', path: '/corporate-travel' },
    {
      name: 'Packages',path:'/package'
      // submenu: [
      //   { name: 'Domestic Packages', path: '/packages/domestic' },
      //   { name: 'International Packages', path: '/packages/international' },
      //   { name: 'Honeymoon Packages', path: '/packages/honeymoon' },
      // ]
    },
    { name: 'Hotels', path: '/hotels' },
    { name: 'Car', path: '/car' },
  ]

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      setScrolled(rect.top <= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[150] transition-all duration-300  ${
      isHomePage
        ? scrolled
          ? "bg-black/70 backdrop-blur-3xl shadow-lg"
          : "bg-transparent"
        : "bg-black/40 backdrop-blur-4xl shadow-md"
    }`}>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">

          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <Link to="/">
                <img src="/images/Logo/risezoniclogo.png" alt="logo" className='h-[80px]'/>
              </Link>
              <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-200/40 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group flex items-center gap-1">

                {item.submenu ? (
                  <>
                    <span className="cursor-pointer text-[13px] font-bold text-white uppercase tracking-[0.2em] hover:text-red-600 flex items-center gap-1">
                      {item.name}
                      <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180"/>
                    </span>

                    <div className="absolute left-0 top-6 mt-4 w-56 bg-black/90 backdrop-blur-xl rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-5 py-3 text-sm text-white hover:bg-red-500 rounded-lg transition-all"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="text-[13px] font-bold text-white uppercase tracking-[0.2em] hover:text-red-600"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link to="/login">
            <button className="text-white font-semibold hover:text-red-600">
              Sign In
            </button>
            </Link>
            <button className="bg-black text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
              Plan My Trip
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col text-white gap-1.5 p-2"
          >
            <div className={`w-8 h-0.5 bg-gray-100 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-8 h-0.5 bg-gray-100 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-8 h-0.5 bg-gray-100 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 w-full bg-black/90 lg:hidden px-6 py-10"
          >
            <div className="flex flex-col space-y-6 text-center">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <p className="text-xl font-bold text-white">{item.name}</p>
                      <div className="mt-2 flex flex-col gap-2">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg text-gray-300"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl font-bold text-white"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}