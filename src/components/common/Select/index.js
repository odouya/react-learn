
import React, { Component } from 'react'
import  PropTypes from "prop-types"
import types from "../../../utils/commonTypes"
import DataGroupWrapper from "../hoc/withDataGroup"
import withDataGroup from '../hoc/withDataGroup';


class Option extends Component{

    static propTypes = {
        info:types.singleData
    }

    render (){

        return <option value ={this.props.info.value}>
            {this.props.info.text}
        </option>
    }

}

const OptGroup = withDataGroup(Option)

class Select extends Component{

    static propTypes ={
        name:PropTypes.string.isRequired,
        value:PropTypes.string.isRequired,
        onChange:PropTypes.func
    }

    handleChange = e=>{
        this.props.onChange && this.props.onChange(e.target.value)
    }

    render(){
        return <select name= {this.props.name} 
                valeu = {this.props.value}
                onChange = {this.handleChange}
            >
            <OptGroup {...this.props}></OptGroup>
        </select>
    }
}


export default withDataGroup(Select);