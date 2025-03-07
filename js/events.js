const events = [
    { id: 1, name: "Concert Night", date: "2025-03-10", location: "Nairobi", category: "Music" },
    { id: 2, name: "Tech Expo", date: "2025-03-15", location: "Kigali", category: "Tech" },
    { id: 3, name: "Football Match", date: "2025-03-20", location: "Lagos", category: "Sports" }
];

const eventList = document.getElementById("event-list");

if (eventList) {
    events.forEach(event => {
        eventList.innerHTML += `
            <div class="col-md-4">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text">${event.date} - ${event.location}</p>
                        <a href="event-details.html?id=${event.id}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>`;
    });
}
