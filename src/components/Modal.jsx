import '../scss/Modal.scss'

const Modal = ({ isOpen, closeModal, title, children, changeTitle, changePrice, price, description, changeDescriptionP}) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    const changeDescription = (e) => changeDescriptionP(e.target.value);
    const changeNameOfProduct = (e) => changeTitle(e.target.value);
    const changePriceOfProduct = (e) => changePrice(e.target.value);

    return (
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
                <h4>{ title }</h4>
                <div className='section-form'>
                    <div>
                        <form action="">
                            <label htmlFor='product'>Nombre de producto:</label>
                            <input 
                                id='product' 
                                type="text" 
                                placeholder='ingrese un nombre' 
                                value={title} 
                                onChange={changeNameOfProduct}   
                             />
                                <label htmlFor='price'>Precio:</label>
                                <input
                                    id='price' 
                                    type="number" 
                                    placeholder='ingrese un valor' 
                                    value={price} 
                                    onChange={changePriceOfProduct}   
                                />
                            <label htmlFor="description" className='description'>Descripcion</label>
                            <textarea 
                                id='description'
                                type="text" 
                                minLength="10" 
                                maxLength="300" 
                                placeholder='Ingrese una descripcion'
                                value={description}
                                onChange={changeDescription}
                                className="descriptionCard"
                            ></textarea>
                        </form> 
                    </div>
                </div>
                
                <button onClick={closeModal}>
                    Close Modal
                </button>

                {children}

            </div>
        </div>
    )
}

export default Modal