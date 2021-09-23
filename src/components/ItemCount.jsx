import { useState , useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { contextoCart } from '../context/CartContext.jsx'

import './ItemCount.css'


const ItemCount = (props) => {
	const {stock , initial , onAdd, item} = props ;
	console.log('item del hijo : ' + item.descripcion )

	// traigo las variables del contexto
	const { productos, addProduct, removeProduct } = useContext(contextoCart)

	// parseo el stock y el initial
	const stockP = parseInt(stock) ;
	const initialP = parseInt(initial) ; 

	// defino las variables del estado
	const [contador , setContador] = useState(initialP) ;

	function cambiarContadorPlus() {
		setContador(contador + 1)
	}
	function cambiarContadorMinus() {
		setContador(contador - 1)
	}
	const clickOnAdd = () => {
		onAdd(contador)
		setContador(initial)
	}
	if (contador < 0) {
		cambiarContadorPlus()
	} else if (contador > stockP) {
		cambiarContadorMinus()
	}

	return (
		<>
			<div className="counter__container">
				<p>Stock { stockP - contador }</p>		
				<p>El contador va: { contador }</p>

				<div className="counter__buttonContainer">	
					<button className="buttonContainer__button" onClick={cambiarContadorMinus}><span>-</span></button>
					<button className="buttonContainer__button" onClick={cambiarContadorPlus}><span>+</span></button>
				</div>
				<button onClick={ clickOnAdd } >Agregar al carrito</button>
				<button onClick={ ()=>addProduct(item,contador) }>Probar funcion!</button>

			</div>
		</>
)}

export default ItemCount 