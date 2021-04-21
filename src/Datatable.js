import React, { useState, useEffect } from "react";
export default function Appdata(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/d734975d2aee62d197ef/" + props.id)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>date</th>
            <th>revenue</th>
            <th>adRequest</th>
            <th>adResponse</th>
            <th>impressions</th>
            <th>clicks</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td>{props.id}</td>
              <td>{item.date}</td>
              <td>{item.revenue}</td>
              <td>{item.adRequest}</td>
              <td>{item.adResponse}</td>
              <td>{item.impressions}</td>
              <td>{item.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
