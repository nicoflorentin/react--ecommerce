import Item from "./Item.js"

// style
import './ItemList.css'

const ItemList = (props) => {

    const Items = props.arrayItems ;
    console.log(Items)


    return (

        <>
            <ul className="ItemListjsUl">
                {Items.map((element) => (
                    <Item id={element.id} title={element.title} price={element.precio} pictureURL={element.pictureURL}/>
                ))}
            </ul>
        </>


    )
}

export default ItemList
