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
import Login from './Login.jsx';

const { Header, Content, Footer } = Layout;

class App extends React.Component {

  state = {

  }

  componentDidMount() {
  };


  render() {
    let containerStyle = {
      display: 'flex',
      'flexDirection': 'row',
      'alignItems': 'baseline',
    }
    let loginStyle = {
      'marginLeft': 'auto',
      "padding": '0 20px 0 20px'
    }
    let linkStyle = {
      color: 'black'
    }

    return (
      <div> 
        <Router>
        <Layout className="layout">
          <Header style={{ background: '#ece9e6', textAlign: 'left'}}>
            <div style={containerStyle}>
              <Link to="/"> <h2>  Buzzer.me </h2> </Link> 
               <Button size="small" style={loginStyle}> <Link to="/login" style={linkStyle}> Log In/Sign Up </Link> </Button> 
            </div>
          </Header>
          
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/room/" component={Room} />
              <Route path="/login" component={Login} />
            </div>
          
        </Layout>
        </Router>
      </div>
    )
  }
}

export default App;