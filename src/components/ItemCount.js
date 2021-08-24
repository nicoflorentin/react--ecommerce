
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './ItemCount.css'


const ItemCount = (props) => {

	const {stock , initial , onAdd}= props ;

	const stockP = parseInt(stock) ;
	const initialP = parseInt(initial) ;  

	const [contador , setContador] = useState(initialP) ;

	function cambiarContadorPlus() {
		setContador(contador + 1)
	}

	function cambiarContadorMinus() {
		setContador(contador - 1)
	}

	function comprarButton() {
		alert(contador + ' Productos agregados!')
	}

	if (contador < 0) {
		cambiarContadorPlus()
	} else if (contador > stockP) {
		cambiarContadorMinus()
	}

	return (
		<>
			<div className="counter__container">
				<p>Stock {stockP - contador}</p>		
				<p>El contador va: {contador}</p>

				<div className="counter__buttonContainer">	
					<button className="buttonContainer__button" onClick={cambiarContadorMinus}><span>-</span></button>
					<button className="buttonContainer__button" onClick={cambiarContadorPlus}><span>+</span></button>
				</div>
				<button onClick={comprarButton}>Comprar</button>
			</div>
		</>
)}

export default ItemCount 