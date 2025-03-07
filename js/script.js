document.addEventListener("DOMContentLoaded", function () {
    const eventsContainer = document.querySelector(".row"); 
    const searchInput = document.getElementById("search"); // Get search input
    const categoryFilter = document.getElementById("category"); // Get category filter
    const dateFilter = document.getElementById("date"); // Get date filter

    const events = [
        { name: "Music Festival", date: "2025-03-10", location: "Kigali", category: "Music", description: "Live music event" },
        { name: "Tech Conference", date: "2025-04-05", location: "Rwanda Convention Center", category: "Technology", description: "Tech talks & workshops" },
        { name: "Art Exhibition", date: "2025-05-15", location: "Nyamirambo", category: "Art", description: "Showcasing local artwork" },
        { name: "Food Fair", date: "2025-06-20", location: "Nyarutarama", category: "Food", description: "Tasting various cuisines" },
        { name: "Startup Pitch", date: "2025-07-10", location: "Kigali Heights", category: "Business", description: "Startups pitching ideas to investors" }
    ];

/*************  ✨ Codeium Command ⭐  *************/
    /**
     * Displays a list of events based on the given filtered events.
     * @param {object[]} filteredEvents - An array of event objects to display.
     * @returns {void}
     */
/******  3b42a61c-f2fa-470f-bb48-30da70fafd0b  *******/    function displayEvents(filteredEvents) {
        eventsContainer.innerHTML = ""; // Clear previous results
        filteredEvents.forEach(event => {
            const eventHTML = `
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${event.name}</h5>
                            <p class="card-text">Date: ${event.date}</p>
                            <p class="card-text">Location: ${event.location}</p>
                            <p class="card-text">Category: ${event.category}</p>
                            <a href="event-details.html" class="btn btn-success">View Details</a>
                        </div>
                    </div>
                </div>
            `;
            eventsContainer.innerHTML += eventHTML;
        });
    }

    displayEvents(events); // Show all events initially

    function filterEvents() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value.toLowerCase();
        const selectedDate = dateFilter.value;

        const filteredEvents = events.filter(event => {
            const matchesSearch = event.name.toLowerCase().includes(searchTerm) || event.location.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === "" || event.category.toLowerCase() === selectedCategory;
            const matchesDate = selectedDate === "" || event.date === selectedDate;

            return matchesSearch && matchesCategory && matchesDate;
        });

        displayEvents(filteredEvents);
    }

    searchInput.addEventListener("input", filterEvents);
    categoryFilter.addEventListener("change", filterEvents);
    dateFilter.addEventListener("change", filterEvents);
});
