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
]

export default function Languages() {
  return (
    <section id="languages" className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center"
        >
          Languages
        </motion.h2>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="flex items-center gap-4 mb-6">
            <FaLanguage className="text-3xl text-blue-400" />
            <h3 className="text-2xl font-bold text-white">Spoken Languages</h3>
          </div>
          
          <div className="space-y-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-white">{lang.name}</span>
                  <span className="text-sm text-gray-400">{lang.proficiency}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

