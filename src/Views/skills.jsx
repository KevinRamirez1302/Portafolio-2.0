import { motion } from 'framer-motion';
import { containerVariants } from '../animaciones/animaciones';
import { listItemVariants } from '../animaciones/animaciones';

export const Skills = () => {
  return (
    <>
      <motion.div
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-medium mb-6 text-zinc-900 dark:text-zinc-100 tracking-tight">
          Habilidades Técnicas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="dark:text-zinc-400 text-zinc-600">
            <ul className="space-y-4 text-lg font-light">
              {[
                'React, Node.js, Express',
                'MongoDB, Mongoose',
                'JavaScript, HTML, CSS',
              ].map((skill, i) => (
                <motion.li
                  key={i}
                  className="flex items-center"
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mr-4"></span>
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="dark:text-zinc-400 text-zinc-600">
            <ul className="space-y-4 text-lg font-light">
              {[
                'TailwindCSS',
                'JWT, Bcrypt',
                'Java, Spring Boot (en aprendizaje)',
              ].map((skill, i) => (
                <motion.li
                  key={i}
                  className="flex items-center"
                  custom={i + 3}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mr-4"></span>
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Soft Skills */}
      <motion.div
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-medium mb-6 text-zinc-900 dark:text-zinc-100 tracking-tight">
          Habilidades Blandas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="dark:text-zinc-400 text-zinc-600">
            <ul className="space-y-4 text-lg font-light">
              {['Responsabilidad', 'Gestión de tiempo', 'Adaptabilidad'].map(
                (skill, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center"
                    custom={i}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mr-4"></span>
                    <span>{skill}</span>
                  </motion.li>
                )
              )}
            </ul>
          </div>
          <div className="dark:text-zinc-400 text-zinc-600">
            <ul className="space-y-4 text-lg font-light">
              {[
                'Comunicación',
                'Curiosidad y aprendizaje continuo',
                'Pensamiento analítico',
              ].map((skill, i) => (
                <motion.li
                  key={i}
                  className="flex items-center"
                  custom={i + 3}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mr-4"></span>
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};
