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


    let bookedWidth = bookingData.map(function(elem,index,array) {
      if(index < 5){
        let startPoint = Number(elem.checkIn.split("-")[0]);
        startPoint = (startPoint > 7) ? (startPoint-7) : startPoint;
        let endPoint = Number(elem.checkOut.split("-")[0]);
        endPoint = (endPoint > 7) ? (endPoint-7) : endPoint;
        let leftMargin = ((startPoint-1) * 100)+100;
        let topMargin = ((Number(elem.roomNumber)-1)* 22);
        let widthCal= ((endPoint - startPoint ) +1);
        widthCal = (widthCal*100) + widthCal;
        return {'rNo': elem.roomNumber,'lm': leftMargin, 'tm': topMargin , 'w': widthCal};
    } 
   }); 

    

console.log(JSON.stringify(bookedWidth[0])+"_______________cal___width");


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

      let bookedStyleWidth = 100*3;
      let bookedStyle = {
          float:'left',
          borderRadius: 25,
          background: '#73AD21',
          padding: 1, 
          width: bookedStyleWidth,
          height: 20,
          position: 'absolute',
          
        
        };

      let tableStyle = {
       float:'left',
       border:'1px solid black',
       width:'100px',
       height:'20px',
       textAlign: 'center'
       
      };



    const daylist = days.map((elm) =>
    <div style={tableStyle} key={elm.day}>  
    </div>
    );
    console.log(daylist);

   let bookedList = bookedWidth.map(function(elem,index,array) {
    let refElem= bookedWidth[index];
    if(index < 5){
     console.log(JSON.stringify(elem)+"____________index_____"+refElem.lm);
     return <div style={ {border:'1px solid black',marginLeft:refElem.lm,marginTop:refElem.tm,width: refElem.w,float:'left',borderRadius: 25, background: '#73AD21', padding: 1, height: 20, position: 'absolute'}}>Hai</div>
    }
     
   }); 
   bookedList.length=5;
    console.log(bookedList);

 

   

    
    const uniqueRoomlist = uniqueroomNoData.map((number,index,array) =>
    <div>
      
      <div style={tableStyle} key={number.toString()}>
        {number}
      </div>
      <div style={{float:'right'}}>
        {daylist}
      </div>
     
    
      
  
    </div>
    
    );

   
    return (
      <div> 
        <div style={{ display: "inline-block"}}>{uniqueRoomlist}

           <div style={{position:'relative'}}>
            {bookedList}
          </div>
        </div>
        
      </div>
    );
  }
  
}


 