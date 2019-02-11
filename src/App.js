import React, { Component } from 'react';
import SearchBar from "./SearchBar";
 import  "./index.css";
 import Tiledata from "./Tiledata";
 import FilterableHeader from "./FilterableHeader";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
       };
    }
    handleFilterTextChange=(filterText)=> {
      this.setState({
        filterText: filterText
      });
       }
    handleSelectChange=(SelectChange)=> {
        this.setState({
          value: SelectChange
        });
        
      }
      handleRadioChange=(radioChangeBoolean,radiooptionValue)=>{
        this.setState({
          radioboolean: radioChangeBoolean,
          radiovalue:radiooptionValue
        });
      }
      handleRangeValue=(parm)=>{
        this.setState({
          rangevalue: parm,
        });
        //console.log(this.state.rangevalue);
      }
     render() {
    
      return (
        <div>
          <SearchBar handleFilterTextChange={this.handleFilterTextChange}/>
          <FilterableHeader 
          handleSelectChange={this.handleSelectChange} 
          handleRadioChange={this.handleRadioChange} 
          handleRangeValue={this.handleRangeValue}/>
          
          <Tiledata
           propsdata={this.props.products} 
           filterText={this.state.filterText} 
           SelectChange={this.state.value}
           radioboolean={this.state.radioboolean}
           radiovalue={this.state.radiovalue}
            rangevalue={this.state.rangevalue}/>
        </div>
       
      );
    }
  }
  
 

  export default App;