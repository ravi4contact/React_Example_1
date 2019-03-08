import React from 'react';
import $ from 'jquery';





 
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries:  []
    };
    
  }

  
  componentWillReceiveProps() {
     this.setState({entries: this.props.callbackFromParent()});
  }

  render() {
   console.log("____________________vvvv_________"+JSON.stringify(this.state.entries[0]));
    let bookingData = this.state.entries;
    let roomNoData = bookingData.map(function(elem) {
      return elem.roomNumber;
    }); 
    console.log(roomNoData);
    let uniqueroomNoData = roomNoData.filter(function(elem, i, array) {
          return array.indexOf(elem) === i;
      }
    );
    console.log(uniqueroomNoData);




    const days =[

    {
      "day": "Mon ",
      "date": "01"
    },
    {
      "day": "Tue ",
      "date": "02"
    },
      {
      "day": "Wed ",
      "date": "03"
    },
    {
      "day": "Thur ",
      "date": "04"
    },
      {
      "day": "Fri ",
      "date": "05"
    },
    {
      "day": "Sat ",
      "date": "06"
    },
      {
      "day": "Sun ",
      "date": "07"
    }

    ];

    const daylist = days.map((elm) =>
    <div style={{float:'left',border:'1px solid black',width:'100px',height:'20px', textAlign: 'center'}} key={elm.day}>  
    </div>
    );
    console.log(daylist);


    const uniqueRoomlist = uniqueroomNoData.map((number) =>
    <div>
      <div style={{float:'left',border:'1px solid black',width:'100px',height:'20px',textAlign: 'center'}} key={number.toString()}>
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


 