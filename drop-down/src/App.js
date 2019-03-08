import React, { Component } from 'react'
import SelectBox from './features/select-box'

class App extends Component {
	constructor(){
		super();
		this.state = {
			selectedData:'',
			operator:''
		}
	}
	showData = (sel, ope) => {
		this.setState({
			selectedData: sel,
			operator: ope
		})
	}
	render() {
		return <div>
			<div style={{margin: '16px', position: 'relative'}}>
				<SelectBox
					showData={this.showData}
					name="venue[country_id]"
					items={[
					{ value: 'United States', id: 1 },
					{ value: 'Great Britian', id: 21 },
					{ value: 'Mexico', id: 43 },
					{ value: 'Canada', id: 2 },
					]}
				/>
				<h3 className="display-data">Selected Data: <span>{this.state.selectedData}</span> <br/>Operator: <span>{this.state.operator}</span></h3>
			</div>
		</div>
	}
}

export default App
