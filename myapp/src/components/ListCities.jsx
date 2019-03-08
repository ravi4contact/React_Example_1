import React from 'react';
import './../css/listCities.css';

const ListCities = (props) => {
        return(
            <div className="cityContainer">
                <h2 className="cityType">{props.cityTitle}</h2>
                {
                    props.cityList.length > 0 ? 
                        <div className="citySubContainer">
                        {
                            props.cityList.map(function(value, key){
                                return (
                                    <div className="subContainer" key={key}>
                                        <img className="cityLogo" src={value.icon} alt={value.name}/>
                                        <div>{value.name}</div>
                                    </div>
                                )
                            })
                        }
                    </div> : <span className="noCity">No Cities to show</span>
                }
                
            </div>
        )
}

export default ListCities;