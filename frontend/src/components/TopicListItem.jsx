import React from "react";
import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  console.log(props)
  return (
    <div className="top-nav-bar__topic-list">
      <p className="topic-list__item" onClick={() => props.selectedTopic(props.topic.id)}>{props.topic.title}</p>
    </div>
  );
};

export default TopicListItem;