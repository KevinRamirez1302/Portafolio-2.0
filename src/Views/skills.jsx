import { motion } from 'framer-motion';
import { containerVariants } from '../animaciones/animaciones';
import { listItemVariants } from '../animaciones/animaciones';

export const Skills = () => {
  return (
    <>
      <motion.div
        className="px-6 py-8 bg-white dark:bg-gray-800 rounded-xl shadow-md"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          Habilidades Técnicas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="dark:text-gray-300 text-gray-700">
            <ul className="space-y-3 text-lg">
              {[
                'React, Node.js, Express',
                'MongoDB, Mongoose',
                'JavaScript, HTML, CSS',
              ].map((skill, i) => (
                <motion.li
                  key={i}
                  className="flex items-start"
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span className="text-blue-500 mr-3 text-xl">•</span>
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="dark:text-gray-300 text-gray-700">
            <ul className="space-y-3 text-lg">
              {[
                'TailwindCSS',
                'JWT, Bcrypt',
                'Java, Spring Boot (en aprendizaje)',
              ].map((skill, i) => (
                <motion.li
                  key={i}
                  className="flex items-start"
                  custom={i + 3}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span className="text-blue-500 mr-3 text-xl">•</span>
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Soft Skills */}
      <motion.div
        className="px-6 py-8 bg-white dark:bg-gray-800 rounded-xl shadow-md"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          Habilidades Blandas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="dark:text-gray-300 text-gray-700">
            <ul className="space-y-3 text-lg">
              {['Responsabilidad', 'Gestión de tiempo', 'Adaptabilidad'].map(
                (skill, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start"
                    custom={i}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <span className="text-purple-500 mr-3 text-xl">•</span>
                    <span>{skill}</span>
                  </motion.li>
                )
              )}
            </ul>
          </div>
          <div className="dark:text-gray-300 text-gray-700">
            <ul className="space-y-3 text-lg">
              {[
                'Comunicación',
                'Curiosidad y aprendizaje continuo',
                'Pensamiento analítico',
              ].map((skill, i) => (
                <motion.li
                  key={i}
                  className="flex items-start"
                  custom={i + 3}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span className="text-purple-500 mr-3 text-xl">•</span>
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
