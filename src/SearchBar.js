import React, { Component } from 'react';
 
class SearchBar extends  Component {
    
    handleTextChange=(e)=>{
      this.props.handleFilterTextChange(e.target.value);
    }
    render() {
     
      return (
        <form>
          <input 
            className="search"
            type="text"
            placeholder="Search..."
            onChange={this.handleTextChange}
          />
          <span><i className="fa fa-search le"></i></span>
       </form>
      );
    }
  }

  export default SearchBar;