'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiBriefcase, HiAcademicCap, HiTerminal } from 'react-icons/hi';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      type: 'work',
      title: 'Senior Software Engineer - Mobile Technologies',
      company: 'Raindrop Inc.',
      location: 'Pepsicola, Kathmandu',
      period: 'October 2023 - Present',
      hash: 'a7f3c9e',
      branch: 'main',
      description: 'Leading mobile development specializing in Flutter, Kotlin Multiplatform, and native Android technologies for financial applications with focus on real-time analytics, offline sync, and compliance monitoring.',
      achievements: [
        'Developed automated workflows reducing processing times for account management',
        'Implemented real-time analytics dashboards providing instant financial insights',
        'Engineered offline data synchronization for low-connectivity environments',
        'Integrated compliance monitoring features ensuring regulatory adherence',
      ],
    },
    {
      type: 'work',
      title: 'Software Engineer - Mobile Technologies',
      company: 'Podamibe Nepal',
      location: 'Tripureshwor, Kathmandu',
      period: 'May 2022 - October 2023',
      hash: '4d8b2f1',
      branch: 'develop',
      description: 'Developed production-ready mobile applications specializing in Flutter and native Android with focus on user engagement and performance optimization.',
      achievements: [
        'Analyzed user engagement using Web-Engage analytics, improving retention by 15%',
        'Enhanced user engagement by 20% through push notifications and location-based services',
        'Improved app store ratings by 1.5 stars through continuous feedback integration',
      ],
    },
    {
      type: 'work',
      title: 'Software Developer',
      company: 'Incube Technologies Pvt Ltd',
      location: 'Patan, Kathmandu',
      period: 'June 2020 - April 2022',
      hash: '9e1c7a3',
      branch: 'feature',
      description: 'Built scalable mobile applications applying best practices and modern architecture patterns.',
      achievements: [
        'Implemented Bloc pattern for clear separation of business logic from UI',
        'Applied SOLID principles improving code maintainability and scalability',
        'Fixed application bugs using Crashlytics and Sentry',
        'Kept up with mobile technology trends and applied them to projects',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Engineering in Information Technology',
      company: 'Maharashtra Institute of Technology',
      location: 'Pune, India',
      period: '2013 - 2019',
      hash: 'f2b5d8c',
      branch: 'education',
      description: 'Comprehensive engineering program focused on software development, mobile technologies, and information systems.',
      achievements: [
        'Completed 6-year engineering program',
        'Strong foundation in computer science fundamentals',
        'Gained expertise in mobile app development',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        {/* Terminal Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="terminal-window p-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <HiTerminal className="text-[#00ff41]" size={18} />
              <div className="flex-1 text-center text-[#00d9ff] text-sm font-mono">
                ~/portfolio/career
              </div>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[#00ff41]">❯</span>
                <span className="text-[#00d9ff]">git log --all --decorate --oneline --graph</span>
              </div>
              <div className="pl-4 text-[#00ff41]">
                <div className="flex items-center gap-2">
                  <HiTerminal className="text-[#00d9ff]" />
                  <h2 className="text-3xl sm:text-4xl font-bold terminal-glow">
                    Experience & Education
                  </h2>
                </div>
                <p className="text-[#00d9ff] mt-2 text-sm opacity-80">
                  # My professional journey and educational milestones
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Git Log Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="terminal-window p-6"
            >
              {/* Git Commit Header */}
              <div className="font-mono text-sm space-y-3">
                {/* Commit Hash and Branch */}
                <div className="flex items-center gap-3 pb-3 border-b border-[#30363d]">
                  <div className="flex items-center gap-2">
                    {exp.type === 'work' ? (
                      <HiBriefcase className="text-[#00ff41]" size={20} />
                    ) : (
                      <HiAcademicCap className="text-[#b877db]" size={20} />
                    )}
                    <span className="text-[#ffff00] font-bold">{exp.hash}</span>
                  </div>
                  <span className="text-[#00d9ff]">
                    ({exp.type === 'work' ? (
                      <span className="text-[#00ff41]">HEAD -&gt; {exp.branch}</span>
                    ) : (
                      <span className="text-[#b877db]">{exp.branch}</span>
                    )})
                  </span>
                  <span className="text-[#00d9ff] ml-auto text-xs opacity-70">{exp.period}</span>
                </div>

                {/* Commit Message (Title) */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#00ff41]">commit:</span>
                    <span className="text-white font-bold text-lg">{exp.title}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#00d9ff]">Author:</span>
                    <span className="text-[#b877db]">{exp.company}</span>
                  </div>
                  {exp.type === 'work' && (
                    <div className="flex items-start gap-2">
                      <span className="text-[#00d9ff]">Date:</span>
                      <span className="text-white opacity-80">{exp.period}</span>
                    </div>
                  )}
                </div>

                {/* Commit Description - Only for work experience */}
                {exp.type === 'work' && (
                  <div className="pl-4 pt-2 border-l-2 border-[#30363d]">
                    <p className="text-[#00d9ff] opacity-90 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Changes/Achievements */}
                    <div className="space-y-2">
                      <div className="text-[#00ff41] text-xs font-bold mb-2">
                        Changes committed:
                      </div>
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <span className="text-[#00ff41]">+</span>
                          <span className="text-white opacity-80">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stats Footer - Only for work experience */}
                {exp.type === 'work' && (
                  <div className="pt-3 mt-3 border-t border-[#30363d] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4">
                      <span className="text-[#00ff41]">
                        {exp.achievements.length} changes
                      </span>
                      <span className="text-[#00d9ff]">
                        +{exp.achievements.length * 100} lines
                      </span>
                    </div>
                    <div className="text-[#b877db] opacity-70">
                      {index === 0 ? '(HEAD)' : `~${index} commits behind HEAD`}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal Footer */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <div className="inline-block terminal-window px-6 py-3">
            <div className="font-mono text-sm text-[#00d9ff]">
              <span className="text-[#00ff41]">$</span> git checkout -b future/next-milestone
              <motion.span
                className="inline-block ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                ▋
              </motion.span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
