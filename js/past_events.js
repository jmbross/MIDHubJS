let tarjetasPasadas = "";
let currentDate = new Date(data.currentDate);

for (let event of data.events) {
  let eventDate = new Date(event.date);

  if (eventDate < currentDate) {
    tarjetasPasadas += traerTarjeta(event);
  }
}

let tarjeta = document.getElementById("tarjeta");
tarjeta.innerHTML = tarjetasPasadas;

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

  let currentDate = new Date(data.currentDate);

  let filtradosPasados = "";

  for (let event of filtrados) {
    let eventDate = new Date(event.date);

    if (eventDate < currentDate) {
      filtradosPasados += traerTarjeta(event);
      document.getElementById("tarjeta").innerHTML = filtradosPasados;
    } else {
      alert("The search returned no results, please try again.");
    }
  }
});
