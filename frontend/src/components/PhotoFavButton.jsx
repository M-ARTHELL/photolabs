import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';



function PhotoFavButton() {
  const [like, setLike] = useState(false);

  return (
    <div className="photo-list__fav-icon" onClick={() => like ? setLike(false) : setLike(true)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={like} />
      </div>
    </div>
  );
}

export default PhotoFavButton;