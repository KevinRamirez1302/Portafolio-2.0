import { motion } from 'framer-motion';
import { containerVariants } from '../animaciones/animaciones';
import { listItemVariants } from '../animaciones/animaciones';

const technicalSkills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'TailwindCSS'],
  backend: ['Node.js', 'Express', 'NestJS', 'Laravel', 'PHP', 'Java', 'Spring Boot'],
  database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Mongoose'],
  tools: ['Docker', 'Git', 'GitHub', 'RESTful APIs', 'JWT', 'Bcrypt'],
};

const softSkills = [
  'Responsabilidad',
  'Gestión de tiempo',
  'Adaptabilidad',
  'Comunicación',
  'Curiosidad y aprendizaje continuo',
  'Pensamiento analítico',
];

export const Skills = () => {
  return (
    <>
      <motion.div
        id="habilidades"
        className="mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-ink-primary dark:text-ink-light tracking-tight">
          Habilidades Técnicas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-mono font-medium text-accent uppercase tracking-wider mb-3">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.frontend.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1.5 text-sm font-mono bg-accent-muted text-accent rounded-full border border-accent/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono font-medium text-accent uppercase tracking-wider mb-3">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.backend.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1.5 text-sm font-mono bg-accent-muted text-accent rounded-full border border-accent/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-mono font-medium text-accent uppercase tracking-wider mb-3">
                Bases de Datos
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.database.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1.5 text-sm font-mono bg-accent-muted text-accent rounded-full border border-accent/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono font-medium text-accent uppercase tracking-wider mb-3">
                Herramientas
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.tools.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1.5 text-sm font-mono bg-accent-muted text-accent rounded-full border border-accent/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-ink-primary dark:text-ink-light tracking-tight">
          Habilidades Blandas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {softSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-border-whisper dark:border-border-dark"
            >
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="text-ink-secondary dark:text-ink-muted font-light">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};
