import React, {useState} from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  
  const {favorites, toggleFavs, setFavorites, isModalVisible, toggleModal, setModalVisible} = useApplicationData();

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
