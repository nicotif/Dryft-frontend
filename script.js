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