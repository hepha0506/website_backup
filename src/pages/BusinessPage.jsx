import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, FlaskConical, Globe, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

const BusinessPage = () => {
    // Business Areas Data
    const areas = [
        {
            id: 'development',
            icon: <FlaskConical className="w-12 h-12 text-[#50B849]" />,
            title: '안전 장갑 분야 제품 개발',
            desc: '현장의 니즈를 파악하여 최첨단 소재와 인체공학적 디자인을 결합한 혁신적인 안전 장갑을 연구 개발합니다. 끊임없는 R&D 투자를 통해 사용자에게 최상의 보호력과 착용감을 시킵니다.',
            bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop' // Placeholder lab/tech image
        },
        {
            id: 'sourcing',
            icon: <Globe className="w-12 h-12 text-[#50B849]" />,
            title: '글로벌 소싱 활동',
            desc: '전 세계 우수 제조 파트너들과의 긴밀한 협력 네트워크를 구축하여 최고 품질의 원부자재 및 완제품을 경쟁력 있는 가격에 공급받습니다. 철저한 품질 검증 시스템으로 글로벌 스탠다드를 충족합니다.',
            bgImage: '/assets/business/business_sourcing.png'
        },
        {
            id: 'ppe',
            icon: <ShieldCheck className="w-12 h-12 text-[#50B849]" />,
            title: 'PPE 전문업체 및 인증/특허',
            desc: 'KCs, CE, ANSI 등 국내외 필수 안전 인증 및 다수의 특허를 보유한 개인보호구(PPE) 전문 기업입니다. 검증된 기술력과 품질을 바탕으로 산업 현장의 안전 기준을 선도합니다.',
            bgImage: '/assets/business/business_ppe.png'
        }
    ];

    // Brochures Data
    const brochures = [
        {
            name: "PROSAL 브랜드 브로슈어",
            desc: "프리미엄 기능성 장갑 브랜드 PROSAL의 전체 제품 라인업 안내",
            color: "border-[#50B849]",
            textColor: "text-[#50B849]",
            bgColor: "hover:bg-[#50B849]"
        },
        {
            name: "HEPHA 브랜드 브로슈어",
            desc: "특수 목적 및 내화학성 장갑 브랜드 HEPHA 제품 안내",
            color: "border-blue-600",
            textColor: "text-blue-600",
            bgColor: "hover:bg-blue-600"
        },
        {
            name: "회사 종합 및 기타 카탈로그",
            desc: "세이프글러브 전체 카탈로그 및 기타 브랜드 다목적 라인업",
            color: "border-[#231F20]",
            textColor: "text-[#231F20]",
            bgColor: "hover:bg-[#231F20]"
        }
    ];

    // State for Certifications
    const [showAllCerts, setShowAllCerts] = useState(false);
    const totalCerts = 12;
    const certsList = Array.from({ length: totalCerts }, (_, i) => i + 1);
    const visibleCerts = showAllCerts ? certsList : certsList.slice(0, 6);

    return (
        <main className="min-h-screen bg-white pt-20">
            {/* Header Banner Section */}
            <section className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden mb-12">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/banners/business_banner.png"
                        alt="Business Banner"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                </div>
                <div className="relative z-20 text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">사업 분야</h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                        혁신적인 기술개발과 신뢰받는 글로벌 소싱으로 안전의 기준을 만듭니다.
                    </p>
                </div>
            </section>

            {/* Core Business Areas Section */}
            <section className="py-24 max-w-[1600px] mx-auto px-6">
                <div className="mb-20 text-center">
                    <span className="text-[#50B849] font-bold tracking-wider mb-2 block uppercase">Core Competence</span>
                    <h2 className="text-4xl font-black text-[#231F20]">안전한 산업 환경을 위한 세이프글러브의 3대 핵심 역량</h2>
                </div>

                <div className="space-y-16 lg:space-y-32 border-b border-gray-200 pb-24">
                    {areas.map((area, index) => (
                        <div key={area.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Image Container */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-1/2"
                            >
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={area.bgImage}
                                        alt={area.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Icon Badge Overlay */}
                                    <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-2xl shadow-xl z-20 flex items-center justify-center p-4">
                                        {area.icon}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="w-full lg:w-1/2 flex flex-col"
                            >
                                <div className="flex items-center text-gray-300 font-black text-6xl md:text-8xl mb-4 italic">
                                    0{index + 1}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#231F20] mb-6 leading-snug">
                                    {area.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                    {area.desc}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certifications and Patents Section */}
            <section className="py-24 bg-white" id="certifications">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="mb-16 text-center">
                        <span className="text-[#50B849] font-bold tracking-wider mb-2 block uppercase">Certifications & Patents</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#231F20]">각종 인증 및 특허증</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            세이프글러브의 획기적인 기술력은 다수의 특허와 국내외 공인 인증을 통해 완벽히 검증되었습니다.
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
                                            alt={num % 2 !== 0 ? `특허증 ${num}` : `인증서 ${num}`}
                                            className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity shadow-sm"
                                        />
                                    </div>
                                    <p className="text-xs md:text-sm font-semibold text-gray-700 leading-tight">
                                        {num % 2 !== 0 ? `안전 장갑 원천 특허 0${num}` : num === 4 || num === 2 ? `ISO 9001/14001` : `CE / KCs 인증`}
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
                            <span className="font-bold mb-2">{showAllCerts ? '닫기' : '더보기'}</span>
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
            </section>

            {/* Brochures Download Section */}
            <section className="py-24 bg-gray-50" id="brochure">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="mb-16 text-center">
                        <span className="text-[#50B849] font-bold tracking-wider mb-2 block uppercase">Resources</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#231F20]">브로슈어 다운로드</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            세이프글러브의 각 브랜드별 최신 카탈로그와 브로슈어를 PDF 피라미터로 다운로드하여 확인하실 수 있습니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {brochures.map((item, idx) => (
                            <motion.div
                                whileHover={{ y: -8 }}
                                key={idx}
                                className={`bg-white rounded-2xl p-8 border-t-4 ${item.color} shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group cursor-pointer`}
                            >
                                <div className="flex-grow">
                                    <div className={`w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <Download className={`w-8 h-8 ${item.textColor}`} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-[#231F20] mb-4">{item.name}</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                                <button className={`mt-8 w-full py-4 border-2 ${item.color} ${item.textColor} rounded-xl font-bold uppercase tracking-wide flex items-center justify-center gap-2 group-hover:text-white ${item.bgColor} transition-colors duration-300`}>
                                    PDF 다운로드
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BusinessPage;
