import React from 'react';
import Projectcard from './Projectcard';
import TypewriterComponent from 'typewriter-effect';

const Projectsection = () => {
  const typewriterOptions = {
    strings: ['Projects'],
    autoStart: true,
    loop: true,
    delay: 50,
  };

  return (
    <section id="project">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 h-screen">
        <div className="my-auto">
          <h1 className="text-6xl text-white font-extrabold text-center">
            <TypewriterComponent options={typewriterOptions} />
          </h1>
        </div>
        <Projectcard />
      </div>
    </section>
  );
};

export default Projectsection;
