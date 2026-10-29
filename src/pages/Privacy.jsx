import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '@components/ui/SEOHead'
import { pageSchema } from '@data/schema'
import { PageTransition } from '@components/animations'
import { EMAIL, STUDIO } from '@data/config'
import { useLanguage } from '@i18n/LanguageContext'

/**
 * Política de privacidad (Ley 25.326).
 *
 * BORRADOR PROPIO, NO REVISADO POR UN ABOGADO. Esta marca va solo acá y en
 * docs/PRIVACIDAD.md, nunca en la página. Antes de cambiar el texto, ver en
 * ese documento de dónde sale cada dato y qué quedó para consultar.
 *
 * El texto va solo en español: es el idioma de la ley que sigue. Con la
 * interfaz en inglés se avisa arriba.
 *
 * Sin animaciones de entrada: es texto para leer, y así se ve completo desde
 * el HTML aunque el JavaScript tarde.
 */

const ACTUALIZADA = '29 de octubre de 2026'

export default function Privacy() {
  const { lang } = useLanguage()

  return (
    <PageTransition>
      <SEOHead
        title={lang === 'en' ? 'Privacy policy' : 'Política de privacidad'}
        description="Qué datos recoge mtstudio.dev, para qué los usamos, cuánto los guardamos y cómo pedir que los corrijamos o los borremos."
        url="/privacidad"
        jsonLd={pageSchema([{ name: 'Inicio', path: '/' }, { name: 'Política de privacidad', path: '/privacidad' }])}
      />

      <section className="pt-32 pb-24">
        <div className="container-custom">
          <article className="max-w-3xl mx-auto text-text-secondary leading-relaxed space-y-10">
            <header>
              <h1 className="text-display-sm font-bold text-text-primary mb-3">Política de privacidad</h1>
              <p className="text-sm text-text-muted">Última actualización: {ACTUALIZADA}</p>
              {lang === 'en' && (
                <p className="mt-4 text-sm text-text-muted">
                  This privacy policy is available in Spanish only, the language of the Argentine law it follows.
                </p>
              )}
            </header>

            <Seccion titulo="Quién es el responsable">
              <p>
                {STUDIO.name} es el estudio de diseño y desarrollo web de {STUDIO.founder}, con domicilio en la
                Ciudad Autónoma de Buenos Aires, Argentina, responsable de los datos que se recogen en mtstudio.dev.
                Para cualquier consulta sobre esta política, escribinos a <Mail />.
              </p>
            </Seccion>

            <Seccion titulo="Qué datos recogemos y para qué">
              <h3 className="text-base font-semibold text-text-primary">Formulario de contacto</h3>
              <p>
                Si nos escribís por el <Link to="/contacto" className={ENLACE}>formulario</Link>, recibimos tu nombre,
                tu email y tu mensaje, que son obligatorios, y la empresa o proyecto y el servicio que elegiste, que son
                opcionales. Los usamos solo para responder tu consulta y, si avanzamos, para preparar una propuesta. Sin
                los datos obligatorios no podemos contestarte, y si el email tiene un error, la respuesta no te llega.
              </p>
              <p>
                El formulario se envía a través de EmailJS, un servicio que lo convierte en un mail, y llega a nuestra
                casilla de Gmail. Si la consulta no avanza, borramos el mail dentro de los 30 días. Si se convierte en
                un proyecto, conservamos tus datos mientras dure la relación de trabajo.
              </p>

              <h3 className="text-base font-semibold text-text-primary">WhatsApp</h3>
              <p>
                Si tocás un botón de WhatsApp, se abre una conversación en WhatsApp, un servicio de Meta. Lo que nos
                escribas ahí también se rige por las condiciones y la política de privacidad de WhatsApp. En la página
                de contacto, si completaste el formulario antes de tocar el botón, el mensaje se precarga con esos
                datos, y vos decidís si lo enviás.
              </p>

              <h3 className="text-base font-semibold text-text-primary">Estadísticas de visitas</h3>
              <p>
                Usamos Google Analytics para saber cómo se usa el sitio: qué páginas se visitan, desde qué tipo de
                dispositivo y navegador, desde qué ciudad o país aproximado y cómo llegó cada visita. También
                registramos si alguien toca un botón de WhatsApp o envía el formulario, sin el contenido del mensaje.
                Vemos esa información en conjunto, sin tu nombre ni tu email. El detalle de cada visita se conserva 14
                meses; después quedan solo los totales.
              </p>

              <h3 className="text-base font-semibold text-text-primary">Publicidad en Google</h3>
              <p>
                Si llegaste por un anuncio de Google, la dirección de la página puede traer un identificador del clic,
                y Google Ads usa cookies para registrar si esa visita terminó en un contacto. Nos sirve para saber qué
                anuncios funcionan, y no recibimos datos que te identifiquen.
              </p>

              <h3 className="text-base font-semibold text-text-primary">Preferencia de idioma</h3>
              <p>
                Si cambiás el idioma del sitio, tu navegador guarda esa elección para mostrártelo en ese idioma la
                próxima vez. Queda en el almacenamiento local del navegador, no en una cookie, y no nos llega.
              </p>

              <h3 className="text-base font-semibold text-text-primary">Datos técnicos del servidor</h3>
              <p>
                El sitio está alojado en Vercel. Como cualquier servidor, registra datos técnicos de cada visita, como
                la dirección IP y el navegador, para funcionar y protegerse de abusos.
              </p>
            </Seccion>

            <Seccion titulo="Cookies">
              <p>
                El sitio usa las cookies de Google Analytics, <code className={CODIGO}>_ga</code> y{' '}
                <code className={CODIGO}>_ga_WYJ9WZM84Z</code>, que duran hasta dos años (algunos navegadores, como
                Chrome, las limitan a 13 meses). Si llegaste por un anuncio, se suman las de Google Ads. Podés
                bloquearlas o borrarlas desde la configuración de tu navegador: el sitio funciona igual.
              </p>
            </Seccion>

            <Seccion titulo="Dónde se guardan los datos">
              <p>
                Para funcionar usamos servicios de terceros que guardan datos en servidores fuera de Argentina: Google
                (Analytics, Gmail y Google Ads), EmailJS, Meta (WhatsApp) y Vercel. No vendemos tus datos ni los
                compartimos con nadie fuera de estos servicios.
              </p>
            </Seccion>

            <Seccion titulo="Tus derechos">
              <p>
                Podés pedirnos en cualquier momento acceder a tus datos, corregirlos, actualizarlos o eliminarlos,
                escribiendo a <Mail />. Respondemos los pedidos de acceso dentro de los 10 días corridos, y las
                correcciones o eliminaciones dentro de los 5 días hábiles, como fija la Ley 25.326. El acceso es
                gratuito a intervalos no menores a seis meses, salvo que acredites un interés legítimo.
              </p>
              <p className="text-sm text-text-muted">
                LA AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326,
                tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en
                sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.
              </p>
            </Seccion>

            <Seccion titulo="Cambios en esta política">
              <p>Si cambiamos esta política, actualizamos la fecha del principio.</p>
            </Seccion>
          </article>
        </div>
      </section>
    </PageTransition>
  )
}

const ENLACE = 'text-violet-400 hover:text-violet-300 underline underline-offset-2'
const CODIGO = 'text-sm text-text-primary'

function Seccion({ titulo, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-text-primary">{titulo}</h2>
      {children}
    </section>
  )
}

function Mail() {
  return <a href={`mailto:${EMAIL}`} className={ENLACE}>{EMAIL}</a>
}
