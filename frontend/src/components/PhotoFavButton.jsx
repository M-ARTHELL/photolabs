import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({id, favorites, toggleFavs}) {

  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => toggleFavs(id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favorites.includes(id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;