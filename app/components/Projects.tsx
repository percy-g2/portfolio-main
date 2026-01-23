'use client'

import { motion } from 'framer-motion'
import { FaCode, FaBitcoin, FaExchangeAlt, FaGraduationCap, FaShieldAlt, FaRobot, FaGithub, FaMicrochip, FaCog } from 'react-icons/fa'

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
  {
    title: 'Android Kernel Motorola MSM8610',
    description: 'Comprehensive Android kernel development for Motorola MSM8610 platform. Features 348,724+ commits with core kernel components including architecture files, device drivers, filesystem modules, crypto subsystems, and CyanogenMod 12.1 integration. Low-level system programming enabling custom ROM support and device-specific optimizations.',
    icon: FaMicrochip,
    category: 'Kernel & OS Development',
    link: 'https://github.com/percy-g2/android_kernel_motorola_msm8610',
    technologies: ['C', 'Linux Kernel', 'Android Kernel', 'Device Drivers', 'ARM Architecture', 'CyanogenMod'],
  },
  {
    title: 'GNU Kernel Samsung Galaxy Y',
    description: 'Embedded Linux kernel development for Samsung Galaxy Y (GT-S5360). Custom kernel implementation with architecture-specific optimizations, kernel modules, and ramdisk integration. Demonstrates deep understanding of low-level system programming, ARM architecture, and embedded Linux systems.',
    icon: FaCog,
    category: 'Kernel & OS Development',
    link: 'https://github.com/percy-g2/GNU-kernel',
    technologies: ['C', 'Assembly', 'Linux Kernel', 'Embedded Systems', 'ARM', 'Shell'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 gradient-text text-center px-2"
        >
          Notable Projects
        </motion.h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            const ProjectCard = (
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -15,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="liquid-glass rounded-2xl p-4 sm:p-5 md:p-6 hover:border-pink-500/50 transition-all cursor-pointer h-full flex flex-col relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:via-pink-600/20 group-hover:to-blue-600/20 transition-all duration-500"
                />
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 relative z-10">
                  <motion.div 
                    className="p-2 sm:p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex-shrink-0"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <Icon className="text-lg sm:text-xl md:text-2xl text-white" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <motion.h3 
                      className="text-base sm:text-lg md:text-xl font-bold text-white truncate"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-xs sm:text-sm text-gray-400 truncate">{project.category}</p>
                  </div>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      style={{ minWidth: '24px', minHeight: '24px' }}
                    >
                      <FaGithub className="text-lg sm:text-xl" />
                    </motion.a>
                  )}
                </div>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 flex-1 relative z-10">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 relative z-10">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-2 py-0.5 sm:py-1 bg-gray-700/50 rounded text-xs text-gray-300 hover:bg-gray-600/50 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
            return project.link ? (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileTap={{ scale: 0.95 }}
              >
                {ProjectCard}
              </motion.a>
            ) : (
              <div key={project.title}>{ProjectCard}</div>
            )
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center px-2"
        >
          <p className="text-gray-400 text-sm sm:text-base md:text-lg italic max-w-3xl mx-auto">
            With over <span className="text-purple-400 font-semibold">100+ repositories</span> spanning diverse domains, 
            I've curated a selection of my most impactful work here. Each project represents a unique challenge solved, 
            a new technology mastered, or an idea brought to life. While this showcase highlights the cream of the crop, 
            there's a treasure trove of innovation waiting to be explored in my GitHub universe.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.01 }}
          className="mt-8 sm:mt-10 md:mt-12"
        >
          <motion.div 
            className="liquid-glass-strong rounded-2xl p-5 sm:p-6 md:p-8 hover:border-purple-500/50 transition-all relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-pink-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:via-pink-600/10 group-hover:to-blue-600/10 transition-all duration-500"
            />
            <motion.h3 
              className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              Open Source Contributions
            </motion.h3>
            <div className="space-y-3 sm:space-y-4 relative z-10">
              {[
                {
                  title: 'CyanogenMod / LineageOS',
                  color: 'text-purple-400',
                  highlights: ['CyanogenMod', 'LineageOS', 'Motorola MSM8610', 'Samsung Galaxy Y', 'Legacy-Xperia', 'AndroidOpenSourceXperia', 'XperiaSTE', 'Motorola-CyanogenMod'],
                  description: 'Recognized contributor to CyanogenMod and LineageOS, collaborating on core Android OS components, device-specific optimizations, and custom firmware development. Developed Android kernels for Motorola MSM8610 and Samsung Galaxy Y (GT-S5360) platforms, featuring comprehensive kernel architecture work including device drivers, filesystem modules, crypto subsystems, and bootloader integration. Active member of multiple Android kernel development organizations including Legacy-Xperia, AndroidOpenSourceXperia, XperiaSTE, and Motorola-CyanogenMod. Contributed to improving device performance, kernel-level optimizations, and user customization options across multiple device manufacturers.',
                },
                {
                  title: 'Embedded Systems & IoT',
                  color: 'text-blue-400',
                  highlights: ['BeagleBone', 'Raspberry Pi'],
                  description: 'Built custom tooling and firmware for BeagleBone and Raspberry Pi platforms, enabling innovative IoT solutions and embedded system development.',
                },
                {
                  title: 'Blockchain & Privacy',
                  color: 'text-green-400',
                  highlights: [],
                  description: 'Active contributor to privacy-focused blockchain projects, including Bitcoin CoinJoin implementations and Nostr protocol integrations. Passionate about financial privacy and decentralized technologies.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.h4 
                    className={`text-base sm:text-lg font-semibold ${item.color} mb-1 sm:mb-2`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.title}
                  </motion.h4>
                  <p className="text-sm sm:text-base text-gray-300">
                    {item.description.split(' ').map((word, i) => {
                      const isHighlight = item.highlights.some(h => word.includes(h))
                      return isHighlight ? (
                        <motion.span
                          key={i}
                          className={`${item.color} font-semibold inline-block`}
                          whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                        >
                          {word}{' '}
                        </motion.span>
                      ) : (
                        <span key={i}>{word} </span>
                      )
                    })}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

