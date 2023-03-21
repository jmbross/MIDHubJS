function mostrarTarjetasUpcoming(data) {
  let tarjetasFuturas = "";
  let currentDate = new Date(data.currentDate);
  for (let event of data.events) {

    let eventDate = new Date(event.date);

    if (eventDate > currentDate) {
      tarjetasFuturas += traerTarjeta(event);
    }
  }
  let tarjeta = document.getElementById('tarjeta');
  tarjeta.innerHTML = tarjetasFuturas;

  let search = document.querySelector('form');
  search.addEventListener('submit', e => {
    e.preventDefault();

    let texto = document.querySelector('.form-control').value.trim().toLowerCase();
    let filtrados = data.events.filter(e => {
    let filtroNombre = e.name.toLowerCase().includes(texto);
    let filtroDescripcion = e.description.toLowerCase().includes(texto);

      return (filtroNombre || filtroDescripcion);
    });

    let currentDate = new Date(data.currentDate);
    let filtradosFuturos = "";
    let arrayFuture = [];

    for (let event of filtrados) {
      let eventDate = new Date(event.date);
      if (eventDate > currentDate) {
        filtradosFuturos += traerTarjeta(event);
        arrayFuture.push(filtradosFuturos);
      }
    }
    if (arrayFuture.length > 0) {
      document.getElementById('tarjeta').innerHTML = filtradosFuturos
    }
    else {
      alert('The search returned no results, please try again.');
    }
  });
}


function clicksFuturos(data) {
  let clickCategoria = document.querySelectorAll('input[type=checkbox]');
  let clickado = [];
  clickCategoria.forEach(checkbox => {
    checkbox.addEventListener('click', e => {
      if (e.target.checked) {
        clickado.push(e.target.value);
      } else {
        let i = clickado.indexOf(e.target.value);
        if (i > -1) {
          clickado.splice(i, 1);
        }
      }
      if (clickado.length > 0) {
        let filtrados = data.events.filter(e => {
          for (let categoria of clickado) {
            if (e.category.includes(categoria)) {
              return true;
            }
          }
        });

        let currentDate = new Date(data.currentDate);
        let filtradosFuturos = "";
        let arrayFuture = [];

        for (let event of filtrados) {
          let eventDate = new Date(event.date);
         
          if (eventDate > currentDate) {
            filtradosFuturos += traerTarjeta(event);
            arrayFuture.push(filtradosFuturos);
          }
        }
            if (arrayFuture.length > 0) {
              document.getElementById('tarjeta').innerHTML = filtradosFuturos
            }
          }
          else {
            let tarjetasFuturas = "";
            let currentDate = new Date(data.currentDate);

            for (let event of data.events) {

              let eventDate = new Date(event.date);

              if (eventDate > currentDate) {
                tarjetasFuturas += traerTarjeta(event);
              }
            }
            let tarjeta = document.getElementById('tarjeta');
            tarjeta.innerHTML = tarjetasFuturas;
          }
        })
  });
}

let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
async function getEventsData(urlApi) {
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    mostrarTarjetasUpcoming(data);
    cargarCategoriasHtml(data);
    clicksFuturos(data);


  } catch (error) {
    console.log(error)
  }
}
getEventsData(urlApi);