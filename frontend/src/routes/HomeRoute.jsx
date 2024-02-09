import React from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import { useCallback, useState } from 'react';

const HomeRoute = () => {

  const [favorites, setFavorites] = useState([]);

function toggleFavs(photoId) {
  
  if (favorites.includes(photoId)) {
    setFavorites((prev) => {
      return prev.filter((tempId) => tempId !== photoId);
    });

  } else {
    setFavorites((prev) => {
      return [...prev, photoId];
    });
  }
};

  return (
    <div className="home-route">
      <TopNavigation
        favorites={favorites}
        setFavorites={setFavorites}
        toggleFavs={toggleFavs}
      />
      <PhotoList
        favorites={favorites}
        setFavorites={setFavorites}
        toggleFavs={toggleFavs}
      />
    </div>
  );
};

export default HomeRoute;
