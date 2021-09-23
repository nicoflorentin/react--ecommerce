import React from 'react'
import { useState, createContext } from 'react'

export const contextoCart = createContext()

const {Provider} = contextoCart

const CartContext = ({children}) => {

	const [productos , setProductos] = useState([])

	console.log(productos)
	
	const addProduct = (item,quantity) => {
		console.log(quantity + ' ' + item.descripcion + 's llegaron al contexto!')
		var cart = productos.push(item)
		console.log('carro : ' + cart)
		console.log('producto : ' + productos)


	}
	
	const removeProduct = (id) => { }

	return (
		<Provider value={{productos,addProduct,removeProduct}}>
			{children}
		</ Provider>
	)
}

export default CartContext