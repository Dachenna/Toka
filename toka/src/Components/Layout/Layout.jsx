import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../Sections/Home/Home';
import Navbar from '../Navbar'
import MobileMenu from '../MobileMenu';

export const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* Main content area */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
};