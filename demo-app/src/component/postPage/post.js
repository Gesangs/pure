import React, { Component } from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from "react-redux";
import { Control } from "react-keeper";

class Post extends Component{
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: "",
            textLength: 0
        }
    }
    handleChange(e) {
        this.setState({
            value:e.target.value,
        })
    }
    render() {
        const user = this.props.userinfo.userinfo;

        return(
            <div className="post">
                <div clasName="postHead">
                    <img src={user.head_pic} />
                    <span>{Control.state.title}</span>
                    <span>{user.name}</span>
                </div>
                <from>
                    <textarea 
                     value={this.state.value} 
                     onChange={this.handleChange.bind(this)}
                     defaultValue={Control.state.preText}  />
                </from>

                <div className="postFoot"></div>
            </div>
        )
    }

}


function mapStateToProps(state) {
    return {
      userinfo: state.userinfo
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Post)