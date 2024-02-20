import React from 'react';
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'



const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
      topics={props.topics}
      />

      <FavBadge
      isFavPhotoExist={props.favorites.length > 0}
      />
    </div>
  )
}

export default TopNavigation;