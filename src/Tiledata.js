import React, { Component } from "react";
import Tilehoverdata from "./Tilehoverdata";

class Tiledata extends Component {
  state = {
    ishoverd: false,
    x: 0,
    y: 0
  };
  handlemouseover = e => {
    //console.log(e.target,'is hoverd');
    this.setState({
      ishoverd: true
    });
  };
  hadlemouseleave = e => {
    // console.log(e.target,'ihover left');
    this.setState({
      ishoverd: false
    });
  };
  handlemousemove = e => {
    //console.log(e.clientX, e.clientY);
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  };
  render() {
    const { propsdata } = this.props;
    const filterText = this.props.filterText;
    const SelectChange = this.props.SelectChange;
    const radioboolean = this.props.radioboolean;
    const radiovalue = this.props.radiovalue;
    const rangevalue = this.props.rangevalue;
    var dataFilter = {
      title: filterText ? filterText : "",
      select: SelectChange ? SelectChange : "Vintage",
      type: radiovalue ? radiovalue : "",
      price: rangevalue ? rangevalue : "4"
    };
    const lists = propsdata
      .filter(i => {
        return (
          i.title.toLowerCase().indexOf(dataFilter.title) > -1 &&
          i.select === dataFilter.select &&
          (dataFilter.type === ""
            ? i.type === "men" || i.type === "women" || i.type === "teen"
            : i.type === dataFilter.type) &&
          (dataFilter.price === "1"
            ? i.price <= 25
            : dataFilter.price === "2"
            ? i.price <= 50 && i.price > 25
            : dataFilter.price === "3"
            ? i.price <= 100 && i.price > 50
            : dataFilter.price === "4"
            ? i.price <= 1000 && i.price > 100
            : dataFilter.price === "5"
            ? i.price >= 1000
            : (i.price = 1000))
        );
      })
      /* .filter(i=>{
                        return  i.title.toLowerCase().indexOf(filterText.toLowerCase())>-1
                        })
                        .filter(i=>{
                            return i.select===SelectChange 
                           })
                        .filter(i=>{
                            if(radioboolean){ return i.type===radiovalue;}

                         })
                         .filter(i=>{
                            if(rangevalue==="1"){ return i.price<=25}
                            if(rangevalue==="2"){ return i.price<=50 && i.price>25}
                            if(rangevalue==="3"){ return i.price<=100 && i.price>50}
                            if(rangevalue==="4"){ return i.price<=1000 && i.price>100}
                            if(rangevalue==="5"){ return i.price>=1000}
                         })             */

      .map(i => {
        return (
          <div className="carousel__item js-carousel-item" key={i.id}>
            <div
              className="img_p"
              onMouseOver={this.handlemouseover}
              onMouseLeave={this.hadlemouseleave}
              onMouseMove={this.handlemousemove}
            >
              <img height="100" width="125" src={i.img} alt={i.title} />
              <div className="left-side">
                <div className="a">{i.store}</div>
                <div className="p">$ {i.price}</div>
              </div>
            </div>
            {/* <Tilehoverdata ishoverd={this.state}/>   */}
          </div>
        );
      });

    return (
      <div className="carousel js-carousel">
        <div className="carousel__container js-carousel-container">
          <div className="carousel__list js-carousel-list">{lists}</div>

          <div className="carousel__nav">
            {/* <span className="carousel__button--prev js-carousel-button" data-dir="prev"><span className="fa fa-less-than"></span></span>
        <span className="carousel__button--next js-carousel-button" data-dir="next"><span className="fa fa-greater-than"></span></span>
        */}
          </div>
        </div>
      </div>
    );
  }
}
export default Tiledata;
