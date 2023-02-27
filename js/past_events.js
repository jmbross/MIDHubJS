function buildHTMLPastEventsCardList(eventsData){
    let htmlEventsList = "";
    let currentDate = new Date(eventsData.currentDate);
    for (let event of eventsData.events) {
        let eventDate = new Date(event.date);
        if (eventDate < currentDate) {
            htmlEventsList += buildHTMLEventCard(event);
        }
    }
    return htmlEventsList;
}

let contenedorCartas = document.getElementById("contenedorCartas");
contenedorCartas.innerHTML = buildHTMLPastEventsCardList(data);