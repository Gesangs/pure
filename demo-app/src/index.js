import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import { Key, access_token } from './config'
import axios from 'axios'
import registerServiceWorker from './registerServiceWorker';
if(!access_token) {
    window.location.href = `https://api.weibo.com/oauth2/authorize?client_id=${Key}&response_type=code&redirect_uri=http://127.0.0.1:3000`
}
const Code = window.location.href.split('=')[1];
if(Code) {
    _getShouquan()
}
function _getShouquan() {
      axios.get('/api/shouquan',{
        params: Code
      }).then((res) => {
        localStorage.setItem('access_token', JSON.parse(res.data).access_token)
      })
  }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

