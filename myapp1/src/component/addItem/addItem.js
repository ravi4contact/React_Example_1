import React, { Component } from 'react';
import './addItem.css';
class AddItem extends Component{
    constructor(props){
        super(props)
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(){
        this.props.newTask(this.refs.addItem.value);
    }
    render(){
        return(
            <div>
                <div className="header">
                    <h3>ADD ITEM</h3>
                </div>
                <input type="text" ref="addItem" className="add-todo"/> 
                <button onClick={this.addTodo} className="add-todo-button">Add</button>
            </div>
        )
    }
}

export default AddItem;