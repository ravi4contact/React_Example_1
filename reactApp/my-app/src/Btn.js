import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

 
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '10',
      testMessage:'22'};
    
  }
 
  handleSubmit=(event) =>{
    this.setState({value: 'Button clicked'});
    event.preventDefault();
  }
  
  render() {
     let letterStyle = {
        padding: 5,
        margin: 5,
        display: "inline-block"
      };
      
 
      
      //_____________________________________________________________


      const Hello = ({ onClick,onCheck, message }) => {
      //this.changeStateVal(message.reducer1);
        return (
          
          <div>
            <h1>{ message.reducer1 }</h1>
             <h1>{ message.reducer2 }</h1>
            <button onClick={onClick}>Click</button>
            <button onClick={onCheck}>Check</button>
          </div>
        )
      }

      Hello.propTypes = {
        onClick: PropTypes.func.isRequired,
        onCheck: PropTypes.func.isRequired,
        message: PropTypes.object.isRequired
      }
      const mapStateToProps = (state, ownProps) => {
        return {
          message: state
        }
      }

      const mapDispatchToProps = (dispatch, ownProps) => {
        return {
          onClick: () => {
            dispatch({ type:"inc",payLoad:8 })
          },
          onCheck: () => {
            dispatch({ type:"dec",payLoad:81 })
          }
        }
      }

      const HelloWorld = connect(
        mapStateToProps,
        mapDispatchToProps
      )(Hello)

  //_____________________________________________________________
 
     
    return (
       
        <div>
        <div style={letterStyle}  onClick={this.handleSubmit}>&lt;</div>
        <div style={letterStyle}  onClick={this.handleSubmit}>&gt;</div>
        <HelloWorld/>
        </div>
      
    );
  }
}







