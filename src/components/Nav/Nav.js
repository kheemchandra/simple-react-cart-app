import React from "react";

import cls from "./Nav.module.css";

const Nav = (props) => { 
  return (
    <nav className={cls.nav}>
      <h1>ReactMeals</h1>
      <button className={cls['cart-total-wrapper']}>
        <span className="material-symbols-outlined ">shopping_cart</span>
        Your Cart
        <span className={cls['cart-total']}>{props.quantity}</span>
      </button>
    </nav>
  );
};

export default Nav;
