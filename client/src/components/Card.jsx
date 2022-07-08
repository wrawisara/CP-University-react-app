import React from 'react'
import { useState } from 'react'
import { AnimateSharedLayout } from "framer-motion"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './card.css'
const Card = (props) => {
    const[expanded, setExpanded] = useState(false)

  return (
  
   <AnimateSharedLayout>
    {
        expanded? (
            'Expanded'
        ):
        <CompactCard param = {props}/>
    }
   </AnimateSharedLayout>
  )
}


function CompactCard({param}){
    return(
        <div className="compactCard"
        style={{
          background : param.color.backGround ,
          boxShadow : param.color.boxShadow
        }}
        >
            <div className="radialBar">
              <CircularProgressbar
              value={param.barValue}
              text={`${param.barValue}%`}
              />
              <span>{param.title}</span>  
            </div>
            <div className="detail">
                <i className="icon"><param.icon/></i>
                <span>{param.value}</span>
            </div>
        </div>
    )
}


export default Card












// return(
//     <div className="status-card">
//      <div className="logo-part">
//          <item.icon/>
//          <span>
//              {item.title}
//          </span>
//      </div>
//      <div className="percent-part">
//          <item.trendIcon/>
//          <span>
//              {item.per}
//          </span>
//      </div>
//      <div className="count-part">
//          <span>
//              {item.count}
//          </span>
//      </div>
//     </div>
// )