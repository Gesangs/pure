import React, { Component } from "react";
import { HashRouter,Route } from "react-keeper";

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
      <HashRouter>
          <div>
        <Route cache="parent" component={Index} path="/" />
        <Route component={UserPage} path="/user/:id" />
        <Route component={Detail} path="/detail/:id" />
        <Route miss component={NotFound} path="/NotFound" />
        </div>
      </HashRouter>
    );
  }
}

export default RouterMap;
