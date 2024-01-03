import './App.css'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <section>
            <nav className="fixed z-50 top-0 right-20 left-20 mx-auto shadow-xl">
                <div className="mx-auto px-4">
                    <div className="flex justify-between">
                        <div>
                            <a href="/" className="flex items-center py-4 px-3 text-white">
                                <span className="font-extrabold text-4xl"><span
                                    className="text-black">CODE</span>FY.</span>
                            </a>
                        </div>
                        <div className=" hidden items-center md:flex xl:flex text-white">
                            <a href="#home" className="px-5 text-xl font-light hover:text-black hover:underline">Home</a>
                            <a href="#about" className="px-5 text-xl font-light hover:text-black hover:underline">About</a>
                            <a href="#project" className="px-5 text-xl font-light hover:text-black hover:underline">Projects</a>
                            <a href="#contact" className="px-5 text-xl font-light hover:text-black hover:underline">Contact</a>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="100px"
                                    height="100px">
                                    <path
                                        d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`mobile-menu md:hidden xl:hidden text-white ${isMobileMenuOpen ? '' : 'hidden'}`}>
                    <a href="#home" className="block py-3 px-5 text-sm hover:bg-black rounded-xl">Home</a>
                    <a href="#about" className="block py-3 px-5 text-sm hover:bg-black rounded-xl">About</a>
                    <a href="#project" className="block py-3 px-5 text-sm hover:bg-black rounded-xl">Projects</a>
                    <a href="#contact" className="block py-3 px-5 text-sm hover:bg-black rounded-xl">Contact</a>
                </div>
            </nav>
        </section>

    )
}

export default Navbar