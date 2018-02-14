import React from 'react';
import { io } from '../sockets/config.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Layout, Button } from 'antd';
import Home from './Home.jsx';
import Room from './Room.jsx';

const { Header, Content, Footer } = Layout;

class App extends React.Component {

  state = {};

  componentDidMount() {
  };


  render() {
    let containerStyle = {
      display: 'flex',
      'flex-direction': 'row',
      'align-items': 'baseline',
    }

    let loginStyle = {
      'margin-left': 'auto'

    }

    return (
      <div> 
        <Layout className="layout">
          <Header style={{ background: '#ece9e6', textAlign: 'left'}}>
            <div style={containerStyle}>
              <h2> Buzzer.me </h2>
              <Button size="small" style={loginStyle}>Log In</Button>

            </div>
          </Header>
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/room/" component={Room} />
            </div>
          </Router>
        </Layout>
      </div>
    )
  }
}

export default App;