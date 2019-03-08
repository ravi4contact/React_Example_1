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
    return (
		<div >
        <label>
          Name:
          <input id ="t2" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
		</div>
        
    );
  }
}