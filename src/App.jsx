import { ToggleDarkMode } from "./darkmode/toggleDarkMode";

function App() {
  return (
    <>
      <section className="w-full dark:bg-gray-900 dark:text-white  flex justify-center px-4 sm:px-8 lg:px-16">
        <section className="flex flex-col justify-center py-10 w-full md:w-2/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold">Kevin Ramirez</h2>
              <p className="text-gray-700">Full Stack Developer</p>
              <div className="flex justify-center sm:justify-start gap-3 mt-3 flex-wrap">
                <img
                  className="w-8 sm:w-10"
                  src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
                  alt="LinkedIn"
                />
                <img
                  className="w-8 sm:w-10"
                  src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
                  alt="LinkedIn"
                />
                <img
                  className="w-8 sm:w-10"
                  src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
                  alt="LinkedIn"
                />
                <img
                  className="w-8 sm:w-10"
                  src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
                  alt="LinkedIn"
                />
              </div>
            </div>
            <img
              className="w-24 sm:w-28 rounded-full"
              src="https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=360"
              alt="Perfil"
            />
            <ToggleDarkMode />
          </div>

          <div className="py-10 text-center sm:text-left">
            <h2 className="text-2xl font-bold mb-2">Sobre mi</h2>
            <p className="text-pretty text-gray-700">
              Estudiante con un sólido conocimiento en el desarrollo web y en
              tecnologías como React, Node.js y MongoDB. Con una gran capacidad
              de autoaprendizaje, actualmente estoy ampliando mis habilidades
              con Java y Spring Boot. Busco una oportunidad para aplicar mis
              conocimientos teóricos y prácticos, contribuir a proyectos
              innovadores y desarrollarme profesionalmente en un entorno
              dinámico.
            </p>
          </div>

          <div className="space-y-8">
            <div className="">
              <h2 className="text-2xl font-bold">Habilidades tecnicas</h2>
              <div className=" text-gray-700 flex flex-wrap gap-6 mt-4">
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Lenguajes y framework: </li>
                  <li>Gestion de tiempo</li>
                  <li>Adaptabilidad</li>
                </ul>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Comunicacion</li>
                  <li>Curiosidad y aprendizaje continuo</li>
                  <li>Pensamiento analitico</li>
                </ul>
              </div>
            </div>
            <div className="">
              <h2 className="text-2xl font-bold">Habilidades Blandas</h2>
              <div className=" text-gray-700 flex flex-wrap gap-6 mt-4">
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Responsabilidad</li>
                  <li>Gestion de tiempo</li>
                  <li>Adaptabilidad</li>
                </ul>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Comunicacion</li>
                  <li>Curiosidad y aprendizaje continuo</li>
                  <li>Pensamiento analitico</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Proyectos</h2>
              <div className="flex flex-wrap gap-4 mt-4 text-gray-700">
                SellAll – Proyecto personal Página Web que tiene por objetivo
                aplicar conocimientos tanto de backend como frontend.
                Tecnologías: MongoDB, Express, React, Node.js,TailwindCSS,
                Mongoose,JWT,Bcrypt Desarrollo:
                <div>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Autenticación de usuarios con JWT</li>
                    <li>CRUD </li>
                    <li>Cifrado de contraseñas</li>
                    <li>Base de datos</li>
                    <li>Proteccion de rutas</li>
                  </ul>
                  <img src="" alt="" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Educación</h2>
              <p className="text-pretty text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita exercitationem, quia nesciunt eum nostrum corporis nam
                odio labore, vero, ducimus est obcaecati numquam? Rem voluptatum
                et consequuntur dolore a commodi.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
