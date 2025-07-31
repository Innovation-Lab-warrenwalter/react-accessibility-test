# Instructions pour l’évaluateur

Ce document fournit des recommandations pour mener l’évaluation du test « React – accessibilité RGAA ».

1. **Temps imparti :** prévoyez environ 1 heure pour que le candidat prenne connaissance du brief, exécute l’application, identifie les problèmes et apporte les corrections.  
   Un temps supplémentaire peut être accordé pour écrire le rapport `FIXES.md` si vous le demandez.

2. **Lancer l’application :** demandez au candidat de cloner le dépôt et d’exécuter `npm install` puis `npm start` dans `candidate-version/`. La version corrigée se trouve dans `reference-version/` à titre de comparaison.

3. **Attentes :** le but n’est pas de corriger absolument tous les défauts, mais d’observer la méthodologie, la compréhension des critères d’accessibilité et la capacité à apporter des corrections cohérentes.  
   L’utilisation d’outils automatisés (axe DevTools, Lighthouse…) est autorisée, tout comme la consultation de la documentation RGAA/WCAG.

4. **Utiliser la grille de scoring (`EVALUATION.md`) :** cochez les critères respectés et attribuez les points correspondants.  
   La dernière colonne indique la pondération de chaque critère. Un score total de 24/30 (80 %) ou plus indique généralement une bonne maîtrise.  
   N’hésitez pas à ajouter des commentaires qualitatifs (ex. qualité du code, réflexions apportées, omissions notables).

5. **Questions de suivi :** si certaines corrections manquent ou semblent approximatives, posez 2 ou 3 questions de clarification (ex. « Comment auriez‑vous géré la hiérarchie des titres ? », « Pourriez‑vous expliquer le rôle de `aria-modal` ? »).  
   Évaluez la capacité du candidat à justifier ses choix et à citer les bonnes pratiques.

6. **Retour au candidat :** à l’issue de l’évaluation, partagez le score et des pistes d’amélioration.  
   Vous pouvez également fournir la version de référence pour comparaison et suggérer des ressources (guides RGAA, tutoriels sur les modales accessibles, etc.).