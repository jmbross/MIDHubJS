function buildHTMLEventsCardList(eventsData){
    let htmlEventsList = "";
    for (let event of eventsData.events) {
            htmlEventsList += buildHTMLEventCard(event);
    }
    return htmlEventsList;
}

let contenedorCartas = document.getElementById("contenedorCartas");
contenedorCartas.innerHTML = buildHTMLEventsCardList(data);