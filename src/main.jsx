import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './styles/globals.css'

/**
 * Entry de vite-react-ssg: en build renderiza cada ruta a HTML estático y en
 * el navegador hidrata ese mismo marcado. No se monta ReactDOM a mano.
 *
 * El HelmetProvider lo aporta vite-react-ssg, que es quien después extrae los
 * tags del <head> y los escribe en el HTML generado; por eso SEOHead usa su
 * componente Head y no react-helmet-async directo.
 *
 * Los proveedores propios de la app (idioma) viven en el elemento de la ruta
 * raíz, en routes.jsx, para que envuelvan tanto el render de build como el
 * del cliente.
 */
export const createRoot = ViteReactSSG({ routes })
