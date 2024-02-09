

import React from 'react';

const OrderDetails = ({ order }) => {
  return (
    <div>
      <h3>Order ID: {order.id}</h3>
      <p>Customer: {order.customer.name}</p>
      <ul>
        {order.items.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity} - Price: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;
