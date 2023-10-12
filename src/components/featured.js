import React from "react";
import "../css/featured.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const featured = () => {
  return (
    <div className="featured">
      <div className="centered">
        <div className="top">
          <h1 className="featuredtitle">Total Revenue</h1>
          <hr style={{width:500}}/>
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value={30} text={"30%"} strokeWidth={5} />
          </div>
          <p className="ptitle">Total Sales made today</p>
          <p className="amount">708 rs.</p>
          <p className="desc">
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default featured;
