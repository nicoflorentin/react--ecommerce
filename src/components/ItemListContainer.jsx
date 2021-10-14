import React, {useEffect, useState} from 'react'
import ItemList from './ItemList.jsx'
import { useParams } from 'react-router-dom'

import { firestore } from '../Firebase'

const ItemListContainer = () => {

    const [dataToShow , setDataToShow] = useState([])
    const [loaded , setLoaded] = useState(false)

    const {id} = useParams()
    const idNum = parseInt(id)

    useEffect( ()=>{
        // referencia a la base de datos
        const dataBase = firestore
        // referencia a la coleccion
        const collection = dataBase.collection("productos")
        // hago un query
        const query = collection.get()
        
        const productos = []
        // el query tiene una promesa
        query.then((snapshot)=>{
            // obtengo un snapshot de documentos en array
            const docs = snapshot.docs
            // recorro el array para ver cada snapshotDocument
            docs.forEach((doc)=>{
                const docSnapshot = doc
                // creo un objeto nuevo con las mismas propiedades mas la clave id
                const productoConId = {...docSnapshot.data(), id:docSnapshot.id}
                productos.push(productoConId)

                setLoaded(true)
            })
            if (idNum) {
                setDataToShow(productos.filter(producto => producto.categoryID === idNum ))
            } else {
                setDataToShow([...productos])
            }
        })
        .catch((error)=>{
            console.log(error)
        })

    },[idNum])

    return (
        <>
            {loaded
                ?   <ItemList arrayItems={dataToShow}/>
                :   <p>Cargando...</p>
            }
        </>
    );
}

export default ItemListContainer