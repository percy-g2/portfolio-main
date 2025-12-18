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
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center"
        >
          Certifications
        </motion.h2>
        
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-500 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="p-3 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg">
                    <FaCertificate className="text-2xl text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{cert.name}</h3>
                  <p className="text-lg text-yellow-400 mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 mb-3">{cert.description}</p>
                  <p className="text-sm text-gray-500 mb-4">Issued: {cert.period}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>View Certificate</span>
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
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

