import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={() => props.toggleModal()}/>
      </button>
      <img src={props.photo.urls.full} className='photo-details-modal__image'></img>
      <div className='photo-details-modal__header'>
        <div className="photo-details-modal__photographer-info">
          <img src={props.photo.user.profile} className='photo-details-modal__photographer-profile' />
          <div className='photo-details-modal__photographer-details'>
            {props.photo.user.name}
          </div>
          <div className='photo-details-modal__photographer-location'>{props.photo.location.city}, {props.photo.location.country}</div>
        </div>
      </div>
      <div className='photo-details-modal__images'>
      <h3>Similar Photos</h3>
      <PhotoList
        toggleModal={props.toggleModal}
        isModalVisible={props.isModalVisible}
        setModalVisible={props.setModalVisible}
        favorites={props.favorites}
        setFavorites={props.setFavorites}
        toggleFavs={props.toggleFavs}
      />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;