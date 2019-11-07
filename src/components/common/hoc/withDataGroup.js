import React from 'react'
import PropTypes from 'prop-types'

export default function withDataGroup(Comp) {

    return class DataGroupWrapper extends React.Component {
        static defaultProps = {
            datas:[]
        }
        static propTypes ={
            datas: PropTypes.node
        }

        render(){
            return <>
            </>
        }
    }
}
