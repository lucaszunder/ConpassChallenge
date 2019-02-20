import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "reactstrap";
import HotSpots from "./HotSpots";
import { formatHotspot } from "../utils/api";
import { handleAddHotspot } from "../actions/hotspots";

class App extends Component {
  state = {
    editMode: false
  };

  handleChange = e => {
    {
      this.state.editMode
        ? this.setState({ editMode: false })
        : this.setState({ editMode: true });
    }
  };

  handleClick = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    let data = formatHotspot(e.clientY, e.clientX);
    dispatch(handleAddHotspot(data));
    this.handleChange();
  };

  handleover = e => {
    var x = e.clientX,
      y = e.clientY,
      element = document.elementFromPoint(x, y);
    element.style.backgroundColor = "#ff6666";
    element.style.border = "2px, solid, black";
    element.style.borderStyle = "solid";
    element.style.borderWidth = "2px";
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
            <div className="container App-body">
              <div>
                <div>
                  <h1>Select a Place to your Hotspot</h1>
                </div>
                <div />
              </div>
            </div>
            <Footer />
          </div>
        ) : (
          <div className="App">
            <Header />
            <div className="container App-body">
              <div>
                <Button onClick={this.handleChange}>Create Hotspot</Button>
              </div>
              <div>
                <h1>List of Hotspots </h1>
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
