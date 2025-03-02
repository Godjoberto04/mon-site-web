# Dossier d'images

Ce dossier contient toutes les images utilisées dans le site web.

## Comment ajouter vos images

Pour ajouter vos images à la galerie :

1. Téléchargez les images dans ce dossier (via GitHub ou en clonant le repository)
2. Nommez-les de manière cohérente (par exemple: image1.jpg, image2.jpg, etc.)
3. Modifiez le fichier `pages/galerie.html` pour remplacer les blocs de couleur par vos images :

```html
<!-- Remplacer ceci : -->
<div class="temp-image img-1">Image 1</div>

<!-- Par ceci : -->
<img src="../images/image1.jpg" alt="Image 1" class="gallery-image">
```

## Conseils pour les images

- Utilisez des formats comme JPG ou PNG
- Redimensionnez vos images pour qu'elles ne soient pas trop lourdes (max 1MB par image)
- Utilisez des dimensions cohérentes (idéalement toutes les images avec la même largeur)
