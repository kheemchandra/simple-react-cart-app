import React, { useReducer } from 'react';

import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import OrderItemList from './components/Order/OrderItemList/OrderItemList';
import Overlay from './components/Overlay/Overlay';

const items = [
  {name: 'Sushi', description: 'Finest fish and veggies', price: "22.99"},
  {name: 'Schnitzel', description: 'A german specialty!', price: "16.50"},
  {name: 'Barbecue Burger', description: 'American, raw, meaty', price: "12.99"},
  {name: 'Green Bowl', description: 'Healthy...and green...', price: "18.99"},
];

const cartReducer = (state, action) => {
  return {quantity: state.quantity + action.value }
}

function App() {

  const [ cartQuantity, dispatchCartQuantity ] = useReducer(cartReducer, {quantity: 0});

  return (
    <>
      <Nav quantity={cartQuantity.quantity} />
      <Header />
      <OrderItemList addItem={dispatchCartQuantity} items={items} /> 
      {/* <Overlay /> */}
    </>
  );
}

export default App;
