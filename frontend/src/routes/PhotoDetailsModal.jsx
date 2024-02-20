import React from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({photos, toggleModal, specifiedPhoto, favorites, setFavorites, toggleFavs, setModalVisible}) => {
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={() => toggleModal()}/>
      </button>

      <div className='photo-details-modal__images'>
        <PhotoFavButton
        id={specifiedPhoto.id}
        favorites={favorites}
        setFavorites={setFavorites}
        toggleFavs={toggleFavs}
        />

        <img src={specifiedPhoto.urls.full} className='photo-details-modal__image'></img>

        <div className="photo-details-modal__photographer-details">

          <img src={specifiedPhoto.user.profile}  className='photo-details-modal__photographer-profile'/>

          <div className='photo-details-modal__photographer-info'>
            {specifiedPhoto.user.name}

            <div className='photo-details-modal__photographer-location'>{specifiedPhoto.location.city}, {specifiedPhoto.location.country}
            </div>
          </div>
        </div>
      <h3>Similar Photos</h3>
      <PhotoList
      toggleModal={toggleModal}
      photos={photos}
      setModalVisible={setModalVisible}
      favorites={favorites}
      setFavorites={setFavorites}
      toggleFavs={toggleFavs}
      />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;