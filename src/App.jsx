import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import BusinessPage from './pages/BusinessPage';
import CustomerPage from './pages/CustomerPage';

function App() {
    return (
        <Router>
            <div className="font-sans antialiased bg-white text-[#231F20] selection:bg-[#50B849] selection:text-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/business" element={<BusinessPage />} />
                    <Route path="/customer" element={<CustomerPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
