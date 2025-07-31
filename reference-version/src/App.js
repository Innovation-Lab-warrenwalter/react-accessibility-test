import React, { useState, useRef, useEffect } from "react";
import "./App.css";

/**
 * Composant de navigation accessible. Utilise une structure sémantique
 * basée sur <nav>, <ul> et <li> avec des boutons pour les sous‑menus et
 * les attributs ARIA requis.
 */
function NavBar() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const toggleFeatures = () => setFeaturesOpen((open) => !open);
  const featuresButtonRef = useRef(null);
  const featuresMenuRef = useRef(null);

  // Ferme le sous-menu lors d'un clic à l'extérieur
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        featuresOpen &&
        featuresMenuRef.current &&
        !featuresMenuRef.current.contains(e.target) &&
        !featuresButtonRef.current.contains(e.target)
      ) {
        setFeaturesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [featuresOpen]);

  return (
    <nav aria-label="Navigation principale">
      <ul className="nav-list">
        <li>
          <a href="#content">Accueil</a>
        </li>
        <li>
          <button
            ref={featuresButtonRef}
            aria-expanded={featuresOpen}
            aria-haspopup="true"
            aria-controls="features-submenu"
            onClick={toggleFeatures}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setFeaturesOpen(false);
                featuresButtonRef.current.focus();
              }
            }}
          >
            Fonctionnalités
          </button>
          <ul
            id="features-submenu"
            ref={featuresMenuRef}
            className="submenu"
            hidden={!featuresOpen}
          >
            <li>
              <a href="#comp1">Composant&nbsp;1</a>
            </li>
            <li>
              <a href="#comp2">Composant&nbsp;2</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

/**
 * Composant principal de la version de référence.
 * Contient une structure sémantique complète et des composants accessibles
 * (navigation, images, tableau, formulaire et modale).
 */
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const previouslyFocusedRef = useRef(null);
  const modalRef = useRef(null);

  // Ouvre la modale et mémorise l'élément ayant le focus
  const openModal = () => {
    previouslyFocusedRef.current = document.activeElement;
    setModalOpen(true);
  };

  // Ferme la modale et restaure le focus à l'élément précédemment focusé
  const closeModal = () => {
    setModalOpen(false);
    if (previouslyFocusedRef.current) {
      previouslyFocusedRef.current.focus();
    }
  };

  // Lorsque la modale est ouverte, déplacer le focus au premier élément focusable
  useEffect(() => {
    if (modalOpen) {
      const focusableSelectors =
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
      const modalNode = modalRef.current;
      const focusables = modalNode.querySelectorAll(focusableSelectors);
      if (focusables.length) {
        focusables[0].focus();
      }
      // Handler de piège de focus
      function handleKeyDown(e) {
        if (e.key === "Tab") {
          const focusArray = Array.from(focusables);
          const currentIndex = focusArray.indexOf(document.activeElement);
          if (e.shiftKey && currentIndex === 0) {
            e.preventDefault();
            focusArray[focusArray.length - 1].focus();
          } else if (!e.shiftKey && currentIndex === focusArray.length - 1) {
            e.preventDefault();
            focusArray[0].focus();
          }
        } else if (e.key === "Escape") {
          e.preventDefault();
          closeModal();
        }
      }
      modalNode.addEventListener("keydown", handleKeyDown);
      return () => modalNode.removeEventListener("keydown", handleKeyDown);
    }
  }, [modalOpen]);

  return (
    <>
      <header>
        <h1>Application de démonstration</h1>
        <NavBar />
      </header>
      <main id="content" tabIndex="-1">
        {/* Section images */}
        <section aria-labelledby="images-title">
          <h2 id="images-title">Illustrations</h2>
          <div className="images-section">
            {/* Image informative avec alternative */}
            <img
              src="https://via.placeholder.com/300x150"
              alt="Présentation de notre produit principal"
            />
            {/* Image décorative sans alternative et aria-hidden */}
            <img
              src="https://via.placeholder.com/100x100"
              alt=""
              aria-hidden="true"
            />
            {/* Icône accessible via aria-label sur le lien */}
            <a
              href="https://www.twitter.com"
              className="social-link"
              aria-label="Suivez‑nous sur Twitter"
            >
              <img
                src="https://via.placeholder.com/24"
                alt=""
                aria-hidden="true"
              />
            </a>
          </div>
        </section>

        {/* Section tableau */}
        <section aria-labelledby="table-title">
          <h2 id="table-title">Liste des collaborateurs</h2>
          <table className="data-table">
            <caption>Informations des membres de l'équipe</caption>
            <thead>
              <tr>
                <th scope="col">Nom</th>
                <th scope="col">Poste</th>
                <th scope="col">Âge</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Alice</th>
                <td>Développeuse</td>
                <td>30</td>
              </tr>
              <tr>
                <th scope="row">Bob</th>
                <td>Designer</td>
                <td>28</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Section liens */}
        <section aria-labelledby="links-title">
          <h2 id="links-title">Liens utiles</h2>
          <div className="links-section">
            <a href="/about">À propos de nous</a>
            <a href="/learn-more">En savoir plus sur notre offre</a>
          </div>
        </section>

        {/* Section formulaire */}
        <section aria-labelledby="form-title" id="contact">
          <h2 id="form-title">Nous contacter</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Formulaire soumis !");
            }}
          >
            <div className="form-field">
              <label htmlFor="name-input">
                Nom&nbsp;<span aria-hidden="true" className="required-indicator">*</span>
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
                Email&nbsp;<span aria-hidden="true" className="required-indicator">*</span>
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
                <label htmlFor="optionA">Option&nbsp;1</label>
              </div>
              <div>
                <input type="checkbox" id="optionB" name="options" value="B" />
                <label htmlFor="optionB">Option&nbsp;2</label>
              </div>
            </fieldset>
            <button type="submit" className="submit-btn">
              Envoyer
            </button>
          </form>
        </section>

        {/* Bouton d'ouverture de la modale */}
        <button className="open-modal-btn" onClick={openModal}>
          Ouvrir la modale
        </button>
      </main>
      <footer>
        <p>&copy; 2025 Mon entreprise</p>
      </footer>

      {/* Modale accessible */}
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
    </>
  );
}

export default App;