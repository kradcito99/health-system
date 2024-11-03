import React, { useState } from 'react';
import '../stylesheets/Test/cards.scss'; // Asegúrate de que este archivo contenga tu código SCSS de las tarjetas

const Card = ({ text1, text2 }) => {
  return (
    <div className="card">
      <div className="first-content">
        <h2>{text1}</h2>
      </div>
      <div className="second-content">
        <h2>{text2}</h2>
      </div>
    </div>
  );
};

export default Card;
