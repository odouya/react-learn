import React, { Component } from 'react'
import Banner from "./index"
import src1 from "./img/1.jpeg"
import src2 from "./img/2.jpg"
import src3 from "./img/3.jpeg"
import src4 from "./img/4.jpeg"
import src5 from "./img/5.jpg"




export default class Test extends Component {
    render() {
        return (
            <div 
                className="container"
            >
                <Banner imgSrcs={[src1, src2, src3, src4, src5]} 
                duration = {1000} 
                autoDuration = {3000}/>
            </div>
        )
    }
}
