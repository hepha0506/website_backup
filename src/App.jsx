import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HomeEn from './pages/HomeEn';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
import BusinessPage from './pages/BusinessPage';
import CustomerPage from './pages/CustomerPage';

// English Pages
import AboutEn from './pages/AboutEn';
import ProductsPageEn from './pages/ProductsPageEn';
import TechnologyEn from './pages/TechnologyEn';
import CertificationsEn from './pages/CertificationsEn';
import NewsEn from './pages/NewsEn';
import ContactEn from './pages/ContactEn';

function App() {
    return (
        <Router>
            <div className="font-sans antialiased bg-white text-[#231F20] selection:bg-[#50B849] selection:text-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/en" element={<HomeEn />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/products/:productId" element={<ProductDetail />} />
                    <Route path="/business" element={<BusinessPage />} />
                    <Route path="/customer" element={<CustomerPage />} />

                    {/* English Routes */}
                    <Route path="/en/about" element={<AboutEn />} />
                    <Route path="/en/products" element={<ProductsPageEn />} />
                    <Route path="/en/technology" element={<TechnologyEn />} />
                    <Route path="/en/certifications" element={<CertificationsEn />} />
                    <Route path="/en/news" element={<NewsEn />} />
                    <Route path="/en/contact" element={<ContactEn />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
