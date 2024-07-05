import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../Styles/app.css';

function ContactForm() {
  const [modal, setModal] = useState(false);
  const form = useRef();

  const toggleModal = () => {
    setModal(!modal);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2te30bs',
        'template_ru88diq',
        form.current,
        'LusR8Esm_vBkKg9kA'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          // Show modal after successful submission
          setModal(true);
          // Reset form fields after successful submission
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      <div className="cf-form-container">
        <form className="cf-form" ref={form} onSubmit={sendEmail}>
          <label className="cf-form-name">Nom/Prénom:</label>
          <input className="cf-form-input" type="text" name="user_name" />
          <label className="cf-form-name">Courrier:</label>
          <input className="cf-form-input" type="email" name="user_email" />
          <label className="cf-form-name">Message:</label>
          <textarea className="cf-form-message" name="message" />
          <input className="cf-form-button" type="submit" value="Envoyer" />
        </form>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div>Message sent successfully!</div>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
