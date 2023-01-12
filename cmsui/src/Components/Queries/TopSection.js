import React from 'react'
import './TopSection.css'
const TopSection = () => {
  return (
    <div className='topesction__container'>
        <div className='topesction__single--conatiner'>
            <p className='topesction__single--text'>New</p>
        </div>
        <div className='topesction__single--conatiner'>
            <p className='topesction__single--text'>Pending</p>
        </div>
        <div className='topesction__single--conatiner'>
            <p className='topesction__single--text'>closed</p>
        </div>
    </div>
  )
}

export default TopSection