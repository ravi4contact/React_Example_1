import React, { Component } from 'react';
import Header from './components/Header';
import ListCities from './components/ListCities';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			cities :[],
			isHd:false,
			isOneWay:false,
			popularCities: [],
			otherCities: []
		}
	}
	
	handleCheckbox = (isChecked, value) => {
		var popularCities = [], otherCities = [];
		if(value === "hd"){
			if(isChecked){
				popularCities = this.state.cities.filter(function(value){
					return value.popular && value.hd_enabled;
				});
				otherCities = this.state.cities.filter(function(value){
					return !value.popular && value.hd_enabled;
				});
				document.getElementsByClassName("one")[0].checked = false;
				this.setState({
					popularCities:popularCities,
					otherCities:otherCities,
					isOneWay: false
				})
			}else{
				popularCities = this.state.cities.filter(function(value){
					return value.popular;
				});
				otherCities = this.state.cities.filter(function(value){
					return !value.popular;
				});
				this.setState({
					popularCities:popularCities,
					otherCities:otherCities
				})
			}
			this.setState({
				isHd: isChecked
			})
		}else{
			if(isChecked){
				popularCities = this.state.cities.filter(function(value){
					return value.popular && !value.hd_enabled;
				});
				otherCities = this.state.cities.filter(function(value){
					return !value.popular && !value.hd_enabled;
				});
				document.getElementsByClassName("hd")[0].checked = false;
				this.setState({
					popularCities:popularCities,
					otherCities:otherCities,
					isHd: false
				})
			}else{
				popularCities = this.state.cities.filter(function(value){
					return value.popular;
				});
				otherCities = this.state.cities.filter(function(value){
					return !value.popular;
				});
				this.setState({
					popularCities:popularCities,
					otherCities:otherCities
				})
			}
			this.setState({
				isOneWay: isChecked
			})
		}
	}
	componentDidMount(){
		fetch('https://api.zoomcar.com/v4/cities?platform=web')
			.then(response => response.json())
			.then(data => {
				var popularCities = data.cities.filter(function(value){
					return value.popular;
				}),
				otherCities = data.cities.filter(function(value){
					return !value.popular;
				});

				this.setState({ 
					cities:data.cities ,
					popularCities,
					otherCities
				})
			});
	}
	render() {
		return (
			<div className="App">
				<Header handleCheckbox={this.handleCheckbox}/>
				<ListCities cityTitle="popular" cityList={this.state.popularCities}/>
				<ListCities cityTitle="others" cityList={this.state.otherCities}/>
			</div>
		);
	}
}

export default App;
