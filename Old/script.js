// script.js
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        // Get the selected filter
        const selectedFilter = button.dataset.filter;
        console.log("Selected filter:", selectedFilter); // Add this line for debugging

        // In a real application, you would filter your content here based on selectedFilter
    });
});



// Mobile Navigation
const mobileNavButton = document.querySelector('.nav-mobile');
if (mobileNavButton) {
    mobileNavButton.addEventListener('click', () => {
        // In a real app, you'd toggle a mobile nav menu here.
        alert("Mobile menu placeholder - functionality not implemented yet.");
    });
}
});