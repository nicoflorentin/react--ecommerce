import cart_free from "../img/cart_free.png"
import Button from 'react-bootstrap/Button';

const CartWidget = () => {

    return (

        <Button variant="outline-warning"><img src={cart_free} className="cartWidget__icon" alt="" /></Button>

    );
}

export default CartWidget
