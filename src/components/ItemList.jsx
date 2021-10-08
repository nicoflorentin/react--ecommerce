import React from 'react';
import Item from "./Item.jsx";

// style
import './ItemList.css'

const ItemList = ({arrayItems}) => {

    const Items = arrayItems

    return (
        <>
            <ul className="ItemListjsUl">
                {Items.map((element) => (
                   <li className="itemListLi" key={element.id}><Item id={element.id} title={element.title} price={element.price} pictureURL={element.pictureURL}/></li>
                ))}
            </ul>
        </>
    )
}

export default ItemList