import React, { Component } from 'react';
import AddItem from './component/addItem/addItem';
import Todo from './component/todo/todo';
import './App.css';
var _ = require('lodash');

class App extends Component {
	constructor(props){
		console.log(123);
		super(props)
		this.createTask = this.createTask.bind(this);
		this.toggleTask = this.toggleTask.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
		this.saveTask = this.saveTask.bind(this);
		this.state = {
			todos:[],
			completed:[],
			notCompleted:[]
		}
		this.componentCleanup = this.componentCleanup.bind(this);
	}

	componentCleanup() { // this will hold the cleanup code
		// whatever you want to do when the component is unmounted or page refreshes
		sessionStorage.setItem('todo', JSON.stringify(this.state));
	}
	
	toggleTask(task){
		const findTask = _.find(this.state.todos, todo => todo.task === task);
		findTask.isCompleted = !findTask.isCompleted;
		this.setState({todos: this.state.todos});
		let	comp = _.filter(this.state.todos, function(o) { return !o.isCompleted; }),
			notComp = _.filter(this.state.todos, function(o) { return o.isCompleted; });
		this.setState({
			completed:comp,
			notCompleted:notComp
		});
		
	}

	createTask(task){
		if(task === "" || task.trim().length === 0){
			alert("Task name should not be empty");
			return false;
		}
		let myTask = [...this.state.todos];
		let findDuplicate = _.filter(myTask, function(o) { return o.task.trim() === task.trim(); });
		if(findDuplicate.length > 0){
			alert("Already you add the same Task.");
			return false;
		}
		myTask.push({
			task,
			isCompleted: false
		});
		let comp = _.filter(myTask, function(o) { return !o.isCompleted; });
		this.setState({
			todos:myTask,
			completed:comp,
		});
	}

	deleteTask(task){
		let myTask = [...this.state.todos];
		const deleteTask = _.reject(myTask, todo => todo.task === task);
		let	comp = _.filter(deleteTask, function(o) { return !o.isCompleted; }),
			notComp = _.filter(deleteTask, function(o) { return o.isCompleted; });
		this.setState({
			todos:deleteTask,
			completed:comp,
			notCompleted:notComp
		});
	}

	saveTask(oldTask, newTask){
		const changeTask = _.find(this.state.todos, todo => todo.task === oldTask);
		changeTask.task = newTask;
		this.setState({todos:this.state.todos});
	}
	
	componentDidMount(){
		window.addEventListener('beforeunload', this.componentCleanup);
		if(sessionStorage.getItem('todo') != null){
			var getState = JSON.parse(sessionStorage.getItem('todo'));
			console.log(getState);
			this.setState(getState);
		}
	}
	render() {
		return (
			<div className="App">
				<AddItem newTask={this.createTask}/>
				<Todo todos={this.state.completed} changeTask={this.saveTask} toggleTask={this.toggleTask} deleteTask={this.deleteTask} noTask="No more tasks to do." title="TODO"/>
				<Todo todos={this.state.notCompleted} changeTask={this.saveTask} toggleTask={this.toggleTask} deleteTask={this.deleteTask} noTask="There are no completed tasks." title="COMPLETED"/>
			</div>
		);
	}
}

export default App;
