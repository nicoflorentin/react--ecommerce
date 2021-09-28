import React, {useEffect, useState} from 'react'

import ItemCount from './ItemCount.jsx'
import ItemList from './ItemList.jsx'
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {

    const promesa = () => {
        return new Promise((resolve, reject) => {

            setTimeout(() =>
                resolve([
                    { "id": 1, "categoria": 1, "title": "Producto 1", "precio": 123, "foto": "asd.png" },
                    { "id": 2, "categoria": 1, "title": "Producto 2", "precio": 1234, "foto": "asd.png" },
                    { "id": 3, "categoria": 2, "title": "Producto 3", "precio": 1235, "foto": "asd.png" },
                    { "id": 4, "categoria": 2, "title": "Producto 4", "precio": 1236, "foto": "asd.png" },
                    { "id": 5, "categoria": 2, "title": "Producto 5", "precio": 1237, "foto": "asd.png" },
                    { "id": 6, "categoria": 2, "title": "Producto 6", "precio": 1238, "foto": "asd.png" },
                    { "id": 7, "categoria": 2, "title": "Producto 7", "precio": 1239, "foto": "asd.png" },
                    { "id": 8, "categoria": 1, "title": "Producto 8", "precio": 1230, "foto": "asd.png" },
                    { "id": 9, "categoria": 2, "title": "Producto 9", "precio": 1312, "foto": "asd.png" },
                    { "id": 10, "categoria": 2, "title": "Producto 10", "precio": 1312, "foto": "asd.png" },
                    { "id": 11, "categoria": 1, "title": "Producto11", "precio": 1323, "foto": "asd.png" },
                    { "id": 12, "categoria": 1, "title": "Producto 12", "precio": 124, "foto": "asd.png" },
                    { "id": 13, "categoria": 1, "title": "Producto 13", "precio": 145, "foto": "asd.png" },
                    { "id": 14, "categoria": 1, "title": "Producto 14", "precio": 2356, "foto": "asd.png" },
                    { "id": 15, "categoria": 1, "title": "Producto 15", "precio": 1367, "foto": "asd.png" },
                    { "id": 16, "categoria": 1, "title": "Producto 16", "precio": 1378, "foto": "asd.png" },
                    { "id": 17, "categoria": 2, "title": "Producto 17", "precio": 189, "foto": "asd.png" },
                    { "id": 18, "categoria": 2, "title": "Producto 18", "precio": 1390, "foto": "asd.png" },
                    { "id": 19, "categoria": 1, "title": "Producto 19", "precio": 3123, "foto": "asd.png" },
                    { "id": 20, "categoria": 1, "title": "Producto 20", "precio": 13234, "foto": "asd.png" },
                    { "id": 21, "categoria": 1, "title": "Producto 21", "precio": 13345, "foto": "asd.png" },
                    { "id": 22, "categoria": 2, "title": "Producto 22", "precio": 12456, "foto": "asd.png" },
                    { "id": 23, "categoria": 2, "title": "Producto 23", "precio": 23567, "foto": "asd.png" },
                    { "id": 24, "categoria": 2, "title": "Producto 24", "precio": 23678, "foto": "asd.png" },
                    { "id": 25, "categoria": 2, "title": "Producto 25", "precio": 1378, "foto": "asd.png" }
                ]), 1)
        })
    };

    const [dataToShow , setDataToShow] = useState([])
    const {id} = useParams()

    useEffect(() => {

        promesa().then((data) => {

            if(id){
                setDataToShow(data.filter(data => data.categoria == id))
            } else {
                setDataToShow(data)
            }
        })

    },[id])

    return (
        <>
            {/*<ItemCount stock="10" initial="1" onAdd=""/>*/}
            <ItemList arrayItems={dataToShow}/>
        </>
    );
}

export default ItemListContainer