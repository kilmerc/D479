document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Get DOM elements
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let selectedFilter = 'all';

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update selected filter
            selectedFilter = button.dataset.filter;
        });
    });

    // Add click event listener to search button
    searchButton.addEventListener('click', () => {
        const searchQuery = searchInput.value;
        console.log('Searching for:', searchQuery, 'with filter:', selectedFilter);
        // Implement search functionality here
    });

    // Mobile menu functionality
    const menuButton = document.querySelector('[data-lucide="menu"]');
    const nav = document.querySelector('nav');
    
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('hidden');
    });
});