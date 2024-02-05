import { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import CartContext from '../store/CartContext.jsx'
import Button from './UI/Button.jsx'

export default function Header() {
    const cartCtx = useContext(CartContext);
    const totalCartItems = cartCtx.items
        ? cartCtx.items.reduce((totalNumberOfItems, item) => {
            return totalNumberOfItems + item.quantity;
        }, 0)
        : 0;

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant" />
                <h1>React Food</h1>
            </div>
            <nav>
                <Button textOnly>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}
