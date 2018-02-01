import React, { Component } from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Control } from "react-keeper";
import ImageView from 'react-imageview'
import 'react-imageview/dist/react-imageview.min.css'

class ImageZoom extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            imglist: [],
            current: Control.state.current
        }
    }
    componentWillMount(){
        const List = [];
        Control.state.imagelist.map((item) =>{
            let imgurl = item.thumbnail_pic.replace("thumbnail", "large")
            List.push(imgurl);
        })
        this.setState({
            imglist: List
        })
    }
    close() {
        Control.go(-1);
        setTimeout(() => {
        document.getElementsByClassName("Index")[0].style.display = "block";
        }, 100);
    }
    render() {
        const {imglist, current} = this.state
        console.log(this.state)
        return (
            <ImageView imagelist={imglist} current={current} close={this.close.bind(this)} />
        )
    }
    
}

export default ImageZoom;