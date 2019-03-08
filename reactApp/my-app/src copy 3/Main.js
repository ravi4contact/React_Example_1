import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

import Txt_1 from './Txt_1';
import Txt_2 from './Txt_2';
import Btn from './Btn';



Btn.propTypes = {
    value_1: PropTypes.string,
    value_2: PropTypes.number
};
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
    
  }
 
  componentDidMount() {

      $.ajax({
          url: 'http://www.mocky.io/v2/591596dc100000b9027595b1',
          dataType: 'json',
          cache: false,
          success: function(data) {
            this.setState({entries: data});
            this.render();
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
            console.log('fail');
          }.bind(this)
        });
    
   }
 
   getBookingdata = () => {
       return this.state.entries;
   
    }
  render() {
   

    return (
		<div>
    <Btn />
    <Txt_1 callbackFromParent={this.getBookingdata}/>
		<Txt_2 callbackFromParent={this.getBookingdata}/>
		
		</div >
      
    );
  }
}