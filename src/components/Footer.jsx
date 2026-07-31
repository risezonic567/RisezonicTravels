import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        {name:"Home",path:"/"}, 
        {name:"About US",path:"/about-us"},
        {name:"Book Flight",path:"/flights"},
        {name:"Corporate Travels",path:"/corporate-travel"},
        {name:"Packages",path:"/package"},
        {name:"Hotels",path:"/hotels"},
        {name:"Car",path:"/car"},
      ]
    },
    {
      title: "Our Company",
      links: [
        {name:"Refund Policy",path:"/refund-policy"}, 
        {name:"Privacy Policy",path:"/privacy-policy"},
        {name: "Terms and Condition",path:"/terms-condition"},
        {name: "Cancellation Policy",path:"/cancellation-policy"},
        {name: "Blog", path:"/blog"},
        {name: "Contact", path:"/contact-us"},
      ]
    },
    {
      title: "Support",
      links: [ 
        {name:"Contact: +91 81788 57250, +91 85888 09690",path:"/contact-us"},
        {name:"Delhi Office: RZ11/D, Upper Ground Floor Opp. Palam Metro Station Gate No 3, Palam Dwarka Road, Delhi, 110045"},
        {name:"Gurgaon Office : 07th Floor, Gate No 3 & 4, Ambience Island, DLF Phase 3, NH-8, Gurugram, Haryana 122002"},
        {name:"Email : info@risezonic.com "}
      ]
    }
  ];

  return (
    <footer className="w-full mt-5 bg-[#0a0a0a] text-white pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Left Column: Logo, Text, Social Media Icons */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/">
              <div className="mb-3">
                <img src="/images/Logo/risezoniclogo.png" alt="risezoniclogo" className='h-[80px] object-contain' />
              </div>
            </Link>
            
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
              Explore the world with premium travel experiences. Your journey begins where luxury meets adventure.
            </p>

            {/* --- LOGO KE NEECHE WALE SOCIAL ICONS --- */}
            <div className="flex items-center gap-3.5 pt-2 z-10 relative">
              {/* Instagram */}
              <a href="https://www.instagram.com/risezonictravel/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#141414] border border-gray-800 rounded-lg text-white hover:text-red-500 hover:border-red-600 transition-all duration-300" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/risezonictravel" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#141414] border border-gray-800 rounded-lg text-white hover:text-red-500 hover:border-red-600 transition-all duration-300" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/risezonic-travel/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#141414] border border-gray-800 rounded-lg text-white hover:text-red-500 hover:border-red-600 transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Pinterest */}
              <a href="https://in.pinterest.com/risezonic_Travel/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#141414] border border-gray-800 rounded-lg text-white hover:text-red-500 hover:border-red-600 transition-all duration-300" aria-label="Pinterest">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.948-.199-2.411.041-3.439.219-.937 1.395-5.92 1.395-5.92s-.356-.715-.356-1.777c0-1.664.962-2.908 2.165-2.908 1.021 0 1.517.767 1.517 1.686 0 1.027-.656 2.562-.991 3.981-.283 1.195.594 2.168 1.775 2.168 2.13 0 3.762-2.245 3.762-5.486 0-2.868-2.06-4.874-5.004-4.874-3.407 0-5.405 2.556-5.405 5.193 0 1.03.394 2.136.888 2.736.1.12.115.223.085.345-.094.393-.305 1.242-.347 1.412-.056.225-.185.273-.427.161-1.597-.743-2.597-3.076-2.597-4.947 0-4.025 2.922-7.72 8.424-7.72 4.422 0 7.859 3.152 7.859 7.363 0 4.396-2.772 7.933-6.621 7.933-1.292 0-2.507-.671-2.923-1.464 0 0-.64 2.433-.796 3.033-.29 1.113-1.064 2.506-1.587 3.354 1.128.349 2.32.537 3.559.537 6.62 0 11.988-5.368 11.988-11.988C24.01 5.367 18.637 0 12.017 0z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://www.youtube.com/@risezonictravel" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#141414] border border-gray-800 rounded-lg text-white hover:text-red-500 hover:border-red-600 transition-all duration-300" aria-label="YouTube">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            {/* ------------------------------------------------------------- */}

            <div className="pt-2">
              <Link to="/contact-us">
                <button className="border-2 border-red-600 text-red-600 px-8 py-3 font-bold tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Right Columns: Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-xs font-bold tracking-[0.3em] text-red-600 uppercase">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, index) => (
                  <li key={index}>
                    {link.path ? (
                      <Link to={link.path} className="text-sm font-medium tracking-wider text-gray-400 hover:text-white transition-colors duration-200">
                        {link.name}
                      </Link>
                    ) : (
                      <span className="text-sm font-medium tracking-wider text-gray-400 block leading-relaxed">
                        {link.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Bar */}
        <div className="red-gradient-border pt-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-900">
          <div className="text-gray-500 text-[10px] tracking-[0.2em]">
            © 2026 RisezonicTravel. ALL RIGHTS RESERVED.
          </div>
          
          {/* --- BOTTOM BAR LINKS UPDATED WITH YOUR NEW HANDLES --- */}
          <div className="flex gap-6 md:gap-8 flex-wrap justify-center">
            <a href="https://www.instagram.com/risezonictravel/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-400 hover:text-red-500 transition-colors tracking-widest">Instagram</a>
            <a href="https://www.facebook.com/risezonictravel" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-400 hover:text-red-500 transition-colors tracking-widest">Facebook</a>
            <a href="https://www.linkedin.com/company/risezonic-travel/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-400 hover:text-red-500 transition-colors tracking-widest">LinkedIn</a>
            <a href="https://in.pinterest.com/risezonic_Travel/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-400 hover:text-red-500 transition-colors tracking-widest">Pinterest</a>
            <a href="https://www.youtube.com/@risezonictravel" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-400 hover:text-red-500 transition-colors tracking-widest">YouTube</a>
          </div>
          {/* ------------------------------------------------------ */}
        </div>
      </div>
    </footer>
  );
}