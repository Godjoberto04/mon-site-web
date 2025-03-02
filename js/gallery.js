// Script pour les fonctionnalités de la galerie
document.addEventListener('DOMContentLoaded', function() {
    // Filtres de galerie
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
            // Obtenir la catégorie de filtre
            const filterValue = this.getAttribute('data-filter');
            
            // Filtrer les éléments
            galleryItems.forEach(item => {
                // Si le filtre est "all", afficher tous les éléments
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else {
                    // Vérifier si l'élément a la catégorie correspondante
                    const categories = item.getAttribute('data-category').split(' ');
                    if (categories.includes(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Modal pour afficher les images en grand
    const modal = document.getElementById('imageModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close');
    
    // Correction des styles de la modal pour assurer son affichage
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
    
    // Ouvrir le modal au clic sur une image
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
    
    // Fermer le modal
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Fermer le modal en cliquant à l'extérieur
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});