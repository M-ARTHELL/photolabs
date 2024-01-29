import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  
  return (
    <div className="photo-list__item">
      <img src={props.sampleData.imageSource} className="photo-list__image"/>

      <div className="photo-list__user-details">
        <img src={props.sampleData.profile} className="photo-list__user-profile" />

        <div className="photo-list__user-info">
          {props.sampleData.username}

          <div className="photo-list__user-location">{props.sampleData.location.city}, {props.sampleData.location.country}</div>
        </div>
      </div>
    </div>
    )
  }

export default PhotoListItem;
