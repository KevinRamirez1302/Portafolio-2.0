import { motion } from 'framer-motion';
import { headerVariants } from '../animaciones/animaciones';
import { ToggleDarkMode } from '../darkmode/toggleDarkMode';
import { containerVariants } from '../animaciones/animaciones';
import { assets } from '../assets/assets';

export const Header = () => {
  return (
    <>
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-16 pt-8"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <motion.img
            className="rounded-full w-24 h-24 object-cover shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-800"
            src={assets.pixelart}
            alt="Kevin Ramirez - Desarrollador Full Stack"
            title="Kevin Ramirez - Desarrollador Full Stack"
            loading="eager"
            width="112"
            height="112"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: 'tween', duration: 0.3 }}
          />
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold mb-1 tracking-tight text-zinc-900 dark:text-zinc-50">
              Kevin Ramirez
            </h1>
            <p className="dark:text-zinc-400 text-zinc-500 text-lg mb-4 tracking-wide font-light">
              Full Stack Developer
            </p>
            <div className="flex justify-center sm:justify-start gap-5 flex-wrap">
              <motion.a
                href="https://www.linkedin.com/in/kevinramirezdev/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="transition-transform drop-shadow hover:drop-shadow-lg"
              >
                <img
                  className="w-8 h-8"
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
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="transition-transform drop-shadow hover:drop-shadow-lg dark:bg-zinc-100 dark:rounded-full"
              >
                <img
                  className="w-8 h-8"
                  src={assets.github}
                  alt="Perfil de GitHub de Kevin Ramirez"
                  title="Ver mis proyectos en GitHub"
                  width="32"
                  height="32"
                  loading="lazy"
                />
              </motion.a>
              <motion.a
                href="/CVkev.pdf"
                download="CVKEV.pdf"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="transition-transform drop-shadow hover:drop-shadow-lg"
              >
                <img className="w-8 h-8" src={assets.cv} alt="CV" />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="self-end sm:self-auto">
          <ToggleDarkMode />
        </div>
      </motion.div>
      <motion.div
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-medium mb-4 text-zinc-900 dark:text-zinc-100 tracking-tight">
          Sobre mí
        </h2>
        <p className="dark:text-zinc-400 text-zinc-600 leading-relaxed text-lg font-light">
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
