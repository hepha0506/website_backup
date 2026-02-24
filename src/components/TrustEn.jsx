import React from 'react';
import { ChevronRight } from 'lucide-react';

const certs = ["ISO 9001", "ISO 14001", "SMETA", "KORECA", "HEPHA", "PROSAL", "INNO-BIZ", "KOTRA"];

const notices = [
    { title: "2024 New Product Lineup Released", date: "2024.03.15" },
    { title: "Participation in Int'l Safety Exhibition (KISS 2024)", date: "2024.02.20" },
    { title: "Headquarters Relocation Notice", date: "2024.01.10" },
    { title: "Change in Customer Center Operating Hours", date: "2023.12.05" },
];

const TrustEn = () => {
    return (
        <section className="py-24 bg-white">

            {/* Contact Us section - Full Width Background */}
            <div className="bg-[#F5F5F5] py-24 my-16">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="block text-[#50B849] font-medium text-lg mb-2">Contact Us</span>
                        <h3 className="text-[39px] font-bold text-[#231F20]">Quote & Product Inquiry</h3>
                    </div>

                    <div className="bg-white rounded-2xl p-8 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-4xl mx-auto w-full">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-5 py-4 bg-gray-50 rounded-lg border border-gray-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#50B849] focus:border-transparent transition-all" placeholder="Enter your name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                    <input type="text" className="w-full px-5 py-4 bg-gray-50 rounded-lg border border-gray-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#50B849] focus:border-transparent transition-all" placeholder="Enter your company name" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input type="email" className="w-full px-5 py-4 bg-gray-50 rounded-lg border border-gray-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#50B849] focus:border-transparent transition-all" placeholder="example@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows="5" className="w-full px-5 py-4 bg-gray-50 rounded-lg border border-gray-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#50B849] focus:border-transparent transition-all resize-none" placeholder="Enter your inquiry details"></textarea>
                            </div>
                            <div className="text-center pt-6">
                                <button type="button" className="px-14 py-4 bg-[#50B849] text-white rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-md hover:shadow-lg w-full md:w-auto">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Catalog Banner */}
            <div className="relative w-full h-[400px] my-16 group cursor-pointer overflow-hidden">
                <img
                    src="/assets/banners/catalog_banner.png"
                    alt="Catalog Dashboard Background"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                    <div className="text-center flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
                            View Our Catalog
                        </h2>
                        <div className="flex items-center space-x-2 border-2 border-white text-white rounded-full px-8 py-3 font-medium group-hover:bg-[#50B849] group-hover:border-[#50B849] transition-all duration-300">
                            <span>Get Catalog</span>
                            <ChevronRight size={18} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 pb-24">
                <div className="flex flex-col gap-16">
                    {/* Notice List */}
                    <div>
                        <div className="flex flex-col items-center mb-8">
                            <h3 className="text-[31px] font-bold text-[#231F20] mb-2">Notice</h3>
                            <a href="#" className="text-sm text-gray-400 hover:text-[#50B849] flex items-center">
                                View All <ChevronRight size={14} className="ml-1" />
                            </a>
                        </div>
                        <div className="divide-y divide-gray-100 border-t border-gray-100 border-b">
                            {notices.map((notice, i) => (
                                <div key={i} className="py-5 flex flex-col items-center text-center group cursor-pointer space-y-1">
                                    <span className="text-gray-700 font-medium group-hover:text-[#50B849] transition-colors">{notice.title}</span>
                                    <span className="text-gray-400 text-sm font-light">{notice.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustEn;
