import React, {useReducer, useEffect} from 'react';

export const ACTIONS = {
  TOGGLE_FAVS: "TOGGLE_FAVS",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC",
};


const initialState = {
  favorites: [],
  topicData: [],
  photoData: [],
  specifiedPhoto: null,
  topicPhotos: [],
};


function reducer(state, action) {
  switch (action.type) {

    case ACTIONS.TOGGLE_FAVS:
      if (state.favorites.includes(action.photoId)) {
        return {
          ...state,
          favorites: state.favorites.filter((tempId) => tempId !== action.photoId),
        };
      } else {
        return { ...state, favorites: [...state.favorites, action.photoId] };
      }

    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        specifiedPhoto: action.photo,
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}


export function useApplicationData() {
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);

  const [state, dispatch] = useReducer(reducer, { ...initialState });

  const toggleFavs = function(photoId) {
    dispatch({ type: ACTIONS.TOGGLE_FAVS, photoId: photoId });
  };
  
  const toggleModal = function(specifiedPhoto) {
      dispatch({ type: ACTIONS.TOGGLE_MODAL, photo: specifiedPhoto });
  };

  return {
    toggleFavs,
    toggleModal,
    state,
  };
};


export default useApplicationData;