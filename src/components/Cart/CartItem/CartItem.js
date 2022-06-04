import React from "react";

import cls from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={cls["cartitem"]}>
      <ul className={cls["cartitem-left"]}>
        <li>
          <h3>Schnitzel</h3>
        </li>
        <ul className={cls["cartitem-left-lower"]}>
          <li>
            <span className={cls["cartitem-price"]}>$16.5</span>
          </li>
          <li>
            <span className={cls["cartitem-quantity"]}>x 2</span>
          </li>
        </ul>
      </ul>
      <ul className={cls["cartitem-right"]}>
        <li>
          <button className={cls["cartitem-right__button"]}>&#8211;</button>
        </li>
        <li>
          <button className={cls["cartitem-right__button"]}>+</button>
        </li>
      </ul>
    </li>
  );
};

export default CartItem;