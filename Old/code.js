const quickAccessCards = [
    // ... (same data as in React version)
];

const itineraries = [
    // ... (same data as in React version)
];


// Function to create Quick Access cards dynamically
function createQuickAccessCards() {
    const cardGrid = document.querySelector('.quick-access .card-grid');
    quickAccessCards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card'); // Add 'card' class for styling
  
      cardElement.innerHTML = `
        <div class="card-icon">${card.icon}</div>
        <h3>${card.title}</h3>
        <p>${card.subtitle}</p>
        <p class="detail">${card.detail}</p>
      `;
      cardGrid.appendChild(cardElement);
    });
  }
  
  // Function to create Itinerary cards dynamically
  function createItineraryCards() {
    const cardGrid = document.querySelector('.itineraries .card-grid');
    itineraries.forEach(itinerary => {
      const itineraryElement = document.createElement('div');
      itineraryElement.classList.add('card'); // Add 'card' class
  
      itineraryElement.innerHTML = `
        <img src="${itinerary.image}" alt="${itinerary.title}">
        <h3>${itinerary.title}</h3>
        <p>${itinerary.days}</p>
        <p><span class="star">&#9733;</span> ${itinerary.rating}</p>
      `;
      cardGrid.appendChild(itineraryElement);
    });
  }

  const localTips = [
    { icon: 'fa-solid fa-dollar-sign', title: 'Currency', text: 'USD accepted everywhere', color: 'green' },
    { icon: 'fa-solid fa-language', title: 'Language', text: 'English widely spoken', color: 'blue' },
    { icon: 'fa-solid fa-sun', title: 'Weather', text: 'Currently 75°F (24°C)', color: 'yellow' },
];


function createLocalTips() {
    const tipGrid = document.querySelector('.local-tips .tip-grid');

    localTips.forEach(tip => {
        const tipElement = document.createElement('div');
        tipElement.classList.add('tip');
        tipElement.innerHTML = `
            <i class="${tip.icon} text-${tip.color}"></i>
            <div>
                <h3>${tip.title}</h3>
                <p>${tip.text}</p>
            </div>
        `;
        tipGrid.appendChild(tipElement);
    });
}



createQuickAccessCards();
createItineraryCards();
createLocalTips();