import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Award, Shield } from 'lucide-react';

const CertificationsEn = () => {
    const [activeTab, setActiveTab] = useState('all');

    // Sample data for Certifications and Patents
    const items = [
        {
            id: 1,
            type: 'certification',
            title: 'ISO 9001',
            desc: 'Quality Management System Certification',
            image: '/assets/business/iso_cert.png', // Reusing the placeholder image from BusinessPage
            icon: <Award className="w-6 h-6 text-blue-500" />
        },
        {
            id: 2,
            type: 'certification',
            title: 'ISO 14001',
            desc: 'Environmental Management System',
            image: '/assets/business/iso_cert.png',
            icon: <Shield className="w-6 h-6 text-green-500" />
        },
        {
            id: 3,
            type: 'certification',
            title: 'CE Certification',
            desc: 'European Conformity for Personal Protective Equipment',
            image: '/assets/business/iso_cert.png',
            icon: <CheckCircle className="w-6 h-6 text-indigo-500" />
        },
        {
            id: 4,
            type: 'certification',
            title: 'KCs Certification',
            desc: 'Korea Occupational Safety and Health Agency',
            image: '/assets/business/iso_cert.png',
            icon: <CheckCircle className="w-6 h-6 text-red-500" />
        },
        {
            id: 5,
            type: 'certification',
            title: 'SMETA',
            desc: 'Sedex Members Ethical Trade Audit',
            image: '/assets/business/iso_cert.png',
            icon: <Award className="w-6 h-6 text-purple-500" />
        },
        {
            id: 6,
            type: 'certification',
            title: 'OEKO-TEX',
            desc: 'Tested for Harmful Substances',
            image: '/assets/business/iso_cert.png',
            icon: <Shield className="w-6 h-6 text-teal-500" />
        },
        {
            id: 7,
            type: 'patent',
            title: 'Coreless Yarn Manufacturing Method',
            desc: 'Eco-friendly, fiberglass-free cut resistance technology',
            image: '/assets/business/patent_cert.png',
            icon: <Award className="w-6 h-6 text-[#50B849]" />
        },
        {
            id: 8,
            type: 'patent',
            title: 'Advanced Conductive Coating',
            desc: 'Touch-screen compatible Smart Touch surface treatment',
            image: '/assets/business/patent_cert.png',
            icon: <Award className="w-6 h-6 text-[#50B849]" />
        },
        {
            id: 9,
            type: 'patent',
            title: 'Anti-slip Micro Finish',
            desc: 'Enhanced grip technology for wet and oily environments',
            image: '/assets/business/patent_cert.png',
            icon: <Award className="w-6 h-6 text-[#50B849]" />
        }
    ];

    // Filter items based on active tab
    const filteredItems = items.filter(item => activeTab === 'all' || item.type === activeTab);

    return (
        <main className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* Using a sleek corporate background placeholder */}
                    <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
                        alt="Certifications Banner"
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply z-10"></div>
                </div>
                <div className="relative z-20 text-center px-6">
                    <span className="text-white/80 font-bold tracking-widest mb-3 block uppercase text-sm">Global Standards</span>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Certifications & Patents</h1>
                    <p className="text-lg text-gray-200 max-w-3xl mx-auto drop-shadow-md font-light leading-relaxed">
                        Our relentless pursuit of quality and innovation is validated by international certifications and proprietary patents. We guarantee the highest level of safety and reliability.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-20 md:py-32 max-w-[1400px] mx-auto px-6">

                {/* Tabs for Filtering */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'all' ? 'bg-[#231F20] text-white shadow-lg' : 'bg-white text-gray-500 hover:bg-gray-200 border border-gray-200'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setActiveTab('certification')}
                        className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'certification' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-500 hover:bg-gray-200 border border-gray-200'}`}
                    >
                        Global Certifications
                    </button>
                    <button
                        onClick={() => setActiveTab('patent')}
                        className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'patent' ? 'bg-[#50B849] text-white shadow-lg' : 'bg-white text-gray-500 hover:bg-gray-200 border border-gray-200'}`}
                    >
                        Patents & IP
                    </button>
                </div>

                {/* Grid Layout */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={item.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group border border-gray-100 flex flex-col"
                            >
                                {/* Image Container (Document visually) */}
                                <div className="bg-gray-100 p-8 flex justify-center items-center aspect-[4/3] relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-200/50 to-transparent"></div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full object-contain relative z-10 shadow-sm transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Type Badge */}
                                    <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${item.type === 'certification' ? 'bg-blue-600/90' : 'bg-[#50B849]/90'}`}>
                                        {item.type}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="p-8 flex-grow flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-[#231F20]">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-500 leading-relaxed text-sm pl-11">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Commitment Section */}
                <div className="mt-32 max-w-4xl mx-auto text-center border-t border-gray-200 pt-16">
                    <h2 className="text-3xl font-bold text-[#231F20] mb-6">Our Commitment to Excellence</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Heungje International rigorously adheres to international safety standards and ethical manufacturing practices. We continuously invest in Research & Development to secure structural patents that lead the safety glove industry.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default CertificationsEn;
