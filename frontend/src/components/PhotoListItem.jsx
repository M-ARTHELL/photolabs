import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        id={props.sampleData.id}
        favorites={props.favorites}
        setFavorites={props.setFavorites}
        toggleFavs={props.toggleFavs}
      />

      <img src={props.sampleData.urls.regular} className="photo-list__image" onClick={() => props.toggleModal(props.sampleData)}/>

      <div className="photo-list__user-details">
        <img src={props.sampleData.user.profile} className="photo-list__user-profile" />

        <div className="photo-list__user-info">
          {props.sampleData.user.username}

          <div className="photo-list__user-location">{props.sampleData.location.city}, {props.sampleData.location.country}</div>
        </div>
      </div>
    </div>
    )
  }

export default PhotoListItem;
