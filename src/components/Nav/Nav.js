import React from "react";

import cls from "./Nav.module.css";



const Nav = (props) => {  
  
  const addOverlayHandler = (event) => {
    props.clsO[1](props.arr1[0]);    
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
