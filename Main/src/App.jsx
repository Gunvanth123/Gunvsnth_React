import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Git from './pages/Git';

const App = () => {
  return (
    <>
      <Header className='w-full' />
      <main style={{ minHeight: '80vh', padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/git" element={<Git />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
