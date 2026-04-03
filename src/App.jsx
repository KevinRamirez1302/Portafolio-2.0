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
      <section className="font-sans w-full min-h-screen dark:bg-zinc-950 bg-zinc-50 transition-colors duration-500 dark:text-zinc-100 text-zinc-900 flex justify-center px-4 sm:px-8 lg:px-16 selection:bg-zinc-300 dark:selection:bg-zinc-700">
        <section className="flex flex-col justify-center py-16 w-full max-w-3xl">
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
