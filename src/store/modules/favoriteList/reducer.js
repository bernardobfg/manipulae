import produce from "immer";

const INITIAL_STATE = []

export const favoriteList = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case "ADD_MUSIC_TO_FAVORITE": {
        draft.push(action.payload);
        break;
      }
      case "REMOVE_MUSIC_FROM_FAVORITE": {
        draft.splice(draft.indexOf(action.payload), 1);
        break;
      }
      default: {
        return state;
      }
    }
  })
}