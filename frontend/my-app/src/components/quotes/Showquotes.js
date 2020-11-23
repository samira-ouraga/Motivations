import React from 'react';
import './Showquotes.css';

class Showquotes extends React.Component {
  constructor(props) {
    super(props);
    this.displayQuotes = this.displayQuotes.bind(this);

    //this state will hold the result of randomly picking a quote
    this.state ={
      text:'',
      author:''
    }
  }
  //function to show what todo when button is clicked 
  displayQuotes= (props) =>{
    //go through props array
    //randomly pick one
    const selectedQuote = this.props.quotes[Math.floor(Math.random() * this.props.quotes.length)]

    //display what is picked by saving it into a state
    this.setState({
      text: selectedQuote.text, 
      author:selectedQuote.author
    })
  }


  render() {
    const {text,author} = this.state
    return (
    <div className='container'>
      <p> Click button to see new  quotes</p>
      <div className='quotes'>
        <h1>{text} </h1>
        <p>{author} </p>
        <button className='mybutton' onClick={this.displayQuotes}> New quote</button>
      </div>
    </div>
    )
  }
}

export default Showquotes;