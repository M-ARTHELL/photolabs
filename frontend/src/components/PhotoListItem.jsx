import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        id={props.photos.id}
        favorites={props.favorites}
        setFavorites={props.setFavorites}
        toggleFavs={props.toggleFavs}
      />

      <img src={props.photos.urls.regular} className="photo-list__image" onClick={() => props.toggleModal(props.photos)}/>

      <div className="photo-list__user-details">
        <img src={props.photos.user.profile} className="photo-list__user-profile" />

        <div className="photo-list__user-info">
          {props.photos.user.username}

          <div className="photo-list__user-location">{props.photos.location.city}, {props.photos.location.country}</div>
        </div>
      </div>
    </div>
    )
  }

export default PhotoListItem;
