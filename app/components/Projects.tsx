'use client'

import { motion } from 'framer-motion'
import { FaCode, FaBitcoin, FaExchangeAlt, FaGraduationCap, FaShieldAlt, FaRobot, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'KMP Joinstr - Bitcoin CoinJoin',
    description: 'Kotlin Multiplatform CoinJoin implementation using Nostr protocol. Privacy-enhanced Bitcoin transactions across Android, iOS, Desktop, and Web platforms. Features UTXO-based systems, E2EE, Secp256k1 cryptography, and Nostr relay integration.',
    icon: FaBitcoin,
    category: 'Blockchain & Open Source',
    link: 'https://github.com/percy-g2/kmp_joinstr',
    technologies: ['Kotlin Multiplatform', 'Compose Multiplatform', 'Nostr', 'Bitcoin', 'Secp256k1'],
  },
  {
    title: 'Aegean',
    description: 'User want to send BTC from his input address A to receiver B address anonymously',
    icon: FaRobot,
    category: 'Blockchain & Open Source',
    link: 'https://github.com/percy-g2/Aegean',
    technologies: ['Kotlin', 'Blockchain'],
  },
  {
    title: 'UTXO',
    description: 'Real-time crypto exchange & Bitcoin blockchain explorer',
    icon: FaBitcoin,
    category: 'Blockchain & Fintech',
    link: 'https://github.com/percy-g2/kmp_utxo',
    technologies: ['Android', 'Kotlin', 'Blockchain'],
  },
  {
    title: 'Delta Exchange',
    description: 'Futures trading platform',
    icon: FaExchangeAlt,
    category: 'Blockchain & Fintech',
    link: 'https://github.com/percy-g2/DeltaExchange',
    technologies: ['Android', 'Kotlin', 'Trading'],
  },
  {
    title: 'AI Grader',
    description: 'AI-powered university assessment grading system',
    icon: FaGraduationCap,
    category: 'AI & Education',
    technologies: ['Kotlin Multiplatform', 'AI', 'Education'],
  },
  {
    title: 'OMR Image Processing',
    description: 'High-accuracy engine for exam evaluation',
    icon: FaCode,
    category: 'AI & Education',
    technologies: ['Image Processing', 'OMR', 'AI'],
  },
  {
    title: 'Haven',
    description: 'Open-source personal security application',
    icon: FaShieldAlt,
    category: 'Open Source',
    link: 'https://github.com/guardianproject/haven',
    technologies: ['Android', 'Security', 'Privacy'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center"
        >
          Notable Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            const ProjectCard = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-pink-500 transition-all hover:scale-105 cursor-pointer h-full flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
                    <Icon className="text-2xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-sm text-gray-400">{project.category}</p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                </div>
                <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )
            return project.link ? (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {ProjectCard}
              </a>
            ) : (
              <div key={project.title}>{ProjectCard}</div>
            )
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Open Source Contributions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">CyanogenMod / LineageOS</h4>
                <p className="text-gray-300">
                  Recognized contributor to <span className="text-purple-400 font-semibold">CyanogenMod</span> and{' '}
                  <span className="text-purple-400 font-semibold">LineageOS</span>, collaborating on core Android OS components, 
                  device-specific optimizations, and custom firmware development. Contributed to improving device performance 
                  and user customization options across multiple device manufacturers.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Embedded Systems & IoT</h4>
                <p className="text-gray-300">
                  Built custom tooling and firmware for <span className="text-blue-400 font-semibold">BeagleBone</span> and{' '}
                  <span className="text-blue-400 font-semibold">Raspberry Pi</span> platforms, enabling innovative IoT solutions 
                  and embedded system development.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Blockchain & Privacy</h4>
                <p className="text-gray-300">
                  Active contributor to privacy-focused blockchain projects, including Bitcoin CoinJoin implementations and 
                  Nostr protocol integrations. Passionate about financial privacy and decentralized technologies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

