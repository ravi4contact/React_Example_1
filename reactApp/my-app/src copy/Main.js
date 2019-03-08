import React from 'react';
import Txt_1 from './Txt_1';
import Txt_2 from './Txt_2';
import Btn from './Btn';


import PropTypes from 'prop-types';

Btn.propTypes = {
    value_1: PropTypes.string,
    value_2: PropTypes.number
};
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value_1: 'defalut_1',value_2: 'defalut_2'};
    
  }
 
 	myCallback_1 = (dataFromChild) => {
        console.log("test_______1_____"+dataFromChild);
		this.setState({value_1: dataFromChild});
   
    }
	myCallback_2 = (dataFromChild) => {
        console.log("test_____2_______"+dataFromChild);
		this.setState({value_2: dataFromChild});
  
    }
 
 

  render() {
     let V1 = this.state.value_1;
     let V2 = Number(this.state.value_2);
    return (
		<div>
		<div>{this.state.value_1}__________{this.state.value_2}</div >
      	<Txt_1 callbackFromParent={this.myCallback_1}/>
		<Txt_2 callbackFromParent={this.myCallback_2}/>
		<Btn value_1 = {V1} value_2 = {V2}/>
		</div >
      
    );
  }
}