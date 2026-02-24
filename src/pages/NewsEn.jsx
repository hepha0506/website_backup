import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsEn = () => {
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Fake News Data
    const newsData = [
        {
            id: 1,
            title: "Heungje International Achieves the ISO 14001 Environmental Certification",
            date: "2026-02-15",
            type: "Notice",
            isNew: true
        },
        {
            id: 2,
            title: "Participating in the 2026 International Safety & Health Exhibition (A+A)",
            date: "2026-01-28",
            type: "Press",
            isNew: true
        },
        {
            id: 3,
            title: "Launch of the New Eco-Friendly Coreless Glove Series",
            date: "2025-11-10",
            type: "Product",
            isNew: false
        },
        {
            id: 4,
            title: "Notice Regarding the Upcoming National Holiday Office Closure",
            date: "2025-09-20",
            type: "Notice",
            isNew: false
        },
        {
            id: 5,
            title: "Heungje International Selected as a Top Export Enterprise by Ministry of Trade",
            date: "2025-07-05",
            type: "Press",
            isNew: false
        },
        {
            id: 6,
            title: "Renewal of our Official Global Corporate Website",
            date: "2025-05-12",
            type: "Notice",
            isNew: false
        },
        {
            id: 7,
            title: "Completion of the New Manufacturing Facility Expansion in Vietnam",
            date: "2025-03-01",
            type: "Press",
            isNew: false
        },
        {
            id: 8,
            title: "PROSAL Premium Lineup Exceeds 10 Million Units in Cumulative Sales",
            date: "2024-12-15",
            type: "Product",
            isNew: false
        }
    ];

    const totalPages = Math.ceil(newsData.length / itemsPerPage);
    const currentItems = newsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Helper function for tag color
    const getTagColor = (type) => {
        switch (type) {
            case 'Notice': return 'bg-gray-800 text-white';
            case 'Press': return 'bg-blue-600 text-white';
            case 'Product': return 'bg-[#50B849] text-white';
            default: return 'bg-gray-200 text-gray-700';
        }
    };

    return (
        <main className="min-h-screen bg-white pt-20">
            {/* Header Section */}
            <section className="relative h-[30vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[#231F20]">
                    {/* Minimal dark background pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                </div>
                <div className="relative z-20 text-center px-6">
                    <span className="text-[#50B849] font-bold tracking-widest mb-3 block uppercase text-sm">Media Center</span>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">News & Notices</h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto drop-shadow-md font-light leading-relaxed">
                        Stay updated with the latest announcements, press releases, and product news from Heungje International.
                    </p>
                </div>
            </section>

            {/* Board Section */}
            <section className="py-20 md:py-24 max-w-[1200px] mx-auto px-6">

                {/* Search / Filter Bar (Visual Only for now) */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <div className="text-gray-500 font-medium">
                        Total <span className="text-[#50B849] font-bold">{newsData.length}</span> articles
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <select className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:border-[#50B849] bg-white">
                            <option>All Types</option>
                            <option>Notice</option>
                            <option>Press</option>
                            <option>Product</option>
                        </select>
                        <div className="relative flex-grow sm:flex-grow-0">
                            <input
                                type="text"
                                placeholder="Search keyword..."
                                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-[#50B849]"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#50B849]">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* News List */}
                <div className="border-t-[3px] border-[#231F20]">
                    {currentItems.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            key={item.id}
                            className="group flex flex-col md:flex-row md:items-center py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer px-4 relative overflow-hidden"
                        >
                            {/* Hover accent line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#50B849] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex items-center gap-4 md:w-48 flex-shrink-0 mb-3 md:mb-0">
                                <span className={`px-3 py-1 text-xs font-bold uppercase rounded-sm tracking-wider ${getTagColor(item.type)}`}>
                                    {item.type}
                                </span>
                                {item.isNew && (
                                    <span className="text-red-500 font-black text-xs animate-pulse">NEW</span>
                                )}
                            </div>

                            <div className="flex-grow pr-8">
                                <h3 className="text-lg md:text-xl font-medium text-[#231F20] group-hover:text-[#50B849] transition-colors leading-snug line-clamp-2 md:line-clamp-1">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="flex items-center text-gray-400 text-sm font-medium mt-3 md:mt-0 flex-shrink-0 gap-2">
                                <Calendar className="w-4 h-4" />
                                {item.date}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-16 flex justify-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${currentPage === page
                                    ? 'bg-[#50B849] text-white shadow-md'
                                    : 'text-gray-500 hover:bg-gray-100'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default NewsEn;
