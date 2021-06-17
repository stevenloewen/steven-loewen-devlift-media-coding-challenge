import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';

function Header(props) {
    return (
        <header>
            <Navbar />
            <Hero />       
        </header>
    );
}

export default Header;