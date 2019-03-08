import React from 'react';

 
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    
  }
 
  handleSubmit=(event) =>{
	  this.setState({value: 'Button clicked'});
  	alert("_______props_________");
    event.preventDefault();
  }
  render() {
     let letterStyle = {
        padding: 5,
        margin: 5,
        display: "inline-block"
      };
    return (
       
        <div>
        <div style={letterStyle}  onClick={this.handleSubmit}>&lt;</div>
        <div style={letterStyle}  onClick={this.handleSubmit}>&gt;</div>
		    </div>
      
    );
  }
}

