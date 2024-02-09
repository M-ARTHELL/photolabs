import React from 'react';
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({toggleFavs, favorites, setFavorites}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge
      isFavPhotoExist={favorites.length > 0}
      />
    </div>
  )
}

export default TopNavigation;