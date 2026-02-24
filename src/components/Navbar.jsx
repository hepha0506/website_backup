import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    const location = useLocation();
    const isEn = location.pathname.startsWith('/en');

    const krNavLinks = [
        { name: '회사소개', href: '/about' },
        {
            name: '제품정보',
            href: '/products',
            dropdown: [
                { name: '프로살 (PROSAL)', href: '/products#brand-prosal', isInternal: true },
                { name: '헤파 (HEPHA)', href: '/products#brand-hepha', isInternal: true },
                { name: '기타 브랜드', href: '/products#brand-others', isInternal: true }
            ]
        },
        { name: '사업분야', href: '/business' },
        { name: '고객센터', href: '/customer' },
        {
            name: '직영몰',
            href: '#',
            dropdown: [
                { name: '프로셀 (PROSAL)', href: '#' },
                { name: '헤파 (HEPHA)', href: '#' },
                { name: '쉬메릭 (CHIMERIC)', href: '#' },
                { name: '네이버 블로그', href: '#' },
                { name: '유튜브', href: '#' }
            ]
        },
    ];

    const enNavLinks = [
        { name: 'About Us', href: '/en/about' },
        {
            name: 'Products',
            href: '/en/products',
            dropdown: [
                { name: 'Cut resistance', href: '/en/products#cut-resistance', isInternal: true },
                { name: 'ESD copper', href: '/en/products#esd-copper', isInternal: true },
                { name: 'ESD carbon', href: '/en/products#esd-carbon', isInternal: true },
                { name: 'ESD nylon', href: '/en/products#esd-nylon', isInternal: true },
                { name: 'Heat resistance', href: '/en/products#heat-resistance', isInternal: true },
                { name: 'General purpose', href: '/en/products#general-purpose', isInternal: true },
                { name: 'New technology', href: '/en/products#new-technology', isInternal: true },
                { name: 'Brochure', href: '#', isInternal: true }
            ]
        },
        {
            name: 'Technology',
            href: '/en/technology',
            dropdown: [
                { name: 'Korean made HPPE gloves', href: '/en/technology#korean-hppe', isInternal: true },
                { name: 'Soft PU coating', href: '/en/technology#soft-pu', isInternal: true },
                { name: 'NBR coating', href: '/en/technology#nbr', isInternal: true },
                { name: 'Smart touch', href: '/en/technology#smart-touch', isInternal: true },
                { name: 'Easy grip', href: '/en/technology#easy-grip', isInternal: true },
                { name: 'ESD protection', href: '/en/technology#esd-protection', isInternal: true },
                { name: 'Coreless, Eco- friendly, Highest level protection', href: '/en/technology#coreless', isInternal: true }
            ]
        },
        { name: 'Certifications & Patents', href: '/en/certifications' },
        { name: 'NEWS', href: '/en/news' },
        { name: 'Contact', href: '/en/contact' }
    ];

    const navLinks = isEn ? enNavLinks : krNavLinks;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
            <div className="max-w-[1600px] mx-auto px-6 h-20 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to={isEn ? '/en' : '/'} className="flex items-center">
                        <img
                            src="/logo02.jpg"
                            alt="HEUNGJE INT"
                            className="h-12"
                        />
                    </Link>
                </div>

                <div className="hidden md:flex space-x-10 items-center">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group h-full flex items-center"
                        >
                            {link.dropdown ? (
                                <>
                                    <button className="flex items-center text-sm font-medium text-[#231F20] group-hover:text-[#50B849] transition-colors gap-1 h-full">
                                        {link.name}
                                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
                                    </button>

                                    {/* Desktop Dropdown Layer */}
                                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl flex flex-col py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                        {/* Invisible hover bridge */}
                                        <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent"></div>
                                        {link.dropdown.map((subItem) => (
                                            subItem.isInternal ? (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.href}
                                                    className="px-5 py-3 text-sm text-[#231F20] hover:text-[#50B849] hover:bg-green-50/50 transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ) : (
                                                <a
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="px-5 py-3 text-sm text-[#231F20] hover:text-[#50B849] hover:bg-green-50/50 transition-colors"
                                                >
                                                    {subItem.name}
                                                </a>
                                            )
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    to={link.href}
                                    className="text-sm font-medium text-[#231F20] hover:text-[#50B849] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}

                    {/* Language Switcher */}
                    <div className="relative group h-full flex items-center ml-4 border-l border-gray-200 pl-8">
                        <button className="flex items-center text-sm font-medium text-[#231F20] group-hover:text-[#50B849] transition-colors gap-1 h-full">
                            <Globe className="w-4 h-4" />
                            <span>{isEn ? 'EN' : 'KR'}</span>
                            <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-180 ml-1" />
                        </button>
                        <div className="absolute top-14 right-0 w-32 bg-white border border-gray-100 rounded-xl shadow-xl flex flex-col py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                            <div className="absolute -top-4 right-0 left-0 h-4 bg-transparent"></div>
                            <Link
                                to="/"
                                className={`px-5 py-3 text-sm text-left transition-colors w-full ${!isEn ? 'text-[#50B849] font-bold bg-green-50/30' : 'text-gray-500 hover:text-[#231F20] hover:bg-gray-50'}`}
                            >
                                한국어 (KR)
                            </Link>
                            <Link
                                to="/en"
                                className={`px-5 py-3 text-sm text-left transition-colors w-full ${isEn ? 'text-[#50B849] font-bold bg-green-50/30' : 'text-gray-500 hover:text-[#231F20] hover:bg-gray-50'}`}
                            >
                                English (EN)
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[#231F20] p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 py-4 px-6 flex flex-col space-y-2 shadow-lg max-h-[80vh] overflow-y-auto">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            {link.dropdown ? (
                                <div className="space-y-1">
                                    <button
                                        onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                                        className="flex items-center justify-between w-full py-3 text-base font-bold text-[#231F20]"
                                    >
                                        {link.name}
                                        <ChevronDown className={`w-5 h-5 transition-transform ${isMobileDropdownOpen ? 'rotate-180 text-[#50B849]' : ''}`} />
                                    </button>
                                    <div className={`flex flex-col space-y-1 pl-4 overflow-hidden transition-all duration-300 ${isMobileDropdownOpen ? 'max-h-64 opacity-100 pb-2' : 'max-h-0 opacity-0'}`}>
                                        {link.dropdown.map((subItem) => (
                                            subItem.isInternal ? (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.href}
                                                    className="block py-2 text-sm text-gray-600 hover:text-[#50B849]"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ) : (
                                                <a
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="block py-2 text-sm text-gray-600 hover:text-[#50B849]"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {subItem.name}
                                                </a>
                                            )
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    to={link.href}
                                    className="block py-3 text-base font-bold text-[#231F20] hover:text-[#50B849] border-b border-gray-50 last:border-0"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}

                    {/* Mobile Language Switcher */}
                    <div className="pt-4 mt-2 border-t border-gray-100">
                        <div className="flex items-center justify-between py-2">
                            <span className="flex items-center text-sm font-bold text-gray-500 gap-2">
                                <Globe className="w-4 h-4" />
                                언어 선택
                            </span>
                            <div className="flex bg-gray-100 rounded-lg p-1">
                                <Link
                                    to="/"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-1.5 text-sm transition-colors rounded-md ${!isEn ? 'font-bold bg-white text-[#50B849] shadow-sm' : 'font-medium text-gray-500 hover:text-gray-800'}`}
                                >
                                    KR
                                </Link>
                                <Link
                                    to="/en"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-1.5 text-sm transition-colors rounded-md ${isEn ? 'font-bold bg-white text-[#50B849] shadow-sm' : 'font-medium text-gray-500 hover:text-gray-800'}`}
                                >
                                    EN
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
