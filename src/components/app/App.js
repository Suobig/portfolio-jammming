import React from "react";
import "./App.css";
import SearchBar from "../search_bar/SearchBar";
import SearchResults from "../search_results/SearchResults";
import Playlist from "../playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          id: 1,
          name: "Help",
          artist: "The Beatles",
          album: "Help",
          isAdded: false,
          addToPlaylist: this.addTrackToPlaylist.bind(this),
          removeFromPlaylist: this.removeTrackFromPlaylist.bind(this),
        },
        {
          id: 2,
          name: "Umbrella",
          artist: "Rihanna",
          album: "Good Girl Gone Bad",
          isAdded: false,
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

  updateSearchResults(track) {
    return this.state.searchResults.map(item => item.id === track.id ? track : item);
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
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
