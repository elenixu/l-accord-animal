import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/app.css';

function Home() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/Contact');
  };

  return (
    <div>
      <div className="title-container">
        <div className="title-text">Qui Somme-nous?</div>
      </div>
      <div className="h-text-container">
        <div className="h-text-text">
          Lorem ipsum dolor sit amet consectetur. Sit eu interdum malesuada
          dignissim mi. Blandit eu magna mauris tincidunt. Suscipit magna leo
          pellentesque nisl. Vel quis ultrices duis et sapien morbi amet. Tellus
          etiam pellentesque lorem pellentesque id morbi scelerisque.
        </div>
      </div>
      <div className="h-button-container">
        <button className="h-contact-button" onClick={handleContactClick}>
          Contactez nous
        </button>
      </div>
    </div>
  );
}

export default Home;
