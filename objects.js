var playlist = {
  LukeCombs: "Beautiful Crazy"
}
function updatePlaylist(thePlaylist, artistName, songTitle){
  return Object.assign({}, thePlaylist, {[artistName]: songTitle})
}
updatePlaylist(playlist, 'Chris Young', 'Tomorrow');