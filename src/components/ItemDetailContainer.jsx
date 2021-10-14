import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail.jsx'
import { useParams } from 'react-router-dom'

import { firestore } from '../Firebase'

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [itemShow, setItemShow] = useState();
    const [loaded , setLoaded] = useState(false)

    useEffect(()=>{
        // referencia a la base de datos
        const dataBase = firestore
        // referencia a la coleccion
        const collection = dataBase.collection("productos")
        // hago una referencia al documento, lo busco por ID
        const productoRef = collection.doc(id)
        // hago el query al documento
        const productoQuery = productoRef.get()
        // resuelvo la promesa
        productoQuery.then((prod)=>{
        // traduzco el documento y seteo el estado
        setItemShow({...prod.data(), id:id})

        setLoaded(true)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[id])

    return ( 
        <>
            {loaded
                ? itemShow && <ItemDetail item={itemShow}/>
                : <p>Cargando...</p>
            }        
        </>
    )
}

export default ItemDetailContainer