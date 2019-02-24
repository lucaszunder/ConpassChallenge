import React, { Component } from "react";
import { connect } from "react-redux";
import HotSpot from "./HotSpot";

class HotSpots extends Component {
  render() {
    return (
      <div>
        <ul className="list row">
          {this.props.hotspotsIds.map(id => (
            <li key={id}>
              <HotSpot id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ hotspots }) {
  return {
    hotspotsIds: Object.keys(hotspots)
  };
}
export default connect(mapStateToProps)(HotSpots);
