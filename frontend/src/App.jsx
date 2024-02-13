import React, {useState} from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(null);

  const toggleModal = function(photo) {
    console.log(photo)
    return setModalVisible(photo)
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
