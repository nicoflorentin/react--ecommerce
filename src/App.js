// import components
import NavBar from "./components/NavBar.js"
import ItemListContainer from "./components/ItemListContainer.js"
import ItemCount from './components/ItemCount.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'
// Router
import {BrowserRouter, Route} from 'react-router-dom'
// style
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// component function
const App = () => {
	
	return (
		<BrowserRouter>
			<div className="AppContainer">		
				<NavBar nombre="Nicolás" apellido="Florentín" />
				{/*<ItemListContainer />
				<ItemDetailContainer />*/}
				<Route path="/" component={ItemListContainer} exact />
	 			<Route path="/categoria/:id" component={ItemListContainer} exact />
	 			<Route path="/item/:id" component={ItemDetailContainer} />
			</div>
		</BrowserRouter>
	)}

export default App