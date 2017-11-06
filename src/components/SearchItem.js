import React from 'react'
import {Input} from 'antd'

export default class SearchItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
        this.onSearch = this.onSearch.bind(this)
        
    }
    onSearch(evt,b,c){
        console.log('search')
    }
    render(){
        return (
            <div {...this.props} className={this.props.className ? this.props.className : 'Search-Item'}>
                <Input.Search placeholder='Nhập từ khoá để tìm kiếm' onSearch={this.onSearch} />
            </div>
        )
    }
}