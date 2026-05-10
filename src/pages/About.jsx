import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '@components/ui/SEOHead'
import { PageTransition, FadeUp, SlideIn, StaggerContainer, StaggerItem } from '@components/animations'
import { CTASection } from '@components/sections/HomeExtras'

const values = [
  { icon: '✦', title: 'Calidad sin atajos', desc: 'Preferimos entregar menos proyectos y hacerlos bien. Cada entrega tiene que representar lo mejor de lo que podemos hacer.' },
  { icon: '◎', title: 'Transparencia total', desc: 'Sin sorpresas. Sabés cuánto cuesta, cuánto tarda y qué incluye. La confianza se construye con claridad.' },
  { icon: '⬡', title: 'Tecnología con criterio', desc: 'Usamos la tecnología correcta para cada proyecto, no la más popular o la que mejor nos queda.' },
  { icon: '◈', title: 'Diseño con propósito', desc: 'El diseño no es decoración. Cada decisión visual tiene un impacto en la experiencia y en los resultados.' },
]

export default function About() {
  return (
    <PageTransition>
      <SEOHead
        title="Nosotros"
        description="MT Studio es un estudio digital independiente fundado con la convicción de que el diseño y la tecnología premium no son exclusivos de las grandes empresas."
        url="/nosotros"
      />

      {/* Header */}
      <section className="pt-32 pb-20 hero-bg" aria-labelledby="about-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium mb-6"
                     style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.25)', color: '#A78BFA' }}>
                  Sobre nosotros
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-display-xl font-black text-text-primary mb-4 text-balance" id="about-heading">
                  Un estudio que se <span className="gradient-text">involucra de verdad</span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-text-secondary text-lg leading-relaxed">
                  MT Studio nació de la convicción de que el diseño premium y la tecnología sólida
                  no son exclusivos de las grandes empresas. Los negocios que recién arrancan,
                  los profesionales independientes y las PYMEs merecen exactamente lo mismo.
                </p>
              </FadeUp>
            </div>

            <SlideIn direction="right" delay={0.2}>
              <div
                className="rounded-panel p-10 text-center"
                style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(6,182,212,0.05))', border: '1px solid rgba(139,92,246,0.15)' }}
              >
                <div className="text-6xl font-black gradient-text mb-2">MT</div>
                <div className="text-2xl font-light text-text-secondary tracking-widest mb-6">Studio</div>
                <div className="text-sm text-text-muted">Argentina 🇦🇷 · Diseño & Desarrollo Digital</div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding" aria-labelledby="story-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <h2 className="text-display-sm font-bold text-text-primary mb-6" id="story-heading">
                La historia
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Empezamos como muchos estudios: con proyectos pequeños, muchas ganas y la certeza
                  de que podíamos hacer algo distinto. Lo que nos diferenciaba no era la tecnología
                  que usábamos ni el precio que cobrábamos, sino la forma en que encarábamos cada proyecto.
                </p>
                <p>
                  Con el tiempo aprendimos que los mejores proyectos no nacen de briefings perfectos
                  ni de clientes con todo claro. Nacen de conversaciones honestas, de entender el
                  negocio detrás del pedido, y de tener el coraje de decir cuándo algo no va a funcionar.
                </p>
                <p>
                  Hoy MT Studio es un estudio pequeño por elección. Trabajamos con pocos proyectos
                  a la vez para garantizar que cada cliente reciba la atención que merece.
                  No somos para todos. Somos para los que entienden que la calidad digital importa.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-bg-secondary/50" aria-labelledby="values-heading">
        <div className="container-custom">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-display-md font-bold text-text-primary" id="values-heading">
                Lo que nos guía
              </h2>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.1}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="glass-card p-6 h-full">
                  <div className="text-2xl gradient-text mb-4" aria-hidden="true">{v.icon}</div>
                  <h3 className="text-base font-bold text-text-primary mb-2">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  )
}
