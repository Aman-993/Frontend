import React, {useState} from 'react';
import calendarIcon from '../../assets/calendar.png';
import materialIcon from '../../assets/material.png';
import infoIcon from '../../assets/info.png';
import './PageHeader.css';

const PageHeader = () => {
  const [activeButton, setActiveButton] = useState('Learning Material');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="page-header">
      <div className="left-buttons">
        <button
          className={`page-button ${activeButton === 'Mentor Sessions' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Mentor Sessions')}
        >
          <img src={calendarIcon} alt="Calendar" className="icon" /> Mentor Sessions
        </button>
        <button
          className={`page-button ${activeButton === 'Learning Material' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Learning Material')}
        >
          <img src={materialIcon} alt="Material" className="icon" /> Learning Material
        </button>
      </div>
      <div className="right-button">
        <button
          className={`page-button info-button ${activeButton === 'How it works' ? 'active' : ''}`}
          onClick={() => handleButtonClick('How it works')}
        >
          <img src={infoIcon} alt="Info" className="icon" /> How it works
        </button>
      </div>
    </div>
  );
};

export default PageHeader;