import React, {useState} from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  
  const {favorites, toggleFavs, isModalVisible, toggleModal} = useApplicationData();

  return (
    <div className="App">

      <HomeRoute
      toggleModal={toggleModal}
      isModalVisible={isModalVisible}
      favorites={favorites}
      toggleFavs={toggleFavs}
      />

      {isModalVisible &&
      <PhotoDetailsModal
      toggleModal={toggleModal}
      photo={isModalVisible}
      favorites={favorites}
      toggleFavs={toggleFavs}
      />}
    </div>
  );
}

export default App;
