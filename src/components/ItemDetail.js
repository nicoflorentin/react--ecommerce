import React from 'react'

// style
import './ItemDetail.css'

const ItemDetail = (props) => {

    const item = props.item

    return (
        <>
            <div className="itemDetail">
                <h1>Detalle del producto:</h1>
                <p>Descripción : {item.descripcion}</p>
                <p>Precio : ${item.precio}</p>
                <img src={item.foto}></img>
            </div>
        </>
    )
}

export default ItemDetail
