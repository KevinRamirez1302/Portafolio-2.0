import { motion } from 'framer-motion';
import { containerVariants } from '../animaciones/animaciones';
import { assets } from '../assets/assets';

const projects = [
  {
    id: 'sellall-frontend',
    title: 'SellAll - Frontend',
    description:
      'Página web de comercio electrónico desarrollada para aplicar conocimientos de frontend con React y TailwindCSS.',
    technologies: ['React', 'TailwindCSS', 'Axios'],
    features: [
      'Single Page Application (SPA)',
      'Protección de rutas',
      'Carrito de compras funcional',
    ],
    liveUrl: 'https://front-ent-sell-all.vercel.app/',
    repos: [
      { label: 'Código', url: 'https://github.com/KevinRamirez1302/FrontEntSellAll' },
    ],
    images: [assets.home, assets.productos, assets.shopcar],
    imageAlts: [
      'Vista previa de la página de inicio de SellAll',
      'Catálogo de productos de la tienda SellAll',
      'Funcionalidad del carrito de compras en SellAll',
    ],
  },
  {
    id: 'sellall-backend',
    title: 'SellAll - API Backend',
    description:
      'API RESTful completa para gestión de comercio electrónico con autenticación y seguridad.',
    technologies: ['MongoDB', 'Express', 'Node.js', 'Mongoose', 'JWT', 'Bcrypt'],
    features: [
      'Autenticación de usuarios con JWT',
      'Operaciones CRUD completas',
      'Cifrado seguro de contraseñas',
      'Base de datos MongoDB',
      'Protección y validación de rutas',
    ],
    liveUrl: 'https://server-mern-sell-all.vercel.app/getProducts',
    repos: [
      { label: 'Código', url: 'https://github.com/KevinRamirez1302/ServerMernSellAll' },
    ],
    images: [],
  },
  {
    id: 'mazo-app',
    title: 'Mazo App - Landing Page DAM',
    description:
      'Plataforma web diseñada para la promoción del Ciclo Formativo de Grado Superior en DAM, orientada a captar nuevos estudiantes mediante una experiencia de usuario moderna y un flujo de inscripción optimizado.',
    technologies: ['React.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Docker', 'Bcrypt', 'Nodemailer'],
    features: [
      'Backend Empresarial: Estructura modular con NestJS e inyección de dependencias.',
      'Seguridad Avanzada: Hashing de contraseñas con Bcrypt para datos sensibles.',
      'Notificaciones Automatizadas: Integración de Nodemailer para alertas y registros.',
      'Infraestructura Dockerizada: Entorno de persistencia PostgreSQL en Docker.',
    ],
    architecture: [
      { layer: 'Presentación', tech: 'React', desc: 'Interfaz dinámica y gestión de estado.' },
      { layer: 'Lógica', tech: 'NestJS', desc: 'API RESTful con reglas de negocio.' },
      { layer: 'Seguridad', tech: 'Bcrypt', desc: 'Proceso de cifrado antes de la persistencia.' },
      { layer: 'Persistencia', tech: 'PostgreSQL', desc: 'Entorno virtualizado y optimizado.' },
    ],
    challenges: [
      { title: 'Modularidad', text: 'Migración a NestJS para mejorar la mantenibilidad.' },
      { title: 'Seguridad', text: 'Flujo de autenticación seguro basado en algoritmos de hashing.' },
      { title: 'Automatización', text: 'Servicio SMTP con Nodemailer para comunicación automática.' },
    ],
    repos: [
      { label: 'Frontend', url: 'https://github.com/KevinRamirez1302/Front-mazo' },
      { label: 'Backend', url: 'https://github.com/KevinRamirez1302/api-mazo' },
    ],
    images: [assets.mazo1, assets.mazo2, assets.mazo3],
    imageAlts: ['Mazo App Preview 1', 'Mazo App Preview 2', 'Mazo App Preview 3'],
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-24 pb-24 border-b border-border-whisper dark:border-border-dark last:border-b-0 last:mb-0 last:pb-0"
    >
      <h3 className="text-xl font-semibold mb-3 text-ink-primary dark:text-ink-light">
        {project.title}
      </h3>
      <p className="dark:text-ink-muted text-ink-secondary mb-6 leading-relaxed text-lg font-light">
        {project.description}
      </p>

      <div className="mb-6">
        <h4 className="text-sm font-mono font-medium text-accent uppercase tracking-wider mb-3">
          Tecnologías
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm font-mono bg-accent-muted text-accent rounded-full border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-sm font-mono font-medium text-accent uppercase tracking-wider mb-3">
          Características
        </h4>
        <ul className="space-y-3 dark:text-ink-muted text-ink-secondary font-light">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {project.architecture && (
        <div className="mb-8 bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-border-whisper dark:border-border-dark">
          <h4 className="text-sm font-mono font-medium text-accent uppercase tracking-wider mb-4">
            Arquitectura de la Solución
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.architecture.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  {i !== project.architecture.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border-whisper dark:bg-border-dark my-1"></div>
                  )}
                </div>
                <div>
                  <span className="text-sm font-medium text-ink-primary dark:text-ink-light">
                    {item.layer} ({item.tech}):
                  </span>
                  <span className="text-sm text-ink-muted ml-1 font-light">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.challenges && (
        <div className="mb-8 bg-accent-muted/30 p-6 rounded-2xl border border-accent/10">
          <h4 className="text-sm font-mono font-medium text-accent uppercase tracking-wider mb-4">
            Desafíos y Soluciones
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.challenges.map((desafio, i) => (
              <div key={i} className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase text-accent">
                  {desafio.title}
                </span>
                <p className="text-sm text-ink-secondary dark:text-ink-muted font-light leading-snug">
                  {desafio.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-4 mb-10 flex-wrap">
        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-accent text-white rounded-xl hover:bg-accent-hover transition-colors duration-300 font-medium text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Visitar sitio web
          </motion.a>
        )}
        {project.repos && project.repos.map((repo, i) => (
          <motion.a
            key={i}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-border-whisper dark:border-border-dark text-ink-primary dark:text-ink-light rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors duration-300 font-medium text-sm group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={assets.github}
              alt="GitHub"
              className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
            />
            <span>{repo.label}</span>
          </motion.a>
        ))}
      </div>

      {project.images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {project.images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={project.imageAlts[i]}
              className="w-full h-auto rounded-xl ring-1 ring-border-whisper dark:ring-border-dark object-cover aspect-[16/9]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'tween', duration: 0.3 }}
              loading="lazy"
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export const Proyectos = () => {
  return (
    <motion.div
      id="proyectos"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2 className="text-2xl font-semibold mb-12 text-ink-primary dark:text-ink-light tracking-tight">
        Proyectos
      </h2>

      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </motion.div>
  );
};