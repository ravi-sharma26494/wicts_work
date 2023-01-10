import React from 'react';
import './Topbar.css';
import User from "./user.png"
const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbar__items'>
            <span className='topbar__icon'><i class="fa-regular fa-bell"></i></span>
            <img src={User} alt="user__profile"/>
        </div>
    </div>
  )
}

export default Topbar