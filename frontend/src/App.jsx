import React, {useState} from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
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

  return (
    <div className="App">

      <HomeRoute
      toggleModal={toggleModal}
      isModalVisible={isModalVisible}
      setModalVisible={setModalVisible}
      favorites={favorites}
      setFavorites={setFavorites}
      toggleFavs={toggleFavs}
      />

      {isModalVisible &&
      <PhotoDetailsModal
      toggleModal={toggleModal}
      photo={isModalVisible}
      setModalVisible={setModalVisible}
      favorites={favorites}
      setFavorites={setFavorites}
      toggleFavs={toggleFavs}
      />}
    </div>
  );
};

export default App;
