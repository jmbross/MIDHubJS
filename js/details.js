let queryString = location.search;
let params = new URLSearchParams(queryString);

let _id = params.get('id');

let detail = data.events.find(event => event._id == _id);
document.getElementById("detalleTarjeta").innerHTML = encontrarDetail(detail)