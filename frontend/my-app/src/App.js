import React, { Component } from 'react';
import Showquotes from './components/quotes/Showquotes.js';


class App extends Component{
  constructor(){
    super()

    this.state = {
      quotes:[]
    }
  }

 
  componentDidMount(){
    fetch('https://type.fit/api/quotes')
     .then(response => response.json()
     .then(quotes => this.setState({quotes:quotes}))
     );
     
  }

  render(){
    const {quotes } = this.state;
    //console.log(quotes)
    return(
      <div className="App">
      <Showquotes quotes={quotes}/>
    </div>
    );
  }
}

export default App;
