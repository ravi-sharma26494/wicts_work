import React, { useEffect, useState } from "react";
import Database from "../Database";
import './Userlist.css'
import Data from './dummy_user.json';
const Userlist = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        setData(Data);
    },[])
  return (
    <>
    <Database />
    <div className="userlist">
      <table>
        <tr className="userlist__header">
          <th>Name</th>
          <th>Phone Number</th>
          <th>Gender</th>
          <th>City</th>
          <th>Wallet</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
        {data.map((d)=>(

        <tr key = {d.id}className="userlist__content">
          <td>{d.name}</td>
          <td>{d.number}</td>
          <td>{d.gender}</td>
          <td>{d.city}</td>
          <td>{d.wallet}</td>
          <td><img src={d.image} alt="user_pic"/></td>
          <td>...</td>
        </tr>
        
        ))}
      </table>
    </div>
    </>
  );
};

export default Userlist;
