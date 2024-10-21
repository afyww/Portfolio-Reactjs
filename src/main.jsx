import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { motion } from "framer-motion";
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Scrolldown from './components/Scrolldown'
import Aboutsection from './components/Aboutsection';
import Expsection from './components/Expsection';
import Projectsection from './components/Projectsection';
import Techstack from './components/Techstack';
import Contactsection from './components/Contactsection';
import Footersection from './components/Footersection';


const commonMotionProps = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.0, ease: "easeInOut" },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='flex min-h-screen bg-gradient-to-b from-gray-700 to-gray-900 flex-col'>
      <Navbar />
      <div className='max-w-full sm:max-w-full md:max-w-6xl xl:max-w-7xl mx-auto p-3 space-y-5'>
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
