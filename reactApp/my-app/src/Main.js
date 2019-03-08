import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

import Txt_1 from './Txt_1';
import Txt_2 from './Txt_2';
import Btn from './Btn';

//_____________________________________________________________


import { Provider, connect }from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
//import looger from 'redux-logger';
//import { createLogger } from 'redux-logger';
//import ReduxThunk from 'redux-thunk'
//import thunk from 'redux-thunk';




function componentDidMount() {
    console.log('I was triggered during componentDidMount');
  }

const reducer1 = function (state=6,action){
  if(action.type == "inc"){
    return state+action.payLoad;
  } else if(action.type == "dec"){
    return state-action.payLoad;
  }
  return state;
}

const reducer2 = function (state=5,action){
  if(action.type == "inc"){
    return state+action.payLoad;
  } else if(action.type == "dec"){
    return state-action.payLoad;
  }
  return state;
}



const helloReducer = combineReducers({
  reducer1,
  reducer2
})

const customMiddleWare = store => next => action => {
  console.log("Middleware triggered:", action);
  next(action);
}

//const middlewareRef = applyMiddleware(looger());

const store = createStore(helloReducer,applyMiddleware(customMiddleWare));
store.subscribe(()=>{
  console.log('store changed________redux______' + store.getState());
}

)

store.dispatch({type:"inc",payLoad:1});
/*store.dispatch({type:"inc",payLoad:1});
store.dispatch({type:"inc",payLoad:1});
store.dispatch({type:"inc",payLoad:1});
store.dispatch({type:"dec",payLoad:1});*/
/*store.dispatch((dispatch) => {
dispatch({type:"inc",payLoad:1})
dispatch({type:"inc",payLoad:1})
dispatch({type:"inc",payLoad:1})
dispatch({type:"foo",payLoad:2})
});*/

//_____________________________________________________________


    

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
     <Provider store={store}> 
    <Btn/>
    </Provider> 
     <Provider store={store}> 
    <Txt_1 callbackFromParent={this.getBookingdata}/>
      </Provider> 
		<Txt_2 callbackFromParent={this.getBookingdata}/>

    
		
		</div >
      
    );
  }
}