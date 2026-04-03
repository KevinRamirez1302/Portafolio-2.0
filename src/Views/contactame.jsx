import { motion } from 'framer-motion';
import { containerVariants } from '../animaciones/animaciones.jsx';
import { listItemVariants } from '..//animaciones/animaciones';
import { assets } from '../assets/assets.js';

export const Contactame = () => {
  return (
    <>
      <motion.div
        className="mb-16 pt-16 border-t border-zinc-200 dark:border-zinc-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-medium mb-6 text-zinc-900 dark:text-zinc-100 tracking-tight text-center">
          Contáctame
        </h2>

        <div className="space-y-8 flex flex-col items-center">
          <p className="dark:text-zinc-400 text-zinc-600 text-lg font-light text-center max-w-lg mb-8">
            ¿Tienes un proyecto interesante o una oportunidad laboral? ¡Me
            encantaría escucharte!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full">
            <motion.div
              className="flex flex-col items-center"
              variants={listItemVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/kevinramirezdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 font-medium text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={assets.linkedin}
                    alt="LinkedIn"
                    className="w-5 h-5 drop-shadow-sm"
                  />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com/KevinRamirez1302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg hover:border-zinc-900 dark:hover:border-zinc-100 hover:shadow-lg hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 font-medium text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src={assets.github} alt="GitHub" className="w-5 h-5 drop-shadow-sm dark:bg-white dark:rounded-full" />
                  <span>GitHub</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              variants={listItemVariants}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:kevinramirez1302@gmail.com"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-white transition-colors duration-300 font-medium text-sm w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>
                  kevin.alexanderr1302@gmail.com
                </span>
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 pt-8"
            variants={listItemVariants}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="dark:text-zinc-500 text-zinc-400 text-center text-sm font-light">
              ¡Espero tu mensaje! Responderé lo antes posible.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
