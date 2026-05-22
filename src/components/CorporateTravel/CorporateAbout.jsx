import React from 'react';
import { ShieldCheck, Globe, Clock, Banknote } from 'lucide-react'; // Optional: Install lucide-react

export default function CorporateAbout() {
  const features = [
    {
      title: "Global Compliance",
      desc: "We ensure all travel arrangements adhere to your corporate policies and international safety standards.",
      icon: <ShieldCheck className="w-8 h-8 text-red-600" />
    },
    {
      title: "Cost Optimization",
      desc: "Leverage our exclusive partner rates and advanced booking analytics to reduce your annual travel spend.",
      icon: <Banknote className="w-8 h-8 text-red-600" />
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
              alt="Corporate Headquarters" 
              className="relative rounded-2xl shadow-2xl z-10 object-cover h-[500px] w-full"
            />
          </div>

          <div className="space-y-6">
            <span className="text-red-600 font-semibold tracking-widest uppercase text-sm">Premier Corporate Partner</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Redefining the Standard of <span className="text-red-600">Business Mobility.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Risezonic Travels, we don't just book trips; we manage experiences. We understand that in the corporate world, time is the ultimate currency. Our mission is to provide seamless, end-to-end travel management that empowers your team to focus on what matters most—your business.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From automated expense reporting to 24/7 emergency support, we integrate cutting-edge technology with personalized service to deliver value that goes beyond the boarding pass.
            </p>
            <div className="pt-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-red-600 transition-colors duration-300 shadow-lg">
                Partner With Us
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Organizations Trust Us</h3>
            <p className="text-gray-500">We provide the infrastructure for your global expansion.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                <div className="mb-6 inline-block p-4 bg-blue-50 rounded-2xl group-hover:bg-red-600/20 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}