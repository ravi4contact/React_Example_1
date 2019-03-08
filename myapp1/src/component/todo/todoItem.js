import React, { Component } from 'react';
import './todo.css';

class TodoItem extends Component{
    constructor(props){
        super(props)
        this.onEdit = this.onEdit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.changeTask = this.changeTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.state = {
            isEditing: false
        }
    }
    onEdit(){
        this.setState({isEditing: true});
    }
    onCancel(){
        this.setState({isEditing: false});
    }
    saveTask(){
        let oldTask = this.props.task,
            newTask = this.refs.editTask.value;
        this.props.changeTask(oldTask, newTask);
        this.setState({isEditing: false});
    }
    changeTask(){
        if(this.state.isEditing){
            return(
                <td>
                    <input className="editTask" type="text" defaultValue={this.props.task} ref="editTask"/>
                </td>
            )
        }
        return(
            <td>
                <span className={this.props.isCompleted ? 'strike' : ''}>{this.props.task}</span>
            </td>
        )
    }
    changeButton(){
        if(this.state.isEditing){
            return(
                <td>
                    <button onClick={this.saveTask}>Save</button>
                    <button onClick={this.onCancel}>Cancel</button>
                </td>
            )
        }
        return(
            <td>
                <button onClick={this.onEdit}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </td>
        )
    }
    render(){
        return(
            <tr>
                <td><input type="checkbox" onChange={this.props.toggleTask.bind(this, this.props.task)} className="toggle-task" checked={this.props.isCompleted ? true : false}/></td>
                {/* <td><span className={this.props.isCompleted ? 'strike' : ''}>{this.props.task}</span></td> */}
                {this.changeTask()}
                {this.changeButton()}
            </tr> 
        )
    }
}

export default TodoItem;