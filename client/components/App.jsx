import React from 'react';
import { io } from '../sockets/config.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import Home from './Home.jsx';
import Room from './Room.jsx';

const { Header, Content, Footer } = Layout;

class App extends React.Component {

  state = {};

  componentDidMount() {
  };


  render() {
    return (
      <div> 
        <Layout className="layout">
          <Header style={{ background: '#fff', textAlign: 'center'}}>
            Buzzer Me
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