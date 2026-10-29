/**
 * MT Studio — Services Data
 * Cada servicio tiene su contenido en español como base, y un sub-objeto `en`
 * con los mismos campos traducidos. Usar localizeService(service, lang) para
 * obtener la versión correcta según el idioma activo.
 */

export const services = [
  {
    id: 'diseno-web',
    slug: 'diseno-web',
    updatedAt: '2026-10-29',
    icon: '✦',
    color: 'violet',
    accentHex: '#8B5CF6',

    title:       'Diseño Web',
    tagline:     'Interfaces que no pasan desapercibidas',
    description: 'Diseñamos sitios web que combinan estética premium con usabilidad real. Cada proyecto parte de entender tu negocio, tu audiencia y lo que necesitás comunicar.',

    heroTitle:    'Sitios web que trabajan\npor tu negocio',
    heroSubtitle: 'Un sitio bien diseñado no es solo una cuestión estética. Es la diferencia entre alguien que se queda y alguien que se va a los pocos segundos.',

    problem: {
      title: 'La mayoría de los sitios no convierten',
      body:  'Tener presencia online no alcanza si el sitio carga lento, se ve genérico o no guía al usuario hacia ninguna acción concreta. El diseño mal ejecutado genera desconfianza antes de que hayas podido decir una sola palabra.',
    },

    benefits: [
      { icon: '◎', title: 'Primera impresión que retiene',  desc: 'Los usuarios deciden en segundos. Un diseño coherente y profesional genera confianza antes de que lean una palabra.' },
      { icon: '✦', title: 'Diseñado para convertir',        desc: 'Cada sección tiene un propósito. Nada decorativo sin función. El flujo visual guía al usuario hacia la acción.' },
      { icon: '⬡', title: 'Responsive de verdad',           desc: 'No adaptado a último momento. Diseñado desde mobile hacia arriba, con la misma calidad en cada dispositivo.' },
      { icon: '⚡', title: 'Fácil de escalar',              desc: 'Sistemas de diseño bien documentados. Agregar páginas, secciones o contenido futuro no implica rehacer todo.' },
    ],

    features: [
      'Diseño UI/UX personalizado desde cero',
      'Responsive design completo (mobile-first)',
      'Prototipado interactivo antes del desarrollo',
      'Sistema de componentes reutilizables',
      'Optimización de velocidad y performance',
      'Integración con CMS si es necesario',
      'Entrega con documentación básica',
    ],

    // Solo tecnologías usadas en proyectos reales; qué proyecto respalda cada
    // una está en docs/AFIRMACIONES.md.
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Laravel', 'WordPress'],

    cta: {
      title:    '¿Tenés un proyecto en mente?',
      subtitle: 'Contanos qué necesitás. Sin formularios kilométricos ni esperas eternas.',
      label:    'Hablar sobre mi sitio',
    },

    seo: {
      title:       'Diseño web profesional para negocios',
      description: 'Sitios web rápidos, responsive y pensados para convertir. Diseño UI/UX propio, sin plantillas, enfocado en lo que tu negocio necesita comunicar.',
    },

    // Relaciones declaradas: ver src/data/related.js
    relatedPosts: ['por-que-tu-sitio-web-no-convierte'],
    relatedCategories: ['Diseño Web'],

    en: {
      title:       'Web Design',
      tagline:     'Interfaces that don\u2019t go unnoticed',
      description: 'We design websites that combine premium aesthetics with real usability. Every project starts with understanding your business, your audience, and what you need to communicate.',

      heroTitle:    'Websites that work\nfor your business',
      heroSubtitle: 'A well-designed site isn\u2019t just about looks. It\u2019s the difference between someone staying and someone leaving within seconds.',

      problem: {
        title: 'Most websites don\u2019t convert',
        body:  'Having an online presence isn\u2019t enough if the site loads slowly, looks generic, or doesn\u2019t guide the user toward any clear action. Poorly executed design builds distrust before you\u2019ve said a single word.',
      },

      benefits: [
        { icon: '◎', title: 'A first impression that sticks',  desc: 'Users decide in seconds. Coherent, professional design builds trust before they read a word.' },
        { icon: '✦', title: 'Built to convert',                desc: 'Every section has a purpose. Nothing decorative without function. The visual flow guides users toward action.' },
        { icon: '⬡', title: 'Genuinely responsive',            desc: 'Not adapted as an afterthought. Designed mobile-first, with the same quality on every device.' },
        { icon: '⚡', title: 'Easy to scale',                  desc: 'Well-documented design systems. Adding pages, sections, or future content doesn\u2019t mean starting over.' },
      ],

      features: [
        'Custom UI/UX design from scratch',
        'Fully responsive design (mobile-first)',
        'Interactive prototyping before development',
        'Reusable component system',
        'Speed and performance optimization',
        'CMS integration if needed',
        'Delivered with basic documentation',
      ],

      cta: {
        title:    'Have a project in mind?',
        subtitle: 'Tell us what you need. No endless forms, no long waits.',
        label:    'Talk about my site',
      },

      seo: {
        title:       'Premium Web Design',
        description: 'We design modern, fast, results-driven websites. Custom UI/UX, responsive, and built to convert.',
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    updatedAt: '2026-10-29',
    icon: '◈',
    color: 'cyan',
    accentHex: '#06B6D4',

    title:       'Ecommerce',
    tagline:     'Tiendas online que venden de verdad',
    description: 'Desarrollamos tiendas online completas con foco en experiencia de compra, performance y conversión. Desde catálogo hasta checkout, sin fricciones.',

    heroTitle:    'Una tienda que no\npone obstáculos',
    heroSubtitle: 'El ecommerce que no convierte no es un problema de tráfico. Es un problema de experiencia. Cada paso del proceso de compra tiene que ser obvio, rápido y confiable.',

    problem: {
      title: 'Perder ventas en el checkout es evitable',
      body:  'La mayoría de los carritos abandonados no son por falta de intención de compra. Son por fricción: procesos confusos, medios de pago que no aparecen, páginas que cargan lento o un diseño que no genera confianza en el momento decisivo.',
    },

    benefits: [
      { icon: '◈', title: 'Checkout sin fricciones',        desc: 'Flujo de compra directo, claro y optimizado. Menos pasos, menos abandono, más conversiones.' },
      { icon: '◎', title: 'Medios de pago del mercado',     desc: 'Mercado Pago, transferencia, tarjetas. Lo que tus clientes ya usan y confían.' },
      { icon: '⬡', title: 'Gestión desde el día uno',       desc: 'Panel de administración claro para manejar productos, stock y pedidos sin depender de nadie.' },
      { icon: '✦', title: 'Preparado para escalar',         desc: 'Arquitectura que aguanta crecimiento. Agregar categorías, variantes o integraciones sin reescribir todo.' },
    ],

    features: [
      'Diseño enfocado en conversión',
      'Integración Mercado Pago / otros medios',
      'Gestión de productos, variantes y stock',
      'Carrito y checkout optimizados',
      'Panel de administración propio',
      'Notificaciones automáticas de pedidos',
      'Analytics e informes de ventas',
      'SEO técnico para productos',
    ],

    technologies: ['WordPress', 'WooCommerce', 'Mercado Pago', 'PHP', 'Laravel', 'React'],

    cta: {
      title:    '¿Querés empezar a vender online?',
      subtitle: 'Contanos tu negocio. Te decimos cómo lo encaramos y qué necesitás para arrancar.',
      label:    'Hablar sobre mi tienda',
    },

    seo: {
      title:       'Desarrollo de tiendas online',
      description: 'Tiendas online con checkout optimizado, medios de pago integrados y panel propio para administrar productos. Ecommerce que convierte visitas en ventas.',
    },

    // Relaciones declaradas: ver src/data/related.js
    relatedProjects: ['cargadirecta'],
    relatedPosts: ['wordpress-vs-desarrollo-a-medida'],
    relatedCategories: ['Ecommerce', 'Aplicación Web'],

    en: {
      title:       'Ecommerce',
      tagline:     'Online stores that actually sell',
      description: 'We build complete online stores focused on shopping experience, performance, and conversion. From catalog to checkout, with no friction.',

      heroTitle:    'A store that doesn\u2019t\nget in the way',
      heroSubtitle: 'An ecommerce that doesn\u2019t convert isn\u2019t a traffic problem. It\u2019s an experience problem. Every step of the buying process has to be obvious, fast, and trustworthy.',

      problem: {
        title: 'Losing sales at checkout is avoidable',
        body:  'Most abandoned carts aren\u2019t about lack of purchase intent. They\u2019re about friction: confusing flows, missing payment methods, slow-loading pages, or a design that fails to build trust at the decisive moment.',
      },

      benefits: [
        { icon: '◈', title: 'Frictionless checkout',          desc: 'A direct, clear, optimized buying flow. Fewer steps, less abandonment, more conversions.' },
        { icon: '◎', title: 'Payment methods people trust',   desc: 'Mercado Pago, bank transfer, cards \u2014 whatever your customers already use and trust.' },
        { icon: '⬡', title: 'Management from day one',        desc: 'A clear admin panel to manage products, stock, and orders without depending on anyone.' },
        { icon: '✦', title: 'Built to scale',                 desc: 'Architecture that handles growth. Add categories, variants, or integrations without rebuilding everything.' },
      ],

      features: [
        'Conversion-focused design',
        'Mercado Pago / other payment integrations',
        'Product, variant, and stock management',
        'Optimized cart and checkout',
        'Custom admin panel',
        'Automatic order notifications',
        'Sales analytics and reports',
        'Technical SEO for products',
      ],

      cta: {
        title:    'Ready to start selling online?',
        subtitle: 'Tell us about your business. We\u2019ll walk you through the approach and what you need to get started.',
        label:    'Talk about my store',
      },

      seo: {
        title:       'Ecommerce Development',
        description: 'Online stores with premium design, optimized checkout, and payment integrations. Ecommerce that turns visits into sales.',
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: 'sistemas-web',
    slug: 'sistemas-web',
    updatedAt: '2026-10-29',
    icon: '⬡',
    color: 'violet',
    accentHex: '#8B5CF6',

    title:       'Sistemas Web',
    tagline:     'Software a medida para tu operación',
    description: 'Desarrollamos sistemas web a medida para digitalizar y optimizar procesos internos: paneles de gestión, herramientas específicas para tu operación e integraciones con lo que ya usás.',

    heroTitle:    'Tu operación en un\nsistema que la entiende',
    heroSubtitle: 'Las planillas y los procesos manuales tienen un límite. Cuando tu negocio crece, necesita herramientas que crezcan con él. No adaptaciones de software genérico: algo construido para lo que vos hacés.',

    problem: {
      title: 'El software genérico tiene un costo oculto',
      body:  'Pagar por funciones que no usás, adaptarte a flujos que no son los tuyos, exportar datos a planillas para hacer lo que el sistema no puede. El costo real de un sistema que no encaja no está en el precio mensual, está en el tiempo que consume tu equipo todos los días.',
    },

    benefits: [
      { icon: '⬡', title: 'Construido para tu flujo',       desc: 'No vas a tener que adaptar tu operación al sistema. El sistema se adapta a cómo trabaja tu equipo.' },
      { icon: '◎', title: 'Una sola fuente de información',  desc: 'Todos los datos en un lugar. Sin planillas paralelas, sin versiones desactualizadas, sin información dispersa.' },
      { icon: '⚡', title: 'Integraciones reales',           desc: 'Se conecta con lo que ya usás: facturación, logística, APIs externas. Sin procesos duplicados.' },
      { icon: '✦', title: 'Escala con vos',                  desc: 'Arquitectura pensada para crecer. Agregar módulos, usuarios o funcionalidad no implica reescribir desde cero.' },
    ],

    features: [
      'Relevamiento y análisis funcional detallado',
      'Arquitectura backend escalable',
      'API REST para conectarlo con otros sistemas',
      'Panel de administración a medida',
      'Roles y permisos de usuarios',
      'Integración con sistemas y APIs externas',
      'Dashboard con métricas relevantes',
      'Documentación técnica incluida',
    ],

    technologies: ['Laravel', 'PHP', 'React', 'TypeScript', 'PostgreSQL', 'Redis'],

    cta: {
      title:    '¿Necesitás un sistema a medida?',
      subtitle: 'Contanos qué proceso querés digitalizar. Arrancamos con un relevamiento sin compromiso.',
      label:    'Hablar sobre mi sistema',
    },

    seo: {
      title:       'Sistemas web a medida para empresas',
      description: 'Software a medida para un proceso concreto de tu negocio: paneles de gestión, herramientas internas e integraciones con las APIs que ya usás.',
    },

    // Relaciones declaradas: ver src/data/related.js
    relatedProjects: ['factu'],
    relatedPosts: ['facturacion-electronica-afip-para-independientes'],
    relatedCategories: ['Sistema Web'],

    en: {
      title:       'Web Systems',
      tagline:     'Custom software for your operation',
      description: 'We build custom web systems to digitize and streamline internal processes: management dashboards, tools built for your operation, and integrations with what you already use.',

      heroTitle:    'Your operation, in a\nsystem that gets it',
      heroSubtitle: 'Spreadsheets and manual processes have a ceiling. As your business grows, it needs tools that grow with it \u2014 not generic software bent into shape, but something built for what you actually do.',

      problem: {
        title: 'Generic software has a hidden cost',
        body:  'Paying for features you don\u2019t use, adapting to workflows that aren\u2019t yours, exporting data to spreadsheets to do what the system can\u2019t. The real cost of a system that doesn\u2019t fit isn\u2019t the monthly fee \u2014 it\u2019s the time your team loses every single day.',
      },

      benefits: [
        { icon: '⬡', title: 'Built around your workflow',     desc: 'You won\u2019t adapt your operation to the system. The system adapts to how your team works.' },
        { icon: '◎', title: 'One single source of truth',     desc: 'All your data in one place. No parallel spreadsheets, no outdated versions, no scattered information.' },
        { icon: '⚡', title: 'Real integrations',              desc: 'Connects with what you already use: billing, logistics, external APIs. No duplicated processes.' },
        { icon: '✦', title: 'Scales with you',                 desc: 'Architecture built to grow. Adding modules, users, or features doesn\u2019t mean starting from scratch.' },
      ],

      features: [
        'Detailed functional discovery and analysis',
        'Scalable backend architecture',
        'REST API to connect it with other systems',
        'Custom admin panel',
        'User roles and permissions',
        'Integration with external systems and APIs',
        'Dashboard with relevant metrics',
        'Technical documentation included',
      ],

      cta: {
        title:    'Need a custom system?',
        subtitle: 'Tell us which process you want to digitize. We start with a no-commitment discovery call.',
        label:    'Talk about my system',
      },

      seo: {
        title:       'Custom Web Systems',
        description: 'We build custom web systems: management dashboards and internal tools. Software that adapts to your operation.',
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: 'automatizacion',
    slug: 'automatizacion',
    updatedAt: '2026-10-29',
    icon: '⚡',
    color: 'cyan',
    accentHex: '#06B6D4',

    title:       'Automatización',
    tagline:     'Que las tareas repetitivas se hagan solas',
    description: 'Identificamos los procesos manuales que consumen tiempo de tu equipo y los automatizamos. Workflows, integraciones y bots que trabajan 24/7 por vos.',

    heroTitle:    'Las horas que perdés\nen tareas repetitivas',
    heroSubtitle: 'Responder los mismos mensajes, pasar datos de un sistema a otro, generar reportes a mano, recordar seguimientos. Esas tareas tienen solución. Y la solución no es contratar más gente.',

    problem: {
      title: 'Tu equipo vale más que copiar y pegar',
      body:  'Cada hora que alguien del equipo dedica a tareas mecánicas es una hora que no está resolviendo problemas reales, atendiendo clientes o haciendo crecer el negocio. La automatización no reemplaza personas: libera su tiempo para lo que importa.',
    },

    benefits: [
      { icon: '⚡', title: 'Funciona cuando no estás',       desc: 'Workflows que corren solos, a cualquier hora, sin supervisión. El negocio no para cuando terminás el día.' },
      { icon: '◎', title: 'Menos errores humanos',           desc: 'Los procesos mecánicos tienen errores mecánicos. Automatizarlos elimina la variabilidad y los olvidos.' },
      { icon: '◈', title: 'Todo conectado',                  desc: 'CRM, facturación, WhatsApp, email, planillas. Las herramientas que ya usás, hablando entre sí.' },
      { icon: '✦', title: 'ROI medible',                     desc: 'Las horas ahorradas por semana son un número concreto. La automatización es una inversión con retorno claro.' },
    ],

    features: [
      'Relevamiento de procesos automatizables',
      'Automatización de workflows internos',
      'Integraciones entre plataformas (CRM, email, WhatsApp)',
      'Bots de respuesta y seguimiento automático',
      'Generación automática de reportes',
      'Alertas y notificaciones configurables',
      'Scripts y tareas programadas',
    ],

    technologies: ['Laravel', 'PHP', 'Redis', 'Mercado Pago', 'ARCA WSFEv1'],

    cta: {
      title:    '¿Qué proceso te consume más tiempo?',
      subtitle: 'Contanos cuál es la tarea que más se repite en tu equipo. Probablemente tenga solución.',
      label:    'Hablar sobre automatización',
    },

    seo: {
      title:       'Automatización de procesos',
      description: 'Las herramientas que ya usás, conectadas entre sí, y las tareas repetitivas resueltas solas. Menos carga manual, menos errores, procesos que no se olvidan.',
    },

    relatedCategories: ['Automatización', 'Sistema Web'],

    en: {
      title:       'Automation',
      tagline:     'Let repetitive tasks run themselves',
      description: 'We identify the manual processes eating up your team\u2019s time and automate them. Workflows, integrations, and bots that work for you 24/7.',

      heroTitle:    'The hours you lose\nto repetitive tasks',
      heroSubtitle: 'Answering the same messages, moving data between systems, building reports by hand, remembering follow-ups. These have a solution \u2014 and it\u2019s not hiring more people.',

      problem: {
        title: 'Your team is worth more than copy-paste',
        body:  'Every hour someone on your team spends on mechanical tasks is an hour they\u2019re not solving real problems, helping customers, or growing the business. Automation doesn\u2019t replace people \u2014 it frees their time for what matters.',
      },

      benefits: [
        { icon: '⚡', title: 'Works while you don\u2019t',     desc: 'Workflows that run on their own, any time, with no supervision. The business doesn\u2019t stop when your day ends.' },
        { icon: '◎', title: 'Fewer human errors',              desc: 'Mechanical processes have mechanical errors. Automating them removes the variability and the slip-ups.' },
        { icon: '◈', title: 'Everything connected',            desc: 'CRM, billing, WhatsApp, email, spreadsheets \u2014 the tools you already use, talking to each other.' },
        { icon: '✦', title: 'Measurable ROI',                  desc: 'Hours saved per week is a concrete number. Automation is an investment with a clear return.' },
      ],

      features: [
        'Discovery of automatable processes',
        'Internal workflow automation',
        'Cross-platform integrations (CRM, email, WhatsApp)',
        'Automated response and follow-up bots',
        'Automatic report generation',
        'Configurable alerts and notifications',
        'Scheduled scripts and tasks',
      ],

      cta: {
        title:    'Which process eats up most of your time?',
        subtitle: 'Tell us about the task that repeats the most on your team. It probably has a solution.',
        label:    'Talk about automation',
      },

      seo: {
        title:       'Process Automation',
        description: 'We automate workflows, integrations, and repetitive tasks. More time for your team, fewer errors, processes that run on their own.',
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: 'mantenimiento-web',
    slug: 'mantenimiento-web',
    updatedAt: '2026-10-29',
    icon: '◎',
    color: 'violet',
    accentHex: '#8B5CF6',

    title:       'Mantenimiento Web',
    tagline:     'Tu sitio al día, monitoreado y con backups',
    description: 'Nos ocupamos de que tu sitio o sistema siga funcionando bien: actualizaciones, backups, monitoreo y soporte técnico, para que vos te concentres en tu negocio.',

    heroTitle:    'Tu sitio no debería\nser tu problema',
    heroSubtitle: 'Un sitio que nadie mantiene acumula deuda técnica, se vuelve lento, queda expuesto a vulnerabilidades y eventualmente falla en el peor momento. El mantenimiento no es un costo extra: es lo que protege la inversión que ya hiciste.',

    problem: {
      title: 'Los sitios sin mantenimiento tienen fecha de vencimiento',
      body:  'Plugins desactualizados, certificados SSL vencidos, backups que nunca se hicieron, errores que nadie detectó hasta que un cliente los reportó. El mantenimiento preventivo suele salir más barato que el de emergencia.',
    },

    benefits: [
      { icon: '◎', title: 'Monitoreo continuo',              desc: 'Alertas automáticas si el sitio deja de responder, para enterarnos apenas pasa y actuar.' },
      { icon: '⬡', title: 'Backups que funcionan',           desc: 'Copias de seguridad automáticas y verificadas. Si algo sale mal, restauramos la última copia.' },
      { icon: '✦', title: 'Actualizaciones probadas',        desc: 'Las actualizaciones se prueban en un entorno de prueba antes de aplicarlas en el sitio real.' },
      { icon: '⚡', title: 'Soporte directo',                desc: 'Comunicación directa, sin tickets que nadie lee. Cuando necesitás algo, te respondemos dentro de las 24 horas.' },
    ],

    features: [
      'Monitoreo de disponibilidad con alertas automáticas',
      'Backups automáticos con verificación',
      'Actualizaciones de seguridad y dependencias',
      'Revisión mensual de performance',
      'Corrección de errores y bugs',
      'Soporte técnico con respuesta dentro de las 24 horas',
      'Reporte mensual de estado',
      'Pequeñas mejoras y ajustes incluidos',
    ],

    technologies: ['WordPress', 'Laravel', 'Laravel Forge', 'Vultr', 'Vercel'],

    cta: {
      title:    '¿Tu sitio está en buenas manos?',
      subtitle: 'Si no estás seguro, probablemente no lo esté. Hablemos antes de que sea un problema.',
      label:    'Hablar sobre mantenimiento',
    },

    seo: {
      title:       'Mantenimiento web y soporte técnico',
      description: 'Actualizaciones, backups, monitoreo continuo y soporte directo para que tu sitio esté al día y los problemas se detecten temprano.',
    },

    relatedCategories: ['Diseño Web', 'Ecommerce', 'Sistema Web'],

    en: {
      title:       'Web Maintenance',
      tagline:     'Your site kept current, monitored, and backed up',
      description: 'We keep your site or system running smoothly: updates, backups, monitoring, and technical support, so you can focus on your business.',

      heroTitle:    'Your website shouldn\u2019t\nbe your problem',
      heroSubtitle: 'A site nobody maintains builds up technical debt, gets slower, becomes exposed to vulnerabilities, and eventually fails at the worst moment. Maintenance isn\u2019t an extra cost \u2014 it\u2019s what protects the investment you already made.',

      problem: {
        title: 'Unmaintained sites have an expiration date',
        body:  'Outdated plugins, expired SSL certificates, backups that were never made, bugs nobody caught until a client reported them. Preventive maintenance usually costs less than emergency fixes.',
      },

      benefits: [
        { icon: '◎', title: 'Continuous monitoring',           desc: 'Automatic alerts if the site stops responding, so we find out right away and act.' },
        { icon: '⬡', title: 'Backups that actually work',      desc: 'Automatic, verified backups. If something goes wrong, we restore the latest copy.' },
        { icon: '✦', title: 'Tested updates',                  desc: 'Updates are tested in a staging environment before they reach the live site.' },
        { icon: '⚡', title: 'Direct support',                 desc: 'Direct communication, no tickets nobody reads. When you need something, we reply within 24 hours.' },
      ],

      features: [
        'Uptime monitoring with automatic alerts',
        'Automatic, verified backups',
        'Security and dependency updates',
        'Monthly performance review',
        'Bug fixes and error corrections',
        'Technical support with replies within 24 hours',
        'Monthly status report',
        'Minor improvements and tweaks included',
      ],

      cta: {
        title:    'Is your site in good hands?',
        subtitle: 'If you\u2019re not sure, it probably isn\u2019t. Let\u2019s talk before it becomes a problem.',
        label:    'Talk about maintenance',
      },

      seo: {
        title:       'Professional Web Maintenance',
        description: 'Maintenance, monitoring, and technical support for websites and systems, so they stay current and problems get caught early.',
      },
    },
  },
  // ── Integración con ARCA (ex AFIP) ──────────────────────────────────
  // Captura "integración facturación electrónica ARCA", que antes solo
  // aparecia de costado en el caso de Factu. El contenido sale de ahi y de
  // la guia del blog: no se afirma nada que esas dos paginas no sostengan.
  {
    id: 'integracion-arca',
    slug: 'integracion-arca',
    updatedAt: '2026-10-29',

    icon: '⬡',
    color: 'cyan',
    accentHex: '#06B6D4',

    title:       'Integración con ARCA (ex AFIP)',
    tagline:     'Que el sistema emita la factura, no vos',
    description: 'Conexión entre tu sistema, tu tienda o tu pasarela de cobro y el web service de ARCA, para que cada venta se facture sola. El comprobante sale con su CAE, el PDF se genera con el QR reglamentario y le llega al cliente por mail.',

    heroTitle:    'Facturación electrónica\nque corre sola',
    heroSubtitle: 'Cargar cada venta a mano en el portal de ARCA no escala. La integración directa contra el web service emite cada comprobante sin que nadie tenga que entrar al portal.',

    problem: {
      title: 'El portal de ARCA no fue pensado para tu operación',
      body:  'Emitir un comprobante desde la web de ARCA implica completar varios campos por factura, con validaciones que no son obvias y un tratamiento distinto según a quién le vendas. Con tres ventas por mes es tolerable; con treinta se vuelve un trabajo diario. Y cada carga a mano es una oportunidad de equivocarse en un documento fiscal que después solo se corrige con una nota de crédito.',
    },

    benefits: [
      { icon: '⚡', title: 'Sin carga manual',               desc: 'Cada cobro dispara la emisión sin que nadie entre al portal, y lo dudoso queda para revisar. El comprobante sale con su CAE y el PDF le llega al receptor por mail.' },
      { icon: '◎', title: 'Contra el web service oficial',   desc: 'La integración va por WSFEv1, el mismo servicio con el que ARCA autoriza comprobantes. Nada de automatizar clics sobre una pantalla que puede cambiar mañana.' },
      { icon: '⬡', title: 'Diseñado para no emitir de más',  desc: 'Una factura emitida no se deshace: se anula con una nota de crédito. Ante la duda el sistema no emite, porque una venta sin facturar se resuelve en segundos y una factura de más no.' },
      { icon: '✦', title: 'Multi punto de venta',            desc: 'Varios puntos de venta y varias cuentas de cobro conviviendo en el mismo sistema, cada uno con su numeración y sin pisarse entre sí.' },
    ],

    // Solo lo que está en producción en Factu. Factura A y B no están probadas:
    // ofrecerlas es una decisión de negocio, ver docs/AFIRMACIONES.md.
    features: [
      'Integración con el web service WSFEv1 de ARCA (SOAP)',
      'Certificado fiscal, delegación por el Administrador de Relaciones y punto de venta habilitado',
      'Emisión de Factura C y Nota de Crédito C',
      'Pruebas en homologación antes de pasar a producción',
      'Obtención del CAE y control de su fecha de vencimiento',
      'PDF del comprobante con el QR de la RG 4892',
      'Envío del comprobante al receptor por mail',
      'Conexión con Mercado Pago u otra fuente de cobros',
      'Importes en enteros, sin errores de redondeo',
    ],

    technologies: ['ARCA WSFEv1', 'SOAP', 'Laravel', 'PHP', 'Mercado Pago'],

    cta: {
      title:    '¿Cuántas horas por mes te lleva facturar?',
      subtitle: 'Contanos cómo cobrás hoy y con qué sistema trabajás. Te decimos qué hace falta para que la facturación deje de ser una tarea manual.',
      label:    'Consultar por la integración',
    },

    seo: {
      title:       'Integración de facturación electrónica con ARCA',
      description: 'Integración del web service de ARCA (ex AFIP) en tu sistema: cada venta se factura sola, con CAE, PDF con QR reglamentario y envío al cliente por mail.',
    },

    relatedCategories: ['Sistema Web'],
    // Relaciones declaradas: la ficha de Factu es la prueba de que el
    // servicio existe, y la guía del blog es la puerta de entrada por
    // búsqueda informativa.
    relatedProjects: ['factu'],
    relatedPosts: ['facturacion-electronica-afip-para-independientes'],

    en: {
      title:       'ARCA (ex AFIP) Integration',
      tagline:     'Let the system issue the invoice, not you',
      description: 'A connection between your system, store, or payment gateway and the ARCA web service, so every sale gets invoiced on its own. The document is issued with its CAE code, the PDF is rendered with the regulatory QR, and it reaches the customer by email.',

      heroTitle:    'Electronic invoicing\nthat runs itself',
      heroSubtitle: 'Entering every sale by hand in the ARCA portal does not scale. A direct integration against the web service issues every document without anyone having to open the portal.',

      problem: {
        title: 'The ARCA portal was not built for your operation',
        body:  'Issuing a document from the ARCA website means filling in several fields per invoice, with validations that are not obvious and different handling depending on who you are selling to. At three sales a month it is bearable; at thirty it becomes a daily job. And every manual entry is a chance to get a fiscal document wrong, which can then only be corrected with a credit note.',
      },

      benefits: [
        { icon: '⚡', title: 'No manual entry',                 desc: 'Every payment triggers the issuance without anyone opening the portal, and anything uncertain is held for review. The document comes back with its CAE code and the PDF reaches the recipient by email.' },
        { icon: '◎', title: 'Against the official web service', desc: 'The integration runs on WSFEv1, the same service ARCA uses to authorize documents. No automating clicks on a screen that can change tomorrow.' },
        { icon: '⬡', title: 'Built not to over-issue',          desc: 'An issued invoice cannot be undone: it is voided with a credit note. When in doubt the system does not issue, because an uninvoiced sale is fixed in seconds and an extra invoice is not.' },
        { icon: '✦', title: 'Multiple points of sale',          desc: 'Several points of sale and several payment accounts living in the same system, each with its own numbering and none stepping on another.' },
      ],

      features: [
        'Integration with the ARCA WSFEv1 web service (SOAP)',
        'Fiscal certificate, delegation through the ARCA Relationship Administrator, and authorized point of sale',
        'Type C invoices and Type C credit notes',
        'Testing in the homologation environment before going live',
        'CAE authorization code retrieval and expiry tracking',
        'Document PDF with the RG 4892 QR code',
        'Automatic delivery of the document by email',
        'Connection to Mercado Pago or any other payment source',
        'Amounts as integers, with no rounding errors',
      ],

      cta: {
        title:    'How many hours a month does invoicing cost you?',
        subtitle: 'Tell us how you get paid today and what system you work with. We will tell you what it takes to stop invoicing by hand.',
        label:    'Ask about the integration',
      },

      seo: {
        title:       'ARCA Electronic Invoicing Integration',
        description: 'Integration with the ARCA (ex AFIP) web service so every sale is invoiced on its own: CAE code, PDF with the regulatory QR, and delivery by email.',
      },
    },
  },
]

// ─── Helpers ──────────────────────────────────────────────────────

export function getServiceById(id) {
  return services.find((s) => s.id === id) ?? null
}

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) ?? null
}

function normalizeCategory(str) {
  return str.toLowerCase().trim()
}

export function getRelatedProjects(service, allProjects) {
  if (!service.relatedCategories?.length) return []
  const normalized = service.relatedCategories.map(normalizeCategory)
  return allProjects.filter((p) =>
    normalized.includes(normalizeCategory(p.category))
  )
}

/**
 * Devuelve el servicio con los campos traducidos según el idioma activo.
 * En inglés, sobreescribe los campos base con los del sub-objeto `en`
 * (technologies, icon, color, slug, relatedCategories quedan iguales).
 */
export function localizeService(service, lang) {
  if (!service) return service
  if (lang !== 'en' || !service.en) return service
  const { en, ...base } = service
  return { ...base, ...en }
}

/** Servicios publicados: excluye los borradores sin contenido redactado. */
export const publishedServices = services.filter((s) => !s.draft)

export function localizeServices(lang) {
  return publishedServices.map((s) => localizeService(s, lang))
}
