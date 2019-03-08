import React from 'react';


 
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
	this.props.callbackFromParent(event.target.value);
  }
  

  render() {
    const numbers = [1, 2, 3, 4, 5.6];
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
 
    return (
		<div>
        <label>
          Name:
          <input id ="t1" type="text" value={this.state.value} onChange={this.handleChange} />
          <ol>{listItems}</ol>
        </label>
		</div>
        
    );
  }
}