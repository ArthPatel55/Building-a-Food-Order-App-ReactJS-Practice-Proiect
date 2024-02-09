import React from 'react'
import useHttp from '../hooks/useHttp'
import Error from './Error';
import OrderItem from './UI/OrderItem.jsx';
const requestConfig={};
function Orders() {
    const {data:loadedOrders,isLoading,error}=useHttp('http://localhost:3000/orders',requestConfig,[]);
    if(isLoading){
        return<p className="center" > Fatching Orders...</p>
    }
    if(error){
        return <Error title="Failed to Fatch Orders details" message={error}/>
    }
    // return loadedOrders;
  return (
    <ul id="orders" >
        {loadedOrders.map((order)=>(<OrderItem key={order.id} order={order}/>))}
    </ul>
  )
}

export default Orders
// OrderButton.jsx

// import React, { useState } from 'react';
// import Button from './UI/Button';
// import Modal from './UI/Modal';
// import OrderList from './UI/OrderItem';

// const OrderButton = () => {
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/orders');
//       const data = await response.json();
//       setOrders(data);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   return (
//     <div><Modal>
//       <Button textOnly onClick={fetchOrders}>Order details</Button>
//       <OrderList orders={orders} /></Modal>
//     </div>
//   );
// };

// export default OrderButton;
