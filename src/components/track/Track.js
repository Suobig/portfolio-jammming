import React from "react";
import "./Track.css";

class Track extends React.Component {
  renderAction() {
    const track = this.props.track;
    if (track.isAdded) {
      return <button onClick={() => track.removeFromPlaylist(track)} className="Track-action">–</button>;
    } else {
      return <button onClick={() => track.addToPlaylist(track)} className="Track-action">+</button>;
    }
    // if (track.isAdded) {
    //   return <button className="Track-action">–</button>;
    // } else {
    //   return <button className="Track-action">+</button>;
    // }
  }

  render() {
    const track = this.props.track;
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p>
            {track.artist} | {track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
