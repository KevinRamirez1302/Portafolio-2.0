import { motion } from 'framer-motion';
import { containerVariants } from '../animaciones/animaciones';
import { listItemVariants } from '../animaciones/animaciones';
import { imageVariants } from '../animaciones/animaciones';
import { assets } from '../assets/assets';

export const Proyectos = () => {
  return (
    <>
      {/* Projects Section */}
      <motion.div
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl font-medium mb-8 text-zinc-900 dark:text-zinc-100 tracking-tight">
          Proyectos
        </h2>

        {/* Project 1: Frontend */}
        <div className="mb-16 pb-16 border-b border-zinc-200 dark:border-zinc-800">
          <h3 className="text-xl font-medium mb-3 text-zinc-800 dark:text-zinc-200">
            SellAll - Frontend
          </h3>
          <p className="dark:text-zinc-400 text-zinc-600 mb-6 leading-relaxed text-lg font-light">
            Página web de comercio electrónico desarrollada para aplicar
            conocimientos de frontend con React y TailwindCSS.
          </p>

          <div className="mb-6">
            <h4 className="font-medium text-sm text-zinc-500 uppercase tracking-wider mb-2">
              Tecnologías
            </h4>
            <p className="dark:text-zinc-300 text-zinc-700 text-md">
              React, TailwindCSS, Axios
            </p>
          </div>

          <div className="mb-8">
            <h4 className="font-medium text-sm text-zinc-500 uppercase tracking-wider mb-3">
              Características
            </h4>
            <ul className="space-y-3 dark:text-zinc-400 text-zinc-600 font-light">
              {[
                'Single Page Application (SPA)',
                'Protección de rutas',
                'Carrito de compras funcional',
              ].map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-center text-md"
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mr-3"></span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 mb-10 flex-wrap">
            <motion.a
              href="https://front-ent-sell-all.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-white transition-colors duration-300 font-medium text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Visitar sitio web
            </motion.a>
            <motion.a
              href="https://github.com/KevinRamirez1302/FrontEntSellAll"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors duration-300 font-medium text-sm group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={assets.github} alt="GitHub" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
              <span>Ver código</span>
            </motion.a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[assets.home, assets.productos, assets.shopcar].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={
                  [
                    'Página de inicio',
                    'Página de productos',
                    'Carrito de compras',
                  ][i]
                }
                className="w-full h-auto rounded-xl ring-1 ring-zinc-200 dark:ring-zinc-800 object-cover"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'tween', duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* Project 2: Backend API */}
        <div>
          <h3 className="text-xl font-medium mb-3 text-zinc-800 dark:text-zinc-200">
            SellAll - API Backend
          </h3>
          <p className="dark:text-zinc-400 text-zinc-600 mb-6 leading-relaxed text-lg font-light">
            API RESTful completa para gestión de comercio electrónico con
            autenticación y seguridad.
          </p>

          <div className="mb-6">
            <h4 className="font-medium text-sm text-zinc-500 uppercase tracking-wider mb-2">
              Tecnologías
            </h4>
            <p className="dark:text-zinc-300 text-zinc-700 text-md">
              MongoDB, Express, Node.js, Mongoose, JWT, Bcrypt
            </p>
          </div>

          <div className="mb-8">
            <h4 className="font-medium text-sm text-zinc-500 uppercase tracking-wider mb-3">
              Características
            </h4>
            <ul className="space-y-3 dark:text-zinc-400 text-zinc-600 font-light">
              {[
                'Autenticación de usuarios con JWT',
                'Operaciones CRUD completas',
                'Cifrado seguro de contraseñas',
                'Base de datos MongoDB',
                'Protección y validación de rutas',
              ].map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-center text-md"
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mr-3"></span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 mb-4 flex-wrap">
            <motion.a
              href="https://server-mern-sell-all.vercel.app/getProducts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-white transition-colors duration-300 font-medium text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver API en acción
            </motion.a>
            <motion.a
              href="https://github.com/KevinRamirez1302/ServerMernSellAll"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors duration-300 font-medium text-sm group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={assets.github} alt="GitHub" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
              <span>Ver código</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
};
