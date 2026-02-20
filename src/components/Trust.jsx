import React from 'react';
import { ChevronRight } from 'lucide-react';

const certs = ["ISO 9001", "ISO 14001", "SMETA", "KORECA", "HEPHA", "PROSAL", "INNO-BIZ", "KOTRA"];

const notices = [
    { title: "2024년 신제품 라인업 출시 안내", date: "2024.03.15" },
    { title: "국제 안전 보건 전시회(KISS 2024) 참가", date: "2024.02.20" },
    { title: "본사 이전 안내", date: "2024.01.10" },
    { title: "고객센터 운영 시간 변경", date: "2023.12.05" },
];

const Trust = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="flex flex-col gap-16">

                    {/* Partners Grid */}
                    <div className="text-center">
                        <div className="mb-8">
                            <span className="block text-[#50B849] font-medium text-lg mb-2">Our Partners</span>
                            <h3 className="text-[39px] font-bold text-[#231F20]">함께 성장해 온 파트너</h3>
                            <p className="text-gray-500 mt-4 leading-relaxed">
                                다양한 산업 분야의 선도 기업들과 굳건한 신뢰를 바탕으로<br />
                                장기적이고 긴밀한 파트너십을 구축하고 있습니다.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {[1, 2, 3, 4, 1, 2, 3, 4].map((logoNum, i) => (
                                <div key={i} className="aspect-[2/1] md:aspect-[2/1] flex items-center justify-center bg-gray-50 border border-gray-100 rounded-lg hover:border-[#50B849] hover:bg-white transition-all duration-300 p-2 md:p-4">
                                    <img
                                        src={`/assets/partners/partner_logo_${logoNum}.png`}
                                        alt={`Partner ${i + 1}`}
                                        className="w-3/4 md:w-full max-h-[70%] md:max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Contact Us section - Full Width Background */}
            <div className="bg-[#F5F5F5] py-24 my-16">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="block text-[#50B849] font-medium text-lg mb-2">Contact Us</span>
                        <h3 className="text-[39px] font-bold text-[#231F20]">견적 및 제품 문의</h3>
                    </div>

                    <div className="bg-white rounded-2xl p-8 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-4xl mx-auto w-full">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                                    <input type="text" className="w-full px-5 py-4 bg-gray-50 rounded-lg border border-gray-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#50B849] focus:border-transparent transition-all" placeholder="이름을 입력해주세요" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">회사명</label>
                                    <input type="text" className="w-full px-5 py-4 bg-gray-50 rounded-lg border border-gray-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#50B849] focus:border-transparent transition-all" placeholder="회사명을 입력해주세요" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                                <input type="email" className="w-full px-5 py-4 bg-gray-50 rounded-lg border border-gray-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#50B849] focus:border-transparent transition-all" placeholder="example@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">내용</label>
                                <textarea rows="5" className="w-full px-5 py-4 bg-gray-50 rounded-lg border border-gray-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#50B849] focus:border-transparent transition-all resize-none" placeholder="문의하실 내용을 입력해주세요"></textarea>
                            </div>
                            <div className="text-center pt-6">
                                <button type="button" className="px-14 py-4 bg-[#50B849] text-white rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-md hover:shadow-lg w-full md:w-auto">
                                    문의하기
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
                            카탈로그 보러가기
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
                                더보기 <ChevronRight size={14} className="ml-1" />
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

export default Trust;
