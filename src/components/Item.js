import React from 'react'
import {Link} from 'react-router-dom'
// style
import './Item.css'

const Item = (props) => {

    let {id,title,price,pictureURL} = props  

    console.log(props)  

    return (
        <>
            <li className = "ItemjsItem">
                <h1>{title}</h1>
                <p>Precio : ${price}</p>
                <img src={pictureURL} alt={title}/>
                <Link to="/item/:id">
                    <p>Ver detalles...</p>
                </Link>
            </li>
        </>

    );
}

export default Item
