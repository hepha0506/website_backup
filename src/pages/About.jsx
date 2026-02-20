import React from 'react';

const About = () => {
    return (
        <main className="bg-white">
            {/* Top Banner */}
            <section className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Company Building"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                </div>
                <div className="relative z-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">회사 소개</h1>
                    <p className="text-xl text-gray-200">고객의 안전을 최우선으로 생각합니다</p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <span className="text-[#50B849] font-medium text-lg mb-2 block">Company Overview</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#231F20]">안전한 산업 환경의 파트너</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-[#231F20] mb-6">CEO 인사말</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            당사는 1960년 설립 이래, 끊임없는 연구 개발과 품질 혁신을 통해 국내 최고의 산업용 장갑 전문 기업으로 성장해 왔습니다.
                            '최고의 기술력으로 고객의 안전을 책임진다'는 경영 철학 아래, 모든 산업 현장에 최적화된 고품질의 안전 보호구를 제공하고 있습니다.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            앞으로도 변화하는 산업 환경에 맞춰 첨단 소재 개발과 인체공학적 디자인을 적용한 혁신적인 제품을 지속적으로 선보일 것을 약속드립니다.
                            여러분의 안전한 파트너가 되겠습니다. 감사합니다.
                        </p>
                        <p className="mt-8 font-bold text-lg text-[#231F20]">대표이사 O O O</p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <ul className="space-y-6">
                            <li className="flex border-b border-gray-200 pb-4">
                                <span className="w-24 font-bold text-gray-800">회사명</span>
                                <span className="text-gray-600">(주)세이프글러브</span>
                            </li>
                            <li className="flex border-b border-gray-200 pb-4">
                                <span className="w-24 font-bold text-gray-800">설립일</span>
                                <span className="text-gray-600">1960년 3월 15일</span>
                            </li>
                            <li className="flex border-b border-gray-200 pb-4">
                                <span className="w-24 font-bold text-gray-800">사업유형</span>
                                <span className="text-gray-600">제조, 도소매, 무역 (산업용 보호구)</span>
                            </li>
                            <li className="flex border-b border-gray-200 pb-4">
                                <span className="w-24 font-bold text-gray-800">사업구성</span>
                                <span className="text-gray-600">안전장갑 개발/제조, 산업용 특수장갑 수입/유통</span>
                            </li>
                            <li className="flex">
                                <span className="w-24 font-bold text-gray-800">본사 주소</span>
                                <span className="text-gray-600">서울특별시 영등포구 선유로 123 (양평동)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Company History */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-16 text-center">
                        <span className="text-[#50B849] font-medium text-lg mb-2 block">History</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#231F20]">회사연혁</h2>
                    </div>

                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                        {[
                            { year: "2024", text: "ISO 14001 환경경영시스템 인증 획득 및 친환경 라인업 출시" },
                            { year: "2020", text: "베트남 현지 공장 설립 및 글로벌 생산 기지 구축" },
                            { year: "2015", text: "R&D 센터 확장 이전 및 특수 코팅 신기술 특허 취득" },
                            { year: "2005", text: "ISO 9001 품질경영시스템 인증 획득" },
                            { year: "1990", text: "안전장갑 부문 우수 중소기업 표창 수상" },
                            { year: "1960", text: "(주)세이프글러브 법인 설립" },
                        ].map((item, index) => (
                            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#50B849] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 -translate-x-1/2">
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm ml-12 md:ml-0 hover:shadow-md transition-shadow">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-2xl text-[#50B849] mb-2">{item.year}</span>
                                        <p className="text-gray-700">{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Organization Chart */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <span className="text-[#50B849] font-medium text-lg mb-2 block">Organization</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#231F20]">조직도</h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">글로벌 경쟁력을 갖춘 체계적인 조직으로 고객의 니즈에 신속하게 대응합니다.</p>
                </div>

                <div className="flex flex-col items-center">
                    {/* CEO / Top Level */}
                    <div className="w-full max-w-md bg-gradient-to-r from-gray-900 to-[#231F20] text-white py-5 px-8 rounded-xl shadow-lg border-2 border-[#50B849] text-center relative z-10">
                        <h4 className="text-2xl font-bold tracking-widest">대표이사</h4>
                    </div>

                    {/* Connecting Line Vertical */}
                    <div className="w-1 h-12 bg-gray-300"></div>

                    {/* Connecting Line Horizontal */}
                    <div className="w-full max-w-4xl h-1 bg-gray-300 relative">
                        {/* Downward ticks */}
                        <div className="absolute left-0 top-0 w-1 h-6 bg-gray-300"></div>
                        <div className="absolute left-1/4 top-0 w-1 h-6 bg-gray-300 -translate-x-px"></div>
                        <div className="absolute left-1/2 top-0 w-1 h-6 bg-gray-300 -translate-x-px"></div>
                        <div className="absolute right-1/4 top-0 w-1 h-6 bg-gray-300 translate-x-px"></div>
                        <div className="absolute right-0 top-0 w-1 h-6 bg-gray-300"></div>
                    </div>

                    {/* Departments Level */}
                    <div className="w-full max-w-5xl flex justify-between pt-6 gap-4">
                        {[
                            { name: "관리부", desc: "경영기획 및 지원" },
                            { name: "생산부", desc: "국내외 공장 통합관리" },
                            { name: "연구개발부", desc: "신소재/디자인 개발" },
                            { name: "국내영업부", desc: "B2B 영업 및 판매망 강화" },
                            { name: "해외영업부", desc: "글로벌 소싱 및 수출 담당" }
                        ].map((dept, idx) => (
                            <div key={idx} className="flex-1 bg-white border border-gray-200 py-6 px-4 rounded-xl shadow-sm hover:shadow-md hover:border-[#50B849] transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#50B849]/10 transition-colors">
                                    <span className="text-xl font-black text-gray-400 group-hover:text-[#50B849] transition-colors">0{idx + 1}</span>
                                </div>
                                <h5 className="font-bold text-[#231F20] text-lg mb-2 whitespace-nowrap">{dept.name}</h5>
                                <p className="text-xs text-gray-500 break-keep leading-tight">{dept.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Code of Ethics */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 text-center">
                        <span className="text-[#50B849] font-medium text-lg mb-2 block">Code of Ethics</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#231F20]">윤리강령</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">세이프글러브는 투명하고 공정한 기업 운영으로 사회적 책임을 다합니다.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "고객 최우선",
                                text: "모든 경영 활동의 중심에 고객을 두고, 고객의 생명과 안전을 보호하는 최고의 품질과 서비스를 제공한다."
                            },
                            {
                                title: "법규 및 규범 준수",
                                text: "국가 및 지역 사회의 법규와 상거래 관습을 존중하고, 투명하고 투명한 기업 활동을 통해 건전한 기업 문화를 조성한다."
                            },
                            {
                                title: "공정한 거래",
                                text: "모든 협력 및 거래 관계에서 평등한 기회를 제공하고, 우월적 지위를 이용한 부당한 행위를 일절 금지한다."
                            },
                            {
                                title: "임직원 존중 및 안전",
                                text: "임직원 개개인의 인격을 존중하고, 차별 없는 대우와 안전하고 쾌적한 근무 환경 조성을 위해 최선을 다한다."
                            }
                        ].map((ethics, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#50B849] hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-4xl text-gray-200 font-extrabold mb-4 italic">0{idx + 1}</div>
                                <h4 className="text-xl font-bold text-[#231F20] mb-4">{ethics.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{ethics.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands & Partners */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <span className="text-[#50B849] font-medium text-lg mb-2 block">Brands & Partners</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#231F20]">브랜드 및 파트너</h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">글로벌 선도 기업들과의 파트너십을 통해 세계 최고 수준의 제품을 공급합니다.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((logoNum, i) => (
                        <div key={i} className="aspect-[2/1] flex items-center justify-center bg-white border border-gray-100 rounded-xl hover:border-[#50B849] transition-all duration-300 p-6 shadow-sm hover:shadow-md">
                            <img
                                src={`/assets/partners/partner_logo_${logoNum}.png`}
                                alt={`Partner ${i + 1}`}
                                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Location */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 text-center">
                        <span className="text-[#50B849] font-medium text-lg mb-2 block">Location</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#231F20]">찾아오시는 길</h2>
                    </div>

                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                        {/* Map Placeholder */}
                        <div className="w-full h-[400px] bg-gray-200 relative flex items-center justify-center overflow-hidden group border-b border-gray-100">
                            <div className="absolute inset-0 bg-blue-50/50 mix-blend-multiply"></div>
                            {/* SVG Map Grid Pattern Placeholder */}
                            <svg className="absolute w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="1" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                            </svg>
                            <div className="z-10 flex flex-col items-center">
                                <div className="w-8 h-8 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center mb-2 animate-bounce shadow-lg">
                                    <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
                                </div>
                                <div className="bg-white px-4 py-2 rounded-lg font-bold text-gray-800 shadow-md">
                                    (주)세이프글러브 본사
                                </div>
                            </div>
                        </div>

                        {/* Location Details */}
                        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                                    <svg className="w-5 h-5 text-[#50B849] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    주소
                                </h4>
                                <p className="text-gray-600">서울특별시 영등포구 선유로 123<br />세이프타운 4층</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                                    <svg className="w-5 h-5 text-[#50B849] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    연락처
                                </h4>
                                <p className="text-gray-600">Tel: 02-1234-5678<br />Fax: 02-1234-5679</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                                    <svg className="w-5 h-5 text-[#50B849] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    이메일
                                </h4>
                                <p className="text-gray-600">info@safeglove.com<br />sales@safeglove.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
