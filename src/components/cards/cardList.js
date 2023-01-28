import React, { useState } from 'react'

export const cardList = () => {
    const [cards, setCards] = useState([
        {
          id: 1,
          name: 'black shirt',
          img: '../../assets/img/shirt-black.png',
        },
        {
          id: 2,
          name: 'black shirt',
          img: '../../assets/img/shirt-black.png',
        },
        {
          id: 3,
          name: 'black shirt',
          img: '../../assets/img/shirt-black.png',
        },
        {
          id: 4,
          name: 'black shirt',
          img: '../../assets/img/shirt-black.png',
        },
        {
          id: 5,
          name: 'black shirt',
          img: '../../assets/img/shirt-black.png',
        },
        {
          id: 6,
          name: 'black shirt',
          img: '../../assets/img/shirt-black.png',
        },
        {
          id: 7,
          name: 'black shirt',
          img: '../../assets/img/shirt-black.png',
        },
       
      ])
  return [cards, setCards]
}
