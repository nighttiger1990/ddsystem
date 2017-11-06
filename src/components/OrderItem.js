import React from 'react'
import { Button, Icon, Row, Col, Card, TreeSelect, Select, Input, DatePicker, message } from 'antd'
import './OrderItem.css'
import Label from './Label'
import {GETCORSRequest} from '../helpers/CORSRequest'

export default class OrderItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id_order: props.location && props.location.state ? props.location.state.id : null
        }
        this.handle_back_click = this.handle_back_click.bind(this)
    }
    componentWillMount() {
        
        
    }
    handle_back_click(){
        message.info('Oops! This message need atleast 2 call to show; (first and after last popup gone in a time (i think duration props))')
    }
    render() {
        let filterOption = (input, option) =>{
            return option.props.children.toLowerCase().indexOf(input.toLowerCase()) > -1
        }
        const btn_right_props = {
            float: 'right'
        }
        const select_props = {
            showSearch:true,
            filterOption: filterOption,
            optionFilterProp: "children",
            style: {
                width: '100%'
            }
        }
        return (
            <div className={this.props.className ? this.props.className : 'OrderItem'}>
                <Row>
                    <Col span={24}>
                        <Button type='primary' title='Back' onClick={this.handle_back_click} ><Icon type='rollback' /></Button>
                        <Button style={btn_right_props} type='primary' title='Delete'><Icon type='delete' /></Button>
                        <Button style={btn_right_props} type='primary' title='Download as Text'><Icon type='download' /></Button>
                        <Button style={btn_right_props} type='primary' title='Update'><Icon type='save' /></Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Card title={(<p><Icon type='global' title='General' /> General</p>)}>
                            <Col span={6}><Label>SP</Label></Col>
                            <Col span={6}><TreeSelect style={{width:'100%'}}/></Col>
                            <Col span={6}><Label>KH/KT</Label></Col>
                            <Col span={6}>
                                <Select {...select_props}  placeholder='Kế hoạch / Thực tế'>
                                    <Select.Option value='0'>Kế hoạch</Select.Option>
                                    <Select.Option value='1'>Thực tế</Select.Option>
                                </Select>
                            </Col>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Card title={(<p><Icon type='global' title='F/NF' /> F/NF</p>)}>
                            <section title='Finance' >
                                <legend>Finance</legend>
                                <Row>
                                    <Col span={8}><Label>HD</Label></Col>
                                    <Col span={16}><TreeSelect style={{width:'100%'}}/></Col>
                                </Row>
                                <Row>
                                    <Col span={8}><Label>CDT</Label></Col>
                                    <Col span={16}><TreeSelect style={{width:'100%'}}/></Col>
                                </Row>
                                <Row>
                                    <Col span={8}><Label>PT</Label></Col>
                                    <Col span={16}><TreeSelect style={{width:'100%'}}/></Col>
                                </Row>
                            </section>
                            <section title='Non-Finance'>
                                <legend>Non-Finance</legend>
                                <Row>
                                    <Col span={8}><Label>RE</Label></Col>
                                    <Col span={16}><TreeSelect style={{width:'100%'}}/></Col>
                                </Row>
                                <Row>
                                    <Col span={8}><Label>SE</Label></Col>
                                    <Col span={16}><TreeSelect style={{width:'100%'}}/></Col>
                                </Row>
                                <Row>
                                    <Col span={8}><Label>OP</Label></Col>
                                    <Col span={16}><TreeSelect style={{width:'100%'}}/></Col>
                                </Row>
                                <Row>
                                    <Col span={8}><Label>CV</Label></Col>
                                    <Col span={16}><TreeSelect style={{width:'100%'}}/></Col>
                                </Row>
                                <Row>
                                    <Col span={8}><Label>CX</Label></Col>
                                    <Col span={16}><TreeSelect style={{width:'100%'}}/></Col>
                                </Row>
                            </section>
                        </Card></Col>
                    <Col span={8}>
                        <Card title={(<p><Icon type='global' title='Angel' /> Angel</p>)}>
                            <section title='Chung'>
                                <legend>Chung</legend>
                                <Row>
                                    <Col span={8}><Label>KL/KN</Label></Col>
                                    <Col span={16}><Input placeholder='Kỳ lớn/Kỳ nhỏ'/></Col>
                                </Row>
                                <Row>
                                    <Col span={8}><Label>CDC</Label></Col>
                                    <Col span={16}>
                                        <Select {...select_props} placeholder='Có dùng còn'>
                                            <Select.Option value='0'>Có</Select.Option>
                                            <Select.Option value='1'>Dùng</Select.Option>
                                            <Select.Option value='2'>Còn</Select.Option>
                                        </Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}><Label>DPK</Label></Col>
                                    <Col span={16}>
                                        <Select {...select_props} placeholder='Đầu phát cuối'>
                                            <Select.Option value='0'>Đầu</Select.Option>
                                            <Select.Option value='1'>Phát</Select.Option>
                                            <Select.Option value='2'>Cuối</Select.Option>
                                        </Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}><Label>Show</Label></Col>
                                    <Col span={16}><Input placeholder='Show cho ai'/></Col>
                                </Row>
                            </section>
                            <section title='Kế hoạch'>
                                <legend>Kế hoạch</legend>
                                <Row>
                                    <Col span={8}><Label>TOT/TOA</Label></Col>
                                    <Col span={16}>
                                        <Select {...select_props} placeholder='TOT / TOA'>
                                            <Select.Option value='0'>TOT</Select.Option>
                                            <Select.Option value='1'>TOA</Select.Option>
                                        </Select>
                                    </Col>
                                </Row>
                            </section>
                        </Card></Col>
                    <Col span={8}>
                        <Card title={(<p><Icon type='global' title='Shot' /> Shot</p>)}>
                            <section title='Kế hoạch'>
                                <legend>Chung</legend>
                                <Row>
                                    <Col span={8}><Label>Cut-off</Label></Col>
                                    <Col span={16}><DatePicker style={{width:'100%'}}/></Col>
                                </Row>
                                <Row>
                                    <Col span={8}><Label>Update</Label></Col>
                                    <Col span={16}><DatePicker style={{width:'100%'}}/></Col>
                                </Row>
                                <Row>
                                    <Col span={8}><Label>Lang</Label></Col>
                                    <Col span={16}>
                                        <Select {...select_props} placeholder='Ngôn ngữ'>
                                            <Select.Option value='0'>English</Select.Option>
                                            <Select.Option value='1'>Indonesia</Select.Option>
                                            <Select.Option value='2'>Philippines</Select.Option>
                                            <Select.Option value='3'>ThaiLand</Select.Option>
                                            <Select.Option value='4'>Việt Nam</Select.Option>
                                        </Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}><Label>Unit</Label></Col>
                                    <Col span={16}>
                                        <Select {...select_props} placeholder='Đơn vị tính'>
                                            <Select.Option value='0'>abc</Select.Option>
                                            <Select.Option value='1'>Number</Select.Option>
                                            <Select.Option value='2'>Person</Select.Option>
                                            <Select.Option value='3'>USD / kUSD / mUSD</Select.Option>
                                            <Select.Option value='4'>VND / mVND / bVND</Select.Option>
                                        </Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}><Label>Source</Label></Col>
                                    <Col span={16}>
                                        <Select {...select_props} placeholder='Data source'>
                                            <Select.Option value='0'>DDS1</Select.Option>
                                            <Select.Option value='1'>DDS2</Select.Option>
                                        </Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}><Label>Rate</Label></Col>
                                    <Col span={16}><Input placeholder='Tỷ giá'/></Col>
                                </Row>
                            </section>
                            <section title='Kế hoạch'>
                                <legend>Kế hoạch</legend>
                                <Row>
                                    <Col span={8}><Label>Scenario</Label></Col>
                                    <Col span={16}><Input placeholder='Scenario'/></Col>
                                </Row>
                                <Row>
                                    <Col span={8}><Label>BU/TD</Label></Col>
                                    <Col span={16}>
                                        <Select {...select_props} placeholder='Bottom up / Top down'>
                                            <Select.Option value='0'>Bottom Up</Select.Option>
                                            <Select.Option value='1'>Top Down</Select.Option>
                                        </Select>
                                    </Col>
                                </Row>
                            </section>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}