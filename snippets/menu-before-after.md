## Menu – Avant / Après

### Avant (version candidate)

```jsx
// menu non sémantique et inaccessible
<div className="menu">
  <span className="menu-item">Accueil</span>
  <div className="menu-item has-submenu">
    Fonctionnalités
    <div className="submenu">
      <span className="submenu-item">Composant 1</span>
      <span className="submenu-item">Composant 2</span>
    </div>
  </div>
  <span className="menu-item">Contact</span>
</div>
```

### Après (version corrigée)

```jsx
// menu structuré et accessible
<nav aria-label="Navigation principale">
  <ul className="nav-list">
    <li>
      <a href="#content">Accueil</a>
    </li>
    <li>
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="features-menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        Fonctionnalités
      </button>
      <ul id="features-menu" hidden={!isOpen} className="submenu">
        <li><a href="#comp1">Composant 1</a></li>
        <li><a href="#comp2">Composant 2</a></li>
      </ul>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ul>
</nav>
```

Ici le menu utilise des éléments HTML sémantiques et expose les sous‑menus via des attributs ARIA. Les sous‑menus sont contrôlés au clavier et annoncent leur état avec `aria-expanded`.