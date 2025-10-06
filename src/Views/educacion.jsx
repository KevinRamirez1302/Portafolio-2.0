import { motion } from 'framer-motion';
import { containerVariants } from '../animaciones/animaciones';
import { listItemVariants } from '../animaciones/animaciones';

export const Educacion = () => {
  return (
    <>
      <motion.div
        className="px-6 py-8 bg-white dark:bg-gray-800 rounded-xl shadow-md"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Educación
        </h2>

        <div className="space-y-6">
          <motion.div
            className="flex flex-col sm:flex-row justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-700"
            variants={listItemVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="font-semibold text-xl mb-2 dark:text-white text-gray-900">
                FP Grado Superior en Desarrollo de Aplicaciones Multiplataforma
                (DAM)
              </h3>
              <p className="dark:text-gray-400 text-gray-600 text-lg">
                IES Villa de Mazo (La Palma)
              </p>
            </div>
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg whitespace-nowrap">
              En curso
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-700"
            variants={listItemVariants}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="font-semibold text-xl mb-2 dark:text-white text-gray-900">
                Desarrollador Front-End con React
              </h3>
              <p className="dark:text-gray-400 text-gray-600 text-lg">
                Alura LATAM con el programa Oracle Next Education
              </p>
            </div>
            <span className="text-gray-600 dark:text-gray-400 font-semibold text-lg whitespace-nowrap">
              2023
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-between gap-4"
            variants={listItemVariants}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="font-semibold text-xl mb-2 dark:text-white text-gray-900">
                Lógica de Programación
              </h3>
              <p className="dark:text-gray-400 text-gray-600 text-lg">Cadif1</p>
            </div>
            <span className="text-gray-600 dark:text-gray-400 font-semibold text-lg whitespace-nowrap">
              2018
            </span>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
