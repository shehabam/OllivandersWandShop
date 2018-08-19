import React, { Component } from "react";
import Wandlist from "./wandList";
class WandCards extends Component {
  render() {
    const wand = this.props.wand;
    return (
      <div className="card">
        <img className="card-img-top" src={wand.imagUrl} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">{wand.core}</p>
          <p className="card-text">{wand.wood}</p>
          <p className="card-text">{wand.length}</p>
        </div>
      </div>
    );
  }
}
export default WandCards;
