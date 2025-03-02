// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site web chargé avec succès!');
    
    // Animation simple pour le titre principal
    const heroTitle = document.querySelector('.hero h2');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transition = 'opacity 1s ease-in-out';
        
        setTimeout(() => {
            heroTitle.style.opacity = '1';
        }, 300);
    }
    
    // Fonction pour ajouter une classe active aux liens de navigation
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// Autres fonctions à développer ultérieurement
