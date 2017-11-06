import React from 'react'
import {Button, message} from 'antd'
export default class UnknowSite extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    click(evt){
        message.info('congrats! message is showing with one call')
    }
    render(){
        return (
            <div><Button type='primary' onClick={this.click}>Click vào đây để show 1 message</Button></div>
        )
    }
}