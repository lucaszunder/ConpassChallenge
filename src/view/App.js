import React, { Component } from 'react';
import {Header} from '../components/Header'
import {Button} from 'react-materialize'
import './App.css';

class App extends Component {
  state={
    coord: [] 
  }

  handlechange =(e) =>{
   this.state.coord.push(e.clientX, e.clientY)
   
    console.log(e.clientX, e.clientY)
    console.log(this.state.coord)
  }


  render() {
    return (
      <div className="App" onClick={this.handlechange}>
        <Header/>
        <div><p>{this.state.oi}</p></div>
        <hr/>
        <div className='container App-body'>
          <div>
            <Button>
              Create Hotspot
            </Button>
          </div>
          <div>
            <ul>
              <h1>List of Hotspots</h1>
              <li>
                HotSpot
                <a class="btn-floating pulse red"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
