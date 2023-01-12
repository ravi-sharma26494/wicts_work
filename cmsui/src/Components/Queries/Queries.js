import React from 'react'
import TopSection from './TopSection'
import UserSection from './UserSection'
import './Queries.css'
const Queries = () => {
  return (
    <div className='queries__conatiner' style={{background:'#F8F7FB',marginTop:'20px'}}>
      <TopSection />
      <UserSection />
      <UserSection />
      <UserSection />
      
    </div>
  )
}

export default Queries