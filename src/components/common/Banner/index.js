

import React, { Component } from 'react'
import "./index.css"
import PropTypes from "prop-types";
import ImgContainer from "./ImgContainer"
import SwitchArrow from "./SwitchArrow"
import SwitchDot from "./SwitchDot"


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

    timer = null;
    
    autoSwitch(){
        clearInterval(this.timer)
        this.timer = setInterval(()=>{
            var cur = this.state.curIndex;
            cur = (cur + 1) % this.props.imgSrcs.length;
            this.handleSwitch(cur);
        }, this.props.autoDuration)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    componentDidMount(){
        this.autoSwitch()
    }

    state = {
        curIndex: 0
    }

    imgContainerRef = (el)=>{
        //console.log(el);
        this.imgContainer = el;
        //console.log(this,el);
    }

    handleDotChange = (index)=> {
        this.handleSwitch(index);
    }

    handleSwitch(index){
        this.setState({
            curIndex:index
        })

       this.imgContainer.switchTo(index)
    }

    handleArrowChange=types => {

       var cur = this.state.curIndex;
       if(types === "left"){
           cur --;
           if(cur < 0){
               cur = this.props.imgSrcs.length - 1;
           }
       }else{
           cur ++;
           if(cur > this.props.imgSrcs.length - 1){
               cur = 0;
           }
       }
       this.handleSwitch(cur);
    }

    render() {
      
        return (
            <div 
            className="banner-container"
            style={{
                width: this.props.width,
                height: this.props.height
            }}
            onMouseEnter= {()=>{
                clearInterval(this.timer)
            }}
            onMouseLeave = {()=>{
               this.autoSwitch()
            }}
            >
               <ImgContainer 
                ref = {this.imgContainerRef}
                imgSrcs={this.props.imgSrcs} 
                imgWidth = {this.props.width}
                imgHeight = {this.props.height}
                duration = {this.props.duration}
               />
               <SwitchArrow
                onChange = {this.handleArrowChange}
               />
                <SwitchDot 
                    total = {this.props.imgSrcs.length}
                    curIndex = {this.state.curIndex}
                    onChange = {this.handleDotChange}
                />

            </div>
        )
    }
}
