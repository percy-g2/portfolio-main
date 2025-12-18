'use client'

import { motion } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'

const certifications = [
  {
    name: 'Associate Android Developer',
    issuer: 'Google',
    period: '2017-2020',
    link: 'https://www.credential.net/sbng4gyj',
    description: 'Google Associate Developer certification demonstrating proficiency in Android development, app architecture, and best practices',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 gradient-text text-center px-2"
        >
          Certifications
        </motion.h2>
        
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="liquid-glass rounded-2xl p-4 sm:p-5 md:p-6 hover:border-yellow-500/50 transition-all relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-600/0 via-orange-600/0 to-amber-600/0 group-hover:from-yellow-600/20 group-hover:via-orange-600/20 group-hover:to-amber-600/20 transition-all duration-500"
              />
              <div className="flex items-start gap-3 sm:gap-4 relative z-10">
                <motion.div 
                  className="mt-1 flex-shrink-0"
                  whileHover={{ 
                    rotate: [0, -20, 20, 0],
                    scale: 1.2,
                    transition: { duration: 0.6 }
                  }}
                >
                  <motion.div 
                    className="p-2 sm:p-3 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg shadow-lg"
                    animate={{
                      boxShadow: [
                        '0 4px 6px rgba(234, 179, 8, 0.3)',
                        '0 8px 16px rgba(234, 179, 8, 0.5)',
                        '0 4px 6px rgba(234, 179, 8, 0.3)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <FaCertificate className="text-lg sm:text-xl md:text-2xl text-white" />
                  </motion.div>
                </motion.div>
                <div className="flex-1 min-w-0">
                  <motion.h3 
                    className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    {cert.name}
                  </motion.h3>
                  <motion.p 
                    className="text-base sm:text-lg text-yellow-400 mb-1 sm:mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {cert.issuer}
                  </motion.p>
                  <p className="text-sm sm:text-base text-gray-400 mb-2 sm:mb-3">{cert.description}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Issued: {cert.period}</p>
                  {cert.link && (
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ minHeight: '44px' }}
                    >
                      <span>View Certificate</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      >
                        <FaExternalLinkAlt className="text-xs sm:text-sm" />
                      </motion.span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

