import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const TechnologyEn = () => {
    const { hash } = useLocation();

    // Scroll to section based on hash
    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash]);

    // Data for each technology section
    const technologies = [
        {
            id: 'korean-hppe',
            title: 'Korean made HPPE Gloves',
            subtitle: 'Premium Cut Resistance',
            desc: 'Manufactured using 100% authentic Korean High-Performance Polyethylene (HPPE). We offer world-class cut resistance, superior durability, and an exceptionally comfortable fit that sets a new standard for industrial safety. Feel the difference of genuine Korean craftsmanship.',
            bgImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop', // Strong, industrial background
            overlay: 'bg-black/40',
            textColor: 'text-white'
        },
        {
            id: 'soft-pu',
            title: 'Soft PU Coating',
            subtitle: 'Breathable & Flexible',
            desc: 'Our advanced Polyurethane (PU) coating technology delivers an incredibly soft and flexible touch. Designed for precision work, it maintains tactile sensitivity while providing excellent breathability, keeping your hands dry and comfortable all day long.',
            bgImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop', // Clean, technical background
            overlay: 'bg-gradient-to-r from-gray-900/80 to-transparent',
            textColor: 'text-white',
            align: 'left' // text aligned to left
        },
        {
            id: 'nbr',
            title: 'NBR Coating',
            subtitle: 'Oil & Chemical Defense',
            desc: 'Nitrile Butadiene Rubber (NBR) coating provides unparalleled resistance against oils, greases, and harsh chemicals. Engineered for tough environments, it guarantees a firm grip on oily surfaces and outstanding abrasion resistance.',
            bgImage: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070&auto=format&fit=crop', // Dynamic, industrial liquid/oil vibe
            overlay: 'bg-gradient-to-l from-black/80 to-transparent',
            textColor: 'text-white',
            align: 'right' // text aligned to right
        },
        {
            id: 'smart-touch',
            title: 'Smart Touch',
            subtitle: 'Seamless Interaction',
            desc: 'Stay connected without compromising safety. Our Smart Touch technology integrates conductive elements seamlessly, allowing you to operate touch-screen devices smoothly without ever needing to remove your protective gloves.',
            bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop', // High-tech, digital interface vibe
            overlay: 'bg-black/50',
            textColor: 'text-white',
            align: 'center'
        },
        {
            id: 'easy-grip',
            title: 'Easy Grip',
            subtitle: 'Ergonomic Control',
            desc: 'Experience absolute control with our micro-finished Easy Grip surface. It maximizes friction in both dry and wet conditions, significantly reducing hand fatigue during prolonged tasks by requiring less force to hold tools securely.',
            bgImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop', // Detail-oriented, holding tools vibe
            overlay: 'bg-gradient-to-t from-black/70 via-black/20 to-transparent',
            textColor: 'text-white',
            align: 'bottom'
        },
        {
            id: 'esd-protection',
            title: 'ESD Protection',
            subtitle: 'Anti-Static Assurance',
            desc: 'Safeguard sensitive electronic components. Our ESD (Electrostatic Discharge) protective gloves are woven with specialized carbon and copper fibers, ensuring reliable static dissipation required in advanced manufacturing and cleanroom environments.',
            bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop', // PCB, electronics background
            overlay: 'bg-gradient-to-r from-blue-900/80 to-transparent',
            textColor: 'text-white',
            align: 'left'
        },
        {
            id: 'coreless',
            title: 'Coreless',
            subtitle: 'Skin-Friendly Comfort',
            desc: 'Our Coreless technology removes harsh fiberglass and steel elements while maintaining exceptional durability. It provides an incredibly soft, irritation-free experience that feels as comfortable as a second skin without compromising safety.',
            bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
            overlay: 'bg-gradient-to-t from-black/80 via-black/30 to-transparent',
            textColor: 'text-white',
            align: 'center'
        },
        {
            id: 'eco-friendly',
            title: 'Eco-Friendly',
            subtitle: 'Sustainable Innovation',
            desc: 'We are committed to a greener future. Our sustainable manufacturing processes actively reduce our environmental footprint by utilizing eco-conscious materials, ensuring you protect the earth while protecting your hands.',
            bgImage: 'https://images.unsplash.com/photo-1621451537084-482c73073e0f?q=80&w=1974&auto=format&fit=crop',
            overlay: 'bg-black/40 backdrop-blur-[2px]',
            textColor: 'text-white',
            align: 'right'
        },
        {
            id: 'high-level-protection',
            title: 'High Level Protection',
            subtitle: 'Uncompromising Safety',
            desc: 'Engineered for the most demanding environments, this technology achieves the highest cut resistance levels available. It provides maximum defense against severe lacerations, shielding you from extreme occupational hazards.',
            bgImage: 'https://images.unsplash.com/photo-1541888086925-ebcf13b3e34b?q=80&w=2073&auto=format&fit=crop',
            overlay: 'bg-gradient-to-r from-gray-900/80 to-transparent',
            textColor: 'text-white',
            align: 'left'
        }
    ];

    return (
        <main className="bg-black snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden scroll-smooth">

            {/* Header / Intro section (Optional intro to Tech page) */}
            <section className="relative w-full h-screen snap-center flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/banners/business_banner.png"
                        alt="Technology Intro"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10"></div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-20 text-center px-6 max-w-4xl"
                >
                    <span className="text-[#50B849] font-bold tracking-[0.2em] mb-4 block uppercase text-sm md:text-base">Heungje Innovation</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Advanced Technology</h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                        Discover the engineering excellence that makes our gloves the industry benchmark for safety, comfort, and performance.
                    </p>
                    <div className="mt-12 animate-bounce flex justify-center text-white/50">
                        <span className="text-sm tracking-widest uppercase">Scroll Down</span>
                    </div>
                </motion.div>
            </section>

            {/* Render each technology as a full-screen hero section */}
            {technologies.map((tech, index) => {

                // Determine text alignment classes based on the 'align' property
                let alignClasses = "items-center justify-center text-center"; // Default center
                if (tech.align === 'left') alignClasses = "items-center justify-start text-left";
                if (tech.align === 'right') alignClasses = "items-center justify-end text-right";
                if (tech.align === 'bottom') alignClasses = "items-end justify-center text-center pb-32";

                return (
                    <section
                        key={tech.id}
                        id={tech.id}
                        className="relative w-full h-screen snap-center overflow-hidden flex"
                    >
                        {/* Background Image Container */}
                        <div className="absolute inset-0 z-0">
                            <motion.img
                                initial={{ scale: 1.1 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                src={tech.bgImage}
                                alt={tech.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay for text readability */}
                            <div className={`absolute inset-0 ${tech.overlay} z-10`}></div>
                        </div>

                        {/* Content Container */}
                        <div className={`relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-24 flex ${alignClasses}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`max-w-3xl ${tech.textColor}`}
                            >
                                <span className={`font-bold tracking-[0.2em] mb-4 block uppercase text-sm md:text-base ${tech.textColor === 'text-white' ? 'text-white/70' : 'text-[#50B849]'}`}>
                                    {tech.subtitle}
                                </span>
                                <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight drop-shadow-lg">
                                    {tech.title}
                                </h2>
                                <p className="text-lg md:text-xl font-light leading-relaxed tracking-wide drop-shadow-md opacity-90">
                                    {tech.desc}
                                </p>
                            </motion.div>
                        </div>
                    </section>
                )
            })}
        </main>
    );
};

export default TechnologyEn;
