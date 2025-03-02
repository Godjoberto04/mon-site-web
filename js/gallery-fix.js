// Script pour corriger le problème d'affichage des images dans la galerie
document.addEventListener('DOMContentLoaded', function() {
    // Sélection de la modal et de ses éléments
    const modal = document.getElementById('imageModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close');

    // Ajout d'une classe CSS pour assurer l'affichage correct
    if (modal) {
        // S'assurer que la modal a le bon style de base
        modal.style.display = 'none';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.zIndex = '1000';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
    }

    // Remplacer l'écouteur d'événement existant pour ouvrir la modal
    document.querySelectorAll('.gallery-image').forEach(img => {
        img.addEventListener('click', function() {
            const parent = this.closest('.gallery-item');
            const title = parent.querySelector('h3').textContent;
            const description = parent.querySelector('p').textContent;
            const imgSrc = this.src;
            
            modalContent.innerHTML = `
                <img src="${imgSrc}" alt="${title}" class="modal-image">
                <h3>${title}</h3>
                <p>${description}</p>
            `;
            
            // Correction pour afficher la modal correctement
            modal.style.display = 'flex';
        });
    });

    // Assurer que le bouton de fermeture fonctionne correctement
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Fermer la modal en cliquant à l'extérieur
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
