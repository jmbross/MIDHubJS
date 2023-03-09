let todasLasTarjetas = "";

for (let event of data.events) {
  todasLasTarjetas += traerTarjeta(event);
}

let tarjeta = document.getElementById("tarjeta");
tarjeta.innerHTML = todasLasTarjetas;

let search = document.querySelector("form");
search.addEventListener("submit", (e) => {
  e.preventDefault();
  let texto = document
    .querySelector(".form-control")
    .value.trim()
    .toLowerCase();

  let filtrados = data.events.filter((e) => {
    return (
      e.name.toLowerCase().includes(texto) ||
      e.description.toLowerCase().includes(texto)
    );
  });

  let mostrarFiltrados = "";

  if (filtrados.length > 0) {
    for (let filtro of filtrados) {
      mostrarFiltrados += traerTarjeta(filtro);
    }
    document.getElementById("tarjeta").innerHTML = mostrarFiltrados;
  } else {
    alert("The search returned no results, please try again.");
  }
});
