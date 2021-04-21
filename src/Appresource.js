import React from "react";
import { Link } from "react-router-dom";
import data from './data.json'
export default function App(props) { 
  return (
    <div className="apptitle" >
      {data.filter(item=>item.id===props.id).map(apps=>(
        <div>
       <b>{apps.appName}</b>
      <h6>{apps.publisherName}</h6>
      </div>
      ))}
    </div>
  );
}

