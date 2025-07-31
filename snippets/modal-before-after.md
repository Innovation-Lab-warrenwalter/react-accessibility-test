## Modale – Avant / Après

### Avant (version candidate)

```jsx
// modale sans rôle ni gestion du focus
{isModalOpen && (
  <div className="modal-overlay">
    <div className="modal">
      <div className="modal-header">
        <p><strong>Titre de la modale</strong></p>
        <span className="modal-close" onClick={closeModal}>X</span>
      </div>
      <div className="modal-content">
        <p>Ceci est une modale. Elle n'utilise pas de role ni de piège de focus.</p>
      </div>
    </div>
  </div>
)}
```

### Après (version corrigée)

```jsx
// modale accessible avec rôle, titre et piège de focus
{modalOpen && (
  <div className="modal-overlay" role="presentation">
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={modalRef}
      className="modal"
    >
      <div className="modal-header">
        <h2 id="modal-title">Titre de la modale</h2>
        <button
          onClick={closeModal}
          className="modal-close"
          aria-label="Fermer la modale"
        >
          ×
        </button>
      </div>
      <div className="modal-content">
        <p>
          Ceci est une modale accessible. Le focus est piégé à l'intérieur et
          retourne à l'élément déclencheur lors de la fermeture.
        </p>
      </div>
    </div>
  </div>
)}
```

La version corrigée définit un `role="dialog"` et `aria-modal="true"`, associe un titre via `aria-labelledby`, utilise un bouton pour fermer avec un libellé accessible et implémente un piège de focus pour empêcher la tabulation hors de la modale.