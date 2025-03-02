// Script pour gérer la galerie d'images
document.addEventListener('DOMContentLoaded', function() {
    // Définir les images de la galerie (utilisation de placeholders pour le moment)
    const galleryImages = [
        {
            url: 'https://via.placeholder.com/400x300?text=Image+1',
            title: 'Image 1',
            description: 'Description de l\'image 1'
        },
        {
            url: 'https://via.placeholder.com/400x300?text=Image+2',
            title: 'Image 2',
            description: 'Description de l\'image 2'
        },
        {
            url: 'https://via.placeholder.com/400x300?text=Image+3',
            title: 'Image 3',
            description: 'Description de l\'image 3'
        },
        {
            url: 'https://via.placeholder.com/400x300?text=Image+4',
            title: 'Image 4',
            description: 'Description de l\'image 4'
        },
        {
            url: 'https://via.placeholder.com/400x300?text=Image+5',
            title: 'Image 5',
            description: 'Description de l\'image 5'
        },
        {
            url: 'https://via.placeholder.com/400x300?text=Image+6',
            title: 'Image 6',
            description: 'Description de l\'image 6'
        }
    ];

    // Récupérer le conteneur de la galerie
    const galleryContainer = document.querySelector('.gallery-container');
    
    // S'assurer que nous sommes sur la page de la galerie
    if (galleryContainer) {
        // Vider le conteneur actuel
        galleryContainer.innerHTML = '';
        
        // Générer les éléments de la galerie
        galleryImages.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            galleryItem.innerHTML = `
                <img src="${image.url}" alt="${image.title}">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            `;
            
            // Ajouter un événement de clic pour afficher l'image en grand
            galleryItem.addEventListener('click', function() {
                showModalImage(image);
            });
            
            galleryContainer.appendChild(galleryItem);
        });
    }
    
    // Fonction pour afficher une image en modal
    function showModalImage(image) {
        // Créer le modal
        const modal = document.createElement('div');
        modal.className = 'modal';
        
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${image.url}" alt="${image.title}">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
        `;
        
        // Ajouter le modal au body
        document.body.appendChild(modal);
        
        // Afficher le modal
        setTimeout(() => {
            modal.style.display = 'flex';
        }, 10);
        
        // Gérer la fermeture du modal
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            // Supprimer le modal après l'animation
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        });
        
        // Fermer le modal en cliquant en dehors de l'image
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeBtn.click();
            }
        });
    }
});
