import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const stats = [
    { id: 1, label: 'Patents & IP', value: '45', suffix: '+' },
    { id: 3, label: 'Years Experience', value: '60', suffix: '+' },
];

const StatsEn = () => {
    const [showAllCerts, setShowAllCerts] = useState(false);
    const totalCerts = 12;
    const certsList = Array.from({ length: totalCerts }, (_, i) => i + 1);
    const visibleCerts = showAllCerts ? certsList : certsList.slice(0, 6);

    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="block text-[#50B849] font-medium text-lg mb-2">Our Technology</span>
                    <h3 className="text-[39px] lg:text-[47px] font-bold text-[#231F20] leading-tight flex flex-col items-center justify-center">
                        <span>Continuous R&D and</span>
                        <span>Accumulated Assets</span>
                    </h3>
                    <p className="text-gray-500 mt-4 leading-relaxed">
                        With our unique and unmatched technology secured through relentless research and development,<br />
                        we provide our customers with the most reliable industrial safety equipment.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 mb-24">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center py-12 md:py-6"
                        >
                            <div className="text-6xl lg:text-7xl font-bold text-[#231F20] mb-4 tracking-tight">
                                {stat.value}<span className="text-[#50B849]">{stat.suffix}</span>
                            </div>
                            <div className="text-gray-500 font-medium text-lg uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications and Patents (BusinessPage Design translated to English) */}
                <div className="mt-16 md:mt-24 max-w-[1600px] mx-auto text-center border-t border-gray-100 pt-24">
                    <div className="mb-16">
                        <span className="text-[#50B849] font-bold tracking-wider mb-2 block uppercase">Certifications & Patents</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#231F20]">Various Certificates & Patents</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            SafeGlove's innovative technology has been thoroughly verified through numerous patents and domestic/international certifications.
                        </p>
                    </div>

                    <motion.div layout className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
                        <AnimatePresence>
                            {visibleCerts.map((num) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    key={num}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white border text-center border-gray-200 rounded-lg p-3 md:p-4 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col items-center"
                                >
                                    <div className="aspect-[1/1.4] w-full bg-gray-50 flex items-center justify-center overflow-hidden mb-4 border border-gray-100 p-1">
                                        <img
                                            src={num % 2 !== 0 ? '/assets/business/patent_cert.png' : '/assets/business/iso_cert.png'}
                                            alt={num % 2 !== 0 ? `Patent ${num}` : `Certificate ${num}`}
                                            className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity shadow-sm"
                                        />
                                    </div>
                                    <p className="text-xs md:text-sm font-semibold text-gray-700 leading-tight">
                                        {num % 2 !== 0 ? `Safety Glove Core Patent 0${num}` : num === 4 || num === 2 ? `ISO 9001/14001` : `CE / KCs Certification`}
                                    </p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Show More Button */}
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={() => setShowAllCerts(!showAllCerts)}
                            className="flex flex-col items-center text-gray-500 hover:text-[#50B849] transition-colors duration-300 focus:outline-none group"
                        >
                            <span className="font-bold mb-2">{showAllCerts ? 'Close' : 'View More'}</span>
                            <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 group-hover:border-[#50B849] flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                                {showAllCerts ? (
                                    <ChevronUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 transition-transform group-hover:translate-y-1" />
                                )}
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default StatsEn;
