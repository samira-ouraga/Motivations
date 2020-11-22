import React from 'react';
import './Showquotes.css';

class Showquotes extends React.Component {
    constructor(props) {
        super(props);

      }


    render() {
      return (
      <div className='container'>
        <p> Click button to see new  quotes</p>
        <div className='quotes'>
          <h1> quotes here</h1>
          <button className='mybutton'> New quote</button>
        </div>
      </div>
      )
    }
  }

export default Showquotes;