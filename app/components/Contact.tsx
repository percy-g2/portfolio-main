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
          className="liquid-glass-strong rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                icon: FaEnvelope, 
                href: 'mailto:contact.prashantgahlot@gmail.com', 
                label: 'Email', 
                value: 'contact.prashantgahlot@gmail.com',
                color: 'text-purple-400',
                bgGradient: 'from-purple-600/20 to-pink-600/20'
              },
              { 
                icon: FaPhone, 
                href: 'tel:+918147057040', 
                label: 'Phone', 
                value: '+91 81470 57040',
                color: 'text-blue-400',
                bgGradient: 'from-blue-600/20 to-cyan-600/20'
              },
              { 
                icon: FaMapMarkerAlt, 
                href: null, 
                label: 'Location', 
                value: 'Meerut, Uttar Pradesh, India',
                color: 'text-pink-400',
                bgGradient: 'from-pink-600/20 to-rose-600/20'
              },
              { 
                icon: FaGithub, 
                href: 'https://github.com/percy-g2', 
                label: 'GitHub', 
                value: 'percy-g2',
                color: 'text-gray-300',
                bgGradient: 'from-gray-600/20 to-gray-800/20'
              },
              { 
                icon: FaLinkedin, 
                href: 'https://www.linkedin.com/in/prashant-gahlot-37914988/', 
                label: 'LinkedIn', 
                value: 'Prashant Gahlot',
                color: 'text-blue-500',
                bgGradient: 'from-blue-500/20 to-blue-700/20'
              },
            ].map((item, index) => {
              const Icon = item.icon
              const Component = item.href ? motion.a : motion.div
              const props = item.href 
                ? { 
                    href: item.href, 
                    target: item.href.startsWith('http') ? '_blank' : undefined,
                    rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined
                  }
                : {}
              
              return (
                <Component
                  key={index}
                  {...props}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ 
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-4 p-4 liquid-glass-subtle rounded-lg relative overflow-hidden group`}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -15, 15, 0],
                      scale: 1.2,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <Icon className={`text-3xl ${item.color} relative z-10`} />
                  </motion.div>
                  <div className="relative z-10">
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                </Component>
              )
            })}
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

