import React from 'react';
import Item from "./Item.jsx";

// style
import './ItemList.css'

const ItemList = (props) => {

    const Items = props.arrayItems;

    return (
        <>
            <ul className="ItemListjsUl">
                {Items.map((element) => (
                   <li className="itemListLi"><Item id={element.id} key={element.id} title={element.title} price={element.price} pictureURL={element.pictureURL}/></li>
                ))}
            </ul>
        </>
    )
}

export default ItemList