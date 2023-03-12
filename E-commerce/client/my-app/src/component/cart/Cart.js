import React,{useState} from 'react'
import "./cart.css";
import Arrow from '../../image/arrow.png'
import CartP from '../../image/cart.png' 
import { Scrollbars } from 'react-custom-scrollbars-2';
import Item from './Item';
import { products } from './product';

//import AddIcon from '@material-ui/icons/Add';
const Cart = () => {
    const [item, setItem] = useState(products)
  return (
    <>
      <header>
        <div className="continue-shopping">
            <img src={Arrow} alt='arrow' className='arrow-icon'/>
            <h3>Continue shopping</h3>
        </div>

        <div className="cart-icon">
        <img src={CartP} alt='arrow' className='arrow-icon'/>
        <p>7</p>
        </div>
      </header>

      <section className='main-cart-section'>
        <h1>Shopping Cart</h1>
        <p className='total-items'>you have <span className='total-items-count'>7</span> items in shopping cart</p>

        <div className="cart-items">
            <div className="cart-items-container">
            <Scrollbars>
               {
                item.map((curItem)=>{
                    return <Item key={curItem.id} {...curItem}/>
                })
               }
                </Scrollbars>
            </div>
        </div>

        <div className="card-total">
            <h3>card Total : <span> 2200rs</span></h3>
            <button>checkout</button>
        </div>
      </section>
    </>
  )
}

export default Cart



//import React, { createContext, useReducer } from "react";
//import React, { createContext, useReducer, useEffect } from "react";
//import "./cart.css";
// import { products } from "./products";
// import ContextCart from "./ContextCart";
// import { reducer } from "./reducer";
// export const CartContext = createContext();
// const initialState = {
//   item: products,
//   totalAmount: 0,
//   totalItem: 0,
// };
//const Cart = () => {
  // const [item, setItem] = useState(products);
//   const [state, dispatch] = useReducer(reducer, initialState);
//   // to delete the indv. elements from an Item Cart
//   const removeItem = (id) => {
//     return dispatch({
//       type: "REMOVE_ITEM",
//       payload: id,
//     });
//   };

//   // clear the cart
//   const clearCart = () => {
//     return dispatch({ type: "CLEAR_CART" });
//   };

//   // increment the item
//   const increment = (id) => {
//     return dispatch({
//       type: "INCREMENT",
//       payload: id,
//     });
//   };

//   // decrement the item
//   const decrement = (id) => {
//     return dispatch({
//       type: "DECREMENT",
//       payload: id,
//     });
//   };

//   // we will use the useEffect to update the data
//   useEffect(() => {
//     dispatch({ type: "GET_TOTAL" });
//     // console.log("Awesome");
//   }, [state.item]);

 // return (
    // <CartContext.Provider value={{ ...state, removeItem }}>
    // <CartContext.Provider
    //   value={{ ...state, removeItem, clearCart, increment, decrement }}>
    //   <ContextCart />
    // </CartContext.Provider>
 // )
//};
//export default Cart;