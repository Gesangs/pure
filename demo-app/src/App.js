import React, { Component } from 'react';
import { Logout } from './api/user'
import WeiboList from './weiboList'

class App extends Component {

  constructor() {
    super()
  }
  

  _logout() {
    Logout(this.state.access_token).then((res) => {
      console.log(res);
    })
    localStorage.removeItem('access_token')
  }

  render() {
    return (
      <div>
          <WeiboList />
      </div>  
    );
  }
}

export default App;
