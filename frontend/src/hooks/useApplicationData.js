import React, {useReducer} from 'react';

const ACTIONS = {
  TOGGLE_FAVS: "TOGGLE_FAVS",
  TOGGLE_MODAL: "TOGGLE_MODAL",
}

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
        isModalVisible: action.photo,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initialState = {
  favorites: [],
  isModalVisible: null,
}

export function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  const toggleFavs = function(photoId) {
    dispatch({ type: ACTIONS.TOGGLE_FAVS, photoId: photoId });
  };
  
  const toggleModal = function(isModalVisible) {
      dispatch({ type: ACTIONS.TOGGLE_MODAL, photo: isModalVisible });
  };

  return {
    favorites: state.favorites,
    toggleFavs,
    isModalVisible: state.isModalVisible,
    toggleModal,
  };
};


export default useApplicationData;