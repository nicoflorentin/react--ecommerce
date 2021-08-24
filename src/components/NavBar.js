import CartWidget from "./CartWidget.js"

const NavBar = () => {
	return (
		<>
			<header>
				<h1>Andamios<span className="header__VC">VC</span></h1>
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