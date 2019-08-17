import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Playlist.css";
import TrackList from '../track_list/TrackList';

class Playlist extends Component {
    
  handleNameChange(e) {
    const newName = e.target.value;
    this.props.onNameChange(newName);
  }

  handleNameClick(e) {
    e.target.select();
  }

  render() {
    return (
      <div className="Playlist">
        <input 
          defaultValue={this.props.playlistName}
          onChange={this.handleNameChange.bind(this)}
          onClick={this.handleNameClick}
        />
        <TrackList list={this.props.playlist}/>
        <button
          className="Playlist-save"
          onClick={this.props.onSave}
        >
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

Playlist.propTypes = {
  playlistName: PropTypes.string,
  playlist: PropTypes.array.isRequired,
  onNameChange: PropTypes.func,
  onSave: PropTypes.func,
}

export default Playlist;
