# Grille d'évaluation – Test accessibilité React RGAA 4.2.1

Cette grille permet à l'évaluateur d'analyser méthodiquement les corrections apportées par le candidat.  
Chaque ligne correspond à un critère RGAA ou à un point de vérification issu de la liste des erreurs injectées.  
Pour chaque critère, cochez `✔︎` si le comportement attendu est respecté et attribuez les points correspondants. Utilisez la colonne *Commentaire* pour justifier une décision ou noter des remarques.

| Critère RGAA | Description | Comportement attendu | OK | Commentaire | Points |
|-------------|------------|---------------------|----|-------------|-------|
| **12.7** | Lien d’évitement vers le contenu principal | Un lien d'évitement est présent en début de page, focusable via Tab, visible au focus, et amène sur l'élément `<main id="contenu">`. | ☐ | | 2 |
| **9.1** | Usage d’éléments sémantiques | La structure utilise `<header>`, `<main>`, `<footer>` et `<nav>` de manière appropriée. | ☐ | | 1 |
| **9.1** | Hiérarchie des titres | Les titres respectent une hiérarchie logique sans sauts (H1, H2…). Un seul `<h1>` est présent. | ☐ | | 2 |
| **8.9** | Navigation clavier et focus visible | La navigation au clavier (Tab/Shift+Tab) permet d'atteindre tous les éléments interactifs et un focus visible est présent (outline ou équivalent). | ☐ | | 2 |
| **7.3** | Menus accessibles | Le menu est construit avec `<ul><li><a>` ou `<button>` pour les sous‑menus. Les sous‑menus sont accessibles au clavier, avec `aria-expanded` et `aria-haspopup`. | ☐ | | 2 |
| **9.2** | Attributs ARIA pertinents | Les éléments comportent des attributs ARIA (role, aria-label, aria-describedby, aria-required…) uniquement quand nécessaire et correctement appliqués. | ☐ | | 2 |
| **10.1** | Images informatives | Les images informatives possèdent un texte alternatif pertinent décrivant l'information transmise. | ☐ | | 1 |
| **10.2** | Images décoratives | Les images purement décoratives sont ignorées par les technologies d'assistance (`alt=""` et `aria-hidden="true"`). | ☐ | | 1 |
| **9.1** | Icônes et liens | Les icônes servant de liens possèdent un libellé accessible (`aria-label` ou texte visible). | ☐ | | 1 |
| **8.7** | Tableau – légende | Le tableau dispose d'un `<caption>` décrivant brièvement son contenu. | ☐ | | 1 |
| **8.9** | Tableau – en‑têtes | Les en‑têtes de colonne et éventuellement de ligne sont balisés avec `<th scope="col">` / `scope="row"`. | ☐ | | 2 |
| **6.1** | Libellés de lien explicites | Les liens comportent un libellé explicite (« Cliquez ici » est proscrit). | ☐ | | 1 |
| **6.2** | Liens fonctionnels | Aucun pseudo‑lien via `<div onClick>` ; les liens sont de vrais `<a href>` accessibles. | ☐ | | 1 |
| **11.1** | Formulaire – labels | Chaque champ de formulaire possède un `<label>` lié par `for`/`id`. | ☐ | | 2 |
| **11.9** | Formulaire – champs requis | Les champs requis sont indiqués visuellement et programatiquement (`required`, `aria-required`), avec un indicateur non basé uniquement sur la couleur. | ☐ | | 1 |
| **11.2** | Groupes de champs | Les groupes de cases à cocher/radio sont contenus dans un `<fieldset>` avec un `<legend>`. | ☐ | | 1 |
| **11.7** | Boutons de formulaire | Les boutons d'envoi possèdent un texte visible ou un `aria-label` explicite si seule une icône est affichée. | ☐ | | 1 |
| **11.10** | Types de champ | Les types de champs (`email`, `tel`, etc.) et l’attribut `autocomplete` sont correctement utilisés. | ☐ | | 1 |
| **11.13** | Messages d’erreur | Les messages d’erreur sont associés via `aria-describedby`, avec `role="alert"` ou `aria-live`, et la mise en forme ne repose pas exclusivement sur la couleur. | ☐ | | 2 |
| **7.4** | Modale – rôle et attributs | La modale utilise `role="dialog"`, `aria-modal="true"`, un titre accessible via `aria-labelledby` ou `aria-label`. | ☐ | | 2 |
| **7.4** | Modale – gestion du focus | À l'ouverture, le focus se déplace dans la modale ; le focus est piégé à l'intérieur ; à la fermeture, il est restauré à l’élément déclencheur. | ☐ | | 3 |
| **7.4** | Modale – fermeture | La modale peut être fermée via un bouton `<button>` accessible (avec label) et via la touche `Échap`. | ☐ | | 1 |
| **7.7** | Arrière‑plan inerté | Le contenu derrière la modale est masqué ou inerté (via `aria-hidden` ou `inert`) pendant l'affichage de la modale. | ☐ | | 1 |
| **12.1** | Attribut `lang` de la page | L'élément `<html>` spécifie l'attribut `lang="fr"`. | ☐ | | 1 |
| **12.2** | Titre de page | La balise `<title>` est pertinente et décrit le contenu de la page. | ☐ | | 1 |
| **Global** | Focus visible | Le style CSS conserve ou personnalise l'outline pour le focus visible. | ☐ | | 1 |
| **Global** | Structure logique | Le code respecte une organisation claire, DRY et utilise des composants React adaptés. | ☐ | | 1 |
| **Total** | &nbsp; | **Score maximal** |  |  | **30** |

> **Seuil indicatif** : un score supérieur ou égal à 24/30 (~80 %) indique une maîtrise avancée des critères d'accessibilité RGAA niveau A/AA.