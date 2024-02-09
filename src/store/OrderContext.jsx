import React, { useReducer,createContext } from 'react'

const OrderContext=createContext({
    items:[],
    addItem:(item)=>{},
    removeItem:(id)=>{},
    clearOrder:()=>{},
    orders:(item)=>{}
});
function orderRrducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        
        const existingOrderItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        console.log(existingOrderItemIndex)
        const updatedItems = [...state.items];
        if (existingOrderItemIndex > -1) {
            const existingItem = state.items[existingOrderItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingOrderItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }
        return { ...state, items: updatedItems };
        
    }

    // console.log(existingItem);
    if (action.type === 'REMOVE_ITEM') {
        const existingOrderItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingOrderItem = state.items[existingOrderItemIndex];
        const updatedItems = [...state.items];
        if (existingOrderItem.quantity === 1) {
            updatedItems.splice(existingOrderItemIndex, 1);
        } else {
            const updatedItem = {
                ...existingOrderItem,
                quantity: existingOrderItem.quantity - 1
            };
            updatedItems[existingOrderItemIndex] = updatedItem;
        }
        return { ...state, items: updatedItems };
    }

    if(action.type==='CLEAR_ORDER'){
        return{...state,items:[]};
    }
    return state;

}



export function OrderContextProvider({ children }) {
    const [order, dispatchOrderAction] = useReducer(orderRrducer, { items: [] });
    function addItem(item) {
        dispatchOrderAction({ type: 'ADD_ITEM', item: item });
    }
    function removeItem(id) {
        dispatchOrderAction({ type: 'REMOVE_ITEM', id: id });
    }
    function clearOrder(){
        dispatchOrderAction({type:'CLEAR_ORDER'});
    }
    function orders(){
        order();
    }
    console.log(order)
    const orderContext = {
        items: order.items,
        addItem,
        removeItem,
        clearOrder,
        orders
    };
    return (
        <OrderContext.Provider value={orderContext}>{children}</OrderContext.Provider>
    );
}

export default OrderContext;
