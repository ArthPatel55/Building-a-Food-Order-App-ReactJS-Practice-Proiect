import React from 'react'
import { currencyFormatter } from '../../util/formatting'

export default function CartItem({name,quantity,price,onIncrease,onDecreas}) {
  return (
    <li className='cart-item' >
        <p>{name} - {quantity} X {currencyFormatter.format(price)}</p>
        <p className='cart-item-actions'>
        <button onClick={onDecreas} >-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
        </p>
    </li>
    )
}
