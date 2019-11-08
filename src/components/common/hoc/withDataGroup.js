
import React from "react"
import Comp from "../CheckBoxGroup"
import types from "../../../utils/commonTypes"

export default function withDataGroup(Comp){
    return class DataGroupWrapper extends React.Component{
        static defaultProps = {
            datas:[]
        }

        static propTypes = {
            datas:types.groupDatas
        }

        render(){
            const comps = this.props.datas.map(it=><Comp key={it.value} info = {it} {...this.props}/>)
            return <>
                {comps}
            </>
        }

    }
}
