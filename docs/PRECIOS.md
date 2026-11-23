# Precios "desde"

Los precios viven en un solo archivo: [`src/data/precios.js`](../src/data/precios.js). Se muestran en la primera pantalla de cada servicio que tiene precio, entre la prueba y los botones.

**Diseño web** (https://mtstudio.dev/servicios/diseno-web), vigentes desde el 10/11/2026. Del 29/10/2026 al 10/11/2026 fueron $ 150.000 y $ 250.000.

- Landing page desde $ 200.000
- Sitio web de hasta 5 páginas desde $ 350.000
- Incluyen dominio y alojamiento por 1 año

**Tiendas en Tiendanube** (https://mtstudio.dev/servicios/tiendanube), desde el 23/11/2026:

- Tienda de hasta 30 productos desde $ 130.000
- Debajo, la `nota`: "Precio de diciembre, para tiendas contratadas hasta el 31/12. Precio final, con Factura C."
- El `adicional`, "Cada 20 productos más, $ 20.000.", va debajo de "Qué incluye" y no en la primera pantalla: ahí alargaba la página y en un teléfono de 360×740 dejaba afuera la última línea.

## El 1/1/2027: fin del precio de diciembre

En `precios.js`, en `tiendanube`:

1. `desde: 130000` pasa a `desde: 150000`.
2. La `nota` pierde la promoción: `es: 'Precio final, con Factura C.'` y `en: 'Final price (Type C invoice).'`
3. El mismo día: las publicaciones de Instagram y los anuncios que muestren el precio de diciembre.

El ` ` es un espacio que no corta la línea, para que "Factura C" no quede partido en dos renglones.

## Cómo cambiarlos desde el navegador o el teléfono

1. Entrá a https://github.com/Eze-Pertini/mt-studio/blob/main/src/data/precios.js
2. Tocá el lápiz (**Edit this file**).
3. Cambiá el `desde` del paquete: número entero, sin puntos ni signos (`250000`, no `"$250.000"`). Con `null` ese paquete deja de mostrarse; si no queda ninguno, la página no muestra precios.
4. **Commit changes…** → dejá **Commit directly to the `main` branch** → **Commit changes**.
5. Vercel compila y publica solo. Revisá la página para confirmar que se ve el cambio.

Si el número está mal escrito, el build falla a propósito y Vercel deja publicada la versión anterior: el sitio nunca muestra "$NaN". El error se ve en el panel de Vercel, en **Deployments**.

## Qué hay que cuidar

- **El anuncio tiene que decir lo mismo que la página.** Si cambiás un precio, actualizá el anuncio en Google Ads ese mismo día: dos títulos, dos descripciones y el texto destacado "Precios desde…" (ver [GOOGLE-ADS.md](GOOGLE-ADS.md)). También las publicaciones de Instagram que muestran precios.
- **El precio es una promesa.** El "desde" tiene que existir de verdad, y lo que dice `incluye` se entrega con cualquiera de los paquetes.
- **`incluye` va sin el verbo** (`'dominio y alojamiento por 1 año'`). La página arma "Incluye" o "Incluyen" según cuántos paquetes se vean.
- **`nota` y `adicional` se escriben enteros**, en castellano y en inglés, y el monto va escrito a mano: si cambia la moneda o el precio del adicional, hay que cambiar el texto. Si falta uno de los dos idiomas, el build falla.
- **La moneda es una sola para todos los precios.** Con `MONEDA = 'ARS'` se ve "$ 200.000"; con `'USD'`, "US$ 300". Si está en pesos, conviene revisarlo seguido.
- **Precios para otro servicio:** se agrega su slug en `precios` con la misma forma.
