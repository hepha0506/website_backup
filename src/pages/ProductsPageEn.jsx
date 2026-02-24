import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const ProductsPageEn = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    const yOffset = -100; // Account for fixed navbar
                    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash]);

    // Helper function to generate a random number between min and max (inclusive)
    const getRandomCount = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    // We use useState to keep the random counts consistent across re-renders
    const [counts] = useState({
        newTechnology: getRandomCount(4, 6),
        cutResistance: getRandomCount(4, 6),
        esdAntiStatic: getRandomCount(4, 6),
        heatResistance: getRandomCount(4, 6),
        generalPurpose: getRandomCount(4, 6),
    });

    // Generator function for products
    const generateProducts = (categoryName, prefix, count, desc, tags) => {
        return Array.from({ length: count }, (_, i) => ({
            id: `${prefix}-${i}`,
            name: `${categoryName} Glove Series ${i + 1}`,
            desc: desc,
            image: i % 2 === 0 ? '/assets/products/prod_glove_1.png' : '/assets/products/prod_glove_3.png',
            tags: tags
        }));
    };

    // Placeholder data generators using the random counts
    const categories = [
        {
            id: 'new-technology',
            title: 'New Technology',
            subtitle: 'INNOVATION',
            colorName: 'text-purple-600',
            borderColor: 'border-purple-600',
            bgColor: '',
            products: generateProducts('Tech Innovator', 'tech', counts.newTechnology, "Next-generation gloves featuring our latest patented technologies", ["Eco-friendly", "Smart Touch"])
        },
        {
            id: 'cut-resistance',
            title: 'Cut Resistance',
            subtitle: 'PREMIUM PROTECTION',
            colorName: 'text-[#50B849]',
            borderColor: 'border-[#231F20]',
            bgColor: 'bg-gray-50',
            products: generateProducts('Cut Resistant', 'cut', counts.cutResistance, "High-strength cut resistant premium work gloves", ["Cut Resistant", "Anti-Slip"])
        },
        {
            id: 'esd-anti-static',
            title: 'ESD Anti-static',
            subtitle: 'ANTI-STATIC',
            colorName: 'text-blue-600',
            borderColor: 'border-blue-600',
            bgColor: '',
            products: generateProducts('ESD Anti-static', 'esd', counts.esdAntiStatic, "High-performance anti-static gloves (Copper/Carbon/Nylon options)", ["ESD", "Static Control"])
        },
        {
            id: 'heat-resistance',
            title: 'Heat Resistance',
            subtitle: 'THERMAL PROTECTION',
            colorName: 'text-red-500',
            borderColor: 'border-red-500',
            bgColor: 'bg-gray-50',
            products: generateProducts('Heat Resistant', 'heat', counts.heatResistance, "Specialized gloves for high-temperature work environments", ["Heat Resistant", "Safety"])
        },
        {
            id: 'general-purpose',
            title: 'General Purpose',
            subtitle: 'MULTI PURPOSE',
            colorName: 'text-orange-500',
            borderColor: 'border-gray-300',
            bgColor: '',
            products: generateProducts('General Purpose', 'gen', counts.generalPurpose, "Versatile gloves for various daily tasks and light industrial work", ["Multi-purpose", "Durable"])
        }
    ];

    // Brochures Data (English)
    const brochures = [
        {
            name: "PROSAL Brochure",
            desc: "Full product lineup guide for the premium functional glove brand PROSAL",
            color: "border-[#50B849]",
            textColor: "text-[#50B849]",
            bgColor: "hover:bg-[#50B849]"
        },
        {
            name: "HEPHA Brochure",
            desc: "Product guide for HEPHA, the specialized chemical-resistant glove brand",
            color: "border-blue-600",
            textColor: "text-blue-600",
            bgColor: "hover:bg-blue-600"
        },
        {
            name: "General Catalog",
            desc: "General catalog covering the entire Heungje Int. lineup and multi-purpose brands",
            color: "border-[#231F20]",
            textColor: "text-[#231F20]",
            bgColor: "hover:bg-[#231F20]"
        }
    ];

    const ProductCard = ({ product }) => (
        <motion.div
            whileHover={{ y: -5 }}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full cursor-pointer hover:border-[#50B849]"
        >
            <Link to={`/products/${product.id}`} className="flex flex-col h-full w-full">
                {/* Image Container */}
                <div className="bg-white p-4 md:p-6 aspect-square flex items-center justify-center relative overflow-hidden">
                    {/* Dark overlay and text shown on hover */}
                    <div className="absolute inset-0 group-hover:bg-black/50 transition-colors duration-300 z-20 flex items-center justify-center">
                        <span className="text-white font-bold tracking-wider text-sm md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg text-center px-2">View Details</span>
                    </div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain relative z-10 drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
                {/* Content */}
                <div className="p-4 md:p-6 flex flex-col flex-grow bg-gray-50/30">
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3">
                        {product.tags.map((tag, idx) => (
                            <span key={idx} className="px-2 py-0.5 md:px-2.5 md:py-1 bg-white border border-[#50B849]/30 text-[#50B849] text-[10px] md:text-xs rounded-md font-bold whitespace-nowrap">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h4 className="font-bold text-base md:text-xl text-[#231F20] mb-2 leading-tight">{product.name}</h4>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed flex-grow">{product.desc}</p>
                </div>
            </Link>
        </motion.div>
    );

    return (
        <main className="min-h-screen bg-white pt-20">
            {/* Header Section */}
            <section className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden mb-12">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/banners/products_banner.png"
                        alt="Products Banner"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                </div>
                <div className="relative z-20 text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                        Discover our comprehensive lineup completed with top quality and innovative technology.
                    </p>
                </div>
            </section>

            {/* Dynamic Product Categories */}
            {categories.map((category) => (
                <section key={category.id} className={`py-24 ${category.bgColor}`} id={category.id}>
                    <div className="max-w-[1600px] mx-auto px-6">
                        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 ${category.borderColor} pb-6`}>
                            <div>
                                <span className={`${category.colorName} font-bold tracking-wider mb-2 block`}>{category.subtitle}</span>
                                <h2 className="text-4xl font-black text-[#231F20]">{category.title}</h2>
                                <p className="text-gray-500 mt-2">Premium Series ({category.products.length} Items)</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                            {category.products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Brochures Download Section */}
            <section className="py-24 bg-gray-100 border-t border-gray-200" id="brochure">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="mb-16 text-center">
                        <span className="text-[#50B849] font-bold tracking-wider mb-2 block uppercase">Resources</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#231F20]">Download Brochures</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            Download the latest catalogs and brochures for each brand in PDF format.
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
                                    Download PDF
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

export default ProductsPageEn;
