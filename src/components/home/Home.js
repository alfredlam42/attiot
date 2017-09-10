import React, { Component } from 'react';

// Components

// CSS
import './Home.css';

// Helpers

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: 'test state',
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    // get data

    // fetch('url')
    // .then(function(response){
    //   // what to do with data
    // })
  }

  _onChange(event){
    var newValue = event.target.value;

    this.setState({test: newValue});
  }

  render(){
    var inputValue = this.state.test;
    return (
      <div className="home">
        <div>
          <input type="text" onChange={this._onChange} value={inputValue} />
        </div>
        <div>This is the home page.</div>
        <div className="changingState">{inputValue}</div>
      </div>
    )
  }
}

export default Home;