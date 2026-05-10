/**
 * MT Studio — Services Data
 */

export const services = [
  {
    id: 'diseno-web',
    slug: 'diseno-web',
    icon: '✦',
    title: 'Diseño Web',
    tagline: 'Interfaces que no pasan desapercibidas',
    description:
      'Diseñamos sitios web que combinan estética premium con usabilidad real. Cada proyecto parte de entender tu negocio, tu audiencia y lo que necesitás comunicar.',
    features: [
      'Diseño UI/UX personalizado',
      'Responsive design completo',
      'Prototipado interactivo',
      'Sistema de componentes escalable',
      'Optimización de conversión',
    ],
    color: 'violet',
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    icon: '◈',
    title: 'Ecommerce',
    tagline: 'Tiendas online que venden de verdad',
    description:
      'Desarrollamos tiendas online completas con foco en experiencia de compra, performance y conversión. Desde catálogo hasta checkout, sin fricciones.',
    features: [
      'Diseño enfocado en conversión',
      'Integración de medios de pago',
      'Gestión de inventario',
      'Panel de administración propio',
      'Analytics de ventas',
    ],
    color: 'cyan',
  },
  {
    id: 'sistemas-web',
    slug: 'sistemas-web',
    icon: '⬡',
    title: 'Sistemas Web',
    tagline: 'Software a medida para tu operación',
    description:
      'Desarrollamos sistemas web a medida para digitalizar y optimizar procesos internos. Desde CRMs y ERPs hasta herramientas específicas para tu industria.',
    features: [
      'Análisis y relevamiento funcional',
      'Arquitectura escalable',
      'API REST / GraphQL',
      'Panel de administración',
      'Integración con sistemas existentes',
    ],
    color: 'violet',
  },
  {
    id: 'automatizacion',
    slug: 'automatizacion',
    icon: '⚡',
    title: 'Automatización',
    tagline: 'Que las tareas repetitivas se hagan solas',
    description:
      'Identificamos los procesos manuales que consumen tiempo de tu equipo y los automatizamos. Workflows, integraciones y bots que trabajan 24/7 por vos.',
    features: [
      'Automatización de workflows',
      'Integración entre plataformas',
      'Bots y scripts personalizados',
      'Notificaciones automáticas',
      'Reportes automatizados',
    ],
    color: 'cyan',
  },
  {
    id: 'mantenimiento',
    slug: 'mantenimiento',
    icon: '◎',
    title: 'Mantenimiento',
    tagline: 'Tu web siempre al día, siempre segura',
    description:
      'Nos ocupamos de mantener tu sitio o sistema funcionando al 100%. Actualizaciones, backups, monitoreo y soporte técnico para que vos te concentres en tu negocio.',
    features: [
      'Actualizaciones de seguridad',
      'Backups automáticos',
      'Monitoreo 24/7',
      'Soporte técnico prioritario',
      'Mejoras continuas',
    ],
    color: 'violet',
  },
]

export function getServiceById(id) {
  return services.find((s) => s.id === id) ?? null
}
