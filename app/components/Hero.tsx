'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const glowVariants = {
    animate: {
      boxShadow: [
        '0 0 20px rgba(147, 51, 234, 0.3)',
        '0 0 40px rgba(147, 51, 234, 0.5)',
        '0 0 20px rgba(147, 51, 234, 0.3)',
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background with floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-4 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-pink-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 sm:mb-8 flex justify-center relative"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              <motion.div
                variants={glowVariants}
                animate="animate"
                className="absolute inset-0 rounded-full"
              />
              <motion.img
                src="https://github.com/percy-g2.png"
                alt="Prashant Gahlot"
                className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full border-4 border-purple-500/50 shadow-2xl object-cover relative z-10 backdrop-blur-sm"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ cursor: 'default' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-purple-400/50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 gradient-text px-2"
          >
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
            >
              PRASHANT
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
            >
              GAHLOT
            </motion.span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 sm:mb-4 px-4"
          >
           Mobile Engineer and AI Architect
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 px-4"
          >
            11+ Years in Mobile App Development | OS Developer | AI Architect | UI/UX Expert 
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap px-4"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/percy-g2', label: 'GitHub', color: 'from-gray-600 to-gray-800' },
              { icon: FaEnvelope, href: 'mailto:contact.prashantgahlot@gmail.com', label: 'Email', color: 'from-purple-600 to-pink-600' },
              { icon: FaPhone, href: 'tel:+918147057040', label: '+91 81470 57040', color: 'from-blue-600 to-cyan-600', isPhone: true },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/prashant-gahlot-37914988/', label: 'LinkedIn', color: 'from-blue-500 to-blue-700' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${item.color} rounded-lg relative overflow-hidden group liquid-glass-subtle text-sm sm:text-base`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, type: 'spring', stiffness: 200 }}
                  style={{ 
                    cursor: 'pointer',
                    WebkitTapHighlightColor: 'transparent',
                    userSelect: 'none',
                    minHeight: '44px' // Better touch target
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                    style={{ pointerEvents: 'none' }}
                  />
                  <Icon className="text-lg sm:text-xl relative z-10 pointer-events-none" />
                  <span className="relative z-10 font-semibold pointer-events-none whitespace-nowrap">{item.label}</span>
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        style={{ cursor: 'pointer' }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-purple-400/50 rounded-full flex justify-center relative liquid-glass-subtle"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 sm:w-1.5 sm:h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-1.5 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

