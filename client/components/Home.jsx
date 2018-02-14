import React from 'react';
import { Layout, Row, Col, Input, Icon, Button, notification } from 'antd';
import { io } from '../sockets/config.jsx';

const { Header, Content, Footer } = Layout;

class Home extends React.Component {

  state = {
    createRoom: '',
    joinRoom: ''
  }

  componentDidMount() {
    io.roomTaken(() => {
      notification['warning']({
        message: 'Room Name Taken',
        description: 'Input another name to create the room',
        style: {
          width: 300,
          marginLeft: 100
        },
      })
    })

    io.roomCreated((data) => {
      this.props.history.push(`room/${data}`);
    })

    io.joinedRoom((data) => {
      this.props.history.push(`room/${data}`);
    })

    io.roomNoExist(() => {
      notification['warning']({
        message: 'Room Name Does Not Exist',
        description: 'Check to see if you inputed the correct room name or create room.',
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

  createRoom = (e) => {
    io.createRoom(this.state.createRoom);
  }

  joinRoom = (e) => {
    io.joinRoom(this.state.joinRoom);
  }


	render() {
    let inputPrefixStyle = { color: 'rgba(0,0,0,.25)' };
    let inputStyle = {width: '90%', clear: 'right'};
    let buttonStyle = {marginTop: '30px', marginBottom: '20px'};
    let layoutStyle = {
      background: '#ece9e6', /* fallback for old browsers */
      background: '-webkit-linear-gradient(to bottom, #ece9e6, #ffffff)', /* Chrome 10-25, Safari 5.1-6 */
      background: 'linear-gradient(to bottom, #ece9e6, #ffffff)'
      // background: '#c9d6ff', /* fallback for old browsers */
      // background: '-webkit-linear-gradient(to bottom, #c9d6ff, #e2e2e2)', /* Chrome 10-25, Safari 5.1-6 */
      // background: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

		return (
		  <Layout className="layout" style={layoutStyle}>
        <Content style={{ padding: '20px' }}>
          <div style={{ padding: 12, minHeight: '70vh' }}>
            <Row>
              <Col span={12} offset={6} style={{ textAlign: 'center', paddingTop: '30px' }}>
                <h3> Create a Room </h3>
                <Input 
                  prefix={<Icon type="laptop" style={inputPrefixStyle}/>}
                  style={inputStyle}
                  name="createRoom"
                  value={this.state.createRoom}
                  onChange={this.handleChange}
                />
                <Button type="primary" style={buttonStyle} onClick={this.createRoom}> Create </Button>

                <h4 style={{marginTop: '5px', marginBottom: '15px'}}> - OR - </h4>

                <h3> Join a Room </h3>
                <Input 
                  prefix={<Icon type="laptop" style={inputPrefixStyle}/>}
                  style={inputStyle}
                  name="joinRoom"
                  value={this.state.joinRoom}
                  onChange={this.handleChange}
                />
                <Button type="primary" style={buttonStyle} onClick={this.joinRoom}> Join </Button>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    )
	}
}

export default Home;