import React, {useState} from 'react';

function useApplicationData() {
  const [isModalVisible, setModalVisible] = useState(null);
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


  const toggleModal = function(photo) {
    return (
      setModalVisible(photo)
      )
  }


  return {
    favorites,
    toggleFavs,
    setFavorites,
    isModalVisible,
    toggleModal,
    setModalVisible
  }
}

export default useApplicationData;