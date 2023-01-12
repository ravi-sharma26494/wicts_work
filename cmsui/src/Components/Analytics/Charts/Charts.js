import React from 'react'
import LineGraph from './chart.png'
import Pie from './piechart.svg'
import './Charts.css'
const Charts = () => {
  return (
    <div className='charts__conatiner'>
        <div className='line__chart'>
            <img src={LineGraph} alt="user_charts" />
        </div>
        <div className='pie__chart'>
            <img src={Pie} alt="user_charts" />
        </div>
    </div>
  )
}

export default Charts