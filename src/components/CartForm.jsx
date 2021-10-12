import React , { useState } from 'react'
// style
import '../styles/CartForm.css'


const CartForm = ({ confirmCart }) => {

    const [inputName, setInputName] = useState(null)
    const [inputPhone, setInputPhone] = useState(null)
    const [inputMail, setInputMail] = useState(null)

    const storeName = (e) => {
        setInputName(e.target.value)
    }
    const storePhone = (e) => {
        setInputPhone(e.target.value)
    }
    const storeMail = (e) => {
        setInputMail(e.target.value)
    }

    return (
        <>
            <div className = "cartFormContainer">  
                <h3>Termina la compra! </h3> 
                {/*FORM*/}
                <p>Nombre :</p>
                <input type="text" onChange={storeName}></input>
                <p>Teléfono : </p>
                <input type="text" onChange={storePhone}></input>
                <p>Email :</p>
                <input type="text" onChange={storeMail}></input>
                <br/>
                <button onClick={ ()=> confirmCart( inputName,inputPhone,inputMail ) }>Confirmar Compra</button>
            </div>
            
        </>
    );
}

export default CartForm