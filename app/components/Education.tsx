'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaSchool } from 'react-icons/fa'

const education = [
  {
    institution: 'Dr. D. Y. Patil Science & Computer Science College, Pune',
    degree: 'Bachelor of Science in Computer Science',
    period: '2011 – 2014',
    icon: FaGraduationCap,
  },
  {
    institution: 'Kendriya Vidyalayas (DRDO, ASC, BRD, Indian Air Force)',
    degree: 'High School',
    period: '1998 – 2011',
    icon: FaSchool,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center"
        >
          Education
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => {
            const Icon = edu.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="liquid-glass rounded-2xl p-6 hover:border-green-500/50 transition-all relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-600/0 via-teal-600/0 to-emerald-600/0 group-hover:from-green-600/20 group-hover:via-teal-600/20 group-hover:to-emerald-600/20 transition-all duration-500"
                />
                <div className="flex items-start gap-4 relative z-10">
                  <motion.div 
                    className="mt-1"
                    whileHover={{ 
                      rotate: [0, -15, 15, 0],
                      scale: 1.1,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <motion.div 
                      className="p-3 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg shadow-lg"
                      animate={{
                        boxShadow: [
                          '0 4px 6px rgba(5, 150, 105, 0.3)',
                          '0 8px 12px rgba(5, 150, 105, 0.5)',
                          '0 4px 6px rgba(5, 150, 105, 0.3)',
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <Icon className="text-2xl text-white" />
                    </motion.div>
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl font-bold text-white mb-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      {edu.degree}
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-green-400 mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {edu.institution}
                    </motion.p>
                    <p className="text-gray-400">{edu.period}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

