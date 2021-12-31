export function addMusicToFavorite(music) {
  return {
    type: "ADD_MUSIC_TO_FAVORITE",
    payload: music,
  };
}
export function removeMusicFromFavorite(music) {
  return {
    type: "REMOVE_MUSIC_FROM_FAVORITE",
    payload: music,
  };
}