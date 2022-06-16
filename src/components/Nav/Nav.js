import React, { useContext } from "react";

import { ContextOverlay } from "../context/context";

import cls from "./Nav.module.css";



const Nav = (props) => {  
  
  const ctxOverlay = useContext(ContextOverlay);

  const addOverlayHandler = (event) => {
    ctxOverlay.clsO[1](ctxOverlay.arr1[0]);    
    document.body.style.overflowY = 'hidden';
  };

  return (
    <nav className={cls.nav}>
      <h1>ReactMeals</h1>
      <button onClick={addOverlayHandler} className={props.clsN}>
        <span className="material-symbols-outlined ">shopping_cart</span>
        Your Cart
        <span className={cls['cart-total']}>{props.Q}</span>
      </button>
    </nav>
  );
};

export default Nav;
