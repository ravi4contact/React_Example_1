import React from 'react';
import ReactDOM from 'react-dom';

import Txt_1 from './Txt_1';
import Txt_2 from './Txt_2';


 
 
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
 componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!'+"__________"+JSON.stringify(newProps));
   }
    componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
  handleSubmit(event) {
	this.setState({value: 'Button clicked'});


//*******************/
  
  //ReactDOM.unmountComponentAtNode(document.getElementById('root'));

  
//*******************/


    //alert('A name was submitted: ' + this.state.value+"____"+document.getElementById('t1').value+"____"+document.getElementById('t2').value);
	alert(this.props.value_1+"_______props_________"+this.props.value_2);
    event.preventDefault();
  }
  
  componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

  render() {
    return (
      
        <div>
        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
		</div>
      
    );
  }
}

