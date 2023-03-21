let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
let events = [];
    
async function getEventsData(urlApi) {
    try {
        const response = await fetch(urlApi);
        const data = await response.json();
        traerPorcentajeAsistencia(data);       
        loadPorcentajes(data);
        traerEventosFuturos(data);
        traerEventosPasados(data);
               
    } catch(error) {
        console.log(error)
    }
}
getEventsData(urlApi);