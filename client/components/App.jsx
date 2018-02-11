import React from 'react';
import { io } from '../sockets/config.jsx';

class App extends React.Component {

  state = {};

  componentDidMount() {
    io.updateButton(() => {
      console.log('recieved')
    })
  };

  buzzerClick = () => {
    io.sendPush('hello');
  }

  render() {
    return (
      <div> 
        <h1> React Working </h1>
        <button onClick={this.buzzerClick}> buzzer </button>
      </div>
    )
  }
}

export default App;