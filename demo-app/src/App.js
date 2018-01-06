import React, { Component } from "react";
import { Logout } from "./api/user";
import { scrollDisplay } from './utils/pullToRefresh'
import WeiboList from "./component/weiboList";
import Scroll from "./containers/scroll"
import Head from "./component/Head"
import Foot from "./component/Foot"

class App extends Component {
  constructor() {
    super();
    
  }
  componentDidMount() {
    scrollDisplay();
  }
  
  _logout() {
    Logout(this.state.access_token).then(res => {
      console.log(res);
    });
    localStorage.removeItem("access_token");
  }
  handleEvent(){
    console.log("ssss");
  }
  render() {
    return (
      <div style={{marginTop: 50}}>
        <Head />
        <Scroll TouchEndEvent={this.handleEvent.bind(this)}>
        <div style={{width: '100%', height: 2000}}></div>
        </Scroll>
        {/* <WeiboList /> */}
        <Foot />
      </div>
    );
  }
}

export default App;
