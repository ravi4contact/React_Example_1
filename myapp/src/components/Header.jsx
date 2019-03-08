import React, { Component } from 'react';
import './../css/header.css';

class Header extends Component{
    handleClick = (event, value) => {
        this.props.handleCheckbox(event.target.checked, value);
    }
    render(){
        return(
            <React.Fragment>
                <h2>CITIES</h2>
                <div className="checkEnabled">
                    <label htmlFor="hd">HD ENABLED</label><input className="hd" type="checkbox" value="hd" onClick={(e) => this.handleClick(e, 'hd')}/>
                    <label htmlFor="oneWay">ONE WAY ENABLED</label><input className="one" type="checkbox" value="one" onClick={(e) => this.handleClick(e, 'one')}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;