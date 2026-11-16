<div align="center">

# Lumina Solar

**Concepto de tienda online de producto único orientada a la conversión, con una experiencia de compra transparente.**

![Astro](https://img.shields.io/badge/Astro-4-BC52EE?style=flat-square&logo=astro&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Ready-225842?style=flat-square)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Static-161B22?style=flat-square&logo=github)

[**Visitar la demo**](https://juanjogamero.github.io/lumina-solar-store/) · [**Ver despliegues**](https://github.com/juanjogamero/lumina-solar-store/actions/workflows/pages.yml)

</div>

---

## Qué es

El proyecto se ha reorientado desde un portal editorial de hogar y jardín hacia una **landing comercial centrada en un único producto**. La primera versión utiliza como **producto de referencia** un aplique solar de exterior con sensor de movimiento.

La web combina fotografía ambiental, narrativa de beneficios, ficha de producto, packs, FAQ y un carrito interactivo. Está preparada para mostrar el recorrido de compra, pero **no vende ni cobra**.

> [!IMPORTANT]
> **Demo, no tienda operativa.** Los precios y packs son ejemplos. Las fotos disponibles muestran ambientes residenciales, **no el producto real**. No existe proveedor aprobado, inventario, checkout, plazo de entrega garantizado ni reseñas de compradores verificadas. Antes de lanzar, hay que sustituir estas partes y validar la ficha técnica y el cumplimiento legal.

## Experiencia de compra

| Área | Implementación |
| --- | --- |
| Hero | Propuesta de valor enfocada en hogar y exterior |
| Producto | Galería interactiva, descripción, precio de demo y selección de packs |
| Carrito | Añadir packs, cambiar cantidad y consultar subtotal, con persistencia local |
| Beneficios | Posibilidades del producto explicadas con sus límites |
| Confianza | Comunicación explícita de lo confirmado y lo pendiente |
| Comparación | Lista de criterios relevantes para tomar una decisión |
| Reseñas | Sección preparada; sin puntuaciones ni opiniones inventadas |
| FAQ | Respuestas sobre uso, instalación, autonomía, envíos y devoluciones |
| Móvil | Diseño responsive y acceso rápido a producto |
| Pagos | Desactivados expresamente |

El carrito de demostración usa `localStorage`, no almacena datos de pago ni crea pedidos reales.

## Arquitectura

- **Astro 4** para la generación estática.
- HTML y CSS para una página de producto ligera y responsive.
- JavaScript del navegador para galería, selección de packs, cantidad, carrito y FAQ.
- Configuración condicional de `base` en `astro.config.mjs` para publicar en GitHub Pages sin alterar la configuración del dominio previsto.
- `.github/workflows/pages.yml` para compilar y publicar `dist/` automáticamente.

## Ejecutar en local

```bash
git clone https://github.com/juanjogamero/lumina-solar-store.git
cd lumina-solar-store
npm ci
npm run dev
```

La portada se encuentra en `src/pages/index.astro`.

## Publicar en GitHub Pages

1. Abre [Settings → Pages](https://github.com/juanjogamero/lumina-solar-store/settings/pages).
2. Selecciona **GitHub Actions** como fuente.
3. Revisa o ejecuta [Build and deploy UnEspacio storefront](https://github.com/juanjogamero/lumina-solar-store/actions/workflows/pages.yml) con la rama `main`.
4. La URL prevista es **https://juanjogamero.github.io/lumina-solar-store/**.

No se debe anunciar la demo como publicada hasta que la ejecución de **build** y **deploy** sea correcta.

## Lista de requisitos antes de vender

- [ ] Elegir un producto concreto y recibir una muestra física.
- [ ] Verificar certificaciones, conformidad, instrucciones, marcado y seguridad aplicables.
- [ ] Fotografiar y grabar la unidad real, y obtener derechos sobre todo material promocional.
- [ ] Registrar el proveedor, su origen, stock real, condiciones de devolución y coste total puesto en destino.
- [ ] Confirmar especificaciones y beneficios: batería, lúmenes, materiales, índice IP, sensor, autonomía y dimensiones.
- [ ] Determinar precios reales, impuestos, margen y costes de publicidad, envío, comisiones y devoluciones.
- [ ] Integrar un checkout real con un proveedor de pago y gestión segura de pedidos.
- [ ] Implementar inventario, emails transaccionales, seguimiento de pedido y atención posventa.
- [ ] Publicar identidad del vendedor, aviso legal, privacidad, cookies cuando proceda, métodos de pago, entregas, devoluciones y desistimiento.
- [ ] Recopilar opiniones genuinas y explicar cómo se comprueba su autenticidad.
- [ ] Configurar analítica con consentimiento cuando sea necesario y probar embudo de compra en móvil.
- [ ] Hacer pedidos de prueba de extremo a extremo antes de recibir tráfico de pago.

En una tienda real con dropshipping, **el vendedor sigue teniendo obligaciones frente al consumidor** aunque el producto sea enviado por un tercero.

## Decisiones de conversión

La landing prioriza información relevante cerca del CTA (producto, precio, packs y condiciones), amplía la explicación con beneficios y FAQ, evita reseñas inventadas y muestra el carrito de forma inmediata. Estas decisiones se inspiran en investigaciones de UX sobre fichas de producto, claridad de envíos y devoluciones, pero **no garantizan ventas**.

Fuentes de referencia:
- [Baymard Institute: investigación sobre páginas de producto](https://baymard.com/research/product-page)
- [Baymard Institute: prácticas UX 2026](https://baymard.com/research-articles/current-state-ecommerce-product-page-ux)
- [Your Europe: derecho de desistimiento](https://europa.eu/youreurope/citizens/consumers/shopping/returns/index_en.htm)
- [Centro Europeo del Consumidor: riesgos del dropshipping](https://portal-cec.consumo.gob.es/es/comunicacion/noticias/2024/la-red-ecc-net-reclama-una-mayor-regulacion-para-proteger-los)

---

**Estado:** demostración comercial estática · **No se aceptan pagos ni pedidos.**
