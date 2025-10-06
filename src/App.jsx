import { Header } from './Views/header';
import { Skills } from './Views/skills';
import { Proyectos } from './Views/proyectos';
import { Educacion } from './Views/educacion';
import { Contactame } from './Views/contactame';
function App() {
  return (
    <>
      <section className="font-roboto w-full min-h-screen dark:bg-gray-900 bg-gray-50 transition-colors duration-500 dark:text-white text-gray-900 flex justify-center px-4 sm:px-8 lg:px-16">
        <section className="flex flex-col justify-center py-10 w-full max-w-4xl">
          <Header />
          <div className="space-y-6">
            <Skills />
            <Proyectos />
            <Educacion />
            <Contactame />
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
