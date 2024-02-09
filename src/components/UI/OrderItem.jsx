
import React from 'react';
import OrderDetails from '../OrderDetails';

const OrderList = ({ orders }) => {
  return (
    <div>
      {orders.map(order => (
        <OrderDetails key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
