import { motion } from 'framer-motion';
import home from '/home.png';
import productos from '/productos.png';
import shopCar from '/shopCar.png';
import github from '/github.png';
import { containerVariants } from '../../animaciones/animaciones';
import { listItemVariants } from '../../animaciones/animaciones';
import { imageVariants } from '../../animaciones/animaciones';

export const Proyectos = () => {
  return (
    <>
      {/* Projects Section */}
      <motion.div
        className="px-6 py-8 bg-white dark:bg-gray-800 rounded-xl shadow-md"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Proyectos
        </h2>

        {/* Project 1: Frontend */}
        <div className="mb-10 pb-10 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            SellAll - Frontend
          </h3>
          <p className="dark:text-gray-300 text-gray-700 mb-4 leading-relaxed text-lg">
            Página web de comercio electrónico desarrollada para aplicar
            conocimientos de frontend con React y TailwindCSS.
          </p>

          <div className="mb-4">
            <h4 className="font-semibold text-lg mb-2 dark:text-gray-200 text-gray-800">
              Tecnologías:
            </h4>
            <p className="dark:text-gray-300 text-gray-700 text-lg">
              React, TailwindCSS, Axios
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg mb-2 dark:text-gray-200 text-gray-800">
              Características:
            </h4>
            <ul className="space-y-2 dark:text-gray-300 text-gray-700">
              {[
                'Single Page Application (SPA)',
                'Protección de rutas',
                'Carrito de compras funcional',
              ].map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-start text-lg"
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 mb-4 flex-wrap">
            <motion.a
              href="https://github.com/KevinRamirez1302/FrontEntSellAll"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900/90 dark:bg-gray-700/90 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/10 hover:-translate-y-0.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={github} alt="GitHub" className="w-6 h-6" />
              <span className="font-medium">Ver código</span>
            </motion.a>
            <motion.a
              href="https://front-ent-sell-all.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-medium">Visitar sitio web</span>
            </motion.a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[home, productos, shopCar].map((img, i) => (
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
                className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-gray-200 dark:border-gray-700"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            ))}
          </div>
        </div>

        {/* Project 2: Backend API */}
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            SellAll - API Backend
          </h3>
          <p className="dark:text-gray-300 text-gray-700 mb-4 leading-relaxed text-lg">
            API RESTful completa para gestión de comercio electrónico con
            autenticación y seguridad.
          </p>

          <div className="mb-4">
            <h4 className="font-semibold text-lg mb-2 dark:text-gray-200 text-gray-800">
              Tecnologías:
            </h4>
            <p className="dark:text-gray-300 text-gray-700 text-lg">
              MongoDB, Express, Node.js, Mongoose, JWT, Bcrypt
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg mb-2 dark:text-gray-200 text-gray-800">
              Características:
            </h4>
            <ul className="space-y-2 dark:text-gray-300 text-gray-700">
              {[
                'Autenticación de usuarios con JWT',
                'Operaciones CRUD completas',
                'Cifrado seguro de contraseñas',
                'Base de datos MongoDB',
                'Protección y validación de rutas',
              ].map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-start text-lg"
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 mb-4 flex-wrap">
            <motion.a
              href="https://github.com/KevinRamirez1302/ServerMernSellAll"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900/90 dark:bg-gray-700/90 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/10 hover:-translate-y-0.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={github} alt="GitHub" className="w-6 h-6" />
              <span className="font-medium">Ver código</span>
            </motion.a>
            <motion.a
              href="https://server-mern-sell-all.vercel.app/getProducts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 backdrop-blur-sm border border-white/10 w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-medium">Ver API en acción</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
};
