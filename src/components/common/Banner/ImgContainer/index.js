
import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class ImgContainer extends Component {
    
    static defaultProps = {
        imgSrcs:[],
        imgWidth: 520,
        imgHeight: 280
    }


    static propTypes = {
        imgSrcs: PropTypes.arrayOf(PropTypes.string),
        imgWidth: PropTypes.number.isRequired,
        imgHeight: PropTypes.number.isRequired
    }
    
    containerRef=(el)=>{
        this.div = el
    }

    dd(d){
        console.log(d);
    }

    /**
     * 
     * @param {*} index //图片下标从0开始
     */
    switchTo = (el)=>{
        console.log(this.div,el)
    }
    
    render() {
        const imgs = this.props.imgSrcs.map((src,i) => <img src={src} key={i} alt=""/>)
        return (
            <div ref ={this.containerRef} style={{
                width: this.props.imgSrcs.length * this.props.imgWidth,
                height: this.props.imgHeight,
                float:"left"
            }}>
                {imgs}
            </div>
        ) 
    }
}
