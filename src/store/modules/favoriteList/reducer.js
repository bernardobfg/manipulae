import produce from "immer";

const INITIAL_STATE =  JSON.parse(localStorage.getItem("@music:favoriteList")) ?? [];

export const favoriteList = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case "ADD_MUSIC_TO_FAVORITE": {
        draft.push(action.payload);
        localStorage.setItem("@music:favoriteList", JSON.stringify(draft));
        break;
      }
      case "REMOVE_MUSIC_FROM_FAVORITE": {
        draft.splice(draft.indexOf(action.payload), 1);
        localStorage.setItem("@music:favoriteList", JSON.stringify(draft));
        break;
      }
      default: {
        return state;
      }
    }
  })
}