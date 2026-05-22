import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "How do I book a cheap flight on your website?",
        answer: "Simply use our search bar or click on one of our 'Dream Destinations'. Once you find a flight that fits your budget, you can call our 24/7 support line to lock in the exclusive price and complete your booking."
    },
    {
        question: "Are there any hidden charges in the flight prices?",
        answer: "No, we believe in 100% transparency. The price we quote includes all taxes and fees. What you see is what you pay."
    },
    {
        question: "Can I cancel or modify my flight booking?",
        answer: "Yes, modifications and cancellations depend on the airline's policy. However, our dedicated team is available 24/7 to help you navigate the process and minimize any potential fees."
    },
    {
        question: "Do you offer discounts for group bookings?",
        answer: "Absolutely! For groups of 10 or more, we offer special negotiated rates that are lower than individual fares. Call us for a custom quote."
    },
    {
        question: "What documents do I need for international travel?",
        answer: "For international routes (like USA to Europe/Canada), you will need a valid passport. Depending on your citizenship, you might also need a visa or an eTA. We recommend checking the destination's entry requirements before booking."
    }
];

export default function FlightFAQ() {
    const [activeIdx, setActiveIdx] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIdx(activeIdx === index ? null : index);
    };

    return (
        <section className="mb-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full mb-4">
                        <HelpCircle size={28} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        Frequently
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-500">
                            Asked Questions
                        </span>

                        
                    </h2>
                    <p className="text-gray-500 font-semibold">
                        Got questions? We've got answers. Everything you need to know about your next flight.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`border rounded-2xl transition-all duration-300 ${activeIdx === i ? "border-red-500 shadow-md" : "border-slate-200"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(i)}
                                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                            >
                                <span className={`font-bold text-lg ${activeIdx === i ? "text-red-600" : "text-slate-800"}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`transition-transform duration-300 text-slate-400 ${activeIdx === i ? "rotate-180 text-red-600" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {activeIdx === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-5 pt-0 text-gray-500 font-semibold leading-relaxed border-t border-slate-100 mt-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* <div className="mt-12 p-8 bg-slate-50 rounded-3xl text-center border border-dashed border-slate-300">
          <p className="text-slate-600 font-medium">
            Still have questions? Our travel experts are just a call away.
          </p>
          <a 
            href="tel:+18448215950" 
            className="text-red-600 font-bold text-xl mt-2 inline-block hover:underline"
          >
            Call Us: 
          </a>
        </div> */}
            </div>
        </section>
    );
}