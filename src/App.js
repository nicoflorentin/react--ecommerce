// import components
import NavBar from "./components/NavBar.js"
import ItemListContainer from "./components/ItemListContainer.js"
import ItemCount from './components/ItemCount.js'

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
			</div>
		</>
	)}

export default App