import { lazy, Suspense } from 'react';

const Header = lazy(() =>
  import('./Views/header').then((module) => ({ default: module.Header }))
);
const Skills = lazy(() =>
  import('./Views/skills').then((module) => ({ default: module.Skills }))
);
const Proyectos = lazy(() =>
  import('./Views/proyectos').then((module) => ({ default: module.Proyectos }))
);
const Educacion = lazy(() =>
  import('./Views/educacion').then((module) => ({ default: module.Educacion }))
);
const Contactame = lazy(() =>
  import('./Views/contactame').then((module) => ({
    default: module.Contactame,
  }))
);

function App() {
  return (
    <>
      <section className="font-roboto w-full min-h-screen dark:bg-gray-900 bg-[#F0F0F0] transition-colors duration-500 dark:text-white text-gray-900 flex justify-center px-4 sm:px-8 lg:px-16">
        <section className="flex flex-col justify-center py-10 w-full max-w-4xl">
          <Suspense>
            <Header />
          </Suspense>

          <div className="space-y-6">
            <Suspense>
              <Skills />
            </Suspense>

            <Suspense>
              <Proyectos />
            </Suspense>

            <Suspense>
              <Educacion />
            </Suspense>

            <Suspense>
              <Contactame />
            </Suspense>
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
