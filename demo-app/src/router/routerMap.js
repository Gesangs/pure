import React, { Component } from "react";
import { HashRouter,Route } from "react-keeper";

import Index from "../containers/Index/index";
import Home from "../containers/Home/index"
import Massage from "../containers/Massage/index"
import AtMeComment from "../containers/Massage/at_me_comment"
import AtMeWeibo from "../containers/Massage/at_me_weibo"
import CommentByMe from "../containers/Massage/comment_by_me"
import CommentToMe from "../containers/Massage/comment_to_me"

import UserPage from "../containers/UserPage/index";
import Detail from "../containers/Detail/index";
import Post from "../component/postPage/post";
import NotFound from "../containers/404";

class RouterMap extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <HashRouter>
        <div>
          <Route cache="root" component={Index} path="/">
            <Route index cache component={Home} />
            <Route cache component={Massage} path="/massage">
              <Route index component={AtMeComment} path="/at_me_comment" />
              <Route component={AtMeWeibo} path="/at_me_weibo" />
              <Route component={CommentByMe} path="/comment_by_me" />
              <Route component={CommentToMe} path="/comment_to_me" />
            </Route>
          </Route>
          <Route cache component={UserPage} path="/user/:id" />
          <Route cache component={Detail} path="/detail/:id" />
          <Route component={Post} path="/post" />
          <Route miss component={NotFound} path="/NotFound" />
        </div>
      </HashRouter>
    );
  }
}

export default RouterMap;
