import React , {useState} from 'react'
import ItemCount from './ItemCount.jsx'
// Router
import {Link} from 'react-router-dom'

// style
import '../styles/ItemDetail.css'

const ItemDetail = (props) => {

    const item = props.item
    const [input , setInput] = useState('quantity')

    return (
        <>
            <div className="itemDetail">
                <h1>Detalle del producto:</h1>
                <p>Descripción : {item.description}</p>
                <p>Precio : ${item.price}</p>
                <img src={item.imgURL} alt={item.description}></img>
                {input === 'quantity' ?
                    <ItemCount stock={item.stock} initial={1} item={item}/>
                    :
                    <Link to="/cart"><button>Terminar mi compra</button></Link>}
                
            </div>
        </>
    )
}

export default ItemDetail
