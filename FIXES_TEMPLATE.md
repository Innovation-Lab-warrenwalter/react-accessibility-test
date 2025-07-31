# Modèle de rapport de corrections (optionnel)

Ce document vous est fourni à titre indicatif si vous souhaitez expliciter les problèmes trouvés et les corrections apportées.  
Il n’est pas obligatoire mais peut faciliter l’évaluation en donnant de la visibilité sur votre démarche.

## Problèmes identifiés

Listez ici les défauts d’accessibilité que vous avez repérés, par exemple :

- Absence de lien d’évitement au début de la page.
- Menu construit avec des `<div>`/`<span>` au lieu d’éléments sémantiques.
- Champs de formulaire sans label.
- …

## Corrections apportées

Pour chaque problème identifié, décrivez la ou les solutions que vous avez mises en place :

- **Lien d’évitement :** ajout d’un `<a href="#contenu">` visible au focus pour permettre de sauter directement au contenu principal.
- **Menu :** remplacement des `<div>`/`<span>` par un `<nav>` contenant une liste non ordonnée ; ajout d’attributs `aria-expanded` et `aria-haspopup` pour les sous‑menus ; contrôle du sous‑menu au clavier.
- **Formulaire :** ajout de `<label>` associés aux champs via `for`/`id`, usage des attributs `required` et `aria-required`, insertion d’un `<fieldset>`/`<legend>` pour les groupes de cases à cocher.
- …

## Limitations / Questions

Mentionnez ici les éléments que vous n’avez pas eu le temps de corriger ou que vous n’êtes pas certain d’avoir abordés correctement, ainsi que les questions que vous souhaiteriez approfondir.