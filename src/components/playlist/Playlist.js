import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Playlist.css";
import TrackList from '../track_list/TrackList';

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={this.props.playlistName} />
        <TrackList list={this.props.playlist}/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

Playlist.propTypes = {
  playlistName: PropTypes.string,
  playlist: PropTypes.array.isRequired,
}

export default Playlist;
