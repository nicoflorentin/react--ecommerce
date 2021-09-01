import React, {useEffect, useState} from 'react'

import ItemCount from './ItemCount.js'
import ItemList from './ItemList.js'

const ItemListContainer = () => {

    const promesa = () => {
        return new Promise((resolve,reject)=>{

            setTimeout( ()=>
                resolve([
                        { id: 1, title: "Producto1", precio: 234, pictureURL: "http://url1" },
                        { id: 2, title: "Producto2", precio: 456, pictureURL: "http://url2" },
                        { id: 3, title: "Producto3", precio: 2352, pictureURL: "http://url3" },
                        { id: 4, title: "Producto4", precio: 23, pictureURL: "http://url4" },
                        { id: 5, title: "Producto5", precio: 5467, pictureURL: "http://url5" }
                ]),2000)
        })
    } ;

    const [dataToShow , setDataToShow] = useState([])

    useEffect(() => {

        promesa().then((data) => {
            console.log(data)
            setDataToShow(data)

        }
        )
    }, [])

    return (
        <>
            <ItemCount stock="10" initial="1" onAdd=""/>
            <ItemList arrayItems={dataToShow}/>
        </>
    );
}

export default ItemListContainer