import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { motion } from "framer-motion";
import Navbar from './Navbar'
import Herosection from './Herosection'
import Scrolldown from './Scrolldown'
import Aboutsection from './Aboutsection';
import Expsection from './Expsection';
import Projectsection from './Projectsection';
import Techstack from './Techstack';
import Contactsection from './Contactsection';
import Footersection from './Footersection';


const commonMotionProps = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.0, ease: "easeInOut" },
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='flex min-h-screen bg-gradient-to-b from-gray-700 to-gray-900 flex-col'>
      <Navbar />
      <div className='max-w-full sm:max-w-full md:max-w-2xl xl:max-w-7xl 2xl:w-full mx-auto p-3 space-y-5'>
        <motion.div {...commonMotionProps}>
          <Herosection />
        </motion.div>
        <Scrolldown />
        <motion.div {...commonMotionProps}>
          <Aboutsection />
        </motion.div>
        <motion.div {...commonMotionProps}>
          <Expsection />
        </motion.div>
        <motion.div {...commonMotionProps}>
          <Projectsection />
        </motion.div>
        <motion.div {...commonMotionProps}>
          <Techstack />
        </motion.div>
        <motion.div {...commonMotionProps}>
          <Contactsection />
        </motion.div>
      </div>
      <div>
        <Footersection />
      </div>
    </main>
  </React.StrictMode>,
)
