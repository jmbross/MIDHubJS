let tarjetasPasadas = "";
let currentDate = new Date(data.currentDate);

for(let event of data.events){

  let eventDate = new Date(event.date);

  if (eventDate < currentDate) {
      tarjetasPasadas += traerTarjeta(event);
  }
}

let tarjeta = document.getElementById('tarjeta');
tarjeta.innerHTML = tarjetasPasadas;

//Pasar search y procesarlo

let search = document.querySelector('form');
  search.addEventListener('submit', e => {
    e.preventDefault();
    let texto = document.querySelector('.form-control').value.trim().toLowerCase();
    let filtrados = data.events.filter(e => {
      return e.name.toLowerCase().includes(texto) || e.description.toLowerCase().includes(texto);
    }
  );

    let currentDate = new Date(data.currentDate);
    let filtradosPasados = "";
    let arrayPast = [];
    
    //Se armo array donde almacenar antes de comparar

  for(let event of filtrados){
      let eventDate = new Date(event.date);
      // console.log(eventDate, typeof eventDate);

      if (eventDate < currentDate) {
        filtradosPasados += traerTarjeta(event);
        arrayPast.push(filtradosPasados);
        }       
      }
      if (arrayPast.length > 0){
        document.getElementById('tarjeta').innerHTML = filtradosPasados
      }
      else{ 
        alert('The search returned no results, please try again.');//Si llego en lugar de alert va un modal o tarjeta 
      }
    }
  );
//Quedó armado el array donde comparar si el elemento existe y a partir de eso mostrar la tarjeta.

//Filtrar con checkbox

cargarCategoriasHtml();

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
      
      let currentDate = new Date(data.currentDate);
      let filtradosFuturos = "";
      let arrayFuture = [];
      
      //Se armo array donde almacenar antes de comparar
  
    for(let event of filtrados){
        let eventDate = new Date(event.date);
        // console.log(eventDate, typeof eventDate);
  
        if (eventDate < currentDate) {
          filtradosFuturos += traerTarjeta(event);
          arrayFuture.push(filtradosFuturos);
          }       
        }
        if (arrayFuture.length > 0){
          document.getElementById('tarjeta').innerHTML = filtradosFuturos
        }
       
      }
      else{ 
        tarjeta.innerHTML = tarjetasPasadas;          
      }
    })
  });
