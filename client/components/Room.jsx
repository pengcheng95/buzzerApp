import React from 'react';
import { Layout, Row, Col, Input, Icon, Button, notification } from 'antd';
import { io } from '../sockets/config.jsx';

const { Header, Content, Footer } = Layout;

class Room extends React.Component {

  state = {
    roomName: this.props.location.pathname.substring(6),
    name: ''

  }

  componentDidMount() {
    io.buzzed((data) => {
      notification['warning']({
        message: `${data} buzzed`,
        description: 'you lose',
        style: {
          width: 300,
          marginLeft: 100
        },
      })
    })

  }

  handleChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    this.setState({
      [name]: val
    }, () => {
      console.log(this.state)
    })
  }

  buzz = (e) => {
    let data = {};
    data.username = this.state.name;
    data.roomName = this.state.roomName;
    io.buzz(data);
  }



	render() {
    let inputPrefixStyle = { color: 'rgba(0,0,0,.25)' };
    let inputStyle = {width: '60%', clear: 'right'};
    let buzzStyle = {width: '90%', height: '70px', marginTop: '50px' }

    return (

      <div>
       <Layout className="layout">
          <Content style={{ padding: '20px' }}>
            <div style={{ background: '#fff', padding: 12, minHeight: '70vh' }}>
              <Row>
                <Col span={12} offset={6} style={{ textAlign: 'center', paddingTop: '30px' }}>
                  <h3> {this.state.roomName} </h3>
                  <Input 
                    placeholder="Enter your username"
                    size="small"
                    prefix={<Icon type="user" style={inputPrefixStyle}/>}
                    style={inputStyle}
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                  <br/>

                  <Button style={buzzStyle} value="large" type="primary" onClick={this.buzz}>Buzz</Button>


                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </div>
    )

	}
}

export default Room;