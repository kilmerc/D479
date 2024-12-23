document.addEventListener("DOMContentLoaded", function () {
  // Initialize Lucide icons
  lucide.createIcons();

  // Get DOM elements
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const searchFilter = document.getElementById("searchFilter");
  const quickAccessCards = document.getElementById("quickAccessCards");
  const itineraryCards = document.getElementById("itineraryCards");
  const menuButton = document.querySelector('[data-lucide="menu"]');
  const nav = document.querySelector("nav");

  // Mobile menu functionality
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("hidden");
  });

  //Function to filter items
  function filterItems(query, filter) {
    const allCards = [
      ...quickAccessCards.querySelectorAll(".quick-access-card"),
      ...itineraryCards.querySelectorAll(".itinerary-card"),
    ];

    allCards.forEach((card) => {
      const cardCategory = card.dataset.category || "";
      const cardText = card.textContent.toLowerCase();
      const searchQueryMatch = cardText.includes(query.toLowerCase());

      const filterMatch =
        filter === "all" || cardCategory.includes(filter);

      if (searchQueryMatch && filterMatch) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }

  //Initial Load
  filterItems("", "all");

  // Add click event listener to search button
  searchButton.addEventListener("click", () => {
    const searchQuery = searchInput.value;
    const selectedFilter = searchFilter.value;

    if (searchQuery.trim() === "") {
          window.location.href = "SubPages/helicopter/helicopter.html";
    }else{
          filterItems(searchQuery, selectedFilter);
            console.log(
              "Searching for:",
              searchQuery,
              "with filter:",
              selectedFilter
            );

          if (searchQuery.toLowerCase() === "helicopter rides") {
            window.location.href = "SubPages/helicopter/helicopter.html";
          }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Lucide icons
  lucide.createIcons();
});