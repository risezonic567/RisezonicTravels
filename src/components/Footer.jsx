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
        {name:"Car",path:"/car"},
        {name:"Hotel",path:"/hotels"},
        { name: "Blog", path:"/blog"},

        ]
    },
    {
      title: "Our Company",
      links: [
        {name:"About Voyage",path:""}
        , 
        {name:"Our Partners",path:""}
        , 
        {name:"Careers",path:""}
        , 
        {name:"Newsroom",path:""}
        ,
        {name: "Advertising",path:""}
      ]
    },
    {
      title: "Support",
      links: [
        {name:"Refund Policy",path:"refund-policy"}
        , 
        {name:"Privacy Policy",path:"/privacy-policy"}
        ,
        {name: "Terms and Condition",path:"/terms-condition"}
        ,
        {name: "Cancellation Policy",path:"/cancellation-policy"}
        , 
      {name:"Contact: +18888434146, +91 81788 57250, +91 85888 09690",path:"/contact-us"}
      ]
    }
  ];

  return (
    <footer className="w-full mt-5 bg-[#0a0a0a] text-white pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2 space-y-6">
           <Link to="/">
            <div className=" mb-3">
                <img src="/images/Logo/risezoniclogo.png" alt="risezoniclogo" className=' h-[80px]'/>
              </div>
           </Link>
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
              Explore the world with premium travel experiences. Your journey begins where luxury meets adventure.
            </p>
            <div className="pt-4">
              <button className="border-2 border-red-600 text-red-600 px-8 py-3 font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300">
                Contact Agent
              </button>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link to={link.path} className="footer-link text-sm font-medium uppercase tracking-wider">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="red-gradient-border pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-300 text-[10px] uppercase tracking-[0.2em]">
            © 2026 VOYAGE TRAVELS GLOBAL. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex gap-8">
            <Link to="/" className="text-xs font-bold hover:text-red-600 transition-colors uppercase tracking-widest">Instagram</Link>
            <Link to="/" className="text-xs font-bold hover:text-red-600 transition-colors uppercase tracking-widest">Twitter</Link>
            <Link to="/" className="text-xs font-bold hover:text-red-600 transition-colors uppercase tracking-widest">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
