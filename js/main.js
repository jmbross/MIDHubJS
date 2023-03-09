function traerTarjeta(event) {
  return `<div class="card my-3 py-2" style="width: 20rem;">
                  <img src="${event.image}" class="" alt="...">
              <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${event.name}</h5>
                  <p class="card-text">${event.description}</p>
                  <div class="mt-auto">
                      <div class="d-flex justify-content-between">
                          <p class="parrafo">Precio $${event.price}</p>
                          <a href="details.html?id=${event._id}" class="btn btn-danger">Ver Más</a>
                      </div>
                  </div>
              </div>
          </div>`;
}

function filtradoCheck(event){

  return `<div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="${event.category}">
              <label class="form-check-label" for="inlineCheckbox4">${event.category}</label>
          </div>`;
}

function encontrarDetail(event) {
  return `<div class="card p=3" style="width: 30rem; height: auto; border: 1px solid;">
              <img src="${event.image}" alt="">
          </div>
          <div class="card" style="width: 20rem; border: 1px solid">
              <div class="card-body">
              <h4 class="card-title">${event.name}</h4>
              <h6 class="card-title mb-2 text-muted">${event.description}</h6>
              <h6 class="card-title mb-2 text-muted">${event.place}</h6>
              <h6 class="card-title mb-2 text-muted">${event.date}</h6>
              </div>
          </div>
          </div>`

}