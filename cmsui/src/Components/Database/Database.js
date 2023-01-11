import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Database.css'

const Database = () => {
  const [state,setState] = useState(false);
  const [listActive, setListActive] = useState('inactive');
  const handleUserListClick = ()=>{
    setState(!state);
  }
  return (
    <>
    <div className='databases'>
      <Link to="/userlist" className={`actions inactive`} onClick={handleUserListClick}>User</Link>
      <Link to="/merchantlist" className={`actions active`} onClick={handleUserListClick}>Merchants</Link>
    </div>
    {/* <Outlet></Outlet> */}
    </>
    
  )
}

export default Database;