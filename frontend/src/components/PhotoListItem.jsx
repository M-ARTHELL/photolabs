import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


const PhotoListItem = ({photos, favorites, setFavorites, toggleFavs, toggleModal}) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        id={photos.id}
        favorites={favorites}
        setFavorites={setFavorites}
        toggleFavs={toggleFavs}
      />

      <img src={photos.urls.regular} className="photo-list__image" onClick={() => toggleModal(photos)}/>

      <div className="photo-list__user-details">
        
        <img src={photos.user.profile} className="photo-list__user-profile" />

        <div className="photo-list__user-info">
          {photos.user.username}

          <div className="photo-list__user-location">{photos.location.city}, {photos.location.country}</div>
        </div>
      </div>
    </div>
    )
  }

export default PhotoListItem;
