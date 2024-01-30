import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import './App.scss';


const App = () => {
  return (
    <div className="App">
      <PhotoList />
    </div>
  );
};

export default App;
