import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Enlaces internos hacia contenido relacionado. El texto del enlace es el
 * titulo del destino, nunca "ver mas": tanto un lector como un buscador
 * tienen que poder saber a donde van sin leer lo que hay alrededor.
 */
export default function RelatedLinks({ items, heading = 'Seguí leyendo', id = 'contenido-relacionado' }) {
  if (!items?.length) return null

  return (
    <section className="py-16 border-t border-subtle" aria-labelledby={id}>
      <div className="container-custom">
        <h2 id={id} className="text-display-sm font-bold text-text-primary mb-6">
          {heading}
        </h2>
        <ul className="grid gap-4 md:grid-cols-2 max-w-4xl">
          {items.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="group block glass-card p-5 h-full hover:border-default transition-all duration-300"
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                  {item.label}
                </span>
                <span className="block text-base font-bold text-text-primary mt-1 group-hover:text-violet-400 transition-colors">
                  {item.title}
                </span>
                {item.blurb && (
                  <span className="block text-sm text-text-secondary mt-2 line-clamp-2">{item.blurb}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
