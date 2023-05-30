import React, { Component } from "react";
import "./search-box.css";

export default class SearchBox extends Component {
  render() {
    const { onChangeHandle, placeHolder, className } = this.props;
    return (
      <div>
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeHolder}
          onChange={onChangeHandle}
        />
      </div>
    );
  }
}
