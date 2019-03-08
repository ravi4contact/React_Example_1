import React from 'react';


 
export default class Form extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
      entries:  []
    };

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
	this.props.callbackFromParent(event.target.value);
  }
   componentWillReceiveProps() {
     this.setState({entries: this.props.callbackFromParent()});
  }

render() {


  let roomNoData =["Oak"];

  console.log(roomNoData);
  let uniqueroomNoData = roomNoData.filter(function(elem, i, array) {
  return array.indexOf(elem) === i;
  }
  );
  console.log(uniqueroomNoData);




  const days =[

  {
  "day": "Mon ",
  "date": "1"
  },
  {
  "day": "Tue ",
  "date": "2"
  },
  {
  "day": "Wed ",
  "date": "3"
  },
  {
  "day": "Thur ",
  "date": "4"
  },
  {
  "day": "Fri ",
  "date": "5"
  },
  {
  "day": "Sat ",
  "date": "6"
  },
  {
  "day": "Sun ",
  "date": "7"
  }

  ];

  const daylist = days.map((elm) =>
  <div style={{float:'left',border:'1px solid black',width:'100px', textAlign: 'center'}} >
  {elm.day}{elm.date}
  </div>
  );
  console.log(daylist);


  const uniqueRoomlist = uniqueroomNoData.map((number) =>
  <div>
  <div style={{float:'left',border:'1px solid black',width:'100px',textAlign: 'center'}} >
    {number}
  </div>
    <div style={{float:'right'}}>{daylist}</div>
  </div>
  );
  return (
  <div>

  <div style={{ display: "inline-block"}}>{uniqueRoomlist}</div>

  </div>

  );
  }
}