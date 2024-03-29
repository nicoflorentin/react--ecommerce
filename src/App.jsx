import React from 'react'
// import components
import NavBar from "./components/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import {CartProvider} from './context/CartContext.jsx'
import Cart from './components/Cart.jsx'
// Router
import {BrowserRouter,Route,Switch} from 'react-router-dom'
// style
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// component function
const App = () => {
	
	return (
		<BrowserRouter>
			<CartProvider>
				<div className="AppContainer">		
					<NavBar nombre="Nicolás" apellido="Florentín" />
					{/*<ItemListContainer />
					<ItemDetailContainer />*/}
					<Switch>
						<Route path="/" component={ItemListContainer} exact />
			 			<Route path="/categoria/:id" component={ItemListContainer} />
			 			<Route path="/item/:id" component={ItemDetailContainer} />
			 			<Route path="/cart" component={Cart} />
			 		</Switch>
				</div>
			</ CartProvider>
		</BrowserRouter>
	)}

export default App