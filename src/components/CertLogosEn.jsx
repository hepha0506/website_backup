import React from 'react';
import { motion } from 'framer-motion';

const certLogos = [
    { title: "ISO 9001", image: "/assets/certs/iso_9001.png" },
    { title: "ISO 14001", image: "/assets/certs/iso_14001.png" },
    { title: "SMETA", image: "/assets/certs/smeta.png" },
    { title: "OEKO-TEX", image: "/assets/certs/oeko_tex.png" }
];

const CertLogosEn = () => {
    return (
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {certLogos.map((cert, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            key={index}
                            className="flex items-center justify-center p-4 md:p-6"
                        >
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="max-h-20 md:max-h-24 w-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertLogosEn;
