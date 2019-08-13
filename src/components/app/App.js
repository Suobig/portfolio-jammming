import React from "react";
import "./App.css";
import SearchBar from "../search_bar/SearchBar";
import SearchResults from "../search_results/SearchResults";
import Playlist from "../playlist/Playlist";
import * as _array from 'lodash/array';

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
          isAdded: true,
          addTrack: this.addTrack.bind(this),
        }
      ],
      playlistName: "My Playlist",
      playlistTracks: [
        {
          id: 2,
          name: "Umbrella",
          artist: "Rihanna",
          album: "Good Girl Gone Bad"
        }
      ]
    };
  }

  addTrack(track) {
    const newTrack = { ...track };
    delete newTrack.addTrack;
    newTrack.removeTrack = this.removeTrack.bind(this);
    newTrack.isAdded = true;
    
  }

  removeFromPlaylist(track) {
    const newPlaylist = [...this.state.playlistTracks];
    const index = _array.findIndex(newPlaylist, { 'id': track.id })
    _array.pullAt(newPlaylist, index);

    this.setState({
      playlistTracks: newPlaylist,
    })
  }

  removeFromSearchResults(track) {

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
              playlist={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
