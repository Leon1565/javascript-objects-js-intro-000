var playlist = {
  'Phil Ochs': 'song'
}
function updatePlaylist(thePlaylist, artistName, songTitle){
  return Object.assign({}, thePlaylist, {[artistName]: songTitle})
}
updatePlaylist(playlist, 'My Bloody Valentine', 'Slowdive');
function removeFromPlaylist(thePlaylist, artistName){
  removeFromObjectByKey()
}