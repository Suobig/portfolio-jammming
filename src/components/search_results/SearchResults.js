import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./SearchResults.css";
import TrackList from '../track_list/TrackList';

class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList list={this.props.results}/>
      </div>
    );
  }
}

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
}

export default SearchResults;
