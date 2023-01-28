import React, { useState, Fragment } from 'react'
import { Card } from '../cards/Card'
import { cardList } from '../cards/cardList';

export const SectionGrid = () => {

  const [cards, setCards] = cardList();
  
  

  return (
    <div className='container-grid'>
      <div className='grid'>
        {cards.map(card => {
          return (
            <Fragment key={card.id}>
              <Card />
            </Fragment>
          )
        } )}
      </div>
    </div>
  )
}
