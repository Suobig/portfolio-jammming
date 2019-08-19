import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";

class SearchBar extends Component {
  handleSearchTextChange(e) {
    const searchText = e.target.value;
    this.props.onSearchTextChange(searchText);
  }

  render() {
    return (
      <div className="SearchBar">
        <input 
          placeholder="Enter A Song, Album, or Artist" 
          onChange={this.handleSearchTextChange.bind(this)}
        />
        <button 
          className="SearchButton"
          onClick={this.props.onSearch}
        >
          SEARCH
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default SearchBar;
