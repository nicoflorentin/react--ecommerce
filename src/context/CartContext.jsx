import React from 'react'
import { useState, createContext } from 'react'

export const contextoCart = createContext()
const { Provider } = contextoCart

const CartContext = ({ children }) => {
        const [productos, setProductos] = useState([])

        const addProduct = (newItem, quantity) => {
            // console.log(quantity + ' ' + newItem.descripcion + 's llegaron al contexto!')

            if (isInCart(newItem.id)) {
                productos.forEach(element => {
                    if (element.item.id === newItem.id) {
                        element.quantity += quantity
                        setProductos(productos)
                    }
                })
            } else {
                // agrego el nuevo objeto al state array
                productos.push({ item: newItem, quantity: quantity })
                // seteo el state
                setProductos(productos)
            }
        }

        const removeProduct = (id) => { }

        const clearCart  = () => {
            setProductos([])
        }

        const isInCart = (id) => {
            return productos.find(producto => producto.item.id === id)
        }

        return (
                <Provider value={{ productos,addProduct,removeProduct,clearCart }}>
			{children}
		</ Provider>
	)
}

export default CartContext