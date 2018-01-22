import React, { Component } from "react";
import { Route } from "react-router-dom";

import Index from "../containers/index";
import UserPage from "../containers/UserPage";
import NotFound from "../containers/404";
import Detail from "../component/Comment/Comment";

class RouterMap extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Route exact component={Index} path="/" />
        <Route exact component={UserPage} path="/user/:id" />
        <Route component={Detail} path="/detail/:id" />
        <Route miss component={NotFound} path="/NotFound" />
      </div>
    );
  }
}

export default RouterMap;
