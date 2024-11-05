import React from 'react';
import Card from '../components/card';
import '../stylesheets/Test/cards.scss';

export const Tests = () => {
  const cardsData = [
    { text1: 'Test1', text2: 'Este test sirve para bla bla bla papapapa', text3: 'Ver más', link: '/detalles/1' },
    { text1: 'Test2', text2: 'Texto 2 - Card 2', text3: 'Ver más', link: '/detalles/2' },
    { text1: 'Texto 1 - Card 3', text2: 'Texto 2 - Card 3', text3: 'Ver más', link: '/detalles/3' },
    { text1: 'Texto 1 - Card 4', text2: 'Texto 2 - Card 4', text3: 'Ver más', link: '/detalles/4' },
    { text1: 'Texto 1 - Card 5', text2: 'Texto 2 - Card 5', text3: 'Ver más', link: '/detalles/5' },
    { text1: 'Texto 1 - Card 6', text2: 'Texto 2 - Card 6', text3: 'Ver más', link: '/detalles/6' },
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <Card key={index} text1={card.text1} text2={card.text2} text3={card.text3} link={card.link} />
      ))}
    </div>
  );
};

export default Tests;
