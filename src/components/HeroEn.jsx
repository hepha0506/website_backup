import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
    {
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        title: <>Over 60 Years of<br />Glove Manufacturing Excellence</>,
        subtitle: "Holding Multiple Patents and Certifications",
        link: "/about"
    },
    {
        image: '/assets/banners/hero_banner_1.png',
        title: <>Setting New Standards<br />for Industrial Safety</>,
        subtitle: "Optimized Protective Gear for Every Workplace",
        link: "/products"
    },
    {
        image: '/assets/banners/hero_banner_2.png',
        title: <>Protecting Your Safety<br />with Top Technology</>,
        subtitle: "Advanced Materials and Functional Coatings",
        link: "/products"
    }
];

const HeroEn = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentImageIndex]);

    const nextSlide = () => {
        setCurrentImageIndex((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    };

    return (
        <section className="relative h-screen w-full flex flex-col justify-center bg-gray-900 overflow-hidden group">
            <div className="absolute inset-0 z-0 bg-black/60">
                <AnimatePresence initial={false}>
                    <motion.img
                        key={currentImageIndex}
                        src={heroSlides[currentImageIndex].image}
                        alt="Hero Background"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className="absolute w-full h-full object-cover"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/50 z-10 transition-opacity duration-1000"></div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 md:p-4 rounded-full bg-white/10 text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm shadow-md"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 md:p-4 rounded-full bg-white/10 text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm shadow-md"
            >
                <ChevronRight size={32} />
            </button>

            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center mt-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-[47px] md:text-[78px] lg:text-[94px] font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                            {heroSlides[currentImageIndex].title}
                        </h1>
                        <p className="text-xl md:text-3xl text-gray-200 font-medium drop-shadow-sm mb-10">
                            {heroSlides[currentImageIndex].subtitle}
                        </p>
                        <a
                            href={heroSlides[currentImageIndex].link}
                            className="inline-block px-10 py-4 bg-[#50B849] text-white rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 mb-12"
                        >
                            Learn More
                        </a>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="absolute bottom-16 left-0 right-0 z-20 flex justify-center gap-4 md:gap-6 flex-wrap px-6 pointer-events-none">
                {["ISO 9001", "ISO 14001", "SMETA"].map((badge, i) => (
                    <div key={i} className="px-6 py-2 border border-white/60 text-white font-medium text-sm md:text-base tracking-wider bg-black/20 backdrop-blur-md cursor-default pointer-events-auto shadow-sm">
                        {badge}
                    </div>
                ))}
            </div>

            <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
                {heroSlides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${idx === currentImageIndex ? 'bg-[#50B849] w-8' : 'bg-white/50 hover:bg-white/80'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroEn;
