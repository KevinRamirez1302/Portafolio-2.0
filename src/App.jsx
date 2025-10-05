import { ToggleDarkMode } from './darkmode/toggleDarkMode';
import pixelart from '/pixelart.png';
import linkedin from '/linkedin.png';
import github from '/github.png';
import curriculum from '/curriculum.png';
import home from '/home.png';
import productos from '/productos.png';
import shopCar from '/shopCar.png';

function App() {
  return (
    <>
      <section className=" font-roboto w-full min-h-screen dark:bg-gray-900 bg-gray-50 transition-colors duration-500 dark:text-white text-gray-900 flex justify-center px-4 sm:px-8 lg:px-16">
        <section className="flex flex-col justify-center py-10 w-full max-w-4xl">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <img
                className="rounded-full w-28 h-28 object-cover shadow-lg ring-4 ring-blue-500/20"
                src={pixelart}
                alt="Perfil"
              />
              <div className="text-center sm:text-left">
                <h1 className="text-4xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Kevin Ramirez
                </h1>
                <p className="dark:text-gray-300 text-gray-600 text-lg font-medium mb-3">
                  Full Stack Developer
                </p>
                <div className="flex justify-center sm:justify-start gap-3 flex-wrap">
                  <a
                    href="https://www.linkedin.com/in/kevinramirezdev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform"
                  >
                    <img className="w-10 h-10" src={linkedin} alt="LinkedIn" />
                  </a>
                  <a
                    href="https://github.com/KevinRamirez1302"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform"
                  >
                    <img className="w-10 h-10" src={github} alt="GitHub" />
                  </a>
                  <a
                    href="/cv2.pdf"
                    download="cv2.pdf"
                    className="transform hover:scale-110 transition-transform"
                  >
                    <img className="w-10 h-10" src={curriculum} alt="CV" />
                  </a>
                </div>
              </div>
            </div>
            <ToggleDarkMode />
          </div>

          {/* About Section */}
          <div className="py-8 px-6 bg-white dark:bg-gray-800 rounded-xl shadow-md mb-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Sobre mí
            </h2>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-lg">
              Estudiante con un sólido conocimiento en el desarrollo web y en
              tecnologías como React, Node.js y MongoDB. Con una gran capacidad
              de autoaprendizaje, actualmente estoy ampliando mis habilidades
              con Java y Spring Boot. Busco una oportunidad para aplicar mis
              conocimientos teóricos y prácticos, contribuir a proyectos
              innovadores y desarrollarme profesionalmente en un entorno
              dinámico.
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            {/* Technical Skills */}
            <div className="px-6 py-8 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                Habilidades Técnicas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="dark:text-gray-300 text-gray-700">
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 text-xl">•</span>
                      <span>React, Node.js, Express</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 text-xl">•</span>
                      <span>MongoDB, Mongoose</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 text-xl">•</span>
                      <span>JavaScript, HTML, CSS</span>
                    </li>
                  </ul>
                </div>
                <div className="dark:text-gray-300 text-gray-700">
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 text-xl">•</span>
                      <span>TailwindCSS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 text-xl">•</span>
                      <span>JWT, Bcrypt</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 text-xl">•</span>
                      <span>Java, Spring Boot (en aprendizaje)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="px-6 py-8 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                Habilidades Blandas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="dark:text-gray-300 text-gray-700">
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 text-xl">•</span>
                      <span>Responsabilidad</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 text-xl">•</span>
                      <span>Gestión de tiempo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 text-xl">•</span>
                      <span>Adaptabilidad</span>
                    </li>
                  </ul>
                </div>
                <div className="dark:text-gray-300 text-gray-700">
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 text-xl">•</span>
                      <span>Comunicación</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 text-xl">•</span>
                      <span>Curiosidad y aprendizaje continuo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 text-xl">•</span>
                      <span>Pensamiento analítico</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="px-6 py-8 bg-white dark:bg-gray-800 rounded-xl shadow-md">
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
                    <li className="flex items-start text-lg">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span>Single Page Application (SPA)</span>
                    </li>
                    <li className="flex items-start text-lg">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span>Protección de rutas</span>
                    </li>
                    <li className="flex items-start text-lg">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span>Carrito de compras funcional</span>
                    </li>
                  </ul>
                </div>

                <div className="flex gap-4 mb-4 flex-wrap">
                  <a
                    href="https://github.com/KevinRamirez1302/FrontEntSellAll"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <img src={github} alt="GitHub" className="w-6 h-6" />
                    <span className="font-medium">Ver código</span>
                  </a>
                  <a
                    href="https://front-ent-sell-all.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span className="font-medium">Visitar sitio web</span>
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <img
                    src={home}
                    alt="Página de inicio"
                    className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-gray-200 dark:border-gray-700"
                  />
                  <img
                    src={productos}
                    alt="Página de productos"
                    className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-gray-200 dark:border-gray-700"
                  />
                  <img
                    src={shopCar}
                    alt="Carrito de compras"
                    className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-gray-200 dark:border-gray-700"
                  />
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
                    <li className="flex items-start text-lg">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span>Autenticación de usuarios con JWT</span>
                    </li>
                    <li className="flex items-start text-lg">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span>Operaciones CRUD completas</span>
                    </li>
                    <li className="flex items-start text-lg">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span>Cifrado seguro de contraseñas</span>
                    </li>
                    <li className="flex items-start text-lg">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span>Base de datos MongoDB</span>
                    </li>
                    <li className="flex items-start text-lg">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span>Protección y validación de rutas</span>
                    </li>
                  </ul>
                </div>

                <div className="flex gap-4 mb-4 flex-wrap">
                  <a
                    href="https://github.com/KevinRamirez1302/ServerMernSellAll"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <img src={github} alt="GitHub" className="w-6 h-6" />
                    <span className="font-medium">Ver código</span>
                  </a>
                  <a
                    href="https://server-mern-sell-all.vercel.app/getProducts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                  >
                    <span className="font-medium">Ver API en acción</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="px-6 py-8 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                Educación
              </h2>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-2 dark:text-white text-gray-900">
                      FP Grado Superior en Desarrollo de Aplicaciones
                      Multiplataforma (DAM)
                    </h3>
                    <p className="dark:text-gray-400 text-gray-600 text-lg">
                      IES Villa de Mazo (La Palma)
                    </p>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg whitespace-nowrap">
                    En curso
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-2 dark:text-white text-gray-900">
                      Desarrollador Front-End con React
                    </h3>
                    <p className="dark:text-gray-400 text-gray-600 text-lg">
                      Alura LATAM con el programa Oracle Next Education
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-semibold text-lg whitespace-nowrap">
                    2023
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-2 dark:text-white text-gray-900">
                      Lógica de Programación
                    </h3>
                    <p className="dark:text-gray-400 text-gray-600 text-lg">
                      Cadif1
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-semibold text-lg whitespace-nowrap">
                    2018
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
