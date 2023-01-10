import React from 'react'
import "./Mainsection.css"
import Banner from "./Banner"
import Coupons from "./Coupons"
import Fitness from "./Fitness"

const Mainsection = () => {
  return (
    <div className='main__section'>
        <Banner />
        <Coupons />
        <Fitness />
    </div>
  )
}

export default Mainsection