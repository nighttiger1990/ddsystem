import React from 'react'

export default class Label extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        let style = this.props.style ? this.props.style : { marginLeft: '15px' };
        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}
