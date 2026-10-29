# Política de privacidad

**Estado: borrador propio, NO revisado por un abogado.** Esta marca va solo acá y en el comentario de [`src/pages/Privacy.jsx`](../src/pages/Privacy.jsx), nunca en la página.

La política está en https://mtstudio.dev/privacidad. Se enlaza desde la barra inferior del pie, en todas las páginas, y desde debajo del formulario de contacto. El texto va solo en español, el idioma de la ley que sigue; con la interfaz en inglés, la página lo avisa arriba.

## De dónde sale cada afirmación

| Lo que dice la política | Fuente | Fecha |
|---|---|---|
| Responsable: Ezequiel Pertini, domicilio en CABA | Ezequiel | 29/10/2026 |
| Datos del formulario, obligatorios y opcionales | [`ContactForm.jsx`](../src/components/ui/ContactForm.jsx), el mismo en /contacto y en cada servicio | 29/10/2026 |
| El formulario pasa por EmailJS y llega a Gmail | `ContactForm.jsx` y `config.js` | 29/10/2026 |
| Mails de consultas que no avanzan: se borran dentro de los 30 días | Ezequiel | 29/10/2026 |
| Clientes: los datos se conservan mientras dure la relación de trabajo | Ezequiel, al aprobar el texto | 29/10/2026 |
| WhatsApp: el botón junto a cada formulario precarga lo que se escribió en él | `ContactForm.jsx` | 29/10/2026 |
| GA4 conserva el detalle de cada visita 14 meses | Configurado en GA4 (Conservación de datos) | 29/10/2026 |
| Las únicas cookies son `_ga` y `_ga_WYJ9WZM84Z`, hasta 2 años (Chrome las limita a 13 meses) | Medido en producción con un navegador real | 29/10/2026 |
| El idioma se guarda en localStorage (`mt-studio-lang`), no en una cookie | [`LanguageContext.jsx`](../src/i18n/LanguageContext.jsx) | 29/10/2026 |
| Plazos: acceso en 10 días corridos, corrección o supresión en 5 días hábiles, acceso gratis cada 6 meses | Ley 25.326, arts. 14 y 16 (texto verificado en InfoLEG) | 29/10/2026 |
| Leyenda de la AAIP como órgano de control | Res. AAIP 14/2018, art. 3 (texto verificado en el Boletín Oficial) | 29/10/2026 |

El art. 6 de la Ley 25.326 pide informar cinco cosas antes de recoger datos, y la página cubre las cinco:

- a) la finalidad y los destinatarios;
- b) la base de datos y la identidad y domicilio del responsable;
- c) qué datos son obligatorios;
- d) qué pasa si no se dan o tienen errores;
- e) cómo ejercer los derechos.

## Promesas que se cumplen a mano

- **Borrar a los 30 días los mails de consultas que no avanzaron.** En Gmail conviene un filtro que etiquete los mails del formulario y una revisión mensual de esa etiqueta con `older_than:30d`.
- **EmailJS también guarda un historial de envíos.** No verifiqué cuánto tiempo lo guarda en tu plan: revisalo en su panel. Si guarda más de 30 días, hay que borrarlo a mano o cambiar la política.
- **Pedidos de acceso, corrección o supresión** que lleguen a mtstudio.dev@gmail.com: los plazos de la ley corren desde que llega el pedido.

## Cuándo hay que actualizarla

Cada vez que se sume algo que recoja datos y cada vez que cambie un proveedor o un plazo de conservación. Por ejemplo:

- el píxel de Meta, Hotjar o un chat;
- un newsletter;
- guardar el gclid en el formulario (paso 7 de la Fase 1).

Al cambiarla, actualizar la fecha `ACTUALIZADA` de `Privacy.jsx` y esta tabla.

**Banner de cookies:** para público argentino no hace falta. Si algún día se anuncia en la Unión Europea, hay que revisar Consent Mode v2 con un abogado.

## Para el abogado

1. **La Res. AAIP 14/2018** habla de bases "destinadas a dar informes". ¿Alcanza a este sitio, o la leyenda es solo buena práctica?
2. **Transferencia internacional (art. 12):** Google, EmailJS, Meta y Vercel guardan datos fuera de Argentina. ¿Hace falta consentimiento expreso o alcanza con informarlo?
3. **Registro Nacional de Bases de Datos:** ¿hay que inscribir la base de consultas?
4. **Domicilio:** ¿alcanza "Ciudad Autónoma de Buenos Aires" o el art. 6 pide la dirección completa?
5. **Revisión general** del texto.
