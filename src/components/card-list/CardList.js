import React, { Component } from "react";
import "./card-list.css";
import CardListItem from "../card-list-item/CardListItem";

class CardList extends Component {
  render() {
    console.log("render");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <CardListItem monster={monster} key={monster.id} />
        ))}
      </div>
    );
  }
}
export default CardList;
