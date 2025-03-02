// Script pour gérer la galerie d'images
document.addEventListener('DOMContentLoaded', function() {
    // Définir les images de la galerie avec des couleurs générées en CSS
    const galleryImages = [
        {
            color: '#3498db', // Bleu
            title: 'Image 1',
            description: 'Description de l\'image 1'
        },
        {
            color: '#2ecc71', // Vert
            title: 'Image 2',
            description: 'Description de l\'image 2'
        },
        {
            color: '#e74c3c', // Rouge
            title: 'Image 3',
            description: 'Description de l\'image 3'
        },
        {
            color: '#f39c12', // Orange
            title: 'Image 4',
            description: 'Description de l\'image 4'
        },
        {
            color: '#9b59b6', // Violet
            title: 'Image 5',
            description: 'Description de l\'image 5'
        },
        {
            color: '#1abc9c', // Turquoise
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
            
            // Créer un div coloré au lieu d'une image
            const colorBox = document.createElement('div');
            colorBox.className = 'color-box';
            colorBox.style.backgroundColor = image.color;
            colorBox.style.height = '200px';
            colorBox.style.borderRadius = '5px 5px 0 0';
            colorBox.style.display = 'flex';
            colorBox.style.alignItems = 'center';
            colorBox.style.justifyContent = 'center';
            
            // Ajouter le titre dans la boîte colorée
            const titleInBox = document.createElement('h3');
            titleInBox.textContent = image.title;
            titleInBox.style.color = 'white';
            titleInBox.style.textShadow = '1px 1px 3px rgba(0,0,0,0.5)';
            colorBox.appendChild(titleInBox);
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'gallery-item-content';
            contentDiv.innerHTML = `
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            `;
            
            galleryItem.appendChild(colorBox);
            galleryItem.appendChild(contentDiv);
            
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
        
        // Créer la boîte colorée pour le modal
        const modalColorBox = document.createElement('div');
        modalColorBox.style.backgroundColor = image.color;
        modalColorBox.style.height = '300px';
        modalColorBox.style.borderRadius = '5px 5px 0 0';
        modalColorBox.style.display = 'flex';
        modalColorBox.style.alignItems = 'center';
        modalColorBox.style.justifyContent = 'center';
        
        // Ajouter le titre dans la boîte colorée du modal
        const modalTitleInBox = document.createElement('h2');
        modalTitleInBox.textContent = image.title;
        modalTitleInBox.style.color = 'white';
        modalTitleInBox.style.textShadow = '1px 1px 3px rgba(0,0,0,0.5)';
        modalColorBox.appendChild(modalTitleInBox);
        
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class="modal-body">
                    <h3>${image.title}</h3>
                    <p>${image.description}</p>
                </div>
            </div>
        `;
        
        // Insérer la boîte colorée dans le modal
        const modalContent = modal.querySelector('.modal-content');
        modalContent.insertBefore(modalColorBox, modalContent.firstChild);
        
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