//Inyección de todas las tarjetas 

// todasLasTarjetas()
let todasLasTarjetas = "";
  
for (let event of data.events) {
  todasLasTarjetas += traerTarjeta(event);
}

let tarjeta = document.getElementById('tarjeta');
tarjeta.innerHTML = todasLasTarjetas;

 //Pasar search y procesarlo

let search = document.querySelector('form');
search.addEventListener('submit', e => {
  e.preventDefault();
  let texto = document.querySelector('.form-control').value.trim().toLowerCase();

  let filtrados = data.events.filter(e => {

    let filtroNombre = e.name.toLowerCase().includes(texto);
    let filtroDescripcion = e.description.toLowerCase().includes(texto)

    return (filtroNombre || filtroDescripcion)
  }
  );

  let mostrarFiltrados = '';
  if (filtrados.length > 0) {
    for (let filtro of filtrados) {
      mostrarFiltrados += traerTarjeta(filtro);
    }
    document.getElementById('tarjeta').innerHTML = mostrarFiltrados;
  }
  else {
    alert('The search returned no results, please try again.');
  }
}
);

//Inyección de categorías

cargarCategoriasHtml()

//Captura de clicks

let clickCategoria = document.querySelectorAll('input[type=checkbox]');
let clickado = [];

//for (let clickCategoria of capturaCheck){

 clickCategoria.forEach(checkbox =>{
    checkbox.addEventListener('click', e =>{
      if (e.target.checked){
        clickado.push(e.target.value); //Hasta acá hago que me guarde en el array de clickado los valores
      } else {
        let i = clickado.indexOf(e.target.value); //Acá guardo en la variable i el numero que corresponde al indice del array para operarlo
        if (i > -1) {
          clickado.splice(i, 1); //Si acá el indice del array cuyo value cargado con anterioridad me indica un valor mayor a -1, se le aplica el método slice a i para eliminar 1 elemento
        }
      } 
      console.log(clickado);
      if (clickado.length >0) {
        let filtrados = data.events.filter(e => {
          for (let categoria of clickado) {
            if (e.category.includes(categoria)) {
              return true;
            }
          }
        });

      let mostrarFiltrados = '';
      for (let filtro of filtrados) {
        mostrarFiltrados += traerTarjeta(filtro);
      }
      tarjeta.innerHTML = mostrarFiltrados;
    }
    else {
      tarjeta.innerHTML = todasLasTarjetas; 
    }
  })
});