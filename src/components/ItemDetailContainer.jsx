import ItemDetail from './ItemDetail.jsx'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const { id } = useParams()

    const [itemShow, setItemShow] = useState();

    useEffect(() => {

        setTimeout(() => {
            fetch('https://mocki.io/v1/ab4ee0fe-e3d1-4fca-8c2a-b6c55e915a16')
                .then((response) => response.json())
                .then((data) => {
                    const aux = data.find(data => data.id == id)
                    setItemShow(aux)

                });
        }, 2000)

    }, [id]);

    return ( 
        <>
            {itemShow && <ItemDetail item={itemShow}/>}
        </>
    )
}

export default ItemDetailContainer