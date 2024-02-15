import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return (
        <PhotoListItem
        key={photo.id}
        sampleData={photo}
        favorites={props.favorites}
        setFavorites={props.setFavorites}
        toggleFavs={props.toggleFavs}
        toggleModal={props.toggleModal}
        isModalVisible={props.isModalVisible}
        setModalVisible={props.setModalVisible}
        />)})}
    </ul>
  );
};

export default PhotoList;
