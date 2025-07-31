# Erreurs injectées dans la version candidate

Ce document énumère les défauts d’accessibilité volontairement intégrés dans la version candidate.  
Il ne fournit pas de solutions mais sert de checklist une fois l’exercice terminé pour comparer les problèmes détectés.  
Les numéros de critères RGAA indiqués sont à titre indicatif et ne sont pas exhaustifs.

## A. Navigation & structure

- **Absence de lien d’évitement** pour accéder directement au contenu principal (Critère 12.7).  
- **Menu non sémantique** : le menu est construit avec des `<div>` et `<span>` cliquables au lieu de `<nav>`, `<ul>`, `<li>` et `<a>` (Critère 9.1).  
- **Sous‑menu accessible uniquement au survol** : il s’affiche au survol de la souris et n’est pas accessible au clavier ; il manque également les attributs `aria-expanded` et `aria-haspopup` (Critères 7.3, 9.2).  
- **Focus invisible** : une règle CSS globale supprime l’outline sur tous les éléments focusables (`*:focus { outline: none; }`) (Critère 8.9).  
- **Absence d’éléments sémantiques** : pas de `<header>`, `<main>` ni `<footer>` ; les titres sont balisés avec `<p><strong>` au lieu de `<h1>`, `<h2>`, etc. (Critère 9.1).  
- **Hiérarchie de titres incohérente** : absence de `<h1>` unique et sauts de niveaux (Critère 9.1).

## B. Images

- **Image informative sans attribut `alt`** (Critère 10.1).  
- **Image décorative avec un `alt` non vide** (Critère 10.2).  
- **Icône de lien sans texte alternatif ni `aria-label`** (Critère 9.1).  
- **Image avec texte intégré et alternative vague ou insuffisante** (Critère 10.7).

## C. Tableaux

- **En‑têtes codés avec `<td>` en gras** au lieu de `<th>` avec `scope` (Critère 8.9).  
- **Absence de `<caption>`** pour décrire le tableau (Critère 8.7).  
- **Tableau non structuré** (pas de `<thead>`/`<tbody>`).

## D. Liens

- **Libellés vagues** : liens tels que « Cliquez ici » (Critère 6.1).  
- **Liens iconographiques sans nom accessible** (Critères 6.1, 9.2).  
- **Pseudo‑liens** : des `<div onClick>` utilisés comme liens sans rôle ni clavier (Critère 6.2).

## E. Formulaire

- **Champs sans `<label>`** : les utilisateurs ne disposent que du `placeholder` pour identifier les champs (Critère 11.1).  
- **Labels mal associés** : l'attribut `for` du label ne correspond pas à l'`id` du champ (Critère 11.1).  
- **Champs requis indiqués uniquement par la couleur** (Critère 11.9).  
- **Groupes de cases à cocher sans `<fieldset>`/`<legend>`** pour fournir un contexte (Critère 11.2).  
- **Bouton de soumission uniquement icône sans `aria-label` ni texte** (Critère 11.7).  
- **Types de champ génériques** : utilisation de `type="text"` au lieu de types spécialisés (`email`, `tel`) et absence d’`autocomplete` (Critère 11.10).  
- **Messages d’erreur non associés** : en cas d’erreur, les messages ne sont pas liés aux champs (`aria-describedby`) et ne sont pas dans une région live (`role="alert"`) (Critère 11.13).  
- **Pas d’indication visuelle claire d’erreur** combinée à l’énoncé (utilisation exclusive de la couleur).

## F. Modale

- **Absence de rôle `dialog` et d’attributs `aria-modal`** (Critère 7.4).  
- **Pas de nom accessible** : la modale ne comporte pas de titre associé via `aria-labelledby` ni de `aria-label` (Critère 7.4).  
- **Focus non déplacé à l’ouverture et non restitué à la fermeture** (Critère 7.4).  
- **Pas de piège de focus** : il est possible de tabuler en dehors de la modale (Critère 7.4).  
- **Pas de fermeture via la touche Échap** (Critère 7.4).  
- **Bouton de fermeture non sémantique** et sans libellé accessible ; le focus n’est pas restauré (Critère 7.4).  
- **Arrière‑plan non inerté** : le contenu derrière la modale reste accessible aux technologies d’assistance (Critère 7.7).

## G. Global / Métadonnées

- **Absence de `lang="fr"` sur la balise `<html>`** (Critère 12.1).  
- **Balise `<title>` vide ou générique** (Critère 12.2).  
- **Suppression du focus visible** (Critère 8.9).  
- **Hiérarchie des titres incohérente** (voir ci‑dessus).  
- **Structure du DOM confuse** : absence de sections et de composants clairement organisés.