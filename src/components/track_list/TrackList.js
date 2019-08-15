import React from "react";
import PropTypes from 'prop-types';
import "./TrackList.css";
import Track from '../track/Track';

class TrackList extends React.Component {
  render() {
    const tracks = this.props.list.map(track => <Track key={track.id} track={track} />);
    return (
      <div className="TrackList">
        {tracks}
      </div>
    );
  }
}

TrackList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default TrackList;
