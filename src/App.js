import React, { useState, useEffect, useRef, useContext } from "react";

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import OrderItemList from "./components/Order/OrderItemList/OrderItemList";
import Overlay from "./components/Overlay/Overlay";

import cls from "./components/Nav/Nav.module.css"; 
import { ContextEntries } from "./components/context/context";

const arr = [
  cls["cart-total-wrapper"],
  cls["cart-total-wrapper"] + " " + cls["scale"],
];


function App() {
  const [cartQ, setCartQ] = useState(0);

  const [clsN, setClsN] = useState(arr[0]);

  const isMounted = useRef(false);

  const ctxEntries = useContext(ContextEntries);

  useEffect(() => {
    if (isMounted.current) {
      setClsN(arr[1]);
      setTimeout(() => {
        setClsN(arr[0]);
      }, 150);
    } else {
      isMounted.current = true;
    }
  }, [cartQ]);

  useEffect(() => {
    let total = 0;
    for (let id in ctxEntries.entries) {
      total += ctxEntries.entries[id]["quantity"];
    }
    setCartQ(total);
  }, [
    ctxEntries.entries,
    ...Object.entries(ctxEntries.entries).map((entry) => entry[1]["quantity"]),
  ]);

  return (
    <>
      <Nav Q={cartQ} clsN={clsN} />
      <Header />
      <OrderItemList />
      <Overlay />
    </>
  );
}

export default App;
