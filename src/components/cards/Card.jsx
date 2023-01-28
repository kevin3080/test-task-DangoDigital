import camisaNegra from '../../assets/img/shirt-black.png'
import { CiEdit } from "react-icons/ci"
import useModal from '../../hooks/useModal';
import Modal from '../Modal';
import { useCards } from './useCards';
import { useState } from 'react';


export const Card = () => {

    const [titleCard,
        setTitleCard,
        price,
        setPrice,
        btnAmount,
        setBtnAmount,
        descriptionProduct,
        setDescriptionProduct,] = useCards();

       

        const cantidadPlus  = () => {
            setBtnAmount(btnAmount + 1)
        }
    
        const cantidadMenos = () => {
            setBtnAmount(btnAmount - 1)
        }
    

    if(btnAmount < 0){
        setBtnAmount(0);
    }
    const [isOpenModal, openModal ,closeModal ] = useModal();
    const [fontTitle, setFontTitle] = useState([
        {
            id: '1',
            tamaño: 'font-size: 10px'
        },
        {
            id: '2',
            tamaño: 'font-size: 25px'
        },
        {
            id: '3',
            tamaño: 'font-size: 20px'
        },
        {
            id: '4',
            tamaño: 'font-size: 25px'
        }
    ])
    
  return (
        <div className='container-card'>
           <div className='container-img'>
                <img src={camisaNegra} alt="shirt" />
           </div>
           <div className='description-card'>
                <div className='title-card'>
                    <h2>{titleCard}</h2>
                    <button className='btn-edit' onClick={openModal}><CiEdit/></button>
                    <Modal 
                        isOpen={isOpenModal}
                        closeModal={closeModal}
                        title={titleCard}
                        changeTitle={setTitleCard}
                        price={price}
                        changePrice={setPrice}
                        description={descriptionProduct}
                        changeDescriptionP={setDescriptionProduct}
                    />
                </div>
                <div className='section-price'>
                    <span className='price'>${price}</span>
                    <button onClick={() => cantidadMenos()}>-</button>

                    <span className='ammountItems'>{btnAmount}</span>

                    <button onClick={() => cantidadPlus()}>+</button>
                </div>
                <p>{descriptionProduct}</p>
           </div>
           <div className='end-card'>
                <button>Add to card</button>
                <a href="#">Learn More</a>
           </div>
        </div>
  )
}
