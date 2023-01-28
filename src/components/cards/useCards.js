import React, { useState } from 'react'

export const useCards = () => {
    const [titleCard, setTitleCard] = useState("back shirt");
    const [price, setPrice] = useState(12)
    const [btnAmount, setBtnAmount] = useState(1);
    const [descriptionProduct, setDescriptionProduct] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing eli tLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris")
  
  
    return [
    titleCard,
    setTitleCard,
    price,
    setPrice,
    btnAmount,
    setBtnAmount,
    descriptionProduct,
    setDescriptionProduct,
  ];
}
