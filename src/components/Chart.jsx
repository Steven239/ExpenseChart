import React, { useEffect } from "react";
import $ from "jquery";
import Img from "../logo.svg";
import webFont from "webfontloader";

function Chart() {
  useEffect(() => {
    webFont.load({
      google: {
        families: ["DM Sans"],
      },
    });
  });

  const onMouseInMon = (e) => {
    if (e.target) {
      $(e.target).toggleClass("mouseIn");
      $(e.target).children("div").removeClass("show");
    }
  };

  const onMouseOutMon = (e) => {
    if (e.target) {
      $(e.target).toggleClass("mouseIn");
      $(e.target).children("div").addClass("show");
    }
  };

  return (
    <div className="container">
      <div className="totalBal">
        <div className="width">
          <h6 className="font">My balance</h6>
          <h6 className="balance">$921.48</h6>
        </div>
        <div className="width2">
          <img className="img-style" src={Img} alt="img"></img>
        </div>
      </div>
      <div className="chartData">
        <h4 className="spending-title">Spending - Last 7 days</h4>
        <div className="barContainer">
          <div
            onMouseEnter={onMouseInMon}
            onMouseOut={onMouseOutMon}
            id="mon"
            className="barColor"
          >
            <div className="price-mon show"> $52.36</div>
          </div>
          <h6 className="dayOne">mon</h6>
          <div
            onMouseEnter={onMouseInMon}
            onMouseOut={onMouseOutMon}
            id="tue"
            className="barColor"
          >
            <div className="price-tue show"> $72.86</div>
          </div>
          <h6 className="dayTwo">tue</h6>

          <div
            onMouseEnter={onMouseInMon}
            onMouseOut={onMouseOutMon}
            id="wed"
            className="barColor"
          >
            <div className="price-wed show "> $116.16</div>
          </div>
          <h6 className="dayThree">wed</h6>
          <div
            onMouseEnter={onMouseInMon}
            onMouseOut={onMouseOutMon}
            id="thu"
            className="barColor"
          >
            <div className="price-thu show"> $68.99</div>
          </div>
          <h6 className="dayFour">thu</h6>

          <div
            onMouseEnter={onMouseInMon}
            onMouseOut={onMouseOutMon}
            id="fri"
            className="barColor"
          >
            <div className="price-fri show"> $54.33</div>
          </div>
          <h6 className="dayFive">fri</h6>
          <div
            onMouseEnter={onMouseInMon}
            onMouseOut={onMouseOutMon}
            id="sat"
            className="barColor"
          >
            <div className="price-sat show"> $67.87</div>
          </div>
          <h6 className="daySix">sat</h6>
          <div
            onMouseEnter={onMouseInMon}
            onMouseOut={onMouseOutMon}
            id="sun"
            className="barColor"
          >
            <div className="price-sun show"> $49.26</div>
          </div>
          <h6 className="daySeven">sun</h6>
        </div>
        <div className="dayContainer "></div>
        <hr className="hrStyle" />
        <div className="footerSec">
          <div className="width">
            <h6 className="footerFont">Total this month</h6>
            <h6 className="footerBalance">$478.33</h6>
          </div>
          <div className="width2">
            <h6 className="footerFont2">+2.4%</h6>
            <h6 className="footerBalance2">from last month</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chart;
