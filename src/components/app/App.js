import React from "react";
import "./App.css";
import SearchBar from "../search_bar/SearchBar";
import SearchResults from "../search_results/SearchResults";
import Playlist from "../playlist/Playlist";
import Spotify from "../../util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeSearchText = this.changeSearchText.bind(this);
    this.search = this.search.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.state = {
      searchText: "",
      searchResults: [],
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

  updateSearchResults(track) {
    return this.state.searchResults.map(item => item.id === track.id ? track : item);
  }

  savePlaylist() {
    const token = Spotify.getAccessToken();
    console.log({token});

    
    const trackUris = this.state.playlist.map(track => track.uri);
    return trackUris;
  }

  changeSearchText(text) {
    this.setState({
      searchText: text,
    });
  }

  async search() {
    const searchText = this.state.searchText;
    console.log({searchText});
    
    const token = Spotify.getAccessToken();
    if (!token) return;

    const results = await Spotify.search(token, searchText);
    const jsonResults = await results.json();
    const trackItems = jsonResults.tracks.items;

    if (!trackItems) {
      this.setState({
        searchResults: [],
      })
    }   

    const searchResults = trackItems.map(track => {
      const artists = track.album.artists.map(artist => artist.name).join(', ');
      return {
        id: track.id,
        name: track.name,
        artist: artists,
        album: track.album.name,
        isAdded: false,
        uri: track.uri,
        addToPlaylist: this.addTrackToPlaylist.bind(this),
        removeFromPlaylist: this.removeTrackFromPlaylist.bind(this),
      }
    });

    this.setState({
      searchResults: searchResults,
    })
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar
            onSearchTextChange={this.changeSearchText}
            onSearch={this.search}
          />
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
