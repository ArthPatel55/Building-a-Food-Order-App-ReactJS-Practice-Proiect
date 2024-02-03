import React, { useReducer,createContext } from 'react'

const cartContext=createContext({
    items:[],
    addItem:(item)=>{},
    removeItem:(id)=>{}
});
function cartRrducer(state,action){
    if(action.type==='ADD_ITEM'){
        const existingCartItemIndex = state.item.findIndex(
        (item)=> item.id === action.item.id);
        const updatedItems =[...state.items];
        if(existingCartItemIndex>-1){
            const exisitingItem =state.item[existingCartItemIndex];
            const updatedItem ={
                ...exisitingItem,
                quantity:exisitingItem.quantity+1
            };
            updatedItems[existingCartItemIndex]= updatedItem;
        }else{
            updatedItems.push({...action.item,quantity:1});
        }
        return{...state,items:updatedItems};
    }
    if(action.type==='REMOVE_ITEM'){
        const existingCartItemIndex = state.item.findIndex(
        (item)=> item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItems=[...state.items];
        if(existingCartItem.quantity===1){
            const updatedItems =[...state.items];
            updatedItems.splice(existingCartItemIndex,1);
        }else{
            const updatedItem = {
                ...existingCartItem,
                quantity:existingCartItem.quantity-1,
            };
            updatedItems[existingCartItemIndex]=updatedItem;
        }
         return{...state,item:updatedItems};
    }
    return state;
}

export function CartContextProvider({children}) {
    const [cart,dispatchCartAction]= useReducer(cartRrducer,{item:[]});
    function addItem(item) {dispatchCartAction({type:'ADD_ITEM',item:item});}
    function removeItem(id) {dispatchCartAction({type:'REMOVE_ITEM',id});}
    const cartContext ={
        items: cart.items,
        addItem,
        removeItem
    };
   
    return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}
export default CartContext;
