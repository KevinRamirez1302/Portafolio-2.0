import { motion } from 'framer-motion';
import { containerVariants } from '../animaciones/animaciones';
import { listItemVariants } from '../animaciones/animaciones';

export const Educacion = () => {
  return (
    <>
      <motion.div
        id="educacion"
        className="mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-ink-primary dark:text-ink-light tracking-tight">
          Educación
        </h2>

        <div className="space-y-8">
          <motion.div
            className="flex flex-col sm:flex-row justify-between gap-4 pb-8 border-b border-border-whisper dark:border-border-dark"
            variants={listItemVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1 text-ink-primary dark:text-ink-light">
                FP Grado Superior en Desarrollo de Aplicaciones Multiplataforma
                (DAM)
              </h3>
              <p className="dark:text-ink-muted text-ink-secondary text-md font-light">
                IES Villa de Mazo (La Palma)
              </p>
            </div>
            <span className="text-accent text-sm font-mono font-medium tracking-widest uppercase mt-1 sm:mt-0">
              En curso
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-between gap-4 pb-8 border-b border-border-whisper dark:border-border-dark"
            variants={listItemVariants}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1 text-ink-primary dark:text-ink-light">
                Desarrollador Front-End con React
              </h3>
              <p className="dark:text-ink-muted text-ink-secondary text-md font-light">
                Alura LATAM con el programa Oracle Next Education
              </p>
            </div>
            <span className="dark:text-ink-muted text-ink-secondary text-sm font-mono mt-1 sm:mt-0">
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
              <h3 className="font-semibold text-lg mb-1 text-ink-primary dark:text-ink-light">
                Lógica de Programación
              </h3>
              <p className="dark:text-ink-muted text-ink-secondary text-md font-light">Cadif1</p>
            </div>
            <span className="dark:text-ink-muted text-ink-secondary text-sm font-mono mt-1 sm:mt-0">
              2018
            </span>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
