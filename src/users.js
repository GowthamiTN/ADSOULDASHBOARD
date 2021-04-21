import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Appresource from './Appresource';
import axios from "axios";
const User = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`https://api.npoint.io/d734975d2aee62d197ef/${id}`);
    setUser(res.data);
  };
 
  return (
    <div className="container">
      <Appresource id={id}/>
      <Link className="button" to="/">
        Back
      </Link>
      <table className="tabledata">
        <thead>
          <tr>
            <th>date</th>
            <th>revenue</th>
            <th>adRequest</th>
            <th>adResponse</th>
            <th>impressions</th>
            <th>clicks</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr>
              
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
};

export default User;