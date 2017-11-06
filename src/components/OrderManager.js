import React from 'react'
import SearchItem from './SearchItem'
import {Table,Button, Icon, Row, message} from 'antd'
// import {Redirect, NavLink} from 'react-router-dom'
import './OrderManager.css'
const columns = [
    {
        title: 'Action', key: 'operation', fixed: 'left', width: 120,
        render: (a,b,c) => {
            return (
            <Row>
                <Button type='primary' title='Sửa'><Icon type='edit' /></Button>
                <Button type='primary' title='Tải xuống'><Icon type='download' /></Button>
            </Row>)
        },
    },
    { title: 'Name', dataIndex: 'name', width: 150, },
    { title: 'Age', dataIndex: 'age', width: 150, },
    { title: 'Address', dataIndex: 'address', }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default class OrderManager extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            display_items: data,
            selectedRowKeys: [],
            selectedRowObjs: [],
        }
        this.handleCloneClick = this.handleCloneClick.bind(this)
        this.handleNewClick = this.handleNewClick.bind(this)
        this.onSelectChange = this.onSelectChange.bind(this)
    }
    handleNewClick(evt){
        let obj_url = {
            pathname: '/Home/Order/OrderItem/',
            state: {
              id: null
            }
        }
        this.props.history.push(obj_url)
    }
    handleCloneClick(evt){
        let selected_rows = this.state.selectedRowKeys;
        console.log(selected_rows)
        message.info('Tao thật sự không hiểu bị sao huhu')
    }
    onSelectChange(selectedRowKeys,selections){
        this.setState({ 
            selectedRowKeys: selectedRowKeys,
            selectedRowObjs: selections 
        });
    }
    render(){
        let rowSelection = {
            selectedRowKeys: this.state.selectedRowKeys,
            selections:this.state.selectedRowObjs,
            onChange: this.onSelectChange
        }
        return (
            <div className={this.props.className ? this.props.className : 'Order-Manager'}>
                <SearchItem style={{margin: '2px'}} />
                <Row>
                    <Button type='primary' title="Add new" onClick={this.handleNewClick}><Icon type='plus'/></Button>
                    {/* <Button type='primary'><Icon type='new'/></Button> */}
                    {/* <Button type='primary'><Icon type='clone'/></Button> */}
                    <Button type='primary' title='Clone Selected' onClick={this.handleCloneClick}><Icon type='copy'/></Button>
                </Row>
                <Table rowSelection={rowSelection} bordered={true} columns={columns} dataSource={this.state.display_items} pagination={{ pageSize: 50 }} scroll={{ y: 350 }} />
            </div>
        )
    }
}