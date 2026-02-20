import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { id: 1, label: 'Trading Value', value: '$100m', suffix: '+' },
    { id: 2, label: 'Orders Executed', value: '15,000', suffix: '+' },
    { id: 3, label: 'Clients Connected', value: '350', suffix: '+' },
];

const Stats = () => {
    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="block text-[#50B849] font-medium text-lg mb-2">Our Technology</span>
                    <h3 className="text-[39px] lg:text-[47px] font-bold text-[#231F20] leading-tight">
                        지속적인 기술 개발과<br />누적된 특허 자산
                    </h3>
                    <p className="text-gray-500 mt-4 leading-relaxed">
                        끊임없는 연구 개발을 통해 확보한 고유의 독보적인 기술력으로<br />
                        고객에게 가장 신뢰할 수 있는 산업 안전 장비를 제공합니다.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
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
            </div>
        </section>
    );
};

export default Stats;
