import React, { Component } from 'react'
import  PropTypes from "prop-types"
import types from "../../../utils/commonTypes"
import withDataGroup from '../hoc/withDataGroup';

class Radio extends Component{

    static propTypes = {
        name:PropTypes.string.isRequired,
        info:types.singleData.isRequired,
        value:PropTypes.string,
        onChange:PropTypes.func

    }
    handleChange = (e)=>{

        this.props.onChange && this.props.onChange(e.target.value)
    }

    render (){
        return <label key={this.props.info.value}>
            <input
                type="radio"
                name={this.props.name}
                value={this.props.info.value}
                checked={this.props.value === this.props.info.value}
                onChange={this.handleChange}

            />
            {this.props.info.text}
        </label>
    }

}

export default  withDataGroup(Radio);
