<div align="center">

# UnEspacio — Storefront

**Una tienda de hogar diseñada para facilitar decisiones de compra con información clara.**

![Astro](https://img.shields.io/badge/Astro-4-BC52EE?style=flat-square&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-yes-344D3C?style=flat-square)
![Shop](https://img.shields.io/badge/Checkout-Pendiente-95704E?style=flat-square)

[**Ver la demo**](https://juanjogamero.github.io/unespacio-site/) · [**Editar datos de producto**](src/data/store.ts) · [**Estado del despliegue**](https://github.com/juanjogamero/unespacio-site/actions/workflows/pages.yml)

</div>

---

## Descripción

UnEspacio es un frontend de comercio electrónico de hogar, construido sobre la estructura Astro existente, con una portada orientada a presentar un producto protagonista de iluminación solar exterior.

Su objetivo es explicar con claridad una necesidad, enseñar sus posibles beneficios, resolver objeciones y facilitar una futura compra cuando estén habilitados el catálogo y la pasarela de pago.

**Estado comercial: pre-lanzamiento.** La demo web no procesa pagos ni recibe pedidos.

## Diseño enfocado a conversión

- Portada con propuesta de valor y botones que llevan al producto.
- Bloque de beneficios centrado en el uso cotidiano.
- Galería de imágenes de ambientación, diferenciadas de fotografías reales del producto.
- Ficha de producto centralizada con precio, disponibilidad y checkout configurables.
- FAQ de objeciones: carga solar, montaje, resistencia, entrega y devoluciones.
- Sección de reseñas que únicamente publica valoraciones reales verificadas.
- Navegación responsive, metadatos SEO y accesibilidad básica.

### Lo que todavía **NO** está activo

No se ha conectado proveedor de dropshipping, stock, pago, envío, impuestos, emails transaccionales ni gestión de pedidos. Tampoco hay testimonios de clientes ni especificaciones técnicas confirmadas. No se han inventado ninguno de esos datos.

## Configuración comercial

Archivo principal: [`src/data/store.ts`](src/data/store.ts).

Ahí se configuran:

| Campo | Qué introducir |
| --- | --- |
| `featuredProduct.name` | Nombre de producto confirmado por proveedor |
| `featuredProduct.image/gallery` | Fotografías del producto con permiso de uso |
| `featuredProduct.priceEur` | Precio final verdadero, incluidos impuestos cuando corresponda |
| `featuredProduct.checkoutUrl` | Enlace real HTTPS a un checkout externo autorizado |
| `featuredProduct.stockConfirmed` | `true` únicamente si se puede atender un pedido |
| `featuredProduct.available` | `true` cuando el producto esté listo para venta |
| `store.checkoutConfigured` | `true` cuando el checkout y cumplimiento legal estén verificados |
| `verifiedReviews` | Solo testimonios auténticos con fuente verificable |

El CTA de compra permanece deshabilitado hasta que todos los requisitos estén configurados. **No basta con publicar la web para abrir una tienda real.**

Para lanzar comercialmente en España deben revisarse, entre otros, identidad legal del comerciante, precio completo, impuestos, información precontractual, envío y devolución/desistimiento, privacidad, cookies, soporte y condiciones del proveedor. Esta configuración debe validarse para el negocio concreto.

## Desarrollo

Requiere Node.js 20+ y npm.

```bash
git clone https://github.com/juanjogamero/unespacio-site.git
cd unespacio-site
npm ci
npm run dev
```

En local: `http://localhost:4321`.

```bash
npm run build
npm run preview
```

## Publicación

Workflow: `.github/workflows/pages.yml`.

1. Entra en [Settings → Pages](https://github.com/juanjogamero/unespacio-site/settings/pages) y configura **Source: GitHub Actions**.
2. Abre [Build and deploy UnEspacio storefront](https://github.com/juanjogamero/unespacio-site/actions/workflows/pages.yml).
3. Ejecuta **Run workflow** en `main`, o sube cambios a la rama.
4. Verifica el resultado antes de considerar publicada la web.

URL prevista: https://juanjogamero.github.io/unespacio-site/

El proyecto mantiene el sitio `https://unespacio.es` como referencia de compilación fuera de GitHub Actions. La publicación en el dominio personalizado exige configurar aparte DNS y hosting.

## Arquitectura

```text
src/
├── data/store.ts          # Datos comerciales y reseñas verificadas
├── layouts/ShopLayout.astro
├── pages/index.astro      # Nueva tienda
├── styles/shop.css        # Sistema visual responsive
├── components/            # Componentes anteriores, aún disponibles
└── pages/                 # Rutas editoriales antiguas, aún presentes
.github/workflows/pages.yml
```

Las páginas de la versión editorial anterior permanecen en el repositorio, pero no forman parte de la navegación comercial nueva. Conviene revisar su contenido y textos legales antes de publicar el proyecto en un dominio real.

---

Proyecto web de UnEspacio · Desarrollo con Astro.
