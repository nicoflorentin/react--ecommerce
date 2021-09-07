// style
import './Item.css'

const Item = (props) => {

    let {key,title,price,pictureURL} = props    

    return (
        <>
            <li className = "ItemjsItem">
                <h1>{title}</h1>
                <p>Precio : ${price}</p>
                <img src={pictureURL} alt={title}/>
            </li>
        </>

    );
}

export default Item
