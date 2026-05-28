import { motion } from 'framer-motion';
import { headerVariants } from '../animaciones/animaciones';
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
            className="rounded-full w-24 h-24 object-cover shadow-sm ring-2 ring-accent-muted"
            src={assets.pixelart}
            alt="Kevin Ramirez - Desarrollador Full Stack"
            title="Kevin Ramirez - Desarrollador Full Stack"
            loading="eager"
            width="112"
            height="112"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: 'tween', duration: 0.3 }}
          />
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold mb-1 tracking-tight text-ink-primary dark:text-ink-light">
              Kevin Ramirez
            </h1>
            <p className="dark:text-ink-muted text-ink-secondary text-lg mb-4 tracking-wide font-light">
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
      </motion.div>
      <motion.div
        id="sobre-mi"
        className="mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-ink-primary dark:text-ink-light tracking-tight">
          Sobre mí
        </h2>
        <p className="dark:text-ink-muted text-ink-secondary leading-relaxed text-lg font-light">
          Desarrollador Full Stack con mentalidad ágil y gran capacidad de
          adaptación. Me especializo en construir aplicaciones robustas
          utilizando tanto el ecosistema de JavaScript (React, NestJS) como
          Laravel, optimizando los flujos de desarrollo y despliegue mediante la
          contenedorización con Docker. Actualmente curso el Grado Superior en
          DAM, mientras sigo expandiendo mis habilidades hacia entornos
          empresariales con Java y Spring Boot.
        </p>
      </motion.div>
    </>
  );
};
