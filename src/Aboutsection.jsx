import React from 'react'
import Aboutcard from './Aboutcard'
import TypewriterComponent from 'typewriter-effect';


const Aboutsection = () => {
    return (
        <section id="about">
            <div class=" grid grid-cols-1 h-screen md:h-full xl:h-screen 2xl:h-screen md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                <div class="my-auto">
                    <h1 class="text-6xl text-center text-white font-extrabold">
                        <TypewriterComponent 
                        options={{ 
                            strings: [
                                "About",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 90,
                         }}
                        />
                    </h1>
                </div>
                <Aboutcard />
            </div>
        </section>)
}

export default Aboutsection