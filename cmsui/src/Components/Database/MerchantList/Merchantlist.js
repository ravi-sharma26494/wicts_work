import React, { useEffect, useState } from "react";
import Database from "../Database";
import './Merchantlist.css'
import Data from '../UserList/dummy_user.json';
const Merchantlist = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        setData(Data);
    },[])
  return (
    <>
    <Database />
    <div className="merchantlist">
      <table>
        <tr className="merchantlist__header">
          <th>Fitness Center Name</th>
          <th>Phone Number</th>
          <th>City</th>
          <th>Uploaded Document</th>
          <th>Website</th>
          <th>Logo</th>
          <th>Verified or Unverified</th>
          <th>Action</th>
          <th>Collapse</th>
        </tr>
        {data.map((d)=>(

        <tr key = {d.id}className="merchantlist__content">
          <td>{d.name}</td>
          <td>{d.number}</td>
          <td>{d.city}</td>
          <td>Aadhar Card</td>
          <td>www.dummy.com</td>
          <td><img src={d.image} alt="user_pic"/></td>
          <td>Verified</td>
          <td>...</td>
          <td>🔽</td>
        </tr>
        
        ))}
      </table>
    </div>
    </>
  );
};

export default Merchantlist;
