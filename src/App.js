// import components
import NavBar from "./components/NavBar.js"
import ItemListContainer from "./components/ItemListContainer.js"
import ItemCount from './components/ItemCount.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'
// Router
import {BrowserRouter,Route,Switch} from 'react-router-dom'
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
				<Switch>
					<Route path="/" component={ItemListContainer} exact />
		 			<Route path="/categoria/:id" component={ItemListContainer} />
		 			<Route path="/item/:id" component={ItemDetailContainer} />
		 		</Switch>
			</div>
		</BrowserRouter>
	)}

export default App