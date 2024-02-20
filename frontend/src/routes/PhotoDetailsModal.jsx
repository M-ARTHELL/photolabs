import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  
  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={() => props.toggleModal()}/>
      </button>

      <PhotoFavButton
      id={props.specifiedPhoto.id}
      favorites={props.favorites}
      setFavorites={props.setFavorites}
      toggleFavs={props.toggleFavs}
      />

      <img src={props.specifiedPhoto.urls.full} className='photo-details-modal__image'></img>

      <div className='photo-details-modal__header'>
        <div className="photo-details-modal__photographer-info">

          <img src={props.specifiedPhoto.user.profile} className='photo-details-modal__photographer-profile' />

          <div className='photo-details-modal__photographer-details'>

            {props.specifiedPhoto.user.name}

          </div>

          <div className='photo-details-modal__photographer-location'>{props.specifiedPhoto.location.city}, {props.specifiedPhoto.location.country}</div>

        </div>
      </div>
      <div className='photo-details-modal__images'>
      <h3>Similar Photos</h3>

      <PhotoList
        toggleModal={props.toggleModal}
        photos={props.photos}
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