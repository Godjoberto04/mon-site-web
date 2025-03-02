# Mon Site Web - Galerie de Photos Personnelles

Bienvenue dans le repository de mon site web personnel pour afficher mes photos.

## Voir le site en ligne

Le site est accessible à l'adresse : [https://godjoberto04.github.io/mon-site-web/](https://godjoberto04.github.io/mon-site-web/)

## Structure du Projet

- `index.html` : Page d'accueil
- `css/` : Feuilles de style CSS
- `js/` : Scripts JavaScript
- `pages/` : Pages secondaires du site
  - `galerie.html` : Galerie de photos
  - `contact.html` : Formulaire de contact
- `images/` : Dossier pour stocker les images (à remplir)

## Comment ajouter vos photos à la galerie

### Méthode 1 : Via l'interface web de GitHub (la plus simple)

1. **Téléchargez vos images dans le dossier images** :
   - Accédez au dossier `/images` dans votre repository
   - Cliquez sur "Add file" puis "Upload files"
   - Sélectionnez les images à télécharger (idéalement renommées en image1.jpg, image2.jpg, etc.)
   - Ajoutez un message de commit comme "Ajout de mes photos personnelles"
   - Cliquez sur "Commit changes"

2. **Mettez à jour le fichier galerie.html** :
   - Accédez au fichier `pages/galerie.html`
   - Cliquez sur l'icône d'édition (crayon)
   - Pour chaque image, remplacez les blocs temporaires comme indiqué dans les commentaires :
     ```html
     <!-- REMPLACER PAR VOTRE IMAGE : -->
     <div class="temp-image img-1">Image 1</div>
     <!-- AVEC : <img src="../images/image1.jpg" alt="Image 1" class="gallery-image"> -->
     ```
   - Ajoutez un message de commit comme "Intégration des images dans la galerie"
   - Cliquez sur "Commit changes"

### Méthode 2 : En local (pour les développeurs)

1. **Clonez le repository** :
   ```
   git clone https://github.com/Godjoberto04/mon-site-web.git
   cd mon-site-web
   ```

2. **Ajoutez vos images et modifiez le HTML** :
   - Copiez vos images dans le dossier `images/`
   - Éditez `pages/galerie.html` pour remplacer les blocs temporaires par vos images
   - Commitez et poussez vos changements :
     ```
     git add .
     git commit -m "Ajout de mes photos personnelles"
     git push origin main
     ```

## Personnalisation supplémentaire

### Modification des catégories

Les images sont actuellement classées en trois catégories : "portraits", "selfies" et "autres". Vous pouvez modifier ces catégories en :

1. Modifiant les boutons de filtre dans `pages/galerie.html`
2. Modifiant l'attribut `data-category` de chaque élément de galerie

### Modification du thème de couleur

Le site utilise un thème sombre avec des accents de couleur. Vous pouvez modifier ces couleurs en éditant les variables CSS dans `css/style.css` :

```css
:root {
    --color-primary: #3498db;    /* Bleu principal */
    --color-secondary: #2ecc71;  /* Vert secondaire */
    --color-accent: #e74c3c;     /* Rouge accent */
    --color-dark: #1a2533;       /* Fond sombre */
    --color-darker: #121920;     /* Fond très sombre */
    --color-light: #ecf0f1;      /* Texte clair */
    /* ... et d'autres variables ... */
}
```

## Tâches réalisées et à faire

- [x] Créer la structure de base du site
- [x] Mettre en place une galerie fonctionnelle
- [x] Adapter le design pour un thème sombre
- [x] Préparer le site pour recevoir les images personnelles
- [ ] Télécharger et intégrer les vraies images
- [ ] Personnaliser les descriptions des images
- [ ] Rendre le formulaire de contact fonctionnel (optionnel)

## Licence

Tous droits réservés - 2025