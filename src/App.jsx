import Cart from "./components/Cart.jsx";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import Orders from "./components/Orders.jsx";
import Checkout from "./components/UI/Checkout.jsx";
// import OrderDetails from "./components/OrderDetails.jsx/index.js.js";
import { CartContextProvider } from "./store/CartContext.jsx";
// import { OrderContextProvider } from "./store/OrderContext.jsx";
// import { OrderProgressContextProvider } from "./store/OrderProgressContext.jsx";
import {UserProgressContextProvider } from "./store/UserProgressContext.jsx";

function App() {
  return (
    <>
    {/* <OrderProgressContextProvider> */}
    <UserProgressContextProvider>
    <CartContextProvider>
    {/* <OrderContextProvider> */}
     <Header/>
     <Meals/>
     {/* <Orders/> */}
     {/* <OrderDetails/> */}
     <Cart/>
     <Checkout/>
     {/* </OrderContextProvider> */}
     </CartContextProvider>
     </UserProgressContextProvider>
     {/* </OrderProgressContextProvider> */}
    </>
  );
}

export default App;
