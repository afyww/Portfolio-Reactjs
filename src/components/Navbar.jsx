import './App.css'
import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <section>
            <nav class="fixed z-50 top-0 right-20 left-20 mx-auto shadow-xl">
                <div class="mx-auto px-4">
                    <div class="flex justify-between">
                        <div>
                            <a href="/" class="flex items-center py-4 px-3 text-white">
                                <span class="font-extrabold text-4xl"><span
                                    class="text-black">CODE</span>FY.</span>
                            </a>
                        </div>
                        <div class=" hidden items-center md:flex xl:flex text-white">
                            <a href="#home" class="px-5 text-xl font-light hover:text-black hover:underline">Home</a>
                            <a href="#about" class="px-5 text-xl font-light hover:text-black hover:underline">About</a>
                            <a href="#project" class="px-5 text-xl font-light hover:text-black hover:underline">Projects</a>
                            <a href="#contact" class="px-5 text-xl font-light hover:text-black hover:underline">Contact</a>
                        </div>
                        <div class="md:hidden flex items-center">
                            <button class="mobile-menu-button" onClick={toggleMobileMenu}>
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="100px"
                                    height="100px">
                                    <path
                                        d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`mobile-menu md:hidden xl:hidden text-white ${isMobileMenuOpen ? '' : 'hidden'}`}>
                    <a href="#home" class="block py-3 px-5 text-sm hover:bg-black rounded-xl">Home</a>
                    <a href="#about" class="block py-3 px-5 text-sm hover:bg-black rounded-xl">About</a>
                    <a href="#project" class="block py-3 px-5 text-sm hover:bg-black rounded-xl">Projects</a>
                    <a href="#contact" class="block py-3 px-5 text-sm hover:bg-black rounded-xl">Contact</a>
                </div>
            </nav>
        </section>

    )
}

export default Navbar