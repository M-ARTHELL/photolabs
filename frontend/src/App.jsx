import React, {useState} from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = function() {
    return setModalVisible(bool => !bool)
  }

  return (
    <div className="App">

      <HomeRoute
      toggleModal={toggleModal}
      isModalVisible={isModalVisible}
      setModalVisible={setModalVisible}/>

      {isModalVisible && <PhotoDetailsModal toggleModal={toggleModal}/>}
    </div>
  );
};

export default App;
