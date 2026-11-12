'use client';

import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  SiFlutter,
  SiNextdotjs,
  SiJetpackcompose,
  SiSwift,
  SiReact,
  SiSpringboot,
  SiRust,
  SiFastapi,
  SiFirebase,
  SiSupabase,
  SiGithubactions,
  SiFastlane,
  SiJest,
  SiJunit5,
  SiVitest,
  SiPostman,
  SiSwagger,
  SiSentry,
  SiPrometheus,
  SiGrafana,
  SiMixpanel,
  SiGoogleanalytics,
  SiOpentelemetry,
  SiRedis,
  SiCloudflare,
  SiDocker,
  SiApachekafka,
  SiGooglecloud,
} from 'react-icons/si';
import {
  HiChartBar,
  HiExclamationCircle,
  HiDatabase,
  HiShoppingBag,
  HiBeaker,
} from 'react-icons/hi';
import SectionHeading from './SectionHeading';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

/** Layout hint: pair equals, isolate denser categories so rows don't stretch unevenly. */
type SkillRow =
  | { type: 'pair'; categories: [SkillCategory, SkillCategory] }
  | { type: 'solo'; category: SkillCategory }
  | { type: 'trio'; categories: [SkillCategory, SkillCategory, SkillCategory] };

interface SkillGroup {
  label: string;
  rows: SkillRow[];
}

/**
 * Frameworks first (no programming languages), then platforms / API contracts,
 * then operational tooling — each tool listed once.
 */
const skillGroups: SkillGroup[] = [
  {
    label: 'Frameworks',
    rows: [
      {
        type: 'trio',
        categories: [
          {
            title: 'Frontend',
            skills: [
              { name: 'Flutter', icon: SiFlutter, color: '#47C5FB' },
              { name: 'Jetpack Compose', icon: SiJetpackcompose, color: '#4285F4' },
              { name: 'SwiftUI', icon: SiSwift, color: '#F05138' },
              { name: 'Next.js', icon: SiNextdotjs, color: 'var(--terminal-text)' },
              { name: 'React Native', icon: SiReact, color: '#61DAFB' },
            ],
          },
          {
            title: 'Backend',
            skills: [
              { name: 'Axum', icon: SiRust, color: '#DEA584' },
              { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
              { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
            ],
          },
          {
            title: 'Platforms & API',
            skills: [
              { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
              { name: 'Supabase', icon: SiSupabase, color: '#3FCF8E' },
              { name: 'OpenAPI', icon: SiSwagger, color: '#85EA2D' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Tools',
    rows: [
      {
        type: 'pair',
        categories: [
          {
            title: 'CI / CD',
            skills: [
              { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
              { name: 'Fastlane', icon: SiFastlane, color: '#00F200' },
              { name: 'Shorebird', icon: SiFlutter, color: '#47C5FB' },
            ],
          },
          {
            title: 'Testing',
            skills: [
              { name: 'JUnit', icon: SiJunit5, color: '#25A162' },
              { name: 'Jest', icon: SiJest, color: '#C21325' },
              { name: 'Vitest', icon: SiVitest, color: '#729B1B' },
              { name: 'Playwright', icon: HiBeaker, color: '#2EAD33' },
              { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
            ],
          },
        ],
      },
      {
        type: 'solo',
        category: {
          title: 'Analytics & observability',
          skills: [
            { name: 'WebEngage', icon: HiChartBar, color: '#FF6A00' },
            { name: 'Firebase Analytics', icon: SiFirebase, color: '#FFCA28' },
            { name: 'Google Analytics', icon: SiGoogleanalytics, color: '#E37400' },
            { name: 'Mixpanel', icon: SiMixpanel, color: '#7856FF' },
            { name: 'OpenTelemetry', icon: SiOpentelemetry, color: '#4F44C6' },
            { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C' },
            { name: 'Grafana', icon: SiGrafana, color: '#F46800' },
            { name: 'Kafka', icon: SiApachekafka, color: '#a8b3cf' },
          ],
        },
      },
      {
        type: 'pair',
        categories: [
          {
            title: 'Error handling',
            skills: [
              { name: 'Sentry', icon: SiSentry, color: '#362D59' },
              { name: 'Firebase Crashlytics', icon: HiExclamationCircle, color: '#FF6F00' },
            ],
          },
          {
            title: 'Caching',
            skills: [
              { name: 'Redis', icon: SiRedis, color: '#FF4438' },
              { name: 'Cloudflare Cache', icon: SiCloudflare, color: '#F38020' },
              { name: 'HTTP / CDN cache', icon: HiDatabase, color: 'var(--terminal-blue)' },
            ],
          },
        ],
      },
      {
        type: 'solo',
        category: {
          title: 'Deployments',
          skills: [
            { name: 'Docker', icon: SiDocker, color: '#2496ED' },
            { name: 'Cloudflare', icon: SiCloudflare, color: '#F38020' },
            { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
            { name: 'Play Store / App Store', icon: HiShoppingBag, color: '#00ff41' },
          ],
        },
      },
    ],
  },
];

const SkillCard = ({ category }: { category: SkillCategory }) => (
  <motion.div
    variants={fadeUp}
    className="terminal-window p-5 h-full flex flex-col"
  >
    <h4 className="font-mono text-sm text-terminal-green mb-3">
      {category.title}
    </h4>
    <motion.ul variants={stagger(0.03)} className="flex flex-wrap gap-2">
      {category.skills.map((skill) => (
        <motion.li
          key={skill.name}
          variants={{
            hidden: { opacity: 0, scale: 0.94 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="flex items-center gap-2 px-2.5 py-1.5 rounded border border-terminal-border bg-terminal-bg font-mono text-xs text-terminal-text transition-colors hover:border-terminal-green/50"
        >
          <skill.icon size={14} style={{ color: skill.color }} aria-hidden />
          {skill.name}
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);

const Skills = () => (
  <section
    id="skills"
    aria-labelledby="skills-heading"
    className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
  >
    <motion.div
      variants={stagger()}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="max-w-5xl mx-auto"
    >
      <SectionHeading
        id="skills-heading"
        command="tree ~/skills -L 2 --dirsfirst"
        title="Skills"
        subtitle="The stack I reach for when retention, scale, evidence and release dates all have to hold at once."
      />

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <motion.div key={group.label} variants={fadeUp} className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-terminal-text-dim">
              {group.label}
            </h3>
            <div className="space-y-4 sm:space-y-5">
              {group.rows.map((row) => {
                if (row.type === 'trio') {
                  return (
                    <div
                      key={row.categories.map((c) => c.title).join('-')}
                      className="grid sm:grid-cols-3 gap-4 sm:gap-5 items-stretch"
                    >
                      {row.categories.map((category) => (
                        <SkillCard key={category.title} category={category} />
                      ))}
                    </div>
                  );
                }
                if (row.type === 'solo') {
                  return (
                    <SkillCard
                      key={row.category.title}
                      category={row.category}
                    />
                  );
                }
                return (
                  <div
                    key={row.categories.map((c) => c.title).join('-')}
                    className="grid sm:grid-cols-2 gap-4 sm:gap-5 items-stretch"
                  >
                    {row.categories.map((category) => (
                      <SkillCard key={category.title} category={category} />
                    ))}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills;
