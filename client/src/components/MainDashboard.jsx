import React from 'react'
import Cards from './Cards'
import './maindashboard.css'
import Widget from './Widget'

const MainDashboard = () => {
  return (
    <div className="mainDashboard">
        <h1>Dashboard</h1>
        <div className="widgets">
          <Widget type="view"/>
          <Widget type="sale"/>
          <Widget type="user"/>
        </div>
        <div className="widgets">
        <Cards />
        <Cards />
       
        </div>
    </div>
  )
}

export default MainDashboard