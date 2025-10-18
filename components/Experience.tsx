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
      title: 'Senior Mobile Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      hash: 'a7f3c9e',
      branch: 'main',
      description: 'Leading mobile development team, architecting and building cross-platform applications using React Native and Flutter.',
      achievements: [
        'Led development of 5+ mobile apps with 500K+ downloads',
        'Reduced app load time by 40% through optimization',
        'Mentored junior developers and established code review practices',
      ],
    },
    {
      type: 'work',
      title: 'Mobile Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      hash: '4d8b2f1',
      branch: 'develop',
      description: 'Developed and maintained mobile applications for iOS and Android platforms, collaborating with cross-functional teams.',
      achievements: [
        'Built 10+ production-ready mobile applications',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Improved app performance and user ratings to 4.5+ stars',
      ],
    },
    {
      type: 'work',
      title: 'Junior Software Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      hash: '9e1c7a3',
      branch: 'feature',
      description: 'Contributed to full-stack development projects, focusing on mobile and web application development.',
      achievements: [
        'Developed responsive web applications using React',
        'Created REST APIs using Node.js and Express',
        'Participated in agile development processes',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      period: '2015 - 2019',
      hash: 'f2b5d8c',
      branch: 'education',
      description: 'Focused on software engineering, mobile development, and data structures.',
      achievements: [
        'Graduated with First Class Honors',
        'Published research paper on mobile app optimization',
        'President of Computer Science Society',
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
                  <div className="flex items-start gap-2">
                    <span className="text-[#00d9ff]">Date:</span>
                    <span className="text-white opacity-80">{exp.period}</span>
                  </div>
                </div>

                {/* Commit Description */}
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

                {/* Stats Footer */}
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
