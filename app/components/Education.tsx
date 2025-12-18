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
    institution: 'High School',
    degree: 'Science Stream',
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className="p-3 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg">
                      <Icon className="text-2xl text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-lg text-green-400 mb-2">{edu.institution}</p>
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

