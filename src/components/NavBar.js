import CartWidget from "./CartWidget.js"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
	return (
		<>
			<header>
				<Navbar>
					<Container>
						<Navbar.Brand href="#home">
							AndamiosVC
						</Navbar.Brand>
					</Container>
				</Navbar>

				<nav className = "navBar">
					<ul><a href="#">Módulos</a></ul>
					<ul><a href="#">Precios</a></ul>
					<ul><a href="#">Nosotros</a></ul>
				</nav>
				<CartWidget/>
			</header>
		</>
)}

export default NavBar