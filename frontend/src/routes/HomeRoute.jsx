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
        toggleFavs={props.toggleFavs}
        topics={props.topics}
      />
      <PhotoList
        toggleModal={props.toggleModal}
        isModalVisible={props.isModalVisible}
        favorites={props.favorites}
        toggleFavs={props.toggleFavs}
        photos={props.photos}
      />
    </div>
  );
};

export default HomeRoute;
