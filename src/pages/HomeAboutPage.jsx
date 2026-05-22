import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Trophy, Users, ShieldCheck, Globe } from "lucide-react";

export default function HomeAboutPage() {
    const stats = [
        { icon: <Users className="text-red-600" />, label: "Happy Clients", value: "50K+" },
        { icon: <Trophy className="text-red-600" />, label: "Awards Won", value: "12+" },
        { icon: <ShieldCheck className="text-red-600" />, label: "Safe Travels", value: "100%" },
        { icon: <Globe className="text-red-600" />, label: "Global", value: "120+" },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative  rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="/images/Travel Home About Us (580x500).jpg.jpeg"
                                alt="Travel Experience"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -right-10  hidden md:block w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
                        >
                            <img
                                src="/images/Travel Home About Us (250x240).jpg.jpeg"
                                alt="Vacation"
                                className="w-full h-full  object-cover"
                            />
                        </motion.div>

                        <div className="absolute -top-6 -left-6  bg-red-600 text-white p-8 rounded-2xl shadow-xl">
                            <p className="text-4xl font-black italic">10+</p>
                            <p className="text-sm font-bold uppercase tracking-widest">Years of<br />Experience</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-red-600 font-black tracking-[0.3em] uppercase mb-4">
                            Who We Are
                        </h4>
                        <h2 className="text-5xl font-black text-slate-900 leading-[1.1] mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-500">
                                Making Every Journey
                            </span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            Risezonic TRAVEL is more than just a booking portal. We are your dedicated travel partners,
                            committed to finding the best routes, the most comfortable stays, and the most
                            affordable prices for your dream destinations.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {[
                                "Best Price Guarantee",
                                "24/7 Premium Support",
                                "Verified Hotel Partners",
                                "Instant Booking & Easy Refunds"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-green-500" size={20} />
                                    <span className="font-bold text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-8 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <div className="flex items-center gap-2 mb-1">
                                        {stat.icon}
                                        <span className="text-2xl font-black text-slate-900">{stat.value}</span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}