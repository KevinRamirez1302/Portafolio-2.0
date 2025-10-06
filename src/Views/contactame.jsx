import { motion } from 'framer-motion';
import { containerVariants } from '../animaciones/animaciones.jsx';
import { listItemVariants } from '..//animaciones/animaciones';
import linkedin from '/linkedin.png';
import github from '/github.png';

export const Contactame = () => {
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
          Contáctame
        </h2>

        <div className="space-y-6">
          <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-lg mb-6">
            ¿Tienes un proyecto interesante o una oportunidad laboral? ¡Me
            encantaría escucharte!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="flex flex-col space-y-4"
              variants={listItemVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-xl mb-2 dark:text-white text-gray-900">
                Redes Sociales
              </h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/kevinramirezdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 backdrop-blur-sm border border-white/10"
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      type: 'spring',
                      stiffness: 400,
                      damping: 10,
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                  <span className="font-medium">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com/KevinRamirez1302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900/90 dark:bg-gray-700/90 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/10 hover:-translate-y-0.5"
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      type: 'spring',
                      stiffness: 400,
                      damping: 10,
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={github} alt="GitHub" className="w-6 h-6" />
                  <span className="font-medium">GitHub</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col space-y-4"
              variants={listItemVariants}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-xl mb-2 dark:text-white text-gray-900">
                Correo Electrónico
              </h3>
              <motion.a
                href="mailto:kevinramirez1302@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 backdrop-blur-sm border border-white/10 w-fit"
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 10,
                  },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
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
                <span className="font-medium">
                  kevin.alexander1302@gmail.com
                </span>
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
            variants={listItemVariants}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="dark:text-gray-400 text-gray-600 text-center text-lg">
              ¡Espero tu mensaje! Responderé lo antes posible.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
