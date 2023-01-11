import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './UserManagement.css';
import Data from '../Database/UserList/dummy_user.json';
import Adduser from './Adduser';


const UserManagement = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
    useEffect(()=>{
        setData(Data);
    },[]);
  

  return (
    <div className='usermgmt'>
      <button type ="button" className='action__btn' onClick={()=> setShow(true)}>+ Add User</button>
      <table>
        <tr className="usermgmt__header">
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
        {data.map((d)=>(

        <tr key = {d.id} id="usermgmt__content" className="usermgmt__content">
          <td>{d.name}</td>
          <td>{d.number}</td>
          <td>dummy@email.com</td>
          <td>User</td>
        </tr>
        
        ))}
      </table>
      {/* Add user Component */}
      <Adduser show={show}  onClose={()=>setShow(false)}/>
    </div>
  )
}

export default UserManagement;