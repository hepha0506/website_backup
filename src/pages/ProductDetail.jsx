import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
    // In a real app, you would fetch the product data based on this ID
    const { productId } = useParams();

    // Mock product data for the layout demonstration
    const product = {
        name: "절단 방지 특수 장갑 Pro-X9",
        category: "안전 장갑",
        description: "최고 등급의 베임 방지 소재를 사용하여 날카로운 물체로부터 작업자의 손을 완벽하게 보호합니다. 얇고 가벼우면서도 탁월한 내구성을 자랑하며, 정밀한 작업에도 적합합니다.",
        specs: {
            features: ["최고 수준의 베임 방지 (Level F)", "통기성이 뛰어난 특수 코팅", "뛰어난 그립감 및 착용감", "세탁 및 재사용 가능"],
            usage: ["유리 가공", "금속 판금 작업", "자동차 제조", "일반 건설 현장"],
            material: "HPPE, 유리섬유, 스판덱스, 폴리우레탄 코팅",
            size: "S, M, L, XL"
        },
        certs: [
            { name: "CE", icon: "CE" },
            { name: "EN388", icon: "EN388" }
        ],
        mainImage: "https://images.unsplash.com/photo-1599304724458-feccfb7b4831?w=800&auto=format&fit=crop",
        detailImages: [
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop"
        ]
    };

    return (
        <main className="bg-white min-h-screen pt-20"> {/* Add padding top for navbar */}
            {/* Breadcrumbs */}
            <div className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center text-sm text-gray-500">
                    <Link to="/" className="hover:text-[#50B849] transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <Link to="/products" className="hover:text-[#50B849] transition-colors">Products</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-gray-800 font-medium">{product.category}</span>
                </div>
            </div>

            {/* Product Top Section: Image & Summary */}
            <section className="py-12 md:py-20 max-w-7xl mx-auto px-6">
                <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-[#50B849] mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    <span className="font-medium">목록으로 돌아가기</span>
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left: Main Image */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12 flex items-center justify-center border border-gray-100 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-[#50B849]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img
                            src={product.mainImage}
                            alt={product.name}
                            className="w-full max-w-md object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Right: Product Details */}
                    <div className="flex flex-col justify-center">
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-bold mb-4 w-max">
                            {product.category}
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#231F20] mb-6 leading-tight">
                            {product.name}
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>

                        {/* Specifications Card */}
                        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 mb-8 space-y-6">
                            <h3 className="text-xl font-bold text-gray-800 flex items-center mb-6">
                                <span className="w-2 h-6 bg-[#50B849] rounded-full mr-3"></span>
                                제품 사양
                            </h3>

                            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-bold text-gray-500 mb-2">용도 (Usage)</dt>
                                    <dd className="text-sm text-gray-800 font-medium">
                                        <div className="flex flex-wrap gap-2">
                                            {product.specs.usage.map((item, idx) => (
                                                <span key={idx} className="bg-white px-3 py-1 rounded border border-gray-200 shadow-sm">{item}</span>
                                            ))}
                                        </div>
                                    </dd>
                                </div>
                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-bold text-gray-500 mb-2">특징 (Features)</dt>
                                    <dd className="text-sm text-gray-800 font-medium">
                                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                            {product.specs.features.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-bold text-gray-500 mb-1">소재 (Material)</dt>
                                    <dd className="text-sm text-gray-800 font-medium">{product.specs.material}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-bold text-gray-500 mb-1">사이즈 (Size)</dt>
                                    <dd className="text-sm text-gray-800 font-medium">{product.specs.size}</dd>
                                </div>
                            </dl>
                        </div>

                        {/* Certifications Card */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-200">
                            <h4 className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">인증 (Certifications)</h4>
                            <div className="flex gap-4">
                                {product.certs.map((cert, idx) => (
                                    <div key={idx} className="flex flex-col items-center justify-center bg-gray-50 w-20 h-20 rounded-xl border border-gray-100 hover:border-[#50B849] hover:bg-[#50B849]/5 transition-colors group">
                                        <span className="font-extrabold text-2xl text-gray-800 tracking-tighter group-hover:text-[#50B849]">{cert.icon}</span>
                                        <span className="text-[10px] text-gray-500 mt-1 uppercase font-bold">{cert.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom Detailed Description Images */}
            {product.detailImages && product.detailImages.length > 0 && (
                <section className="border-t border-gray-100 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6 py-20">
                        <div className="text-center mb-16">
                            <span className="text-[#50B849] font-medium text-lg mb-2 block">Detail Description</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#231F20]">제품 상세정보</h2>
                        </div>

                        <div className="flex flex-col gap-12 items-center">
                            {product.detailImages.map((imgUrl, idx) => (
                                <img
                                    key={idx}
                                    src={imgUrl}
                                    alt="Detailed product description"
                                    className="w-full h-auto rounded-3xl shadow-xl shadow-gray-200/50 object-cover"
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
};

export default ProductDetail;
