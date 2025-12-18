'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center"
        >
          Get In Touch
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:contact.prashantgahlot@gmail.com"
              className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all hover:scale-105"
            >
              <FaEnvelope className="text-3xl text-purple-400" />
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-semibold">contact.prashantgahlot@gmail.com</p>
              </div>
            </a>
            
            <a
              href="tel:+918147057040"
              className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all hover:scale-105"
            >
              <FaPhone className="text-3xl text-blue-400" />
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-semibold">+91 81470 57040</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg">
              <FaMapMarkerAlt className="text-3xl text-pink-400" />
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-semibold">Meerut, Uttar Pradesh, India</p>
              </div>
            </div>
            
            <a
              href="https://github.com/percy-g2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all hover:scale-105"
            >
              <FaGithub className="text-3xl text-gray-300" />
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <p className="text-white font-semibold">percy-g2</p>
              </div>
            </a>
            
            <a
              href="https://www.linkedin.com/in/prashant-gahlot-37914988/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all hover:scale-105"
            >
              <FaLinkedin className="text-3xl text-blue-500" />
              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <p className="text-white font-semibold">Prashant Gahlot</p>
              </div>
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-400"
        >
          <p>© 2024 Prashant Gahlot. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}

