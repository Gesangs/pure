import React, { Component } from "react";
import { HashRouter,Route } from "react-keeper";

import Index from "../containers/index";
import UserPage from "../containers/UserPage/index";
import NotFound from "../containers/404";
import Detail from "../containers/Detail/index";
import Post from "../component/postPage/post";

class RouterMap extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <HashRouter>
          <div>
        <Route cache="root" component={Index} path="/" />
        <Route component={UserPage} path="/user/:id" />
        <Route component={Detail} path="/detail/:id" />
        <Route component={Post} path="/post" />
        <Route miss component={NotFound} path="/NotFound" />
        </div>
      </HashRouter>
    );
  }
}

export default RouterMap;
