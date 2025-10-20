'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiTerminal } from 'react-icons/hi';
import {
  SiFlutter,
  SiDart,
  SiKotlin,
  SiFirebase,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiSwagger,
  SiGithubactions,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { SiIsar } from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', icon: SiFlutter, level: 95, color: '#02569B' },
        { name: 'Dart', icon: SiDart, level: 95, color: '#0175C2' },
        { name: 'Kotlin', icon: SiKotlin, level: 85, color: '#7F52FF' },
        { name: 'Java', icon: FaJava, level: 85, color: '#007396' },
        { name: 'Kotlin Multiplatform', icon: SiKotlin, level: 80, color: '#B125EA' },
      ],
    },
    {
      title: 'State Management & Architecture',
      skills: [
        { name: 'Bloc Pattern', icon: SiFlutter, level: 95, color: '#02569B' },
        { name: 'SOLID Principles', icon: HiTerminal, level: 90, color: '#00ff41' },
      ],
    },
    {
      title: 'Database & Backend',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 90, color: '#4169E1' },
        { name: 'Firestore', icon: SiFirebase, level: 90, color: '#FFCA28' },
        { name: 'Drift', icon: HiTerminal, level: 85, color: '#00d9ff' },
        { name: 'Isar', icon: HiTerminal, level: 85, color: '#00ff41' },
        { name: 'Room', icon: HiTerminal, level: 85, color: '#7F52FF' },
      ],
    },
    {
      title: 'Native Android & Tools',
      skills: [
        { name: 'Ktor', icon: SiKotlin, level: 80, color: '#7F52FF' },
        { name: 'WorkManager', icon: HiTerminal, level: 85, color: '#00d9ff' },
        { name: 'Retrofit', icon: HiTerminal, level: 90, color: '#00ff41' },
      ],
    },
    {
      title: 'DevOps & Design',
      skills: [
        { name: 'Figma', icon: SiFigma, level: 85, color: '#F24E1E' },
        { name: 'Postman', icon: HiTerminal, level: 90, color: '#FF6C37' },
        { name: 'Swagger', icon: SiSwagger, level: 85, color: '#85EA2D' },
        { name: 'GitHub Actions', icon: SiGithubactions, level: 85, color: '#2088FF' },
        { name: 'Git', icon: SiGit, level: 95, color: '#F05032' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto"
      >
        {/* Terminal Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="terminal-window p-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <HiTerminal className="text-[#00ff41]" size={18} />
              <div className="flex-1 text-center text-[#00d9ff] text-sm font-mono">
                ~/portfolio/skills
              </div>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[#00ff41]">❯</span>
                <span className="text-[#00d9ff]">cat tech-stack.json</span>
              </div>
              <div className="pl-4 text-[#00ff41]">
                <div className="flex items-center gap-2">
                  <HiTerminal className="text-[#00d9ff]" />
                  <h2 className="text-3xl sm:text-4xl font-bold terminal-glow">
                    Skills & Technologies
                  </h2>
                </div>
                <p className="text-[#00d9ff] mt-2 text-sm opacity-80">
                  # Tools and languages I use to build exceptional software
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Terminal Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="terminal-window p-6"
              onHoverStart={() => setSelectedCategory(categoryIndex)}
              onHoverEnd={() => setSelectedCategory(null)}
            >
              {/* Terminal Window Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#30363d]">
                <HiTerminal className="text-[#00ff41]" size={14} />
                <span className="text-[#00d9ff] text-xs font-mono">
                  {category.title.toLowerCase().replace(/\s+/g, '-')}.sh
                </span>
              </div>

              {/* Category Title Command */}
              <div className="mb-4">
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-[#00ff41]">❯</span>
                  <span className="text-[#00d9ff]">echo "${category.title}"</span>
                </div>
                <h3 className="text-xl font-bold font-mono text-[#00ff41] mt-2 terminal-glow">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4 font-mono text-sm">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      duration: 0.3,
                    }}
                    className="group"
                  >
                    {/* Command Line */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#00ff41]">$</span>
                      <span className="text-[#00d9ff]">skill --check {skill.name.toLowerCase().replace(/\s+/g, '-')}</span>
                    </div>

                    {/* Skill Info */}
                    <div className="pl-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <skill.icon
                            className="transition-transform group-hover:scale-110"
                            size={20}
                            style={{ color: skill.color }}
                          />
                          <span className="text-[#00d9ff]">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[#00ff41] font-bold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-1.5 bg-[#0d1117] border border-[#30363d] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                          className="h-full"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                            boxShadow: selectedCategory === categoryIndex ? `0 0 10px ${skill.color}` : 'none',
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Success Message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: categoryIndex * 0.2 + category.skills.length * 0.1 + 0.2 }}
                className="mt-4 pt-4 border-t border-[#30363d] font-mono text-xs text-[#00ff41]"
              >
                ✓ {category.skills.length} skills loaded successfully
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Terminal Footer */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <div className="inline-block terminal-window px-6 py-3">
            <div className="font-mono text-sm text-[#00d9ff]">
              <span className="text-[#00ff41]">$</span> npm run build --production
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

export default Skills;
