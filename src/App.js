import React, { useState, useReducer, useEffect, useRef } from "react";

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import OrderItemList from "./components/Order/OrderItemList/OrderItemList";
import Overlay from "./components/Overlay/Overlay";

import cls from "./components/Nav/Nav.module.css";
import cls1 from './components/Overlay/Overlay.module.css';

const arr = [
  cls["cart-total-wrapper"],
  cls["cart-total-wrapper"] + " " + cls["scale"],
];

const arr1 = [
  cls1['overlay'], 
  cls1['overlay'] + ' ' + cls1['hidden']
];

const items = [
  {
    id: "i1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: "22.99",
  },
  {
    id: "i2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: "16.50",
  },
  {
    id: "i3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: "12.99",
  },
  {
    id: "i4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: "18.99",
  },
];

const cartReducer = (state, action) => {
  return { quantity: state.quantity + action}
};

function App() {

  const [cartQ, dispatchCartQ] = useReducer(cartReducer, {quantity: 0});

  const [item1, setItem1] = useState(0);
  const [item2, setItem2] = useState(0);
  const [item3, setItem3] = useState(0);
  const [item4, setItem4] = useState(0);

  const [clsN, setClsN] = useState(arr[0]);

  const clsO = useState(arr1[1]);

  const isMounted  = useRef(false);

  let obj = {
    
    i1: {
      value: item1,
      func: setItem1,
    },
    i2: {
      value: item2,
      func: setItem2,
    },
    i3: {
      value: item3,
      func: setItem3,
    },
    i4: {
      value: item4,
      func: setItem4,
    },
  };

  
  useEffect(() => {
    if(isMounted.current){
      setClsN(arr[1]);
      setTimeout(() => {
        setClsN(arr[0]);
      }, 150);
    }else{
      isMounted.current = true;
    }

  }, [cartQ]);

  return (
    <>
      <Nav  clsO={clsO} arr1={arr1} Q={cartQ.quantity} clsN={clsN} />
      <Header />
      <OrderItemList dispatchCartQ={dispatchCartQ}  obj={obj} items={items} />
      <Overlay dispatchCartQ={dispatchCartQ} items={items} obj={obj}  arr1={arr1} clsO={clsO} /> 
    </>
  );
}

export default App;