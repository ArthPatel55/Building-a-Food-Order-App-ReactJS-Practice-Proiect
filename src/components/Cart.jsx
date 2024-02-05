import React, { useContext } from 'react';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button.jsx';
import Modal from './UI/Modal.jsx'

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext); 

  const cartTotal = cartCtx.items.reduce(
  (totalPrice,item)=>totalPrice + item.quantity * item.price,0)
    return (
   <Modal className='cart' open={userProgressCtx.progress ==='cart'}>
    <h2>Your Cart</h2>
    <ul>
        {cartCtx.items.map(item=>
        <li kry={item.id}>
            {item.name} - {item.quantity}
        </li>)}
    </ul>
    <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
    <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go to Checkout</Button>
        </p>
   </Modal>
  )
}