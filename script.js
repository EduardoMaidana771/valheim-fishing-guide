const cebo = { img: "assets/carnadas/cebo.png", nombre: "Cebo" };
const oro = { img: "assets/recetas/oro.png", nombre: "10 de oro (cada 20 uds.)" };
const trofeoTroll = { img: "assets/recetas/troll.png", nombre: "Trofeo de Troll" };
const trofeoAbominacion = { img: "assets/recetas/abominacion.png", nombre: "Trofeo de Abominación" };
const trofeoFenring = { img: "assets/recetas/fenring.png", nombre: "Trofeo de Fenring" };
const trofeoFuling = { img: "assets/recetas/fuling.png", nombre: "Trofeo de Fuling" };
const trofeoLox = { img: "assets/recetas/lox.png", nombre: "Trofeo de Lox" };
const trofeoGuerrero = { img: "assets/recetas/guerrero-carbonizado.png", nombre: "Trofeo de Guerrero Carbonizado" };
const trofeoDragon = { img: "assets/recetas/dragon.png", nombre: "Trofeo de Dragón" };
const trofeoSerpiente = { img: "assets/recetas/serpiente.png", nombre: "Trofeo de Serpiente" };

const imgBioma = {
  "Praderas": "assets/biomas/praderas.png",
  "Bosque Negro": "assets/biomas/bosque-negro.png",
  "Pantano": "assets/biomas/pantano.png",
  "Montaña": "assets/biomas/montana.png",
  "Llanuras": "assets/biomas/llanuras.png",
  "Tierras Brumosas": "assets/biomas/tierras-brumosas.png",
  "Ashlands": "assets/biomas/ashlands.png",
  "Profundo Norte": "assets/biomas/profundo-norte.png",
  "Océano": "assets/biomas/oceano.png"
};

const peces = [
  {
    pez: "Perca",
    imgPez: "assets/peces/perca.png",
    carnada: "Cebo",
    imgCarnada: "assets/carnadas/cebo.png",
    recetaNota: "Se compra a Haldor",
    receta: [oro],
    biomas: ["Praderas", "Bosque Negro", "Llanuras"],
    detalle: "aguas poco profundas"
  },
  {
    pez: "Lucio",
    imgPez: "assets/peces/lucio.png",
    carnada: "Cebo",
    imgCarnada: "assets/carnadas/cebo.png",
    recetaNota: "Se compra a Haldor",
    receta: [oro],
    biomas: ["Praderas", "Bosque Negro"],
    detalle: "aguas semi-profundas"
  },
  {
    pez: "Pez Troll",
    imgPez: "assets/peces/pez-troll.png",
    carnada: "Carnada Musgosa",
    imgCarnada: "assets/carnadas/musgosa.png",
    recetaNota: "",
    receta: [cebo, trofeoTroll],
    biomas: ["Bosque Negro"],
    detalle: "costas"
  },
  {
    pez: "Arenque Gigante",
    imgPez: "assets/peces/arenque-gigante.png",
    carnada: "Carnada Apestosa",
    imgCarnada: "assets/carnadas/apestosa.png",
    recetaNota: "",
    receta: [cebo, trofeoAbominacion],
    biomas: ["Pantano"],
    detalle: "costas"
  },
  {
    pez: "Tetra",
    imgPez: "assets/peces/tetra.png",
    carnada: "Carnada Fría",
    imgCarnada: "assets/carnadas/fria.png",
    recetaNota: "",
    receta: [cebo, trofeoFenring],
    biomas: ["Montaña"],
    detalle: "cavernas heladas"
  },
  {
    pez: "Agrupador(Mero)",
    imgPez: "assets/peces/agrupador.png",
    carnada: "Carnada Picosa",
    imgCarnada: "assets/carnadas/picosa.png",
    recetaNota: "",
    receta: [cebo, trofeoFuling],
    biomas: ["Llanuras"],
    detalle: "costas"
  },
  {
    pez: "Pez Globo",
    imgPez: "assets/peces/pez-globo.png",
    carnada: "Carnada Brumosa",
    imgCarnada: "assets/carnadas/brumosa.png",
    recetaNota: "",
    receta: [cebo, trofeoLox],
    biomas: ["Tierras Brumosas"],
    detalle: "costas"
  },
  {
    pez: "Rape",
    imgPez: "assets/peces/rape.png",
    carnada: "Carnada Brumosa",
    imgCarnada: "assets/carnadas/brumosa.png",
    recetaNota: "",
    receta: [cebo, trofeoLox],
    biomas: ["Tierras Brumosas"],
    detalle: "costas"
  },
  {
    pez: "Magmapez",
    imgPez: "assets/peces/magmapez.png",
    carnada: "Carnada Caliente",
    imgCarnada: "assets/carnadas/caliente.png",
    recetaNota: "",
    receta: [cebo, trofeoGuerrero],
    biomas: ["Ashlands"],
    detalle: "costas"
  },
  {
    pez: "Salmón Norteño",
    imgPez: "assets/peces/salmon-nortenio.png",
    carnada: "Carnada Helada",
    imgCarnada: "assets/carnadas/helada.png",
    recetaNota: "",
    receta: [cebo, trofeoDragon],
    biomas: ["Profundo Norte"],
    detalle: "costas"
  },
  {
    pez: "Atún",
    imgPez: "assets/peces/atun.png",
    carnada: "Carnada Pesada",
    imgCarnada: "assets/carnadas/pesada.png",
    recetaNota: "",
    receta: [cebo, trofeoSerpiente],
    biomas: ["Océano"],
    detalle: ""
  },
  {
    pez: "Bacalao de Coral",
    imgPez: "assets/peces/bacalao-coral.png",
    carnada: "Carnada Pesada",
    imgCarnada: "assets/carnadas/pesada.png",
    recetaNota: "",
    receta: [cebo, trofeoSerpiente],
    biomas: ["Océano"],
    detalle: ""
  }
];

