import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';



function PhotoFavButton(props) {

  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => props.favHandler.toggleFavs(props.id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.favHandler.favorites.includes(props.id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;