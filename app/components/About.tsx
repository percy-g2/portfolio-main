'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text text-center">
            About Me
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Senior Mobile Applications & Multiplatform Engineer with <span className="text-blue-400 font-semibold">11+ years</span> of experience 
              in mobile app development, delivering high-performance Android, iOS, Desktop, and Web applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Proven expertise in <span className="text-purple-400 font-semibold">Kotlin Multiplatform</span>, 
              <span className="text-purple-400 font-semibold"> Compose Multiplatform</span>, Android SDK, and cross-platform architecture. 
              Strong background in fintech, blockchain, AI-driven systems, and enterprise-grade applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Adept at leading technical architecture, migrations, and scalable system design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

