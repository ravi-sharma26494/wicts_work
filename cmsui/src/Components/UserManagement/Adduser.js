import React from 'react'
import './UserManagement.css'

const Adduser = ({show, onClose}) => {
    const handleClick = ()=>{
        alert('User Added Successfully');
        onClose();
    }
    if(!show) return null
  return (
    <div className='adduser_overlay'>
        <div className='inner'>

        <div className='adduser_title'>
            <h3 className='text'>Add User</h3>
            <span className='close__icon' onClick={onClose}>X</span>
        </div>
        <div className='adduser_input'>
            <input
            type={"text"}
            name="id"
            placeholder='Enter id'
            />
        </div>
        <div className='adduser_btn'>
            <button type='button' onClick={handleClick}>Add User</button>
        </div>
        </div>
    </div>
  )
}

export default Adduser