import { useContext } from 'react'
// import OrderContext from '../store/OrderContext.jsx'
import logoImg from '../assets/logo.jpg'
import CartContext from '../store/CartContext.jsx'
import UserProgressContext from '../store/UserProgressContext';
import OrderButton from './Orders';
import Button from './UI/Button.jsx'
// import OrderList from './UI/OrderItem';
import OrderProgressContext from '../store/OrderProgressContext.jsx';

export default function Header() {
    const cartCtx = useContext(CartContext);
    // const orderCtx = useContext(OrderContext);

    const orderProgressCtx =useContext(OrderProgressContext);
    const userProgressCtx = useContext(UserProgressContext); 

    // if(userProgressCtx){
    //   console.log(userProgressCtx)
    // }
    // if(orderProgressCtx){
    //   console.log(orderProgressCtx)

    // }
    // const totalOrder=orderCtx.item
    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
            return totalNumberOfItems + item.quantity;
        }, 0);
        // console.log(orderCtx);

      function handleShowCart(){
        userProgressCtx.showCart();
      }
      function handleShowOrder(){
        console.log("dssfad");
       orderProgressCtx.showOrder();
      }
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant" />
                <h1>React Food</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>
                  Cart ({totalCartItems})</Button>
                  <OrderButton/>
                  <Button textOnly onClick={handleShowOrder}>
                    Order
                  </Button>
            </nav>
        </header>
    )
}
