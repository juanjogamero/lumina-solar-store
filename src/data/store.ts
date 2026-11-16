/**
 * Datos comerciales configurables.
 * No activar compras ni publicar afirmaciones sobre autonomía, materiales,
 * protección IP, potencia o certificaciones sin contrastarlas con el proveedor.
 */
export type StoreProduct = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  benefits: { heading: string; description: string }[];
  priceEur: number | null;
  compareAtEur: number | null;
  checkoutUrl: string | null;
  stockConfirmed: boolean;
  available: boolean;
};

export const store = {
  name: "UnEspacio",
  checkoutConfigured: false,
  supportEmail: null as string | null,
  shippingPolicyConfirmed: false,
  returnsPolicyConfirmed: false,
  announcement: "UnEspacio · Selección de ideas para transformar tu hogar",
} as const;

export const featuredProduct: StoreProduct = {
  id: "luz-solar-exterior",
  name: "Luz solar para exterior",
  category: "Iluminación exterior",
  tagline: "Ambientes que empiezan al caer el sol.",
  description: "Concepto de iluminación exterior sin necesidad de llevar un cable de alimentación hasta el punto de instalación, sujeto a las características del modelo definitivo.",
  image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  gallery: [
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
  ],
  benefits: [
    {heading: "Una entrada más acogedora", description: "Plantea una luz de ambiente para entradas, porches y zonas de paso exteriores."},
    {heading: "Sin obra para pasar cables", description: "Los modelos solares autónomos pueden evitar llevar una conexión eléctrica al punto de luz."},
    {heading: "Un exterior mejor aprovechado", description: "Complementa terrazas y patios con iluminación de apoyo donde se necesite."},
    {heading: "Diseño que acompaña", description: "Una pieza bien elegida puede integrarse en la fachada y reforzar su estética."}
  ],
  priceEur: null,
  compareAtEur: null,
  checkoutUrl: null,
  stockConfirmed: false,
  available: false,
};

export type VerifiedReview = {
  author: string;
  date: string;
  rating: 1|2|3|4|5;
  text: string;
  source: string;
};
/** Reseñas verificadas por el comercio, nunca generar testimonios ficticios. */
export const verifiedReviews: VerifiedReview[] = [];
