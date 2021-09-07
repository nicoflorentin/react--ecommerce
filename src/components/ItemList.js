import React from 'react' ;
import Item from "./Item.js" ;

// style
import './ItemList.css'

const ItemList = (props) => {

    const Items = props.arrayItems ;

    return (

        <>
            <ul className="ItemListjsUl">
                {Items.map((element) => (
                   <li className="itemListLi"><Item key={element.id} title={element.title} price={element.precio} pictureURL={element.pictureURL}/></li>
                ))}
            </ul>
        </>


    )
}

export default ItemList
