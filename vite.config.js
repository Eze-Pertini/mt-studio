import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// La etiqueta de Google se escribe en el HTML solo si el build tiene
// VITE_GA_ID. En Vercel la variable existe solo en Production: en desarrollo,
// en las pruebas y en las vistas previas no queda nada de la etiqueta y
// ninguna visita entra a las estadísticas reales. Ver docs/MEDICION.md.
//
// gtag.js se pide después de load. Analytics no aporta nada a lo que el
// visitante ve, así que no tiene por qué competir por ancho de banda con lo
// que sí: en el teléfono eran ~90 KB de tercero peleando con el primer
// render. La cola de gtag se arma antes, así que ningún evento disparado en
// el arranque se pierde.
function etiquetaGoogle(id) {
  return {
    name: 'mt-etiqueta-google',
    transformIndexHtml(html) {
      if (!id) return html
      if (!/^G-[A-Z0-9]+$/.test(id)) throw new Error(`VITE_GA_ID no tiene forma de ID de GA4: "${id}"`)
      const etiqueta = `<script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${id}');

      addEventListener('load', function () {
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=${id}';
        document.head.appendChild(s);
      });
    </script>`
      return html.replace('</head>', `  ${etiqueta}\n  </head>`)
    },
  }
}

export default defineConfig(({ mode, isSsrBuild }) => {
  const gaId = loadEnv(mode, process.cwd(), 'VITE_').VITE_GA_ID
  // En el deploy de producción, sin el ID el sitio quedaría sin medición. Mejor
  // que el build falle: Vercel deja publicada la versión anterior.
  if (process.env.VERCEL_ENV === 'production' && !gaId) {
    throw new Error('Falta VITE_GA_ID en el entorno Production de Vercel (ver docs/MEDICION.md)')
  }
  return {
    plugins: [react(), etiquetaGoogle(gaId)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@data': path.resolve(__dirname, './src/data'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@services': path.resolve(__dirname, './src/services'),
        '@animations': path.resolve(__dirname, './src/animations'),
        '@i18n': path.resolve(__dirname, './src/i18n'),
      }
    },
    build: {
      rollupOptions: {
        output: {
          // En el build de servidor que hace vite-react-ssg, react y react-dom
          // quedan como modulos externos, y rollup no permite externos dentro
          // de manualChunks. La separacion en chunks solo aplica al bundle que
          // descarga el navegador.
          manualChunks: isSsrBuild
            ? undefined
            : {
                vendor: ['react', 'react-dom', 'react-router-dom'],
                animations: ['framer-motion'],
              },
        }
      }
    }
  }
})
