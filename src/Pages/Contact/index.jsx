import React from 'react';
import ContactForm from '../../Components/ContactForm';
import '../../Styles/app.css';

function Contact() {
  return (
    <div>
      <div className="title-container">
        <div className="title-text">Contactez-Nous!</div>
      </div>
      <div className="text-container">
        <div className="text-text">
          Avez-vous un projet en tête ou souhaitez-vous faire partie de la
          chorale ? Envoyez-nous un message !
        </div>
      </div>
      <div className="c-container">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
