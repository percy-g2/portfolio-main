'use client'

import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

function CompanyLogo({ company, className = '' }: { company: string, className?: string }) {
  // Extract initials from company name
  const getInitials = (name: string) => {
    // Handle special cases
    if (name.includes('ZebPay')) return 'ZP'
    if (name.includes('Orion')) return 'OI'
    if (name.includes('Lab49')) return 'L49'
    if (name.includes('Chai')) return 'CT'
    if (name.includes('BEWO')) return 'BT'
    if (name.includes('XDA')) return 'XD'
    if (name.includes('Bitserve')) return 'BS'
    if (name.includes('Cyanogen') || name.includes('LineageOS')) return 'LOS'
    
    // Default: get first letters of words
    const words = name.split(' ')
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }

  const initials = getInitials(company)
  
  // Color gradients for different companies
  const getGradient = (name: string) => {
    if (name.includes('ZebPay')) return 'from-yellow-500 to-orange-500'
    if (name.includes('Orion')) return 'from-blue-500 to-cyan-500'
    if (name.includes('Lab49')) return 'from-purple-500 to-pink-500'
    if (name.includes('Chai')) return 'from-green-500 to-emerald-500'
    if (name.includes('BEWO')) return 'from-indigo-500 to-purple-500'
    if (name.includes('XDA')) return 'from-red-500 to-orange-500'
    if (name.includes('Bitserve')) return 'from-blue-600 to-indigo-600'
    if (name.includes('Cyanogen') || name.includes('LineageOS')) return 'from-cyan-500 to-blue-500'
    return 'from-purple-500 to-pink-500'
  }

  return (
    <motion.div
      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${getGradient(company)} flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg group-hover:shadow-xl transition-all ${className}`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.3 }}
    >
      {initials}
    </motion.div>
  )
}

const experiences = [
  {
    company: 'ZebPay',
    role: 'Senior Software Developer (SSD-I)',
    period: 'Sep 2025 – Dec 2025',
    achievements: [
      'Implemented real-time logging infrastructure for production monitoring',
      'Led Compose Multiplatform migration of existing Android features',
      'Executed UI and design system migration to CMP',
      'Delivered critical hotfixes across live trading features',
    ],
  },
  {
    company: 'Orion Innovation',
    role: 'Technical Lead',
    period: 'Dec 2022 – Aug 2025',
    achievements: [
      'Led architecture and development of Android, iOS, Desktop, and Web apps using Kotlin Multiplatform',
      'Designed and delivered AI-powered education systems (AI Grader, Camera-based attendance tracking)',
      'Built high-accuracy OMR Image Processing engine for exam evaluation',
      'Developed On-Screen Marking & e-Marking platforms for large-scale assessments',
      'Established and maintained CI/CD pipelines enabling reliable automated deployments',
    ],
  },
  {
    company: 'Lab49',
    role: 'Android Developer',
    period: 'Feb 2021 – Nov 2022',
    achievements: [
      'Developed training applications for retail banking onboarding',
      'Contributed to private wealth management platform for Goldman Sachs',
      'Ensured enterprise-level security, scalability, and compliance',
    ],
  },
  {
    company: 'Chai Tech Pvt. Ltd.',
    role: 'Senior Android Developer',
    period: 'Apr 2017 – Jan 2021',
    achievements: [
      'Built offline-first billing systems for medical, retail, and restaurant domains',
      'Designed multi-terminal merchant solutions with REST-based synchronization',
      'Implemented analytics, reporting, and data export/import features',
    ],
  },
  {
    company: 'BEWO Technologies Pvt. Ltd.',
    role: 'Senior Android Developer',
    period: 'Nov 2014 – Jan 2017',
    achievements: [
      'Developed retail POS and e-commerce systems using Android SDK',
      'Focused on performance optimization, reusable components, and UI consistency',
    ],
  },
  {
    company: 'XDA Developers',
    role: 'Senior Developer',
    period: '2013 – 2014',
    achievements: [
      'Addressed kernel-level bug fixes and device driver issues for various Android devices',
      'Developed and optimized Android kernels for Motorola and Samsung devices',
      'Performed low-level system debugging, kernel profiling, and performance tuning',
      'Contributed to custom ROM development with kernel modifications and device-specific optimizations',
      'Ensured optimal performance and user experience across multiple device manufacturers',
    ],
  },
  {
    company: 'Bitserve Technologies LLP',
    role: 'Co-Founder & Developer',
    period: '2012 – 2013',
    achievements: [
      'Co-founded startup specializing in flight and cab booking services using bitcoins in India',
      'Developed innovative payment solutions integrating cryptocurrency',
      'Led technical architecture and development of booking platforms',
    ],
  },
  {
    company: 'Cyanogen (now LineageOS)',
    role: 'Software Developer',
    period: '2011 – 2012',
    achievements: [
      'Developed Android kernel for Motorola MSM8610 platform with 348,724+ commits',
      'Implemented kernel architecture components, device drivers, and filesystem modules',
      'Contributed to GNU kernel development for Samsung Galaxy Y (GT-S5360)',
      'Collaborated on core Android OS components, bootloader, and firmware development',
      'Performed kernel-level optimizations and device-specific customizations',
      'Active contributor to Legacy-Xperia, AndroidOpenSourceXperia, and Motorola-CyanogenMod organizations',
      'Improved device performance and user customization options through kernel modifications',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 gradient-text text-center px-2"
        >
          Professional Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on md+ */}
          <motion.div
            className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          
          <div className="space-y-6 sm:space-y-8 relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  x: 10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="liquid-glass rounded-2xl p-4 sm:p-5 md:p-6 hover:border-purple-500/50 transition-all relative md:ml-16 group"
              >
                {/* Timeline dot - hidden on mobile, visible on md+ */}
                <motion.div
                  className="hidden md:block absolute -left-12 top-6 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.3, rotate: 360 }}
                />
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-2xl transition-all duration-500"
                />
                
                <div className="flex items-start gap-3 sm:gap-4 relative z-10">
                  <div className="mt-1 flex-shrink-0 group/icon">
                    <CompanyLogo company={exp.company} className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                      {exp.company}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-purple-400 mb-1 sm:mb-2">{exp.role}</p>
                    <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{exp.period}</p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i} 
                          className="text-sm sm:text-base text-gray-300 flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + i * 0.1 }}
                          whileHover={{ x: 5, color: '#e9d5ff' }}
                        >
                          <motion.span 
                            className="text-purple-400 mt-1 flex-shrink-0"
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2
                            }}
                          >
                            ▸
                          </motion.span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

