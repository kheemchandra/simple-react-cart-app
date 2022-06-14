import React from "react";

import CartItem from "../CartItem/CartItem";

import cls from "./CartItemList.module.css";

const CartItemList = (props) => {
  let totalCost = 0;
  let content = [];
  let obj = props.obj;
  const entries = Object.entries(props.obj);
  entries.forEach((entry) => {
    let id = entry[0];
    let value = entry[1].value;
    if (value) {
      let item = props.items.filter((i) => {
        return i.id === id;
      })[0];
      totalCost += value * +item.price;

      content.push(
        <CartItem
          changeQuantity={props.obj[id]["func"]}
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={value}
        />
      );
    }
  });

  const removeOverlayHandler = (event) => {
    props.clsO[1](props.arr1[1]);
    document.body.style.overflowY = 'auto';
  };

  const cartOrderHandler = (event) => {
    console.log("Ordering...");
  };

  return (
    <ul className={cls["cart-list"]}>
      {content}
      <ul className={cls["cart-list-footer"]}>
        {totalCost !== 0 && (
          <ul className={cls["cart-total"]}>
            <li>Total Amount</li>
            <li>${totalCost.toFixed(2)}</li>
          </ul>
        )}
        {totalCost === 0 && (
          <li className={cls["cart-empty"]}>
            <p>Your cart is empty!!!</p> <p>Please add items to order.</p>
          </li>
        )}
        <li className={cls["cart-buttons"]}>
          <button onClick={removeOverlayHandler} className={cls["cart-button"]}>
            Close
          </button>
          <button disabled={!totalCost}  onClick={cartOrderHandler} className={cls["cart-button"]}>
            Order
          </button>
        </li>
      </ul>
    </ul>
  );
};

export default CartItemList;
