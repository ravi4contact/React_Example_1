import React, { Component } from 'react';
import Flexi from './Flexi';
import './App.css';

const flexiConfig = {
	items: [
		{
			"name": "person_name",
			"label": "Person's Name",
			"type": "TextField"
		},
		{
			"name": "states",
			"label": "Person's state",
			"type": "DropDown",
			"values": [
				"Maharashtra",
				"Kerala",
				"Tamil Nadu"
			]
			}
	]
};

class App extends Component {
	onFlexiSubmit(submitDetails){
		console.log(submitDetails);
		alert(JSON.stringify(submitDetails));
	}
	render() {
		return (
			<div className="App">
				<Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig}/>
			</div>
		);
	}
}

export default App;
