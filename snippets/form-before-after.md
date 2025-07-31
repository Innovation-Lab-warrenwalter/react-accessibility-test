## Formulaire – Avant / Après

### Avant (version candidate)

```jsx
// formulaire sans labels ni structure
<form onSubmit={(e) => e.preventDefault()}>
  <input type="text" placeholder="Votre nom" />
  <input type="text" placeholder="Votre email" />
  <div className="checkbox-group">
    <input type="checkbox" id="opt1" /> Option 1
    <input type="checkbox" id="opt2" /> Option 2
  </div>
  <button type="submit">
    <img src="..." alt="" />
  </button>
</form>
```

### Après (version corrigée)

```jsx
// formulaire accessible avec labels, fieldset et contrôle des erreurs
<form onSubmit={handleSubmit}>
  <div className="form-field">
    <label htmlFor="name-input">
      Nom <span aria-hidden="true" className="required-indicator">*</span>
    </label>
    <input
      id="name-input"
      type="text"
      name="name"
      required
      aria-required="true"
      autoComplete="name"
    />
  </div>
  <div className="form-field">
    <label htmlFor="email-input">
      Email <span aria-hidden="true" className="required-indicator">*</span>
    </label>
    <input
      id="email-input"
      type="email"
      name="email"
      required
      aria-required="true"
      autoComplete="email"
    />
  </div>
  <fieldset className="form-field">
    <legend>Choisissez vos options préférées</legend>
    <div>
      <input type="checkbox" id="optionA" name="options" value="A" />
      <label htmlFor="optionA">Option 1</label>
    </div>
    <div>
      <input type="checkbox" id="optionB" name="options" value="B" />
      <label htmlFor="optionB">Option 2</label>
    </div>
  </fieldset>
  <button type="submit" className="submit-btn">Envoyer</button>
</form>
```

Cette version associe chaque champ à un label, indique explicitement les champs requis et regroupe les cases à cocher dans un `fieldset` avec un `legend`. Le bouton de soumission comporte un texte visible.