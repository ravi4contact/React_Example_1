import React from 'react'

import './styles.css'

class SelectBox extends React.Component {
	constructor(props){
		super()
		this.state = {
			selectedItem: [],
			selectedList: [],
			showItems: false,
			flag:true
		}
	}
	

	dropDown = () => {
		this.setState(prevState => ({
			showItems: !prevState.showItems
		}))
	}

	selectItem = (e, item) => {
		let newState = [...this.state.selectedItem], othState;
		if(e.target.checked){
			newState.push(item);
			this.setState({
				selectedItem: newState,
			})
			othState = [...newState];
		}else{
			let dateAfterRemove = newState.filter((element) => {
				if(element.id !== item.id){
					return element;
				}
			});
			this.setState({
				selectedItem: dateAfterRemove,
			})
			othState = [...dateAfterRemove];
		}
		let newSelectedList = [];
		for(var i=0; i<othState.length; i++){
			newSelectedList.push(othState[i].value);
		}
		this.setState({
			selectedList: newSelectedList,
		})
	}

	changeRadio = (andOr) => {
		if(andOr === "or"){
			this.setState({
				flag:true
			})
		}else{
			this.setState({
				flag:false
			})
		}
	}
	clearAll = () => {
		this.setState({
			selectedItem: [],
			selectedList: [],
		});
	}
	componentDidMount() {
		document.body.addEventListener('click', this.myHandler);
	}
	componentWillUnmount() {
    	document.body.removeEventListener('click', this.myHandler);
	}
	myHandler = (e) => {
		if(e.target.tagName === "BODY"){
			this.setState({
				showItems: false,
			})
		}
	}

	render () {
		return <div>
				<div className="select-box--box">
					<div className="select-box--container">
						<div className="select-box--selected-item">
							{ this.state.selectedList.length === 0 ? "Multi Select" : this.state.selectedList.length > 1 ? this.state.selectedList.length+" out of "+this.props.items.length + " Selected" :  this.state.selectedList[0] }
						</div>
						<div className="select-box--arrow" onClick={this.dropDown} >
							<span className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`}/>
						</div>
					</div>
					<div className="select-box--items" style={{display: this.state.showItems ? 'block' : 'none'}}>
						<div className="and-or">
							<input defaultChecked="checked" type="radio" id="or" onChange={() => this.changeRadio("or")} value="or" name="operator"/>
							<label htmlFor="or">OR</label>
							<input type="radio" id="and" onChange={() => this.changeRadio("and")} value="and" name="operator"/>
							<label htmlFor="and">AND</label></div>
						{
						this.props.items.map(item => <div key={item.id}> <input type="checkbox" id={"id"+item.id}
							onChange={(e) => this.selectItem(e, item)}
							checked={this.state.selectedList.includes(item.value) ? 'checked' : ''}
							/>
							<label className="check-box-label" htmlFor={"id"+item.id}>{ item.value }</label>
						</div>)
						}
						<div className="clear-all" onClick={this.clearAll}>X CLEAR</div>
					</div>
				</div>
				<div>
					<button className="show-data" onClick={() => this.props.showData(this.state.selectedList.join(','), this.state.flag ? "OR" : "AND")}>SUBMIT</button>
				</div>
			</div>
				// <input type="hidden" name={this.state.name} value={this.state.selectedItem.id} />
	}
}

export default SelectBox