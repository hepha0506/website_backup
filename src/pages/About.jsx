import React, { useState } from 'react';

const About = () => {
    const [activeHistoryTab, setActiveHistoryTab] = useState('창업의 시기');

    const era1 = [
        { year: "1980", text: "앙고라 장갑 제품 개발\n경북 메리야스 조합장상 수상" },
        { year: "1978 ~ 1984", text: "운전기사용 표백장갑, 매직장갑 일본수출" },
        { year: "1978", text: "중소기업청 우수 사업장 표창 수상" },
        { year: "1975", text: "형제 장갑 공업사 사업자 등록\n매직장갑 개발 및 수출" },
        { year: "1972", text: "자동기계도입/ 운전기사용 표백장갑 개발" },
        { year: "1970 ~ 1974", text: "기모장갑 일본 수출" }
    ];

    const era2 = [
        { year: "1999", text: "형제 인터내셔널로 법인 전환(형제장갑공업사와 대경인터내셔널 합병)\n영국 런던지사 설립" },
        { year: "1998", text: "수출 유망 중소기업 지정, 100만불탑 수상\n유럽 5개국 시장개척단 단장으로 대구시장 대동 순방" },
        { year: "1997", text: "대구시 주최 동유럽 시장 개척단 단장으로 동유럽 4개국 순방\n대경 인터내셔널 수출 전문 자회사 등록\n쉬메릭 업체 지정" },
        { year: "1995", text: "공동 대표체제 확립" },
        { year: "1992 ~ 1999", text: "겨울용 앙골라 장갑, 밍크장갑 폴란드 수출" },
        { year: "1989", text: "카이로 박람회 참가" },
        { year: "1985", text: "밍크장갑 개발(밍크사 개발)" }
    ];

    const era3 = [
        { year: "2009", text: "경북 칠곡 가산 송학리 2공장 설립" },
        { year: "2007", text: "ISO 14001 인증\n중소기업청 주관 환위험관리 우수기업 선정" },
        { year: "2006", text: "한국무역협회 주관 500만불탑 수상\n국무총리 표창장, 훈장 수상" },
        { year: "2003", text: "경북 경산 자인 1공장 설립\n우수 산업디자인 상품 선정\n300만불탑 수상" },
        { year: "2002", text: "CE MARK 인증\n주름장갑 개발" },
        { year: "2001", text: "ISO 9001 인증" },
        { year: "2000", text: "단독 대표 이사 취임" }
    ];

    const era4 = [
        { year: "2019", text: "A+A 박람회, BIOT 박람회, KISS박람회 참가" },
        { year: "2018", text: "NSC박람회, BIOT 박람회 참가" },
        { year: "2016", text: "베트남 해외법인 'Prosal'\n제조공장 'HJ-Safety' 설립" },
        { year: "2014", text: "'PROSAL' 상표특허 출원 및 등록" },
        { year: "2012", text: "2공장 연구개발 전담부서 설치\n미국정부 전자조달시장(GSA) 주계약자 취득" },
        { year: "2011", text: "한국무역협회 주관 1,000만불탑 수상\n지식경제부상 수상, 수출유공자상 수상" },
        { year: "2010", text: "경산 자인 1공장, 경북 칠곡 송학리 2공장 통합" }
    ];

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

                        <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
                                alt="CEO Portrait"
                                className="w-full h-48 md:h-64 lg:h-72 object-cover object-[center_30%]"
                            />
                        </div>

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

                    <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 flex flex-col h-full">
                        <div className="flex justify-center items-center mb-8 pb-8 border-b border-gray-200">
                            <img src="/logo02.jpg" alt="HEUNGJE INT" className="h-16 object-contain mix-blend-multiply" />
                        </div>
                        <ul className="space-y-6 flex-grow flex flex-col justify-center">
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
                <div className="max-w-5xl mx-auto px-6">
                    <div className="mb-12 text-center">
                        <span className="text-[#50B849] font-medium text-lg mb-2 block">History</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#231F20]">회사연혁</h2>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center mb-8 gap-2 md:gap-4">
                        {[
                            { id: '창업의 시기', label: '창업의 시기', sub: '(1960~1980년대)' },
                            { id: '성장의 시기', label: '성장의 시기', sub: '(1980~2000년대)' },
                            { id: '혁신의 시기', label: '혁신의 시기', sub: '(2000~2010년대)' },
                            { id: '도약의 시기', label: '도약의 시기', sub: '(2010~현재)' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveHistoryTab(tab.id)}
                                className={`px-5 py-3 rounded-2xl flex flex-col items-center justify-center min-w-[140px] transition-all duration-300 border ${activeHistoryTab === tab.id
                                    ? 'bg-[#50B849] text-white border-[#50B849] shadow-md'
                                    : 'bg-white text-gray-500 border-gray-200 hover:border-[#50B849] hover:text-[#50B849]'
                                    }`}
                            >
                                <span className="font-bold text-lg">{tab.label}</span>
                                <span className={`text-xs mt-1 ${activeHistoryTab === tab.id ? 'text-green-100' : 'text-gray-400'}`}>{tab.sub}</span>
                            </button>
                        ))}
                    </div>

                    {/* Tab Subtitle Context */}
                    <div className="text-center mb-16">
                        <h3 className={`text-xl font-bold tracking-wide ${activeHistoryTab === '창업의 시기' ? 'text-[#50B849]' :
                            activeHistoryTab === '성장의 시기' ? 'text-blue-500' :
                                activeHistoryTab === '혁신의 시기' ? 'text-purple-500' :
                                    'text-orange-500'
                            }`}>
                            {activeHistoryTab === '창업의 시기' && "사람의 손을 생각하다"}
                            {activeHistoryTab === '성장의 시기' && "세계의 문을 두드리다"}
                            {activeHistoryTab === '혁신의 시기' && "패션을 넘어 안전으로"}
                            {activeHistoryTab === '도약의 시기' && "머무르지 않는 선두"}
                        </h3>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                        {(activeHistoryTab === '창업의 시기' ? era1
                            : activeHistoryTab === '성장의 시기' ? era2
                                : activeHistoryTab === '혁신의 시기' ? era3
                                    : era4).map((item, index) => (
                                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                            <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 -translate-x-1/2 ${activeHistoryTab === '창업의 시기' ? 'bg-[#50B849]' :
                                                activeHistoryTab === '성장의 시기' ? 'bg-blue-500' :
                                                    activeHistoryTab === '혁신의 시기' ? 'bg-purple-500' :
                                                        'bg-orange-500'
                                                }`}>
                                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm ml-12 md:ml-0 hover:shadow-md transition-shadow">
                                                <div className="flex flex-col">
                                                    <span className={`font-bold text-2xl mb-2 ${activeHistoryTab === '창업의 시기' ? 'text-[#50B849]' :
                                                        activeHistoryTab === '성장의 시기' ? 'text-blue-500' :
                                                            activeHistoryTab === '혁신의 시기' ? 'text-purple-500' :
                                                                'text-orange-500'
                                                        }`}>{item.year}</span>
                                                    <p className="text-gray-700 leading-relaxed font-medium whitespace-pre-line">{item.text}</p>
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

                <div className="flex flex-col items-center w-full">
                    {/* CEO / Top Level */}
                    <div className="w-full max-w-md bg-gradient-to-r from-gray-900 to-[#231F20] text-white py-5 px-8 rounded-xl shadow-lg border-2 border-[#50B849] text-center relative z-10 w-full sm:w-auto">
                        <h4 className="text-2xl font-bold tracking-widest">대표이사</h4>
                    </div>

                    {/* Connecting Line Vertical Base */}
                    <div className="w-1 h-8 md:h-12 bg-gray-300 relative z-0"></div>

                    {/* Connecting Line Horizontal (Desktop Only) */}
                    <div className="hidden md:block w-full max-w-4xl h-1 bg-gray-300 relative">
                        {/* Downward ticks */}
                        <div className="absolute left-0 top-0 w-1 h-6 bg-gray-300"></div>
                        <div className="absolute left-1/4 top-0 w-1 h-6 bg-gray-300 -translate-x-px"></div>
                        <div className="absolute left-1/2 top-0 w-1 h-6 bg-gray-300 -translate-x-px"></div>
                        <div className="absolute right-1/4 top-0 w-1 h-6 bg-gray-300 translate-x-px"></div>
                        <div className="absolute right-0 top-0 w-1 h-6 bg-gray-300"></div>
                    </div>

                    {/* Departments Level */}
                    <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between pt-8 md:pt-6 gap-4 md:gap-4 relative mt-0 md:bg-transparent bg-gray-50/80 md:border-transparent border border-gray-200 p-6 md:p-0 rounded-3xl md:rounded-none">

                        {[
                            { name: "관리부", desc: "경영기획 및 지원" },
                            { name: "생산부", desc: "국내외 공장 통합관리" },
                            { name: "연구개발부", desc: "신소재/디자인 개발" },
                            { name: "국내영업부", desc: "B2B 영업 및 판매망 강화" },
                            { name: "해외영업부", desc: "글로벌 소싱 및 수출 담당" }
                        ].map((dept, idx) => (
                            <div key={idx} className="relative z-10 w-full max-w-xs sm:max-w-sm mx-auto md:max-w-none md:flex-1 bg-white border border-gray-200 py-6 px-4 flex flex-col items-center justify-center rounded-2xl shadow-sm hover:shadow-md hover:border-[#50B849] transition-all duration-300 text-center group cursor-default">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#50B849]/10 transition-colors ring-4 ring-white">
                                    <span className="text-xl font-black text-gray-300 group-hover:text-[#50B849] transition-colors">{idx + 1}</span>
                                </div>
                                <h5 className="font-bold text-[#231F20] text-lg mb-2 whitespace-nowrap">{dept.name}</h5>
                                <p className="text-xs lg:text-xs xl:text-sm text-gray-500 break-keep leading-tight">{dept.desc}</p>
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

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed text-sm md:text-base">
                        <p className="mb-6 font-bold text-base md:text-lg text-[#231F20]">
                            (주)형제인터내셔널은 고객, 구성원, 사업파트너 등 다양한 이해관계자에 대한 가치를 창출하여 사회, 경제 발전에 핵심적인 역할을 수행하고 나아가 인류의 행복에 공헌하는 기업경영을 실천한다. 이를 위하여 윤리규범을 제정하고 모든 경영활동에서 의사결정과 행동의 판단기준으로 삼는다.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h4 className="font-bold text-[#231F20] text-lg mb-3">1. 구성원의 기본윤리</h4>
                                <p className="mb-3 text-[#50B849] font-medium block">
                                    ※ 우리는 (주)형제인터내셔널의 구성원으로서 자부심을 가지고 자신의 위치에서 항상 회사를 대표하는 자세로 성실히 직무를 수행한다.
                                </p>
                                <ul className="list-none space-y-2 pl-2">
                                    <li>① 공과 사를 명확히 구분하여 공정하고 투명하게 업무를 수행한다.</li>
                                    <li>② 구성원간에 상호 존중하며, 자발적이고 의욕적으로 일할 수 있는 조직문화를 조성한다.</li>
                                    <li>③ 경영자료는 제반법규와 기준에 맞게 작성하고, 관련 정보를 법규에 따라 성실하게 공시한다.</li>
                                    <li>④ 모든 직무를 정직하고 공정하게 수행하여 건전한 기업문화를 조성하기 위해 노력한다. [ 개정 2016.02.26 ]</li>
                                    <li>⑤ 이해관계자로부터 업무상 가치판단의 공정성을 저해하는 어떠한 형태의 금전적 이익도 향유하여서는 아니 된다. [ 개정 2016.02.26 ]</li>
                                    <li>⑥ 부당한 지시, 알선, 청탁, 특혜 부여 등 사회통념상 비윤리적이고 불법적인 행위를 하여서는 아니 된다. [ 개정 2016.02.26 ]</li>
                                    <li>⑦ 회사의 비공개정보나 중요한 정보를 철저히 보호하며 중요한 정보는 인지한 즉시 업무에 필요한 사람에게 전달하고 정보를 왜곡하거나 허위사실을 유포하지 않는다. [ 개정 2020.12.31. ]</li>
                                    <li>⑧ 다른 임직원에게 불쾌감을 주는 언어적, 육체적, 성적, 시각적 행동이나 비방. 음해행위를 하지 않으며 개개인의 사생활을 존중한다. [ 개정 2020.12.31. ]</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#231F20] text-lg mb-3">2. 고객에 대한 자세</h4>
                                <p className="mb-3 text-[#50B849] font-medium block">
                                    ※ 고객을 지속적으로 만족시켜 고객으로부터 신뢰를 얻고 궁극적으로 고객과 더불어 발전한다.
                                </p>
                                <ul className="list-none space-y-2 pl-2">
                                    <li>① 고객의 다양한 의견을 존중하고, 회사의 경영 활동에 적극 반영한다.</li>
                                    <li>② 고객의 재산과 정보를 관련 법규와 사규에 따라 안전하게 보호한다.</li>
                                    <li>③ 허위/과대광고 및 표시등을 하지 않으며 고객이 알아야 할 정보를 정직하게 공개한다. [ 개정 2020.12.31. ]</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#231F20] text-lg mb-3">3. 사업파트너와의 관계</h4>
                                <p className="mb-3 text-[#50B849] font-medium block">
                                    ※ 협력회사와 공동발전 및 상생협력을 추구한다.
                                </p>
                                <ul className="list-none space-y-2 pl-2">
                                    <li>① 협력회사에 대해 공정한 거래 기회를 부여하고 우월적 지위를 이용한 부당행위를 하지 않으며 상호이익과 공동발전을 추구한다.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#231F20] text-lg mb-3">4. 사회에 대한 역할</h4>
                                <p className="mb-3 text-[#50B849] font-medium block">
                                    ※ 경제발전에의 기여와 함께 사회적 문화적 활동을 통하여 사회에 공헌하며, 사회규범에 맞는 경영을 하도록 최선을 다한다.
                                </p>
                                <ul className="list-none space-y-2 pl-2">
                                    <li>① 사회공헌 활동에 적극 참여하여 사회전체가 행복해 질 수 있도록 노력한다.</li>
                                    <li>② 사업을 영위하는 지역의 제반법규를 준수하고 지역사회의 전통과 문화를 존중한다.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#231F20] text-lg mb-3">5. 윤리규범 자율준수관리자 <span className="text-sm font-normal text-gray-500">[ 개정 2016.02.26 ]</span></h4>
                                <ul className="list-none space-y-2 pl-2">
                                    <li>① 윤리규범 자율준수관리자는 윤리경영과 관련된 1인으로 선정하되 이사회를 통하여 선임하고 대표이사가 임명한다.</li>
                                    <li>② 윤리규범 자율준수관리자는 영업 및 구매와 관련이 없는자를 팀장으로 선임하여 자율준수에 관련한 사항을 실효성 있게 관리한다.</li>
                                    <li>③ 윤리규범 자율준수관리자는 실질적인 책임과 권한을 가지고 어떠한 간섭도 받지 않으며 독립적이고 중립적으로 자율 준수할 수 있도록 관리한다.</li>
                                    <li>④ 윤리규범 자율준수관리자는 내부의 불만사항, 내부고발자제도 및 그 이외의 다양한 루트등을 활용하여 위반과 관련한 정보를 얻을 수 있는 체계를 구축하고 실행한다.</li>
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-gray-200 mt-8">
                                <h4 className="font-bold text-[#231F20] text-lg mb-3">6. 부칙</h4>
                                <ul className="list-none space-y-2 pl-2 text-gray-500">
                                    <li>· 본 윤리규범은 2014년 9월 10일부로 시행한다.</li>
                                    <li>· 본 개정된 윤리규범은 2016년 2월 26일부로 시행한다.</li>
                                    <li>· 본 개정된 윤리규범은 2020년 12월 31일부로 시행한다.</li>
                                </ul>
                            </div>
                        </div>
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
