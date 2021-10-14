import React from 'react'
import ItemCount from './ItemCount.jsx'
// style
import '../styles/ItemDetail.css'

const ItemDetail = (props) => {

    const item = props.item

    return (
        <>
            <div className="itemDetail">
                <h1>Detalle del producto:</h1>
                <p>Descripción : {item.description}</p>
                <p>Precio : ${item.price}</p>
                <img src={item.imgURL} alt={item.description}></img>
                <ItemCount stock={item.stock} initial={1} item={item}/>                
            </div>
        </>
    )
}

export default ItemDetail
