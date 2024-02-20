import React from "react";
import "../styles/TopicListItem.scss";


const TopicListItem = ({topic, selectedTopic}) => {
  return (
    <div className="topic-list__item" onClick={() => selectedTopic(topic.id)}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;