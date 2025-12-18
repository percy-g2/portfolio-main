'use client'

import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Languages from './components/Languages'
import Contact from './components/Contact'

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Home() {
  return (
    <motion.main 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background particles - reduced on mobile for performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => {
          const randomX = Math.random() * 100
          const randomY = Math.random() * 100
          const randomDuration = Math.random() * 10 + 10
          const randomDelay = Math.random() * 5
          const randomEndY = Math.random() * 100
          
          return (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-400/20 sm:bg-purple-400/30 rounded-full"
              initial={{
                x: `${randomX}vw`,
                y: `${randomY}vh`,
              }}
              animate={{
                y: [`${randomY}vh`, `${randomEndY}vh`],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                ease: 'linear',
                delay: randomDelay,
              }}
            />
          )
        })}
      </div>

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Languages />
      <Contact />
    </motion.main>
  )
}

