
import React, { useState } from 'react';
import Button from './UI/Button';
import Modal from './UI/Modal';
import OrderList from './UI/OrderItem';

const OrderButton = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:3000/orders');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <div><Modal>
      <Button textOnly onClick={fetchOrders}>Order details</Button>
      <OrderList orders={orders} /></Modal>
    </div>
  );
};

export default OrderButton;
