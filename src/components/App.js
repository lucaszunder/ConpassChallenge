import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import { Footer } from "./Footer";
import HotSpots from "./HotSpots";
import { formatHotspot } from "../utils/utils";
import { handleAddHotspot } from "../actions/hotspots";

class App extends Component {
  state = {
    editMode: false
  };

  handleChange = () => {
    this.state.editMode
      ? this.setState({ editMode: false })
      : this.setState({ editMode: true });
  };

  handleClick = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    let data = formatHotspot(e.clientY - 10, e.clientX - 10);
    console.log(e.clientX, e.clientY);
    dispatch(handleAddHotspot(data));
    this.handleChange();
  };

  handleover = e => {
    var x = e.clientX,
      y = e.clientY,
      element = document.elementFromPoint(x, y);
    element.style.backgroundColor = "#FFAE50";
    element.style.transitionDuration = "0.4s";
    element.onmouseout = () => {
      element.removeAttribute("style");
    };
  };

  render() {
    const { editMode } = this.state;
    return (
      <Fragment>
        {editMode ? (
          <div
            className="App"
            onClick={this.handleClick}
            onMouseOver={this.handleover}
          >
            <Header />
            <div className="wrapper">
              <div className="title">
                <h1>Select a place to your new Hotspot</h1>
              </div>
              <div>
                <hr />

                <HotSpots />
              </div>
            </div>
            <Footer />
          </div>
        ) : (
          <div className="App">
            <Header />
            <div className="wrapper">
              <div className="title">
                <button className="botao" onClick={this.handleChange}>
                  Create Hotspot
                </button>
                <h1>List of Hotspots</h1>
              </div>
              <div>
                <hr />
                <HotSpots />
              </div>
            </div>
            <Footer />
          </div>
        )}
      </Fragment>
    );
  }
}

export default connect()(App);
