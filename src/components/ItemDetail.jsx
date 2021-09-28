import React from 'react'
import ItemCount from './ItemCount.jsx'
import {useState} from 'react'
// Router
import {Link} from 'react-router-dom'
 
// style
import './ItemDetail.css'

const ItemDetail = (props) => {

    const item = props.item

    const [input , setInput] = useState('quantity')

    return (
        <>
            <div className="itemDetail">
                <h1>Detalle del producto:</h1>
                <p>Descripción : {item.descripcion}</p>
                <p>Precio : ${item.precio}</p>
                <img src={item.foto} alt={item.descripcion}></img>

                {input === 'quantity' ?
                    <ItemCount stock={15} initial={1} item={item}/>
                    :
                    <Link to="/cart"><button>Terminar mi compra</button></Link>}
                
            </div>
        </>
    )
}

export default ItemDetail
