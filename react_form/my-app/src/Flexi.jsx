import React, { Component } from 'react';

class Flexi extends Component {
    constructor(props){
        super();
        this.state = {
            personName: '',
            personState: ''
        }
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }
    updateState = (event, fieldType) => {
        if(fieldType === "textBox"){
            this.setState({
                personName: event.target.value
            })
        }else{
            this.setState({
                personState: event.target.value
            })
        }
    }
    render(){
        return(
            <form onSubmit={this.submitHandler}>
            {
                this.props.config.items.map((value,index) => {
                    return(
                        value.type === "TextField" ? 
                            <div key={index}>
                                <label>{value.label}:</label>
                                <input type="text" className={value.name} onBlur={(e) => this.updateState(e, 'textBox')}/> 
                            </div>
                            : 
                            <div key={index}>
                                <label>{value.label}:</label>
                                <select className={value.name} onChange={(e) => this.updateState(e, 'dropDown')}>
                                    <option value="">-- Select State --</option>
                                {
                                    value.values.map((myState, index) => (
                                        <option value={myState} key={index}>{myState}</option>
                                    ))
                                }
                                </select>
                            </div>
                    )
                })
            }
            <button>submit</button>
            </form>
        )
    }
}
export default Flexi;