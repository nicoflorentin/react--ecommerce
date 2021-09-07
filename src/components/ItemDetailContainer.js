import ItemDetail from './ItemDetail.js'
import React, {useEffect, useState} from 'react'

const id = 12 ;

const ItemDetailContainer = () => {

    const [itemShow, setItemShow] = useState([]) ;

    useEffect( ()=> {

        setTimeout(()=>{
            fetch('https://mocki.io/v1/2badf7f3-60be-45ef-aa03-48b470e3b553')
            .then(response => response.json())
            .then((data) => {
                const aux = data.find(data => data.id === id)
                setItemShow(aux)
            });
        },2000)

    },[]);

    return (
        <>
            <ItemDetail item={itemShow}/>
        </>
    )
}

export default ItemDetailContainer
