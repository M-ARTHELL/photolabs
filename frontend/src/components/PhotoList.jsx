import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({favorites, setFavorites, toggleFavs,toggleModal, setModalVisible, photos}) => {
  return (
    <ul className="photo-list">
      {photos?.map((photo) => {
        return (
        <PhotoListItem
        key={photo.id}
        photos={photo}
        favorites={favorites}
        setFavorites={setFavorites}
        toggleFavs={toggleFavs}
        toggleModal={toggleModal}
        setModalVisible={setModalVisible}
        />)})}
    </ul>
  );
};

export default PhotoList;
