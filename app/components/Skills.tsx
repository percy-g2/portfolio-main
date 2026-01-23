'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Kotlin', 'Java', 'Swift', 'SwiftUI', 'JavaScript (ES6+)', 'C', 'C++', 'C#', 'Assembly'],
  },
  {
    title: 'Mobile & Multiplatform',
    skills: ['Android SDK', 'Jetpack Compose', 'Compose Multiplatform (CMP)', 'Kotlin Multiplatform (KMP/KMM)', 'React Native', 'Flutter', 'iOS/mac/iPad App Development', 'UIKit', 'TestFlight (iOS)'],
  },
  {
    title: 'Architecture & Design',
    skills: ['MVVM', 'MVI', 'Clean Architecture', 'Modular Design', 'Dependency Injection', 'OOPS'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Coroutines', 'RxJava', 'Android Architecture Components', 'Firebase', 'Ktor (Client & Server)', 'Google Play Services', 'Open Telemetry', 'Sentry', 'Custom Framework', 'Analytics Custom Libraries', 'Authentication', 'Cloud Messaging (Push Notifications)', 'Crashlytics', 'Redux / MobX', 'Riverpod / Bloc / Provider', 'Lottie', 'Shimmer', 'Framer Motion (RN)'],
  },
  {
    title: 'Databases',
    skills: ['Room DB', 'SQLite', 'MongoDB', 'Firestore', 'Realtime DB'],
  },
  {
    title: 'Web & Backend',
    skills: ['Node.js', 'Next.js', 'TypeScript', 'REST APIs', 'Angular', 'React.js', 'NanoHTTPD'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'Gerrit', 'Jenkins', 'DevOps', 'Confluence', 'Jira', 'Fastlane', 'GitHub Actions', 'Bitrise', 'CircleCI'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['AI Agents', 'AI Architecture'],
  },
  {
    title: 'Design & UX',
    skills: ['UX Research', 'Material Design Components'],
  },
  {
    title: 'Systems & Embedded',
    skills: ['Linux Kernel Development', 'Android Kernel Development', 'Device Driver Development', 'ARM Architecture', 'Kernel Debugging', 'Bootloader Development', 'Custom ROM Development', 'Embedded Operating System', 'Low-level System Programming', 'Kernel Profiling'],
  },
  {
    title: 'Blockchain & Cryptography',
    skills: ['UTXO-based systems', 'NFT platforms', 'dApps', 'Nostr protocol', 'Seed-phrase authentication', 'E2EE', 'Secp256k1'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 gradient-text text-center px-2"
        >
          Core Skills
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-center text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto italic px-2"
        >
          This is an overview of my key technical skills. I have extensive experience with many more technologies and tools across various domains.
        </motion.p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="liquid-glass rounded-2xl p-4 sm:p-5 md:p-6 hover:border-blue-500/50 transition-all relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500"
              />
              <motion.h3 
                className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 relative z-10"
                whileHover={{ scale: 1.05 }}
              >
                {category.title}
              </motion.h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + i * 0.03,
                      type: 'spring',
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs sm:text-sm text-white cursor-default shadow-lg hover:shadow-blue-500/50 transition-shadow"
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

