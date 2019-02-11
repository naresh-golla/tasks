import React, { Component } from 'react';

class Tilehoverdata extends Component{
    state={
        x:5,
        y:5
    }
 render(){
     
    const x=(this.props.ishoverd.x) +(this.state.x);
   const y=(this.props.ishoverd.y) + (this.state.y);
    console.log(x,y);
     return(
        //  (this.props.ishoverd.ishoverd)?
        <div className="tooltipdiv" 
        style={{top:x,left:y}}
        >    
        <div>dummy data</div>
         
        </div>
        // :null
     );
 }
}
export default Tilehoverdata;
 