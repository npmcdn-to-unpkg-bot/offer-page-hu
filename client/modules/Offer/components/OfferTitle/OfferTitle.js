import React, { PropTypes } from 'react';

import style from './OfferTitle.css';

function OfferTitle(props) {
  const offer = props.offer;
  const originLocations = `Aéreo de ${props.originLocations} cidade${props.originLocations == 1 ? ' ' : 's' }`;
  const location = `Hotel em ${offer.location}`

  return (
    <div className={style.title}>
      <h1>{offer.title}</h1>
      <h2>{offer.location}</h2>
      <h3>
        {originLocations}
        {' '}
        +
        {' '}
        {location}
        </h3>
    </div>
  );
}

OfferTitle.propTypes = {
  originLocations: PropTypes.number.isRequired,
};

export default OfferTitle;
