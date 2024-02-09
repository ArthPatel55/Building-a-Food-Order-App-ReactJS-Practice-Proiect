// <!-- // import React, { useState } from 'react';
// // import { useContext } from 'react';
// // import OrderContext from '../store/OrderContext';
// // import OrderProgressContext from '../store/OrderProgressContext';
// // import Modal from './UI/Modal.jsx';
// // import Button from './UI/Button.jsx';
// // import OrderItem from './UI/OrderItem';

// // export default function OrderDetails() {
// //   const orderCtx = useContext(OrderContext);
// //   const orderProgressCtx = useContext(OrderProgressContext);
// //   const [selectedOrder, setSelectedOrder] = useState(OrderItem);

// //   const handleShowOrderDetails = (order) => {
// //     setSelectedOrder(order);
// //     orderProgressCtx.showOrder();
// //   };
// // console.log(selectedOrder)
// //   const handleCloseOrder = () => {
// //     setSelectedOrder(null);
// //     orderProgressCtx.hideOrder();
// //   };

// //   return (<>
// //       {/* Button to trigger the order details modal */}
// //       {/* <Button onClick={() => handleShowOrderDetails(orderCtx.order)}>
// //         View Order Details
// //       </Button> */}

// //       {/* Modal to display order details */}
// //       <Modal
// //         className="order"
// //         open={orderProgressCtx.progress === 'order'}
// //         onClose={handleCloseOrder}
// //       >
// //         <h2>adsfsada</h2>
// //         {selectedOrder && (
// //           <>
// //             <h2>Your Order Details</h2>
// //             <OrderItem order={selectedOrder} />
// //             <p className="modal-actions">
// //               <Button textOnly onClick={handleCloseOrder}>
// //                 Close
// //               </Button>
// //             </p>
// //           </>
// //         )}
// //       </Modal>
// //     </>
// //   );
// // }

import React from 'react'
import { useContext } from 'react'
// import OrderContext from '../store/OrderContext'
import OrderProgressContext from '../store/OrderProgressContext';
import Modal from './UI/Modal.jsx'
import Button from './UI/Button.jsx';
import OrderItem from './UI/OrderItem';

export default function OrderDetails() {
  // const orderCtx = useContext(OrderContext);
  const orderProgressCtx = useContext(OrderProgressContext);
  const handleCloseOrder = () => {
    orderProgressCtx.hideOrder();
  };
  // console.log("context-> ", orderCtx) orderCtx.order !== undefined && orderCtx
  return (
    <Modal
    className="order"
    open={orderProgressCtx.progress === 'order'}
    onClose={orderProgressCtx.progress === 'order' ? handleCloseOrder : null}
  >
      <h2>Your Order Details</h2>
      {/* {.order.map((order) => (
  <OrderItem key={order.id} order={order} />
))} */}
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseOrder}>
          Close
        </Button>
      </p>
    </Modal>
  )
} 
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Order Details</title>
//   <style>
//     /* Add your styling here */
//     /* You can use CSS to style the order details */
//   </style>
// </head>
// <body>

//   <h1>Order Details</h1>

//   <div id="orderContainer"></div>

//   <script>
//     // Your order data
//     const orders = [
//       // ... (paste your order data here)
//     ];

//     // Function to display order details
//     function displayOrders() {
//       const orderContainer = document.getElementById('orderContainer');

//       // Loop through each order
//       orders.forEach(order => {
//         const orderDiv = document.createElement('div');

//         // Display order ID
//         orderDiv.innerHTML += `<p><strong>Order ID:</strong> ${order.id}</p>`;

//         // Display customer information
//         orderDiv.innerHTML += `<p><strong>Customer Name:</strong> ${order.customer.name}</p>`;
//         orderDiv.innerHTML += `<p><strong>Email:</strong> ${order.customer.email}</p>`;
//         orderDiv.innerHTML += `<p><strong>Address:</strong> ${order.customer.street}, ${order.customer.city} ${order.customer['postal-code']}</p>`;

//         // Display ordered items
//         orderDiv.innerHTML += '<p><strong>Ordered Items:</strong></p>';
//         order.items.forEach(item => {
//           orderDiv.innerHTML += `
//             <p>
//               <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px;">
//               ${item.quantity} x ${item.name} - $${item.price} each
//             </p>
//           `;
//         });

//         // Add some spacing between orders
//         orderDiv.innerHTML += '<hr>';

//         // Append orderDiv to orderContainer
//         orderContainer.appendChild(orderDiv);
//       });
//     }

//     // Call the displayOrders function when the page loads
//     window.onload = displayOrders;
//   </script>

// </body>
// </html>
// OrderDetails.jsx

// import React from 'react';

// const OrderDetails = ({ order }) => {
//   return (
//     <div>
//       <h3>Order ID: {order.id}</h3>
//       <p>Customer: {order.customer.name}</p>
//       <ul>
//         {order.items.map(item => (
//           <li key={item.id}>
//             {item.name} - Quantity: {item.quantity} - Price: ${item.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default OrderDetails;
