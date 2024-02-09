import React from 'react'

export default function OrderItem({order}) {
  // if (!order || !order.customer) {
  //   // If order or order.customer is undefined, return some default content or an empty fragment
  //   // return <p>No order data available{
  //     // console.log(order.item)}{
        console.log(order)
// }</p>;

  // }
  if (!order || !order.customer) {
    // You can return some default content or an empty fragment
    return <p>No order data available</p>;
  }
  const { name, email, street, city} = order.customer;
return (
    <div>
      <li>
        <article>
        <p>Customer Name: {name}</p>
          <p>Email: {email}</p>
          <p>Street: {street}</p>
          <p>City: {city}</p>
          <h3>Order Items:</h3>
          <ul>
            {order.items.map((item) => (
              <li key={item.id}>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
      </article>
      </li>
    </div>
  )
}
//  OrderList.jsx

// import React from 'react';
// import OrderDetails from '../OrderDetails';

// const OrderList = ({ orders }) => {
//   return (
//     <div>
//       {orders.map(order => (
//         <OrderDetails key={order.id} order={order} />
//       ))}
//     </div>
//   );
// };

// export default OrderList;
