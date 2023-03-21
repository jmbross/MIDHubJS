let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
async function getDetails(urlApi) {
  try {
    const response = await fetch(urlApi);
    const data = await response.json();

    let queryString = location.search;
    let params = new URLSearchParams(queryString);
    console.log(params);

    let _id = params.get("id");
    let detail = data.events.find((event) => event._id == _id);
    document.getElementById("detalleTarjeta").innerHTML =
      encontrarDetail(detail);
  } catch (error) {
    console.log(error);
  }
}
getDetails(urlApi);
