function buildHTMLEventCard(eventData) {
  return `<div class="card" style="width: 18rem;">
<img src="${eventData.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${eventData.name}</h5>
  <p class="card-text">${eventData.description}</p>
     <div class="d-flex justify-content-between">
        <p class="parrafo">Price $${eventData.price}</p>
        <a href="#" class="btn btn-primary">Ver Más</a>
     </div>
</div>
</div>`;
}
