// Lista de proyectos que se muestran en el portfolio.
// Para agregar uno nuevo, sumá un objeto a este array.
//
// - `demoUrl`: link al sitio publicado (botón "Ver sitio en vivo").
// - `images.desktop` / `images.mobile`: capturas de página completa dentro de /public.
//   Se muestran en el navegador y el celular de cada proyecto, recorriéndose solas.
//   Si faltan, se muestra un sitio de ejemplo con los colores de `theme`.
// - `images.hero`: captura de la primera pantalla en celular, para el celular que
//   rota los proyectos al principio de la página (si falta, se usa `images.mobile`).
export const projects = [
  {
    id: 'gym',
    title: 'El Kaiser Gym',
    category: 'Gimnasio',
    year: '2026',
    description:
      'Landing para un gimnasio de entrenamiento guiado en Temperley: método, perfiles según desde dónde arrancás, planes semanales y reserva de clase gratis por WhatsApp.',
    tags: ['Landing page', 'Planes y precios', 'WhatsApp', 'Formulario'],
    url: 'gymtest.seibfacundo.workers.dev',
    demoUrl: 'https://gymtest.seibfacundo.workers.dev/',
    images: {
      desktop: '/projects/gym-desktop.png',
      mobile: '/projects/gym-mobile.png',
      hero: '/projects/gym-hero.jpg',
    },
    theme: {
      bg: '#505050',
      fg: '#2e2522',
      accent: '#8c5a46',
      eyebrow: 'Entrenamiento guiado',
      tagline: 'Entrená con técnica, sin lesiones',
      cta: 'Reservá tu clase',
    },
  },
  {
    id: 'nucleo-pilates',
    title: 'Nucleo Pilates',
    category: 'Pilates',
    year: '2026',
    description:
      'Landing para un estudio de pilates reformer y mat en Palermo: clases, equipo de instructores, planes con precios, preguntas frecuentes y reserva de clase de prueba por WhatsApp.',
    tags: ['Landing page', 'Planes y precios', 'FAQ', 'WhatsApp'],
    url: 'pilates.seibfacundo.workers.dev',
    demoUrl: 'https://pilates.seibfacundo.workers.dev/',
    images: {
      desktop: '/projects/pilates-desktop.png',
      mobile: '/projects/pilates-mobile.png',
      hero: '/projects/pilates-hero.jpg',
    },
    theme: {
      bg: '#1f1e1b',
      fg: '#efe9df',
      accent: '#c8a27a',
      eyebrow: 'Reformer & Mat',
      tagline: 'Pilates con propósito',
      cta: 'Clase de prueba',
    },
  },
  {
    id: 'estetica-aurea',
    title: 'Centro de estética Aurea',
    category: 'Estética',
    year: '2026',
    description:
      'Landing para un centro de estética en Palermo: tratamientos faciales y corporales, reseñas de clientas, ubicación y formulario que arma el pedido de turno por WhatsApp.',
    tags: ['Landing page', 'Turnos por WhatsApp', 'Reseñas', 'Mapa'],
    url: 'estetica.seibfacundo.workers.dev',
    demoUrl: 'https://estetica.seibfacundo.workers.dev/',
    images: {
      desktop: '/projects/estetica-desktop.png',
      mobile: '/projects/estetica-mobile.png',
      hero: '/projects/estetica-hero.jpg',
    },
    theme: {
      bg: '#eef5f3',
      fg: '#0f3b37',
      accent: '#17a589',
      eyebrow: 'Estética & Bienestar',
      tagline: 'Tratamientos faciales y corporales',
      cta: 'Reservar turno',
    },
  },
]
