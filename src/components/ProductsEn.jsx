import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const products = [
    { id: 1, title: 'Cut Resistant Gloves', image: '/assets/products/glove_cut_resistant.png' },
    { id: 2, title: 'NBR / Multi-purpose', image: '/assets/products/glove_nbr.png' },
    { id: 3, title: 'PU Gloves', image: '/assets/products/glove_pu.png' },
    { id: 4, title: 'Carbon Gloves', image: '/assets/products/glove_carbon.png' },
    { id: 5, title: 'Chemical Resistant', image: '/assets/products/glove_chemical.png' },
    { id: 6, title: 'Impact / Puncture', image: '/assets/products/glove_impact.png' },
];

const ProductsEn = () => {
    return (
        <section id="products" className="py-24 bg-[#F5F5F5]">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-[39px] font-bold text-[#231F20]">OUR PRODUCTS</h2>
                    <p className="text-gray-500 mt-2">Discover our specialized safety gear and equipment</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-x-3 md:gap-y-4">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative w-full aspect-square bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image */}
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                            {/* Text Content */}
                            <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full flex flex-col items-center text-center">
                                <h3 className="text-xl md:text-[31px] font-bold text-white mb-4 tracking-tighter leading-tight break-keep">{product.title}</h3>
                                <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-white hover:text-[#50B849] transition-all">
                                    <span>Learn More</span>
                                    <ArrowRight size={14} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ProductsEn;
