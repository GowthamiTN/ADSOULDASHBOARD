import React from "react";
import Appdata from "./Appdata";
import { Link } from "react-router-dom"
import Datatable from './Datatable';

import data from './data.json'
import asset1 from "./asset1.svg";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon4 from "./icon4.svg";
export default function App() {
  return (
  <>
        <div className="App">
          <div className="title">ADSOUL</div>
            <img className="logo" src={asset1} alt="Logo" />
        </div>
        <div>
          <div className="appshow">
          <h1 className="Heading">Revenue Optimization</h1>
          <div className="block2">
            <div className="item">
              <img className="logo1" src={icon1} alt="Logo" />
              <p>Fill rate</p>
              <img className="logo1" src={icon2} alt="Logo" />
              <p>Improve CTR</p>
            </div>
            <div className="item">
              <img className="logo1" src={icon3} alt="Logo" />
              <p>Refresh Rate</p>
              <img className="logo1" src={icon4} alt="Logo" />
              <p>Quick Integration</p>
              </div>
            </div>
          </div>
        </div>
    <div className="bottom">
      {data.map((item) => (  
        <div className="card">
        <Link className="button" to={`/users/${item.id}`}>show</Link>
         <h4>{item.appName}</h4>
         
           <h6> {item.publisherName}</h6>
          <Appdata id={item.id} />
        </div>
      ))}
    </div>
    </>
  );
}
