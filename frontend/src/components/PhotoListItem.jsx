import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  
  return (
    <div className="photo-list__item">
      <div><img src={props.sampleData.imageSource} /></div>
      <div><img src={props.sampleData.profile} />{props.sampleData.username}</div>
      <div>{props.sampleData.location.city}, {props.sampleData.location.country}</div>
    </div>
    )
  }

export default PhotoListItem;
