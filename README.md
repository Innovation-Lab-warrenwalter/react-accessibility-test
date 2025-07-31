# Test technique React : accessibilité RGAA 4.2.1

Ce dépôt contient un petit exercice destiné à évaluer votre capacité à identifier et corriger des défauts d’accessibilité dans une application React.  
L’objectif est de couvrir les critères des niveaux A et AA du [RGAA 4.2.1](https://design.numerique.gouv.fr/accessibilite/rgaa4-2/), avec un focus sur l’HTML sémantique, les rôles ARIA, la navigation au clavier, les formulaires, les images, les tableaux et les modales.

## Contenu du dépôt

```
react-accessibility-test/
├── candidate-version/     # version non accessible à corriger
├── reference-version/     # version corrigée (à titre de comparaison)
├── README.md              # ce fichier
├── EVALUATION.md          # grille de scoring pour l’évaluateur
├── snippets/              # exemples avant/après
└── .github/
    └── instructions_for_evaluator.md
```

### Version candidate (`candidate-version/`)

Ce dossier contient une mini‑application React volontairement truffée d’erreurs d’accessibilité. Votre mission est de détecter et corriger autant de problèmes que possible en une heure environ. La liste des erreurs injectées est documentée dans `candidate-version/BUGS_INJECTED.md` (à lire **après** avoir tenté de les trouver par vous‑même pour vous auto‑évaluer).

### Version de référence (`reference-version/`)

Ce dossier propose une implémentation corrigée respectant les bonnes pratiques RGAA/WCAG. Elle est fournie pour vérification et pour l’évaluateur ; vous n’avez pas à la modifier.

### Snippets (`snippets/`)

Des extraits de code illustrant des cas « avant/après » sont fournis pour les éléments les plus significatifs (menu, formulaire, modale). Ces exemples ne couvrent pas tous les problèmes ; ils servent uniquement d’illustration.

## Consignes pour le candidat

1. **Cloner le dépôt** et installez les dépendances :
   ```bash
   git clone <url-du-dépôt>
   cd react-accessibility-test/candidate-version
   npm install
   npm start
   ```
2. **Analyser l’application** via la navigation clavier (Tab/Shift+Tab) et, si possible, avec un lecteur d’écran.  
   Vérifiez les titres, les images, les liens, le tableau, le formulaire et la modale.
3. **Corriger les défauts d’accessibilité** en modifiant directement le code dans `candidate-version/`.  
   Tenez compte des bonnes pratiques RGAA/WCAG niveau A/AA.  
   Vous pouvez utiliser des librairies minimalistes (par exemple un piège de focus) tant qu’elles restent justifiées et limitées.
4. **Committer et pousser vos changements** sur votre fork.  
   *Optionnel :* si vous manquez de temps ou souhaitez expliciter vos choix, créez un fichier `FIXES.md` décrivant les problèmes identifiés et comment vous les avez corrigés.

### Contraintes

- Ne cassez pas volontairement le design ; utilisez des classes utilitaires (`.sr-only`, etc.) pour conserver une apparence cohérente.  
- Ne supprimez pas des fonctionnalités de l’application (menu, tableau, formulaire, modale) ; votre mission consiste à les rendre accessibles.

## Livrables attendus

- Votre code corrigé (commit/push sur votre dépôt).  
- *(Si applicable)* un fichier `FIXES.md` décrivant les corrections effectuées et les éventuelles limites ou questions restantes.

Bonne chance !