const cuerpoTabla = document.getElementById("cuerpo-tabla");
const buscador = document.getElementById("buscador");
const filtroBioma = document.getElementById("filtro-bioma");
const sinResultados = document.getElementById("sin-resultados");
const vistaPrevia = document.getElementById("vista-previa");
const vistaPreviaImg = document.getElementById("vista-previa-img");

function biomaHTML(pez) {
  const chips = pez.biomas
    .map(bioma => `
      <div class="celda-item celda-item--chico celda-item--bioma">
        <img src="${imgBioma[bioma]}" alt="${bioma}">
        <span>${bioma}</span>
      </div>
    `)
    .join("");
  const detalle = pez.detalle ? `<span class="bioma-detalle">${pez.detalle}</span>` : "";

  return `<div class="receta-ingredientes">${chips}</div>${detalle}`;
}

function cargarOpcionesBioma() {
  const biomas = [...new Set(peces.flatMap(p => p.biomas))].sort();
  biomas.forEach(bioma => {
    const opcion = document.createElement("option");
    opcion.value = bioma;
    opcion.textContent = bioma;
    filtroBioma.appendChild(opcion);
  });
}

function ingredientesHTML(ingredientes) {
  return ingredientes
    .map(ingrediente => `
      <div class="celda-item celda-item--chico">
        <img src="${ingrediente.img}" alt="${ingrediente.nombre}">
        <span>${ingrediente.nombre}</span>
      </div>
    `)
    .join('<span class="receta-mas">+</span>');
}

function crearFila(pez) {
  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td data-etiqueta="Pez">
      <div class="celda-item">
        <img src="${pez.imgPez}" alt="${pez.pez}">
        <span>${pez.pez}</span>
      </div>
    </td>
    <td data-etiqueta="Carnada">
      <div class="celda-item">
        <img src="${pez.imgCarnada}" alt="${pez.carnada}">
        <span>${pez.carnada}</span>
      </div>
    </td>
    <td data-etiqueta="Cómo se consigue" class="receta">
      ${pez.recetaNota ? `<span class="receta-nota">${pez.recetaNota}</span>` : ""}
      <div class="receta-ingredientes">${ingredientesHTML(pez.receta)}</div>
    </td>
    <td data-etiqueta="Bioma" class="bioma">${biomaHTML(pez)}</td>
  `;

  return fila;
}

function renderizarTabla() {
  const texto = buscador.value.trim().toLowerCase();
  const biomaSeleccionado = filtroBioma.value;

  const filtrados = peces.filter(pez => {
    const coincideTexto = pez.pez.toLowerCase().includes(texto);
    const coincideBioma = biomaSeleccionado === "todos" || pez.biomas.includes(biomaSeleccionado);
    return coincideTexto && coincideBioma;
  });

  cuerpoTabla.innerHTML = "";
  filtrados.forEach(pez => cuerpoTabla.appendChild(crearFila(pez)));

  sinResultados.classList.toggle("oculto", filtrados.length > 0);
}

function mostrarVistaPrevia(img) {
  vistaPreviaImg.src = img.src;
  vistaPreviaImg.alt = img.alt;
  vistaPrevia.classList.add("visible");
}

function ocultarVistaPrevia() {
  vistaPrevia.classList.remove("visible");
}

cargarOpcionesBioma();
renderizarTabla();

buscador.addEventListener("input", renderizarTabla);
filtroBioma.addEventListener("change", renderizarTabla);

cuerpoTabla.addEventListener("mouseover", evento => {
  const img = evento.target.closest(".celda-item img");
  if (img) mostrarVistaPrevia(img);
});

cuerpoTabla.addEventListener("mouseout", evento => {
  const img = evento.target.closest(".celda-item img");
  if (img) ocultarVistaPrevia();
});
