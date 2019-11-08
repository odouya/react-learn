import React, { Component } from 'react'
import Modal from '.


export default class Test extends Component {
    state = {
        showModal : false
    }

    showModal=()=>{
        this.setState({
            showModal: true
        })
    }

    hideModal=()=>{
        this.setState({
            showModal:false
        });
    }



    render() {
        return (
            <div>
                <img  alt = '' src='http://b-ssl.duitang.com/uploads/item/201210/26/20121026223826_CzrmW.jpeg' />
                {     
                    this.state.showModal ? 
                    (<Modal onClose={this.hideModal}>
                            <h1>sdfasdfasdfsdfasdfds</h1>
                            <button onClick={this.hideModal}>关闭朦层</button>
                     </Modal>) : null
                }
                <button onClick={this.showModal}>显示朦层</button>
            </div>
            
        )
    }
}
 