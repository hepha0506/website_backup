import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ContactEn = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for form submission logic
        alert('Thank you for your inquiry. We will get back to you shortly.');
        setFormData({
            name: '',
            email: '',
            company: '',
            subject: '',
            message: ''
        });
    };

    return (
        <main className="min-h-screen bg-gray-50 pt-20">
            {/* Header Section */}
            <section className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[#231F20]">
                    <img
                        src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop"
                        alt="Contact Banner"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-black/50 mix-blend-multiply z-10"></div>
                </div>
                <div className="relative z-20 text-center px-6">
                    <span className="text-[#50B849] font-bold tracking-widest mb-3 block uppercase text-sm">Get in Touch</span>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Contact Us</h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto drop-shadow-md font-light leading-relaxed">
                        Have a question about our products or partnership opportunities? Send us a message, and our team will get back to you promptly.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-20 md:py-24 max-w-[1200px] mx-auto px-6 -mt-20 relative z-30">
                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">

                    {/* Left: Contact Information Panel */}
                    <div className="lg:w-1/3 bg-[#231F20] text-white p-10 md:p-14 flex flex-col justify-between">
                        <div>
                            <h3 className="text-3xl font-bold mb-8 text-[#50B849]">Contact Information</h3>
                            <p className="text-gray-400 mb-12 leading-relaxed">
                                Fill out the form, and our sales and support team will contact you within 24 hours.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-[#50B849] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1">Headquarters (Korea)</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            45, Saebat-ro 100beon-gil,<br />Sasang-gu, Busan, Republic of Korea
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 text-[#50B849] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1">Phone</h4>
                                        <p className="text-gray-400 text-sm">
                                            +82 51 316 8282
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-[#50B849] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1">Email</h4>
                                        <p className="text-gray-400 text-sm">
                                            safeglove@naver.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Background Element */}
                        <div className="mt-16 w-32 h-32 rounded-full border border-white/10 relative overflow-hidden flex-shrink-0">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-[#50B849]/30"></div>
                        </div>
                    </div>

                    {/* Right: The Form */}
                    <div className="lg:w-2/3 p-10 md:p-14 flex items-center">
                        <form onSubmit={handleSubmit} className="w-full">
                            <h2 className="text-3xl font-bold text-[#231F20] mb-8">Send an Inquiry</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-[#50B849] transition-colors bg-transparent"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-[#50B849] transition-colors bg-transparent"
                                        placeholder="Company Ltd."
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-[#50B849] transition-colors bg-transparent"
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">Subject *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-[#50B849] transition-colors bg-transparent"
                                        placeholder="Inquiry about..."
                                    />
                                </div>
                            </div>

                            <div className="mb-10">
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-[#50B849] transition-colors bg-transparent resize-none"
                                    placeholder="Please describe your needs in detail..."
                                ></textarea>
                            </div>

                            <div className="flex justify-end">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="bg-[#50B849] text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider flex items-center gap-3 hover:bg-[#429a3c] transition-colors shadow-lg shadow-[#50B849]/30"
                                >
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default ContactEn;
