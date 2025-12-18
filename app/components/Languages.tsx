'use client'

import { motion } from 'framer-motion'
import { FaLanguage } from 'react-icons/fa'

const languages = [
  {
    name: 'English',
    proficiency: 'Fluent',
    level: 95,
  },
  {
    name: 'Hindi',
    proficiency: 'Native',
    level: 100,
  },
  {
    name: 'Punjabi',
    proficiency: 'Fluent',
    level: 95,
  },
  {
    name: 'Haryanvi',
    proficiency: 'Fluent',
    level: 95,
  },
  {
    name: 'Marathi',
    proficiency: 'Conversational',
    level: 70,
  },
  {
    name: 'Kannada',
    proficiency: 'Basic',
    level: 45,
  },
]

export default function Languages() {
  return (
    <section id="languages" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 gradient-text text-center px-2"
        >
          Spoken and Understandable Languages
        </motion.h2>
        
        <motion.div 
          className="liquid-glass-strong rounded-2xl p-5 sm:p-6 md:p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <FaLanguage className="text-2xl sm:text-3xl text-blue-400 flex-shrink-0" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Spoken and Understandable Languages</h3>
          </div>
          
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-1.5 sm:mb-2 gap-2">
                  <motion.span 
                    className="text-base sm:text-lg font-semibold text-white"
                    whileHover={{ scale: 1.1, color: '#a78bfa' }}
                  >
                    {lang.name}
                  </motion.span>
                  <motion.span 
                    className="text-xs sm:text-sm text-gray-400 flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    {lang.proficiency}
                  </motion.span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 sm:h-4 overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.2,
                      type: 'spring',
                      stiffness: 50
                    }}
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-3 sm:h-4 rounded-full relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: index * 0.2 + 1.5,
                      }}
                    />
                  </motion.div>
                  <motion.span
                    className="absolute right-1.5 sm:right-2 top-0 text-xs text-white font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 1.5 }}
                  >
                    {lang.level}%
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

