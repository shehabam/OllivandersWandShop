import React, { Component } from "react";
import wands from "./wands";
import WandCards from "./wandCards";

class WandList extends Component {
  render() {
    const cards = wands.map((
      wand // <div>
    ) => (
      <div className="container">
        <div className="card">
          <img
            className="card-img-top"
            src={wand.imageUrl}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">{wand.core}</p>
            <p className="card-text">{wand.wood}</p>
            <p className="card-text">{wand.length}</p>
          </div>
        </div>
      </div>
    ));

    return <div>{cards}</div>;
  }
}
export default WandList;
