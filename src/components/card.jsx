import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ text1, text2, text3, link }) => {
  return (
    <div className="card">
      <div className="first-content"><h2>{text1}</h2></div>
      <div className="second-content"><p>{text2}</p></div>
      <Link to={link} className="card-link">
        {text3}
      </Link>
    </div>
  );
};

Card.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
