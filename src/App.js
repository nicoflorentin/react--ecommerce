// import components
import NavBar from "./components/NavBar.js"
import ItemListContainer from "./components/ItemListContainer.js"
import ItemCount from './components/ItemCount.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'

// style
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// component function
const App = () => {
	
	return (
		<>
			<div className="AppContainer">		
				<NavBar nombre="Nicolás" apellido="Florentín"/>
				<ItemListContainer />
				<ItemDetailContainer />
			</div>
		</>
	)}

export default App