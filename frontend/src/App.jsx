import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {toggleFavs, toggleModal, selectedTopic, state} = useApplicationData();

  return (
    <div className="App">

      <HomeRoute
      toggleModal={toggleModal}
      specifiedPhoto={state.specifiedPhoto}
      favorites={state.favorites}
      toggleFavs={toggleFavs}
      photos={state.photoData}
      topics={state.topicData}
      selectedTopic={selectedTopic}
      />

      {state.specifiedPhoto &&
      <PhotoDetailsModal
      toggleModal={toggleModal}
      specifiedPhoto={state.specifiedPhoto}
      favorites={state.favorites}
      toggleFavs={toggleFavs}
      photos={state.photoData}
      />}
    </div>
  );
}

export default App;
