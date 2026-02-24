import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const ProductsPage = () => {
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

    // Placeholder data generators
    const prosalProducts = Array.from({ length: 7 }, (_, i) => ({
        id: `prosal-${i}`,
        name: `프로살 프리미엄 안전장갑 P-${100 + i}`,
        desc: "초고강도 내절단성 프리미엄 작업용 장갑",
        image: i % 2 === 0 ? '/assets/products/prod_glove_1.png' : '/assets/products/prod_glove_3.png',
        tags: ["내절단", "미끄럼방지"]
    }));

    const hephaProducts = Array.from({ length: 3 }, (_, i) => ({
        id: `hepha-${i}`,
        name: `헤파 내화학 고무장갑 H-${50 + i}`,
        desc: "우수한 내화학성 및 그립감을 자랑하는 니트릴 장갑",
        image: '/assets/products/prod_glove_2.png',
        tags: ["내화학", "방수"]
    }));

    const otherProducts = Array.from({ length: 4 }, (_, i) => ({
        id: `other-${i}`,
        name: `고시인성 충격방지 장갑 V-${200 + i}`,
        desc: "어두운 작업 환경에 적합한 내충격 다목적 장갑",
        image: '/assets/products/prod_glove_4.png',
        tags: ["다목적", "충격흡수"]
    }));

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
                        <span className="text-white font-bold tracking-wider text-sm md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg text-center px-2">상세보기</span>
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
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">제품 정보</h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                        최고의 품질과 혁신적인 기술력으로 완성된 브랜드별 라인업을 만나보세요.
                    </p>
                </div>
            </section>

            {/* PROSAL Section */}
            <section className="py-24 max-w-[1600px] mx-auto px-6" id="brand-prosal">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 border-[#231F20] pb-6">
                    <div>
                        <span className="text-[#50B849] font-bold tracking-wider mb-2 block">PREMIUM PROTECTION</span>
                        <h2 className="text-4xl font-black text-[#231F20]">PROSAL</h2>
                        <p className="text-gray-500 mt-2">최고급 기능성 장갑 라인업 (총 7종)</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                    {prosalProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* HEPHA Section - Darker Background */}
            <section className="py-24 bg-gray-50" id="brand-hepha">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 border-[#231F20] pb-6">
                        <div>
                            <span className="text-blue-600 font-bold tracking-wider mb-2 block">CHEMICAL RESISTANT</span>
                            <h2 className="text-4xl font-black text-[#231F20]">HEPHA</h2>
                            <p className="text-gray-500 mt-2">특수 표면 처리 장갑 라인업 (총 3종)</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                        {hephaProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Brands Section */}
            <section className="py-24 max-w-[1600px] mx-auto px-6" id="brand-others">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 border-gray-300 pb-6">
                    <div>
                        <span className="text-orange-500 font-bold tracking-wider mb-2 block">MULTI PURPOSE</span>
                        <h2 className="text-4xl font-black text-[#231F20]">기타 브랜드</h2>
                        <p className="text-gray-500 mt-2">다목적 작업용 보호 장갑 라인업 (총 4종)</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                    {otherProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

        </main>
    );
};

export default ProductsPage;
