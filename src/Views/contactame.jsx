import { motion } from 'framer-motion';
import { containerVariants } from '../animaciones/animaciones.jsx';
import { listItemVariants } from '..//animaciones/animaciones';
import { assets } from '../assets/assets.js';

export const Contactame = () => {
  return (
    <>
      <motion.div
        id="contacto"
        className="mb-16 pt-16 border-t border-border-whisper dark:border-border-dark"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-ink-primary dark:text-ink-light tracking-tight text-center">
          Contáctame
        </h2>

        <div className="space-y-8 flex flex-col items-center">
          <p className="dark:text-ink-muted text-ink-secondary text-lg font-light text-center max-w-lg mb-8">
            ¿Tienes un proyecto interesante o una oportunidad laboral? ¡Me
            encantaría escucharte!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full">
            <motion.a
              href="https://www.linkedin.com/in/kevinramirezdev/"
              target="_blank"
              rel="noopener noreferrer"
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="flex items-center gap-2 px-6 py-3 border border-border-whisper dark:border-border-dark text-ink-primary dark:text-ink-light rounded-xl hover:border-accent hover:bg-accent-muted/30 transition-all duration-300 font-medium text-sm"
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
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="flex items-center gap-2 px-6 py-3 border border-border-whisper dark:border-border-dark text-ink-primary dark:text-ink-light rounded-xl hover:border-accent hover:bg-accent-muted/30 transition-all duration-300 font-medium text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={assets.github} alt="GitHub" className="w-5 h-5 drop-shadow-sm" />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              href="mailto:kevin.alexanderr1302@gmail.com"
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-xl hover:bg-accent-hover transition-colors duration-300 font-medium text-sm"
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
              <span>Email</span>
            </motion.a>
          </div>

          <motion.p
            variants={listItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="dark:text-ink-tertiary text-ink-tertiary text-center text-sm font-light"
          >
            ¡Espero tu mensaje! Responderé lo antes posible.
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};
