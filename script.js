function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
    });
    
    // Show requested page
    document.getElementById(pageId).classList.add('active-page');
}

// Initialize with landing page
document.addEventListener('DOMContentLoaded', () => {
    showPage('landing');
});

// Function to go back to the previous page
function goBack() {
    const pages = ['landing', 'login', 'signup', 'home', 'feed', 'map', 'profile', 'tokens'];
    const currentPage = document.querySelector('.active-page').id;

    // Determine the previous page based on the current page
    let previousPage = 'landing'; // Default fallback
    switch (currentPage) {
        case 'login':
            previousPage = 'landing';
            break;
        case 'signup':
            previousPage = 'landing';
            break;
        case 'home':
            previousPage = 'landing'; // Or adjust as needed
            break;
        case 'feed':
            previousPage = 'home';
            break;
        case 'map':
            previousPage = 'home';
            break;
        case 'profile':
            previousPage = 'home';
            break;
        case 'tokens':
            previousPage = 'home';
            break;
    }

    showPage(previousPage);
}

document.querySelectorAll('.account-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.account-button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// Add to your existing script.js
function toggleLike(button) {
    const heartIcon = button.querySelector('i');
    const likeCount = button.querySelector('.like-count');
    
    if (heartIcon.classList.contains('far')) {
        heartIcon.classList.remove('far');
        heartIcon.classList.add('fas');
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
        button.classList.add('liked');
    } else {
        heartIcon.classList.remove('fas');
        heartIcon.classList.add('far');
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
        button.classList.remove('liked');
    }
}