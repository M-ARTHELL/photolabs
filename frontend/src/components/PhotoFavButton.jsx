import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';



function PhotoFavButton({id, favHandler}) {

  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => favHandler.toggleFavs(id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favHandler.favorites.includes(id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;