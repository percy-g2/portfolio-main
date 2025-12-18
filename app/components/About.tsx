'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 gradient-text text-center px-2">
            About Me
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="liquid-glass-strong rounded-2xl p-5 sm:p-6 md:p-8 hover:border-blue-500/50 transition-all relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500"
            />
            <div className="relative z-10">
              <motion.p 
                className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Mobile Engineer and AI Architect with{' '}
                <motion.span 
                  className="text-blue-400 font-semibold inline-block"
                  whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                >
                  11+ years
                </motion.span>
                {' '}of experience in mobile app development, delivering high-performance Android, iOS, Desktop, and Web applications.
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Proven expertise in{' '}
                <motion.span 
                  className="text-purple-400 font-semibold inline-block"
                  whileHover={{ scale: 1.1 }}
                >
                  Kotlin Multiplatform
                </motion.span>
                ,{' '}
                <motion.span 
                  className="text-purple-400 font-semibold inline-block"
                  whileHover={{ scale: 1.1 }}
                >
                  Compose Multiplatform
                </motion.span>
                , SwiftUI, UIKit, Jetpack Compose, Dart, Android SDK, and cross-platform architecture. Strong background in fintech, blockchain, AI-driven systems, and enterprise-grade applications.
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Adept at leading technical architecture, migrations, and scalable system design.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

