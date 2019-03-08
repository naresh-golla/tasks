import React, { Component } from "react";

class FilterableHeader extends Component {
  state = {
    value: "Select",
    radioption: "",
    radiovalue: "",
    rangevalue: "4"
  };
  handleSelectChange = e => {
    this.setState({
      value: e.target.value
    });
    this.props.handleSelectChange(e.target.value);
  };

  radioChangeHandler = e => {
    // const clr={color:'#d81b60'};
    //   const dummy={color:'gray'};
    //   const out=e.target.checked ?clr:dummy;

    this.setState({
      radioption: e.target.checked,
      radiovalue: e.target.value
    });
    this.props.handleRadioChange(e.target.checked, e.target.value);
    // console.log(e.target.checked,e.target.value)
  };
  handlerangevalue = e => {
    this.setState({
      rangevalue: e.target.value
    });
    this.props.handleRangeValue(e.target.value);
  };
  render() {
    return (
      <div className="header">
        <div style={{ paddingTop: "20" }} />
        <div className="header1">
          <span>SELECT CATEGORY</span>
          <div className="selectdiv">
            <select value={this.state.value} onChange={this.handleSelectChange}>
              <option value="Select">Select</option>
              <option value="Fashion">Fashion</option>
              <option value="New Arrivals">New Arrivals</option>
              <option value="Trending">Trending</option>
              <option value="Vintage">Vintage</option>
            </select>
          </div>
          <span />
        </div>
        <div className="header2">
          <span>GIFT FOR</span>
          <div>
            <form>
              <div className="inline-radio">
                <div>
                  <input
                    id="350"
                    checked={this.state.radioption === "radio1"}
                    value=""
                    onChange={this.radioChangeHandler}
                    type="radio"
                    name="title"
                  />
                  <label htmlFor="351">
                    <div>
                      <i className="fa fa-user" />{" "}
                    </div>{" "}
                    <div>All</div>{" "}
                  </label>
                </div>
                <div>
                  <input
                    id="350"
                    checked={this.state.radioption === "radio2"}
                    value="men"
                    onChange={this.radioChangeHandler}
                    type="radio"
                    name="title"
                  />
                  <label htmlFor="351">
                    <div>
                      <i className="fa fa-male" />{" "}
                    </div>{" "}
                    <div>Men</div>{" "}
                  </label>
                </div>
                <div>
                  <input
                    id="350"
                    checked={this.state.radioption === "radio3"}
                    value="women"
                    onChange={this.radioChangeHandler}
                    type="radio"
                    name="title"
                  />
                  <label htmlFor="351">
                    <div>
                      <i className="fa fa-female" />{" "}
                    </div>{" "}
                    <div>Women</div>{" "}
                  </label>
                </div>
                <div>
                  <input
                    id="350"
                    checked={this.state.radioption === "radio4"}
                    value="teen"
                    onChange={this.radioChangeHandler}
                    type="radio"
                    name="title"
                  />
                  <label htmlFor="351">
                    <div>
                      <i className="fa fa-user" />{" "}
                    </div>{" "}
                    <div>Teen</div>{" "}
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="header3">
          <span>SET PRICE</span>
          <div className="rangediv">
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={this.state.rangevalue}
              onChange={this.handlerangevalue}
            />
          </div>
          <div className="rangevalue">
            <div id="menu">
              <li>$ 25</li>
              <li>$ 50</li>
              <li>$ 100</li>
              <li>$ 1000</li>
              <li>$ 1000+</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FilterableHeader;
