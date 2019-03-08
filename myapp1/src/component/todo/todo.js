import React, { Component } from 'react';
import TodoItem from './todoItem';
import './todo.css';
var _ = require('lodash');

class Todo extends Component{
    renderItem(){
        return _.map(this.props.todos, (todo, index) => <TodoItem key={index} {...todo} {...this.props}/>)
    }
    render(){
        return(
            <div>
                <div className="header">
                    <h3>{this.props.title}</h3>
                </div>
                <table className="show-not-completed-task">
                    {
                        this.props.todos.length ? (
                            <tbody>
                                {this.renderItem()}
                            </tbody>
                        ) : (
                            <tbody>
                                <tr className="no-task">
                                    <td>{this.props.noTask}</td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        )
    }
}

export default Todo;