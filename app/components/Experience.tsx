'use client'

import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

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
      'Addressed core-level bug fixes for various Android devices',
      'Ensured optimal performance and user experience across multiple device manufacturers',
      'Contributed to custom ROM development and device optimization',
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
      'Contributed to custom Android firmware development',
      'Improved device performance and user customization options',
      'Collaborated on core Android OS components and system-level enhancements',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center"
        >
          Professional Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <FaBriefcase className="text-2xl text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                  <p className="text-xl text-purple-400 mb-2">{exp.role}</p>
                  <p className="text-gray-400 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

