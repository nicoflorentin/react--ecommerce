import React , { useContext } from 'react'
import CartWidget from "./CartWidget.jsx"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ContextoCart from '../context/CartContext'
import 'bootstrap/dist/css/bootstrap.min.css';
// Router
import {Link} from 'react-router-dom'


const NavBar = (props) => {

	const { productos } = useContext(ContextoCart)
	const { nombre, apellido } = props ;

	return (
		<>
			<header>
				<Navbar>
					<Container>
						<Link to="/">
							<Navbar.Brand href="#home">
								AndamiosVC
							</Navbar.Brand>
						</Link>
					</Container>
				</Navbar>
				<h1>Bienvenido {nombre} {apellido}!</h1>
				<nav className = "navBar">
					<ul><Link to="/categoria/1">Categoría 1</Link></ul>
					<ul><Link to="/categoria/2">Categoría 2</Link></ul>
				</nav>
				<CartWidget productos={ productos }/>
			</header>
		</>
)}

export default NavBar