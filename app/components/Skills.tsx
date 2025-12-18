'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Kotlin', 'Java', 'Swift / SwiftUI', 'JavaScript (ES6+)', 'C++', 'C#'],
  },
  {
    title: 'Mobile & Multiplatform',
    skills: ['Android SDK', 'Jetpack Compose', 'Compose Multiplatform (CMP)', 'Kotlin Multiplatform (KMP/KMM)', 'React Native'],
  },
  {
    title: 'Architecture & Design',
    skills: ['MVVM', 'MVI', 'Clean Architecture', 'Modular Design', 'Dependency Injection'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Coroutines', 'RxJava', 'Android Architecture Components', 'Firebase', 'Ktor (Client & Server)', 'Google Play Services'],
  },
  {
    title: 'Web & Backend',
    skills: ['Node.js', 'REST APIs', 'Angular', 'React.js', 'MongoDB', 'NanoHTTPD'],
  },
  {
    title: 'Blockchain & Cryptography',
    skills: ['UTXO-based systems', 'NFT platforms', 'dApps', 'Nostr protocol', 'Seed-phrase authentication', 'E2EE', 'Secp256k1'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center"
        >
          Core Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

