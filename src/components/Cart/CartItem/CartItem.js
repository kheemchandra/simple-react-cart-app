import React from "react";

import cls from "./CartItem.module.css";

const CartItem = (props) => {

  const decreaseCartItemHandler = (event) => {
    props.changeQuantity(q => q-1);
    props.dispatchCartQ(-1);
  };

  const increaseCartItemHandler = (event) => {
    props.changeQuantity(q => q+1);
    props.dispatchCartQ(1);
  };

  return (
    <li className={cls["cartitem"]}>
      <ul className={cls["cartitem-left"]}>
        <li>
          <h3>{props.name}</h3>
        </li>
        <ul className={cls["cartitem-left-lower"]}>
          <li>
            <span className={cls["cartitem-price"]}>${props.price}</span>
          </li>
          <li>
            <span className={cls["cartitem-quantity"]}>x {props.quantity}</span>
          </li>
        </ul>
      </ul>
      <ul className={cls["cartitem-right"]}>
        <li>
          <button onClick={decreaseCartItemHandler} className={cls["cartitem-right__button"]}>&#8211;</button>
        </li>
        <li>
          <button onClick={increaseCartItemHandler} className={cls["cartitem-right__button"]}>+</button>
        </li>
      </ul>
    </li>
  );
};

export default CartItem;
