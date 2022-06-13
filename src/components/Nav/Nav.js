import React, { useState, useEffect, useReducer } from "react";

import cls from "./Nav.module.css";

const reducerQ = (state, action) => {
  return {quantity: state.quantity + action};
};

const Nav = (props) => {   

  return (
    <nav className={cls.nav}>
      <h1>ReactMeals</h1>
      <button className={props.clsN}>
        <span className="material-symbols-outlined ">shopping_cart</span>
        Your Cart
        <span className={cls['cart-total']}>{props.Q}</span>
      </button>
    </nav>
  );
};

export default Nav;
