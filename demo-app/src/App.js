import React, { Component } from "react";
import { Logout } from "./api/user";
import WeiboList from "./weiboList";
import Head from "./Head"
import Foot from "./Foot"

class App extends Component {
  constructor() {
    super();
    
  }
  
  _logout() {
    Logout(this.state.access_token).then(res => {
      console.log(res);
    });
    localStorage.removeItem("access_token");
  }

  onScroll() {
    
  }
  render() {
    return (
      <div>
        <Foot />
        <Head />
        <WeiboList />
      </div>
    );
  }
}

export default App;
