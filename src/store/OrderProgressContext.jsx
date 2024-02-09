import React from 'react'
import {createContext,useState} from 'react';

const OrderProgressContext = createContext({
    progress:'',
    showOrder:()=>{},
    hideOrder:()=>{}
});
export function OrderProgressContextProvider({children}) {
    
    const [orderProgress,setOrderProgress] = useState();
    function showOrder(){
        setOrderProgress('order');
    }
    function hideOrder(){
        setOrderProgress('');
    }
    
    const orderProgressCtx={
        progress:orderProgress,
        showOrder,
        hideOrder,
    };
    // console.log(orderProgressCtx);{console.log(children)}
  return (
    <OrderProgressContext.Provider value={orderProgressCtx} >
        {children}</OrderProgressContext.Provider>
  )
  
}

export default OrderProgressContext

