function todasLasTarjetas(data) {
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
      let filtroNombre = e.name.toLowerCase().includes(texto);
      let filtroDescripcion = e.description.toLowerCase().includes(texto);
      return filtroNombre || filtroDescripcion;
    });

    let mostrarFiltrados = "";
    if (filtrados.length > 0) {
      for (let filtro of filtrados) {
        mostrarFiltrados += traerTarjeta(filtro);
      }
      document.getElementById("tarjeta").innerHTML = mostrarFiltrados;
    } else {
      tarjeta.innerHTML =
        "<p>The search returned no results, please try again.</p>";
    }
  });
}

function capturaDeClicks(data) {
  let clickCategoria = document.querySelectorAll("input[type=checkbox]");
  let clickado = [];

  clickCategoria.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      if (e.target.checked) {
        clickado.push(e.target.value);
      } else {
        let i = clickado.indexOf(e.target.value);
        if (i > -1) {
          clickado.splice(i, 1);
        }
      }
      if (clickado.length > 0) {
        let filtradosCategoria = data.events.filter((e) => {
          for (let categoria of clickado) {
            if (e.category.includes(categoria)) {
              return true;
            }
          }
        });

        let texto = document
          .querySelector(".form-control")
          .value.trim()
          .toLowerCase();
        let filtradosTexto = filtradosCategoria.filter((e) => {
          let filtroNombre = e.name.toLowerCase().includes(texto);
          let filtroDescripcion = e.description.toLowerCase().includes(texto);
          return filtroNombre || filtroDescripcion;
        });

        let mostrarFiltrados = "";
        if (filtradosTexto.length > 0) {
          for (let filtro of filtradosTexto) {
            mostrarFiltrados += traerTarjeta(filtro);
          }
          tarjeta.innerHTML = mostrarFiltrados;
        } else {
          tarjeta.innerHTML =
            "The search returned no results, please try again.</p>";
        }
      } else {
        let texto = document
          .querySelector(".form-control")
          .value.trim()
          .toLowerCase();
        let filtradosTexto = data.events.filter((e) => {
          let filtroNombre = e.name.toLowerCase().includes(texto);
          let filtroDescripcion = e.description.toLowerCase().includes(texto);
          return filtroNombre || filtroDescripcion;
        });

        let mostrarFiltrados = "";
        if (filtradosTexto.length > 0) {
          for (let filtro of filtradosTexto) {
            mostrarFiltrados += traerTarjeta(filtro);
          }
          tarjeta.innerHTML = mostrarFiltrados;
        } else {
          tarjeta.innerHTML =
            "<p>The search returned no results, please try again.</p>";
        }
      }
    });
  });
}

let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
async function getEventsData(urlApi) {
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    todasLasTarjetas(data);
    cargarCategoriasHtml(data);
    capturaDeClicks(data);
  } catch (error) {
    console.log(error);
  }
}
getEventsData(urlApi);
