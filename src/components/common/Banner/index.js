

import React, { Component } from 'react'
import "./index.css"
import PropTypes from "prop-types";
import ImgContainer from "./ImgContainer"

export default class Banner extends Component {
    static defaultProps = {
        width: 520,
        height: 280,
        imgSrcs:[],
        autoDuration: 3000,
        duration: 500

    }

    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        imgSrcs:PropTypes.arrayOf(PropTypes.string).isRequired,
        autoDuration: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired

    }

    imgContainerRef = (el)=>{
        console.log(el);
        this.imgContainer = el;
        console.log(this,el);
    }

    handleSwitch = (index)=>{
       // this.imgContainer.switchTo(index)
    }

    render() {
      
        return (
            <div 
            className="banner-container"
            style={{
                width: this.props.width,
                height: this.props.height
            }
            }>
               <ImgContainer 
                ref = {this.imgContainerRef}
                imgSrcs={this.props.imgSrcs} 
                imgWidth = {this.props.width}
                imgHeight = {this.props.height}
               />
              <button
                onClick={this.handleSwitch(3)}
              >切换到第3张图片</button>
            </div>
        )
    }
}
