import React from 'react';
import { Layout, Row, Col, Input, Icon, Button, Form, Checkbox } from 'antd';
import axios from 'axios';
const FormItem = Form.Item;
const { Header, Content, Footer } = Layout;

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  componentDidMount() {

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


	render() {
    let inputPrefixStyle = { color: 'rgba(0,0,0,.25)' };
    let inputStyle = {width: '50%', clear: 'right'};
    let buttonStyle = {marginTop: '30px', marginBottom: '20px'};
    let layoutStyle = {
      background: '#ece9e6', /* fallback for old browsers */
      background: '-webkit-linear-gradient(to bottom, #ece9e6, #ffffff)', /* Chrome 10-25, Safari 5.1-6 */
      background: 'linear-gradient(to bottom, #ece9e6, #ffffff)'
      // background: '#c9d6ff', /* fallback for old browsers */
      // background: '-webkit-linear-gradient(to bottom, #c9d6ff, #e2e2e2)', /* Chrome 10-25, Safari 5.1-6 */
      // background: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    let container = {
      padding: '16px'
    }
    let labelStyle = {
      clear: 'both'
    }


		return (

		  <Layout className="layout" style={layoutStyle}>
        <Content style={{ padding: '20px' }}>
          <div style={{ padding: 12, minHeight: '70vh' }}>
            <Row>
              <Col span={12} offset={6} style={{ textAlign: 'center', paddingTop: '30px' }}>
                  <div style={container}>
                    <label><b>Username</b></label>
                    <br/>
                    <Input type="text" placeholder="Enter Username" name="username" style={inputStyle}/>
                    <br/>
                    <br/>
                    <label><b>Password</b></label>
                    <br/>
                    <Input type="password" placeholder="Enter Password" name="password" style={inputStyle}/> 
                    <br/>
                    <br/>
                    <Button type="submit">Login</Button>

                  </div>
  


              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    )
	}
}

export default Login;