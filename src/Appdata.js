import React, { useState, useEffect } from "react";
import "./App.css"
export default function Appdata(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/d734975d2aee62d197ef/" + props.id)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  });
  function nFormatter(num) {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}

  const sum = items.reduce((a, v) => (a = a + v.revenue), 0);
  const adresp = items.reduce((a, v) => (a = a + v.adResponse), 0);
  const adreq = items.reduce((a, v) => (a = a + v.adRequest), 0);
  const impression = items.reduce((a, v) => (a = a + v.impressions), 0);

  return (
    <div>

        <div className="List">
        <span>{nFormatter(sum)}</span>
        <span>{nFormatter(adresp)}</span>
        <span>{nFormatter(adreq)}</span>
        <span>{nFormatter(impression)}</span>
      </div>
    </div>
  );
}
