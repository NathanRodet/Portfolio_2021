import React from 'react';

const Presentation = () => {
  return (
    <div className="Presentation">
      <div className="title">
        <h1><span>Bonjour, je suis Rodet Nathan.</span></h1>
        <p className="description">
          Un Étudiant en informatique, passionné par la programmation et le développement.
        </p>
      </div>
      <div class="content">
        <div class="content__container">
          <p class="content__container__text">
            Bonjour, je suis
          </p>
          <ul class="content__container__list">
            <li class="content__container__list__item">Rodet Nathan !</li>
            <li class="content__container__list__item">un Étudiant !</li>
            <li class="content__container__list__item">Motivité !</li>
            <li class="content__container__list__item">un Développeur !</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Presentation;