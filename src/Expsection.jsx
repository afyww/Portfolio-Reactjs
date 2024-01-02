import React from 'react';
import { motion } from 'framer-motion';

const Expsection = () => {
    return (
        <motion.div
            className='grid grid-cols-3 items-center mx-auto text-white p-2 xl:p-5 bg-black rounded-sm text-center'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div>
                <motion.h1
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='text-5xl font-extrabold'
                >
                    1+
                </motion.h1>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='text-sm font-semibold'
                >
                    Experience
                </motion.span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className='border-r-2 border-l-2'
            >
                <motion.h1
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='text-5xl font-extrabold'
                >
                    3^
                </motion.h1>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className='text-sm font-semibold'
                >
                    Projects
                </motion.span>
            </motion.div>

            <motion.div>
                <motion.h1
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className='text-5xl font-extrabold'
                >
                    10
                </motion.h1>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className='text-sm font-semibold'
                >
                    Certificate
                </motion.span>
            </motion.div>
        </motion.div>
    );
};

export default Expsection;
