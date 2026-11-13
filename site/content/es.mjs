// Textos en español de la documentación de la calculadora. Misma forma que en.mjs.

export default {
  siteName: "Calculadora de Telegram Stars para JavaScript",
  short: "Calculadora de Stars",

  ui: {
    navLabel: "Secciones de la documentación",
    langsLabel: "Idiomas",
    footerBy: (brand) => `Código abierto de ${brand}, la Mini App de Telegram con cajas de regalos y juegos.`,
    moreLabel: "Más de Gift Club",
    sourceOnGithub: "Código en GitHub",
    sisters: { dataset: "Datos de Telegram", calculator: "Calculadora de Estrellas", verifier: "Provably fair verifier" },
    updated: "Precios leídos",
    faqHeading: "Preguntas",
    relatedHeading: "Sigue leyendo en Gift Club",
  },

  nav: { home: "Resumen", api: "API", embed: "Incrustar" },

  home: {
    title: () => "Calculadora de Telegram Stars: paquete npm y componente web",
    description: ({ F, n }) =>
      `JavaScript sin dependencias que calcula el precio de cualquier cantidad de Telegram Stars en Fragment y en la App Store de ${n(F.stores)} países. Paquete npm y widget listo para usar, MIT.`,
    h1: "Calculadora de Telegram Stars para JavaScript",
    lead: ({ F, n }) =>
      `Calcula cuánto cuesta cualquier cantidad de Telegram Stars en Fragment y en la App Store de ${n(F.stores)} países, en Node.js o en el navegador. Sin dependencias ni llamadas de red.`,
    answer: ({ F, money, pct }) =>
      `1000 Telegram Stars cuestan <strong>${money(F.usd1000)}</strong> en Fragment y <strong>${money(F.app1000)}</strong> en la App Store de EE. UU., así que en Fragment cada Estrella sale ${pct(F.saving)} más barata. El paquete devuelve estas cifras para cualquier cantidad y país.`,
    tableCaption: "App Store (EE. UU.) frente a Fragment, según el paquete",
    cols: { stars: "Estrellas", fragment: "Fragment", appStore: "App Store (EE. UU.)" },
    installHeading: "Instalación",
    installText: ({ F, money }) =>
      `<code>compare()</code> devuelve ambos precios, los paquetes que hay que comprar en la App Store y el ahorro. Fragment vende cualquier cantidad desde ${F.min} Estrellas a ${money(F.perStar)} cada una; la App Store vende paquetes fijos, así que el plan redondea hacia arriba hasta la cantidad más pequeña que se pueda formar con ellos.`,
    widgetHeading: "Widget listo para usar",
    widgetText:
      "Una sola etiqueta script añade un elemento <code>&lt;telegram-stars-calculator&gt;</code> en nueve idiomas. Funciona por completo dentro de la página, no muestra enlaces y no envía peticiones.",
    demoLink: "Probar el widget",
    featuresHeading: "Qué hace",
    features: ({ F, n }) => [
      `Calcula cualquier cantidad de 1 a ${n(100000)} Estrellas en ${n(F.stores)} países de la App Store, en la moneda de cada tienda.`,
      "Encuentra los paquetes de la App Store que hay que comprar: la cantidad más pequeña igual o superior a la pedida, con el menor número de compras.",
      "Convierte el precio en dólares de Fragment a la moneda de cada tienda con el tipo de cambio fechado de un banco central.",
      "Incluye tipos de TypeScript, módulos ES y pruebas; funciona en Node 18+ y en todos los navegadores modernos.",
    ],
    countriesHeading: "Países incluidos",
    sourceNote: (dataset, d) => `Los precios provienen de ${dataset}, leídos hasta el ${d}. Cada precio es el que Apple muestra en ese país; ninguno está convertido.`,
    faq: ({ F, money }) => [
      {
        q: "¿Cuántos dólares cuestan 1000 Telegram Stars?",
        a: `${money(F.usd1000)} en Fragment y ${money(F.app1000)} en la App Store de EE. UU.`,
      },
      {
        q: "¿El paquete consulta precios en vivo?",
        a: "No. Incluye una instantánea fechada, de modo que los resultados son repetibles y funcionan sin conexión. Actualiza el paquete para obtener precios más recientes.",
      },
      {
        q: "¿Puedo usarlo en una app o bot comercial?",
        a: "Sí, tiene licencia MIT.",
      },
      {
        q: "¿Por qué no hay precio de Google Play?",
        a: "Google Play no publica una lista de precios pública que se pueda leer, así que el paquete solo cubre Fragment y la App Store.",
      },
    ],
  },

  api: {
    title: "API de la calculadora de Telegram Stars (JavaScript)",
    description: "Todas las funciones del paquete de la calculadora de Telegram Stars: compare, appStorePlan, fragmentPlan, starsToUsd, usdToStars y las constantes de precios.",
    h1: "Referencia de la API",
    intro: "Todas las funciones son puras y síncronas. Las cantidades se limitan a un rango de 1 a 100 000 Estrellas; un país es un código ISO como <code>\"us\"</code> o <code>\"de\"</code>.",
    compare: "Las dos formas de comprar <code>stars</code> en un país. <code>saving</code> indica cuánto menos cuesta una Estrella en Fragment, como fracción, o <code>null</code> cuando la instantánea no tiene tipo de cambio para esa moneda.",
    appStorePlan: "Los paquetes de la App Store que hay que comprar: el total más pequeño igual o superior a <code>stars</code> que puedan formar los paquetes del país, con el menor número de compras. Lanza un <code>RangeError</code> si el país es desconocido.",
    fragmentPlan: "El precio de Fragment para <code>stars</code> (como mínimo su cantidad mínima), en dólares y, si la instantánea tiene tipo de cambio, en <code>currency</code>.",
    convert: "De Estrellas a dólares y viceversa con la tarifa fija de Fragment.",
    constants: "La instantánea en sí: los paquetes de cada país con la fecha de lectura, la tarifa y el mínimo de Fragment, y los tipos de cambio.",
    typesHeading: "TypeScript",
    types: "Los tipos se incluyen en <code>src/index.d.ts</code> y se cargan automáticamente.",
  },

  embed: {
    title: "Incrustar una calculadora de Telegram Stars en tu web",
    description: "Añade una calculadora gratuita de precios de Telegram Stars a cualquier sitio con un iframe o como componente web personalizable. Sin registro ni clave.",
    h1: "Incrusta la calculadora en tu sitio",
    intro: "Dos formas de poner una calculadora de Telegram Stars en tu página. Ambas son gratuitas.",
    iframeHeading: "Opción 1: iframe",
    iframeText: "Pega esto donde quieras que aparezca la calculadora. Muestra los precios actuales y cabe en columnas desde 320 px de ancho.",
    creditText: "Se agradece una línea de crédito debajo, pero no es obligatoria:",
    frameTitle: "Calculadora de Telegram Stars",
    previewHeading: "Vista previa",
    componentHeading: "Opción 2: componente web",
    componentText: "Alojado por ti y totalmente personalizable: el script se ejecuta en tu página, no muestra enlaces y no hace peticiones.",
    themeText: "Adáptalo a tu tema con variables CSS:",
    faq: [
      { q: "¿Es gratis incrustarla?", a: "Sí, en cualquier sitio, también comercial." },
      { q: "¿La incrustación rastrea a los visitantes?", a: "El componente web no usa cookies ni hace peticiones de red. El iframe es una página de giftclub.app, que cuenta las visitas con Google Analytics; si no quieres ninguna petición a terceros, usa el componente web." },
      { q: "¿Qué idiomas admite?", a: "El componente web habla inglés, ruso, ucraniano, español, polaco, italiano, turco, alemán y francés." },
    ],
  },

  demo: {
    title: "Demo del widget de la calculadora de Telegram Stars",
    description: "Demo en vivo del componente web <telegram-stars-calculator>.",
    h1: "Demo del widget",
    text: (brand) => `El elemento <code>&lt;telegram-stars-calculator&gt;</code> funcionando desde este repositorio. La calculadora completa, con todos los paquetes en una tabla, está en ${brand}.`,
  },
};
