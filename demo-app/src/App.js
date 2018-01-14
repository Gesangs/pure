import React, { Component } from "react";
import { scrollDisplay } from './utils/pullToRefresh'
import WeiboList from "./component/weiboList";
import Scroll from "./containers/scroll"
import Head from "./component/Head"
import Foot from "./component/Foot"

class App extends Component {
  constructor() {
    super();
    this.state = {
      height: 3000,
    }
  }
  componentDidMount() {
    scrollDisplay();
  }
  handleUpEvent(){
    console.log("ssss");
  }
  handleBottomEvent(){
    this.setState({
      height: this.state.height + 3000,
    })
  }
  render() {
    return (
      <div style={{marginTop: 50}}>
        <Head />
        {/* <Scroll onPullDownRefresh={this.handleUpEvent.bind(this)}
                onReachBottom={this.handleBottomEvent.bind(this)}>
        <div style={{width: '100%', height: this.state.height}}></div>
        </Scroll> */}
        <WeiboList />
        <Foot />
      </div>
    );
  }
}

export default App;
