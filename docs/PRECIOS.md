# Precios "desde"

Los precios viven en un solo archivo: [`src/data/precios.js`](../src/data/precios.js). Hoy tiene dos paquetes de diseño web, que se muestran en la primera pantalla de https://mtstudio.dev/servicios/diseno-web, debajo de los botones:

- Landing page desde $ 150.000
- Sitio web de hasta 5 páginas desde $ 250.000
- Incluyen dominio y alojamiento por 1 año

## Cómo cambiarlos desde el navegador o el teléfono

1. Entrá a https://github.com/Eze-Pertini/mt-studio/blob/main/src/data/precios.js
2. Tocá el lápiz (**Edit this file**).
3. Cambiá el `desde` del paquete: número entero, sin puntos ni signos (`250000`, no `"$250.000"`). Con `null` ese paquete deja de mostrarse; si no queda ninguno, la página no muestra precios.
4. **Commit changes…** → dejá **Commit directly to the `main` branch** → **Commit changes**.
5. Vercel compila y publica solo. Revisá la página para confirmar que se ve el cambio.

Si el número está mal escrito, el build falla a propósito y Vercel deja publicada la versión anterior: el sitio nunca muestra "$NaN". El error se ve en el panel de Vercel, en **Deployments**.

## Qué hay que cuidar

- **El anuncio tiene que decir lo mismo que la página.** Si cambiás un precio, actualizá el anuncio en Google Ads ese mismo día, y también el recurso de precio si lo usás.
- **El precio es una promesa.** El "desde" tiene que existir de verdad, y lo que dice `incluye` se entrega con cualquiera de los paquetes.
- **`incluye` va sin el verbo** (`'dominio y alojamiento por 1 año'`). La página arma "Incluye" o "Incluyen" según cuántos paquetes se vean.
- **La moneda es una sola para todos los precios.** Con `MONEDA = 'ARS'` se ve "$ 150.000"; con `'USD'`, "US$ 300". Si está en pesos, conviene revisarlo seguido.
- **Precios para otro servicio:** se agrega su slug en `precios` con la misma forma.
