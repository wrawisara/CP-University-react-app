import React from 'react'
import './sidebar.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { SidebarData } from '../Data/Data'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {

  const [selected, setSelected] = useState(0)
  return (
    <div className="Sidebar">
      <div className="logo">
        <span>
         <span>CP</span> university
        </span>
      </div>
      <div className="menu">
        {SidebarData.map((item, index)=>{
          return(
            <div className={selected === index? 'menuItem active':'menuItem'}
            key={index} 
            onClick={()=>setSelected(index)}
            >
              <item.icon/>
              <span>
                {item.heading}
              </span>
            </div>
          )
        })}  
        <div className="menuItem">
        <ExitToAppIcon/>
        {/* <Link to ="/login">
         
        </Link> */}
        </div>
      </div>  
    </div>
  )
}

export default Sidebar  