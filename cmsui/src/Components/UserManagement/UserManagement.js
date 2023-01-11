import React from 'react'
import { Link } from 'react-router-dom'

const UserManagement = () => {
  return (
    <div className='usermgmt'>
      <Link to="/adduser" className='adduser'></Link>
      <table>
      <table>
        <tr className="merchantlist__header">
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
        {data.map((d)=>(

        <tr key = {d.id}className="merchantlist__content">
          <td>{d.name}</td>
          <td>{d.number}</td>
          <td>dummy@email.com</td>
          <td>User</td>
        </tr>
        
        ))}
      </table>
      </table>
    </div>
  )
}

export default UserManagement