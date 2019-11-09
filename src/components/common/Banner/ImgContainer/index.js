
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
        imgWidth: PropTypes.number.isRequired, //单张图片宽度
        imgHeight: PropTypes.number.isRequired, //单张图片高度
        duration: PropTypes.number.isRequired //在多长时间内完成动画切换
    }


    
    containerRef=(el)=>{
        this.div = el
    }
    //计时间的间隔时间
    tick = 16

    /**
     * 
     * @param {*} index //图片下标从0开始
     */
    switchTo (index){
        if(index < 0){
            index = 0;
        }else if(index > this.props.imgSrcs.length - 1){
            index = this.props.imgSrcs.length - 1;
        }
        //1. 根据index 
        const targetLeft = -index * this.props.imgWidth;
        //2.  得到当前的marginLeft
        let currLeft = parseFloat(getComputedStyle(this.div).marginLeft)
        //3.  计算运动的次数
        const times = Math.ceil( this.props.duration / this.tick)
        let curTimes = 0;
        //4. 计算每次运动的距离
        const totalDis = targetLeft - currLeft; //总距离
        const dis = totalDis / times; //每次运动的距离

        console.log(index);

        clearInterval(this.timer);

        this.timer =  setInterval(()=>{
            curTimes ++;
            currLeft += dis;

            this.div.style.marginLeft = currLeft + 'px';
            if(curTimes === times){
                this.div.style.marginLeft = targetLeft + 'px'
                clearInterval(this.timer)
            }

        },this.tick)
        
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
