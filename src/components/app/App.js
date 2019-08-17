import React from "react";
import "./App.css";
import SearchBar from "../search_bar/SearchBar";
import SearchResults from "../search_results/SearchResults";
import Playlist from "../playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.state = {
      searchResults: [
        {
          id: 1,
          name: "Help",
          artist: "The Beatles",
          album: "Help",
          isAdded: false,
          uri: '',
          addToPlaylist: this.addTrackToPlaylist.bind(this),
          removeFromPlaylist: this.removeTrackFromPlaylist.bind(this),
        },
        {
          id: 2,
          name: "Umbrella",
          artist: "Rihanna",
          album: "Good Girl Gone Bad",
          isAdded: false,
          uri: '',
          addToPlaylist: this.addTrackToPlaylist.bind(this),
          removeFromPlaylist: this.removeTrackFromPlaylist.bind(this),
        }
      ],
      playlistName: "My Playlist",
      playlist: []
    };
  }

  isTrackInPlaylist(track) {
    const index = this.state.playlist.findIndex(item => item.id === track.id)
    return index !== -1;
  }

  addTrackToPlaylist(track) {
    if (this.isTrackInPlaylist(track)) return;

    const newTrack = { ...track };
    newTrack.isAdded = true; 

    const newPlaylist = [...this.state.playlist];
    newPlaylist.push(newTrack);

    const newSearchResults = this.updateSearchResults(newTrack);

    this.setState({
      playlist: newPlaylist,
      searchResults: newSearchResults,
    })
  }

  removeTrackFromPlaylist(track) {    
    const newPlaylist = [...this.state.playlist];
    const index = newPlaylist.findIndex(item => item.id === track.id);
    newPlaylist.splice(index, 1);
    track.isAdded = false;
    const newSearchResults = this.updateSearchResults(track);

    this.setState({
      playlist: newPlaylist,
      searchResults: newSearchResults,
    })
  }

  updatePlaylistName(name) {    
    this.setState({
      playlistName: name,
    })
  }

  savePlaylist() {
    console.log('Saving playlist');
    
    const trackUris = this.state.playlist.map(track => track.uri);
    return trackUris;
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults results={this.state.searchResults} />
            <Playlist
              playlistName={this.state.playlistName}
              playlist={this.state.playlist}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
