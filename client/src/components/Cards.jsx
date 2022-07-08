import React from 'react'
import './cards.css'
import { CardsData } from '../Data/Data'
import Card from './Card'


const Cards = () => {
  return (
    <div className="cards">
        {CardsData.map((card, id) => {
            return ( 
                <div className="parentContainer">
                    <Card
                        title={card.title}
                        color={card.color}
                        barValue={card.barValue}
                        value={card.value}
                        icon={card.icon}
                        series={card.series}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards


