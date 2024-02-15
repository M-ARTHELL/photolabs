import React from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import { useCallback, useState } from 'react';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation
        favorites={props.favorites}
        setFavorites={props.setFavorites}
        toggleFavs={props.toggleFavs}
      />
      <PhotoList
        toggleModal={props.toggleModal}
        isModalVisible={props.isModalVisible}
        setModalVisible={props.setModalVisible}
        favorites={props.favorites}
        setFavorites={props.setFavorites}
        toggleFavs={props.toggleFavs}
      />
    </div>
  );
};

export default HomeRoute;
