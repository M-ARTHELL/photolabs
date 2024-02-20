import React, {useReducer, useEffect} from 'react';

//reducer actions
export const ACTIONS = {
  TOGGLE_FAVS: "TOGGLE_FAVS",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC",
};

//initual state
const initialState = {
  favorites: [],
  topicData: [],
  photoData: [],
  specifiedPhoto: null,
};


//reducer
//updates the provided state with the provided action
function reducer(state, action) {
  switch (action.type) {

    //checks if the photo is already included in the favorites array
    //if so, it removes it. otherwise, it will add it.
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

      case ACTIONS.GET_PHOTOS_BY_TOPICS:
        return {
          ...state,
          photoData: action.payload,
        }
        
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}


//useApplicationData
//custom hook that fetches data and updates the state
export function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  //fetch photo data
  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => { console.error('Error:', error)});
  }, []);

  //fetch topic data
  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((error) => { console.error('Error:', error)});
  }, []);

  //fetch photo data of specified topic
  const selectedTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
    .then((res) => res.json())
    .then((data) => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }))
    .catch((error) => { console.error('Error:', error)});
  };

  //add or remove from favorites
  const toggleFavs = function(photoId) {
    dispatch({ type: ACTIONS.TOGGLE_FAVS, photoId: photoId });
  };
  
  //open or close the photo modal
  const toggleModal = function(specifiedPhoto) {
      dispatch({ type: ACTIONS.TOGGLE_MODAL, photo: specifiedPhoto });
  };

  //return state and functions to be used elsewhere
  return {
    toggleFavs,
    toggleModal,
    selectedTopic,
    state,
  };
};


//export
export default useApplicationData;