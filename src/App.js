import React, { useState, useReducer } from 'react';

import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import OrderItemList from './components/Order/OrderItemList/OrderItemList';
import Overlay from './components/Overlay/Overlay';
import Form from './components/Form';

const items = [
  {name: 'Sushi', description: 'Finest fish and veggies', price: "22.99"},
  {name: 'Schnitzel', description: 'A german specialty!', price: "16.50"},
  {name: 'Barbecue Burger', description: 'American, raw, meaty', price: "12.99"},
  {name: 'Green Bowl', description: 'Healthy...and green...', price: "18.99"},
];



function App() {

  const [ quantity, setQuantity ] = useState(0);

  const addQuantityHandler = (value) => {
    setQuantity((prev) => {
      return prev + value;
    });
  };

  return (
    <>
      <Nav quantity={quantity} />
      <Header />
      <OrderItemList addItem={addQuantityHandler} items={items} /> 
      {/* <Overlay /> */}
      {/* <Form /> */}
    </>
  );
}

export default App;
