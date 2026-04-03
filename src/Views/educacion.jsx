import { motion } from 'framer-motion';
import { containerVariants } from '../animaciones/animaciones';
import { listItemVariants } from '../animaciones/animaciones';

export const Educacion = () => {
  return (
    <>
      <motion.div
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-medium mb-8 text-zinc-900 dark:text-zinc-100 tracking-tight">
          Educación
        </h2>

        <div className="space-y-8">
          <motion.div
            className="flex flex-col sm:flex-row justify-between gap-4 pb-8 border-b border-zinc-200 dark:border-zinc-800"
            variants={listItemVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="font-medium text-lg mb-1 dark:text-zinc-200 text-zinc-800">
                FP Grado Superior en Desarrollo de Aplicaciones Multiplataforma
                (DAM)
              </h3>
              <p className="dark:text-zinc-400 text-zinc-500 text-md font-light">
                IES Villa de Mazo (La Palma)
              </p>
            </div>
            <span className="text-zinc-500 dark:text-zinc-400 text-sm tracking-widest uppercase mt-1 sm:mt-0">
              En curso
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-between gap-4 pb-8 border-b border-zinc-200 dark:border-zinc-800"
            variants={listItemVariants}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="font-medium text-lg mb-1 dark:text-zinc-200 text-zinc-800">
                Desarrollador Front-End con React
              </h3>
              <p className="dark:text-zinc-400 text-zinc-500 text-md font-light">
                Alura LATAM con el programa Oracle Next Education
              </p>
            </div>
            <span className="text-zinc-400 dark:text-zinc-500 text-sm mt-1 sm:mt-0">
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
              <h3 className="font-medium text-lg mb-1 dark:text-zinc-200 text-zinc-800">
                Lógica de Programación
              </h3>
              <p className="dark:text-zinc-400 text-zinc-500 text-md font-light">Cadif1</p>
            </div>
            <span className="text-zinc-400 dark:text-zinc-500 text-sm mt-1 sm:mt-0">
              2018
            </span>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
