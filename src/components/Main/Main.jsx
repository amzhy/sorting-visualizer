import React, { Component } from "react";
import Toolbar from "./Toolbar/ToolbarContainer.js"
import Body from "./Body/BodyContainer.js"
import "./Main.css"
import { Helmet } from 'react-helmet';

class Main extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <Toolbar />
        <Body />
      </div>
    )
  }
}

export default Main;
