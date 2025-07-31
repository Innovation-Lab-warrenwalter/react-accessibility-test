import React, { useState } from "react";
import "./App.css";

/**
 * Composant principal de la version candidate.
 * Ce composant est volontairement rempli d'erreurs d'accessibilité pour
 * permettre aux candidats de les identifier et de les corriger.
 */
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ouverture/fermeture de la modale (sans gestion de focus)
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app-container">
      {/* Menu non sémantique : div/span au lieu de nav/ul/li/a */}
      <div className="menu">
        <span className="menu-item">Accueil</span>
        <div className="menu-item has-submenu">
          Fonctionnalités
          <div className="submenu">
            <span className="submenu-item">Composant&nbsp;1</span>
            <span className="submenu-item">Composant&nbsp;2</span>
          </div>
        </div>
        <span className="menu-item">Contact</span>
      </div>

      {/* Titre principal non hiérarchique et incorrectement balisé */}
      <p><strong>Bienvenu sur notre application</strong></p>

      {/* Images */}
      <section className="images-section">
        {/* Image informative sans alt */}
        {/*
          Remplace le placeholder par une illustration réelle. Le texte alternatif
          est volontairement omis pour rester en phase avec l'énoncé des
          exercices (le candidat doit ajouter un alt approprié pour rendre
          l'image accessible).
        */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/A+F-Sticker-16.png" />

        {/* Image décorative avec un alt inutile */}
        {/*
          Une image décorative n'a pas besoin de texte alternatif, mais on
          conserve un alt non pertinent pour illustrer l'erreur à corriger.
        */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/65/Abstract_Blue_Background.png"
          alt="Image décorative"
        />

        {/* Icône de réseau social sans alternative textuelle */}
        {/*
          L'icône Twitter réelle est intégrée, mais sans nom accessible. Le
          candidat devra ajouter un libellé ou un aria-label.
        */}
        <a href="https://www.twitter.com" className="social-link">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Twitter_Logo_Blue.png"
            alt=""
          />
        </a>
      </section>

      {/* Tableaux */}
      <section className="table-section">
        {/* Tableau sans caption et en-têtes incorrects */}
        <table className="data-table">
          <tr>
            <td><strong>Nom</strong></td>
            <td><strong>Poste</strong></td>
            <td><strong>Âge</strong></td>
          </tr>
          <tr>
            <td>Alice</td>
            <td>Développeuse</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>Designer</td>
            <td>28</td>
          </tr>
        </table>
      </section>

      {/* Liens */}
      <section className="links-section">
        {/* Lien vague */}
        <a href="/about">Cliquez ici</a>
        {/* Pseudo‑lien via div cliquable */}
        <div
          className="fake-link"
          onClick={() => alert("Vous avez cliqué sur un lien!")}
        >
          En savoir plus
        </div>
      </section>

      {/* Formulaire */}
      <section className="form-section">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Champ texte sans label, placeholder uniquement */}
          <input
            type="text"
            placeholder="Votre nom"
            className="input-text"
          />
          {/* Champ email avec type générique et sans label */}
          <input
            type="text"
            placeholder="Votre email"
            className="input-text"
          />
          {/* Groupe de cases sans fieldset/legend */}
          <div className="checkbox-group">
            <input type="checkbox" id="opt1" /> Option&nbsp;1
            <input type="checkbox" id="opt2" /> Option&nbsp;2
          </div>
          {/* Bouton d'envoi seulement icône */}
          <button type="submit" className="submit-btn">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Paper-plane_font_awesome_white.svg/512px-Paper-plane_font_awesome_white.svg.png"
              alt=""
              className="btn-icon"
            />
          </button>
        </form>
      </section>

      {/* Bouton ouvrant la modale */}
      <button className="open-modal-btn" onClick={openModal}>
        Ouvrir la modale
      </button>
      {/* Modale non accessible */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <p><strong>Titre de la modale</strong></p>
              {/* Bouton de fermeture non sémantique */}
              <span className="modal-close" onClick={closeModal}>
                X
              </span>
            </div>
            <div className="modal-content">
              <p>Ceci est une modale. Elle n'utilise pas de role ni de piège de focus.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;