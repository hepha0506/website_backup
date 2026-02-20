import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, MessageSquare, Megaphone, ChevronRight } from 'lucide-react';

const CustomerPage = () => {
    const [activeTab, setActiveTab] = useState('notice');

    const notices = [
        { id: 1, title: "2024년 3분기 신제품 라인업 및 카탈로그 출간 안내", date: "2024.03.15", views: 124 },
        { id: 2, title: "국제 안전 보건 전시회(KISS 2024) 참가 및 부스 안내", date: "2024.02.20", views: 342 },
        { id: 3, title: "본사 이전 및 대표 번호 변경 안내", date: "2024.01.10", views: 521 },
        { id: 4, title: "휴일(대체공휴일) 고객센터 및 배송 업무 휴무 안내", date: "2023.12.05", views: 231 },
        { id: 5, title: "세이프글러브 공식 온라인 B2B मॉल 오픈", date: "2023.11.11", views: 890 },
    ];

    const inquiries = [
        { id: 1, title: "대량 구매 시 할인율 문의드립니다.", date: "2024.03.20", status: "답변완료", author: "김*진" },
        { id: 2, title: "H-50 모델 내산성 테스트 성적서 요청", date: "2024.03.18", status: "처리중", author: "이*혁" },
        { id: 3, title: "특수 사이즈(XXL) 주문제작 가능한가요?", date: "2024.03.15", status: "답변완료", author: "박*수" },
        { id: 4, title: "대리점 개설 조건 문의", date: "2024.03.12", status: "답변완료", author: "최*영" },
        { id: 5, title: "해외 수출용 패키징 관련 문의", date: "2024.03.10", status: "답변완료", author: "정*훈" },
    ];

    return (
        <main className="min-h-screen bg-white pt-20">
            {/* Header Banner Section */}
            <section className="relative h-[30vh] md:h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden mb-12">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/banners/customer_banner.png"
                        alt="Customer Service Banner"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                </div>
                <div className="relative z-20 text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">고객센터</h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                        무엇을 도와드릴까요? 신속하고 정확한 서비스로 보답하겠습니다.
                    </p>
                </div>
            </section>

            <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col gap-24">

                {/* Board Section (Notice / Inquiry Tabs) */}
                <section>
                    <div className="mb-8 flex justify-center">
                        <div className="flex space-x-2 p-1 bg-gray-100 rounded-xl">
                            <button
                                onClick={() => setActiveTab('notice')}
                                className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${activeTab === 'notice' ? 'bg-white text-[#50B849] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                <Megaphone className="w-5 h-5" />
                                공지사항
                            </button>
                            <button
                                onClick={() => setActiveTab('inquiry')}
                                className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${activeTab === 'inquiry' ? 'bg-white text-[#50B849] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                <MessageSquare className="w-5 h-5" />
                                문의사항
                            </button>
                        </div>
                    </div>

                    <div className="bg-white border-t-2 border-[#231F20] shadow-sm rounded-b-xl overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 font-medium text-sm md:text-base">
                                    <th className="py-4 px-6 text-center w-20 hidden md:table-cell">번호</th>
                                    <th className="py-4 px-6">제목</th>
                                    {activeTab === 'inquiry' && <th className="py-4 px-6 text-center w-28 hidden md:table-cell">작성자</th>}
                                    {activeTab === 'inquiry' && <th className="py-4 px-6 text-center w-28">상태</th>}
                                    <th className="py-4 px-6 text-center w-32">작성일</th>
                                    {activeTab === 'notice' && <th className="py-4 px-6 text-center w-20 hidden md:table-cell">조회수</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {(activeTab === 'notice' ? notices : inquiries).map((item, index) => (
                                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors group cursor-pointer">
                                        <td className="py-5 px-6 text-center text-gray-400 hidden md:table-cell">{item.id}</td>
                                        <td className="py-5 px-6 font-medium text-gray-800 group-hover:text-[#50B849] transition-colors line-clamp-1 break-all">
                                            {item.title}
                                        </td>
                                        {activeTab === 'inquiry' && <td className="py-5 px-6 text-center text-gray-500 hidden md:table-cell">{item.author}</td>}
                                        {activeTab === 'inquiry' && (
                                            <td className="py-5 px-6 text-center">
                                                <span className={`px-2 py-1 text-xs rounded-full font-bold ${item.status === '답변완료' ? 'bg-[#50B849]/10 text-[#50B849]' : 'bg-gray-200 text-gray-600'}`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                        )}
                                        <td className="py-5 px-6 text-center text-gray-500 text-sm whitespace-nowrap">{item.date}</td>
                                        {activeTab === 'notice' && <td className="py-5 px-6 text-center text-gray-400 hidden md:table-cell">{item.views}</td>}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="py-6 flex justify-center bg-white border-t border-gray-100">
                            {/* Simple pagination placeholder */}
                            <div className="flex space-x-1">
                                <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#50B849] text-white font-medium">1</button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-600 font-medium transition-colors border border-transparent hover:border-gray-200">2</button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-600 font-medium transition-colors border border-transparent hover:border-gray-200">3</button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-400 pl-1"><ChevronRight size={18} /></button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote and Product Inquiry Form (Reused from Trust.jsx) */}
                <section className="bg-[#F5F5F5] py-20 px-6 md:px-12 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#50B849]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#50B849]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <span className="block text-[#50B849] font-medium text-lg mb-2">Contact Us</span>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#231F20]">견적 및 제품 문의</h3>
                            <p className="text-gray-500 mt-4">궁금하신 사항을 남겨주시면 담당자가 신속하게 답변해 드립니다.</p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-4xl mx-auto w-full border border-gray-100">
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
                                <div className="text-center pt-6 flex justify-center">
                                    <button type="button" className="px-14 py-4 bg-[#50B849] text-white rounded-lg font-bold text-lg hover:bg-green-600 transition-colors shadow-md hover:shadow-lg w-full md:w-auto">
                                        문의하기
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Company Profile Download */}
                <section>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="bg-gradient-to-r from-gray-900 to-[#231F20] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden relative group cursor-pointer"
                    >
                        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-white">
                                <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,97,-2.4C97.1,13.2,91.3,28.9,81.6,41.9C71.9,54.9,58.3,65.2,43.2,72.4C28.2,79.5,11.7,83.4,-4.1,84.7C-19.9,86,-35,84.6,-49.2,78.2C-63.4,71.8,-76.8,60.5,-84.9,46.1C-93,31.7,-95.8,14.3,-93.6,-2.4C-91.4,-19,-84.3,-35.1,-73.4,-47.9C-62.5,-60.7,-47.9,-70.2,-33.4,-77.2C-18.8,-84.2,-4.2,-88.7,5.5,-85.7C15.2,-82.7,25.-72.2,30.6,-83.6L44.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
                            </svg>
                        </div>

                        <div className="flex items-center gap-6 relative z-10 mb-8 md:mb-0">
                            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:bg-[#50B849] transition-colors duration-500">
                                <FileText className="w-10 h-10 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">회사소개서 다운로드</h3>
                                <p className="text-gray-400 text-sm md:text-base">세이프글러브의 비전과 검증된 기술력을 확인하세요. (PDF 형식)</p>
                            </div>
                        </div>

                        <div className="relative z-10 w-full md:w-auto">
                            <button className="w-full md:w-auto bg-white text-[#231F20] hover:bg-[#50B849] hover:text-white hover:border-[#50B849] font-bold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg group-hover:scale-105">
                                <Download className="w-5 h-5" />
                                DOWNLOAD
                            </button>
                        </div>
                    </motion.div>
                </section>

            </div>
        </main>
    );
};

export default CustomerPage;
