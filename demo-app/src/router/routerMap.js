import React, { Component } from "react";
import { Route } from 'react-keeper';


import NotFound from '../containers/404'
import App from "../containers/index"
import UserPage from "../containers/UserPage"

class RouterMap extends Component {
    render() {
        return(
            <div>
                <Route cache='root' index component={ App } path="/" />
                <Route miss component={ NotFound } path="*" />  
                <Route component={ UserPage } path="/user" />
            </div>
        )
    }
}

export default RouterMap;