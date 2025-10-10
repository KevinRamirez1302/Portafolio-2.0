import { motion } from 'framer-motion';
import { headerVariants } from '../animaciones/animaciones';
import { ToggleDarkMode } from '../darkmode/toggleDarkMode';
import { containerVariants } from '../animaciones/animaciones';
import { assets } from '../assets/assets';

export const Header = () => {
  return (
    <>
      <motion.div
        className="flex flex-col  sm:flex-row justify-between items-center gap-6 mb-8"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col sm:flex-row gap-10 items-center">
          <motion.img
            className="rounded-full w-28 h-28 object-cover shadow-lg ring-4 ring-blue-500/20"
            src={assets.pixelart}
            alt="Kevin Ramirez - Desarrollador Full Stack"
            title="Kevin Ramirez - Desarrollador Full Stack"
            loading="eager"
            width="112"
            height="112"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Kevin Ramirez
            </h1>
            <p className="dark:text-gray-300 text-gray-600 text-lg font-medium mb-3">
              Full Stack Developer
            </p>
            <div className="flex justify-center sm:justify-start gap-6 sm:gap-8 flex-wrap">
              <motion.a
                href="https://www.linkedin.com/in/kevinramirezdev/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  className="w-10 h-10"
                  src={assets.linkedin}
                  alt="Perfil de LinkedIn de Kevin Ramirez"
                  title="Conecta conmigo en LinkedIn"
                  width="40"
                  height="40"
                  loading="lazy"
                />
              </motion.a>
              <motion.a
                href="https://github.com/KevinRamirez1302"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  className="w-10 h-10"
                  src={assets.github}
                  alt="Perfil de GitHub de Kevin Ramirez"
                  title="Ver mis proyectos en GitHub"
                  width="40"
                  height="40"
                  loading="lazy"
                />
              </motion.a>
              <motion.a
                href="/CVkev.pdf"
                download="CVKEV.pdf"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <img className="w-10 h-10" src={assets.cv} alt="CV" />
              </motion.a>
            </div>
          </div>
        </div>
        <ToggleDarkMode />
      </motion.div>
      <motion.div
        className="py-8 px-6 bg-white dark:bg-gray-800 rounded-xl shadow-md mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          Sobre mí
        </h2>
        <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-lg">
          Estudiante con un sólido conocimiento en el desarrollo web y en
          tecnologías como React, Node.js y MongoDB. Con una gran capacidad de
          autoaprendizaje, actualmente estoy ampliando mis habilidades con Java
          y Spring Boot. Busco una oportunidad para aplicar mis conocimientos
          teóricos y prácticos, contribuir a proyectos innovadores y
          desarrollarme profesionalmente en un entorno dinámico.
        </p>
      </motion.div>
    </>
  );
};
