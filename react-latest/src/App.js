import React, { Component } from 'react';
import CountCheck from './checkCount.js';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			count:0,
			newCount:0
		}
		
	}
	handleCount = (data) => {
		if(data === "new"){
			this.setState({
				newCount:this.state.newCount
			})
		}else{
			this.setState({
				count:this.state.count + 1
			})
		}
	}
	render() {
		return (
			<div className="App">
				<CountCheck count={this.state.count} newCount={this.state.newCount}/>
				<button onClick={(e) => this.handleCount('old')}>Old Count</button>
				<button onClick={(e) => this.handleCount('new')}>New Count</button>
			</div>
		);
	}
}

export default App;
