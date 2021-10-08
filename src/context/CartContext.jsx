import React , { useState, createContext } from 'react'

const ContextoCart = createContext()

const CartProvider = ({ children }) => {

		console.log("cartcontext render")

		const [productos, setProductos] = useState([])

		// consulta carrito
		const isInCart = (id) => {
			return productos.find(producto => producto.item.id === id)
		}

		// agregar producto
		const addProduct = (newItem, quantity) => {
			if (isInCart(newItem.id)) {
				console.log('entre en el if')
				productos.forEach(element => {
					if (element.item.id === newItem.id) {
						element.quantity += quantity
					}
				})
				// setProductos(productos)

			} else {
				// agrego el nuevo objeto al state array
				setProductos([...productos,{ item: newItem, quantity: quantity }])
			}
		}

		// borrar productos
		const deleteGroup = (id) => {
			productos.forEach(element => {
				if (element.item.id === id) {
					const index = productos.indexOf(element)
					productos.splice(index, 1)
					setProductos([...productos])
				}
			})
		};

		// limpiar carrito
		const clearCart  = () => {
			setProductos([])
		}

		const render = () => {
			setProductos([{	item:
								{categoryID: 1,
								description: "Este es el producto 1",
								id: "Kuq2EftoRrgnLrhDHdXN",
								imgURL: "http://img.com/imagen1",
								price: 1590,
								stock: 10,
								title: "Producto 1"},
							quantity: 1
			}])
		}

		const data = { 	productos,
						addProduct,
						clearCart,
						deleteGroup, 
						setProductos,
						render
					}

		return (
			<ContextoCart.Provider value={data}>

			  { children }

			</ ContextoCart.Provider>
)}

export { CartProvider }
export default ContextoCart