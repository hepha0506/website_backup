import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#231F20] text-gray-400 py-16 text-sm">
            <div className="max-w-[1600px] mx-auto px-6 text-center">
                <div className="flex flex-col items-center justify-center space-y-8">

                    <div className="flex flex-col items-center">
                        <h5 className="text-2xl font-bold text-white mb-4">HEUNGJE INT</h5>
                        <div className="space-y-1 text-sm font-light">
                            <p>(주)형제인터내셔널 | 대표: 이상윤</p>
                            <p>대구광역시 중구 달구벌대로 2204</p>
                            <p>사업자등록번호: 000-00-00000</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="mb-4 text-center">
                            <p className="text-xs text-gray-500 mb-1">Customer Center</p>
                            <p className="text-xl font-bold text-white">053-426-0506</p>
                            <p className="text-xs text-gray-500 mt-1">prosal@naver.com</p>
                        </div>
                        <div className="flex space-x-6 justify-center text-xs">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                        </div>
                    </div>

                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-600">
                    © 2024 Heungje International. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
