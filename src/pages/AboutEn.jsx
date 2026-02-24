import React from 'react';

const AboutEn = () => {
    return (
        <main className="bg-white">
            {/* Top Banner */}
            <section className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0 pt-20">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Company Building"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                </div>
                <div className="relative z-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
                    <p className="text-xl text-gray-200">Your Safety is Our Priority</p>
                </div>
            </section>

            {/* 1. CEO Greeting */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <span className="text-[#50B849] font-medium text-lg mb-2 block">CEO Greeting</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#231F20]">Your Partner in Safe Industrial Environments</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Since our establishment, we have grown into a leading company specializing in industrial gloves through continuous research, development, and quality innovation. Following our management philosophy of 'Taking responsibility for customer safety with the best technology', we provide high-quality safety equipment optimized for all industrial sites.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We promise to continue introducing innovative products applying advanced materials and ergonomic designs suitable for changing industrial environments. We will always be your reliable safety partner. Thank you.
                        </p>
                        <p className="mt-8 font-bold text-lg text-[#231F20]">CEO</p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <ul className="space-y-6">
                            <li className="flex border-b border-gray-200 pb-4">
                                <span className="w-32 font-bold text-gray-800">Company</span>
                                <span className="text-gray-600">Heungje Int.</span>
                            </li>
                            <li className="flex border-b border-gray-200 pb-4">
                                <span className="w-32 font-bold text-gray-800">Established</span>
                                <span className="text-gray-600">March 15, 1960</span>
                            </li>
                            <li className="flex border-b border-gray-200 pb-4">
                                <span className="w-32 font-bold text-gray-800">Business Type</span>
                                <span className="text-gray-600">Manufacturing, Wholesale, Trade</span>
                            </li>
                            <li className="flex border-b border-gray-200 pb-4">
                                <span className="w-32 font-bold text-gray-800">Main Products</span>
                                <span className="text-gray-600">Safety Gloves Development & Import/Export</span>
                            </li>
                            <li className="flex">
                                <span className="w-32 font-bold text-gray-800">Address</span>
                                <span className="text-gray-600">Seoul, Republic of Korea</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 2. History */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-16 text-center">
                        <span className="text-[#50B849] font-medium text-lg mb-2 block">History</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#231F20]">Company History</h2>
                    </div>

                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                        {[
                            { year: "2024", text: "Acquired ISO 14001 Certification & Launched Eco-friendly Lineup" },
                            { year: "2020", text: "Established Overseas Factory & Global Production Base" },
                            { year: "2015", text: "Expanded R&D Center & Acquired New Coating Technology Patent" },
                            { year: "2005", text: "Acquired ISO 9001 Quality Management System Certification" },
                            { year: "1990", text: "Awarded Excellent SME in Safety Glove Sector" },
                            { year: "1960", text: "Corporation Established" },
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

            {/* 3. Awards */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <span className="text-[#50B849] font-medium text-lg mb-2 block">Awards</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#231F20]">Our Achievements</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { year: "2023", title: "Export Tower Award", desc: "Awarded for achieving $10M in global exports." },
                        { year: "2021", title: "Best Innovator Award", desc: "Recognized for developing eco-friendly product lines." },
                        { year: "2018", title: "Quality Excellence Award", desc: "Awarded for outstanding product quality." }
                    ].map((award, idx) => (
                        <div key={idx} className="bg-white border text-center border-gray-200 p-8 rounded-2xl hover:border-[#50B849] hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6 text-[#50B849]">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                            </div>
                            <span className="text-sm font-bold text-[#50B849] mb-2 block">{award.year}</span>
                            <h4 className="text-xl font-bold text-[#231F20] mb-3">{award.title}</h4>
                            <p className="text-gray-600 text-sm">{award.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Vision */}
            <section className="py-24 bg-[#231F20] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-[#50B849] font-medium text-lg mb-4 block tracking-widest uppercase">Our Vision</span>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                        Global Leader in Industrial Safety & Innovation
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                        We are committed to creating a safer and more sustainable future for industrial environments worldwide. Through cutting-edge technology and uncompromising quality, we protect lives and empower workers everywhere.
                    </p>
                </div>
            </section>

            {/* 5. Heungje People */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <span className="text-[#50B849] font-medium text-lg mb-2 block">Heungje People</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#231F20]">Our Core Values</h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">The talents and values that drive us forward.</p>
                </div>
                <div className="flex flex-col items-center w-full">
                    <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between pt-8 md:pt-6 gap-4 border-t border-gray-200 p-6 md:p-0">
                        {[
                            { name: "Passion", desc: "Passionate individuals who challenge their limits" },
                            { name: "Innovation", desc: "Creative minds seeking new solutions" },
                            { name: "Integrity", desc: "Honest professionals acting with transparency" },
                            { name: "Collaboration", desc: "Team players respecting diversity" }
                        ].map((person, idx) => (
                            <div key={idx} className="relative z-10 w-full md:flex-1 bg-white border border-gray-200 py-8 px-6 flex flex-col items-center justify-center rounded-2xl shadow-sm hover:shadow-md hover:border-[#50B849] transition-all duration-300 text-center group cursor-default">
                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#50B849]/10 transition-colors">
                                    <span className="text-2xl font-black text-gray-300 group-hover:text-[#50B849] transition-colors">{idx + 1}</span>
                                </div>
                                <h5 className="font-bold text-[#231F20] text-xl mb-3">{person.name}</h5>
                                <p className="text-sm text-gray-500 leading-relaxed">{person.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Code of Ethics */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-16 text-center">
                        <span className="text-[#50B849] font-medium text-lg mb-2 block">Code of Ethics</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#231F20]">Heungje Code of Ethics</h2>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed text-sm md:text-base">
                        <p className="mb-10 font-medium text-lg text-gray-800">
                            Heungje International creates values for customers, group members, shareholders, and business partners. Through these values, we will make an contribution to the economic and social development and the happiness of all human beings. In order to achieve this, we define codes of ethics and act upon this criteria in decision making and judgement.
                        </p>

                        <div className="space-y-10">
                            {/* 1. Group Members */}
                            <div>
                                <h3 className="text-xl font-bold text-[#231F20] mb-2">1. Group Members</h3>
                                <p className="italic text-gray-500 mb-4">* As a mamber and representative of Heungje Group, we take pride in ourselves and sincerely conduct our duty.</p>
                                <ul className="space-y-3 pl-2">
                                    <li>1) By drawing a sharp line between private and public matters, we conduct our duty impartially and transparently.</li>
                                    <li>2) We create corporate culture that intensifies mutual respect between members and encourages members to work with enthusiasm and initiative.</li>
                                    <li>3) We draw up all the management documents according to the law and make an announcement on them in accordance with the law.</li>
                                    <li>4) We make efforts to have a sound business culture through honest and fair job. (revised on Feb. 26, 2016)</li>
                                    <li>5) We do not have any pecuniary benefit obstructing fairness of business from our interest group. (revised on Feb. 26, 2016)</li>
                                    <li>6) We do not do unethical and illegal actions like unjust instruction, recommendation, request, and special favor. (revised on Feb. 26. 2016)</li>
                                    <li>7) We thoroughly protect the company's non-public or important information, deliver important information to people who need it for business as soon as we recognize it, and do not distort information or disseminate false information. (revised on Dec. 31, 2020)</li>
                                    <li>8) We do not engage in Verbal, physical, sexual, visual behavior, slander and obscene acts that is offensive to other executives and employees and we respect the privacy of individuals. (revised on Dec. 31, 2020)</li>
                                </ul>
                            </div>

                            {/* 2. Customers */}
                            <div>
                                <h3 className="text-xl font-bold text-[#231F20] mb-2">2. Customers</h3>
                                <p className="italic text-gray-500 mb-4">* We gain customers' trust by providing satis factory services and achieve development along with customers</p>
                                <ul className="space-y-3 pl-2">
                                    <li>1) We respect customers' various opinion and apply their opinion to company management.</li>
                                    <li>2) We protect customers' information and property in accordance with the law and company regulation.</li>
                                    <li>3) We do not use false/hype advertisements and mark etc and honestly disclose information that customers need to know. (revised on Dec. 31, 2020)</li>
                                </ul>
                            </div>

                            {/* 3. Business Partners */}
                            <div>
                                <h3 className="text-xl font-bold text-[#231F20] mb-2">3. Business Partners</h3>
                                <p className="italic text-gray-500 mb-4">* We make an effort to achieve mutual development and cooperation with our partners.</p>
                                <ul className="space-y-3 pl-2">
                                    <li>1) We provide fair trade opportunities to our partners and don't abuse our superior position to force our partners to do improper business. We also pursue mutual benefits and development.</li>
                                </ul>
                            </div>

                            {/* 4. Society */}
                            <div>
                                <h3 className="text-xl font-bold text-[#231F20] mb-2">4. Society</h3>
                                <p className="italic text-gray-500 mb-4">* We contribute not only to the economic development but also to the society through social and cultural activities and try our best to manage the company in accordance with the social norm.</p>
                                <ul className="space-y-3 pl-2">
                                    <li>1) We actively participate in corporate social responsibility (CSR) activities to make all the social members live in happiness.</li>
                                    <li>2) We observe the local laws and respect the culture and tradition of the communities.</li>
                                </ul>
                            </div>

                            {/* 5. Compliance manager */}
                            <div>
                                <h3 className="text-xl font-bold text-[#231F20] mb-4">5. Compliance manager (revised on Feb. 26, 2016)</h3>
                                <ul className="space-y-3 pl-2">
                                    <li>1) Compliance manager will be elected at board of directors and appointed by CEO.</li>
                                    <li>2) Compliance manager will be appointed among team manager who is not related with sales and buying to observe code of ethics effectively.</li>
                                    <li>3) Compliance manager will carry out code of ethics with real responsibility and authority independent of any other authority.</li>
                                    <li>4) Compliance manager will have diverse method to gather information on worker's complaint and tough situation.</li>
                                </ul>
                            </div>

                            {/* 6. Additional Clause */}
                            <div className="pt-8 border-t border-gray-100">
                                <h3 className="text-lg font-bold text-[#231F20] mb-4">6. Additional Clause</h3>
                                <ul className="space-y-2 text-gray-500 pl-4 list-disc">
                                    <li>This code of ethics comes into effect on Sep.10, 2014.</li>
                                    <li>This revised code of ethics comes into effect on Feb. 26, 2016.</li>
                                    <li>This revised code of ethics comes into effect on Dec. 31, 2020.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Export Regions */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <span className="text-[#50B849] font-medium text-lg mb-2 block">Export Regions</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#231F20]">Global Network</h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Supplying world-class products globally through our extensive network.</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { region: "North America", desc: "USA, Canada, Mexico" },
                        { region: "Europe", desc: "Germany, UK, France, Italy" },
                        { region: "Asia", desc: "Japan, China, Vietnam, Thailand" },
                        { region: "Middle East", desc: "UAE, Saudi Arabia, Qatar" },
                    ].map((exportArea, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-xl hover:border-[#50B849] p-8 text-center transition-all duration-300 shadow-sm hover:shadow-md group">
                            <div className="w-12 h-12 mx-auto mb-4 text-[#50B849] bg-green-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h4 className="font-bold text-lg mb-2">{exportArea.region}</h4>
                            <p className="text-xs text-gray-500">{exportArea.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8. Directions */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 text-center">
                        <span className="text-[#50B849] font-medium text-lg mb-2 block">Directions</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#231F20]">Location</h2>
                    </div>

                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                        {/* Map Placeholder */}
                        <div className="w-full h-[400px] bg-gray-200 relative flex items-center justify-center overflow-hidden group border-b border-gray-100">
                            <div className="absolute inset-0 bg-blue-50/50 mix-blend-multiply"></div>
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
                                    Heungje Int. Headquarters
                                </div>
                            </div>
                        </div>

                        {/* Location Details */}
                        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                                    <svg className="w-5 h-5 text-[#50B849] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    Address
                                </h4>
                                <p className="text-gray-600">Seoul, Republic of Korea</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                                    <svg className="w-5 h-5 text-[#50B849] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    Contact
                                </h4>
                                <p className="text-gray-600">Tel: +82-2-1234-5678<br />Fax: +82-2-1234-5679</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                                    <svg className="w-5 h-5 text-[#50B849] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    Email
                                </h4>
                                <p className="text-gray-600">info@heungje.com<br />sales@heungje.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutEn;
