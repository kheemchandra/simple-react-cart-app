import React, { useContext } from "react";
import { ContextEntries, ContextItems, ContextOverlay } from "../../context/context";

import CartItem from "../CartItem/CartItem";

import cls from "./CartItemList.module.css";

const CartItemList = (props) => {

  const ctxEntries = useContext(ContextEntries);
  const ctxItems = useContext(ContextItems);
  const ctxOverlay = useContext(ContextOverlay);

  let totalCost = 0;
  let content = [];
  const entries = Object.entries(ctxEntries.entries);
  entries.forEach((entry) => {
    let id = entry[0];
    let quantity = entry[1].quantity;
    if (quantity) {
      let item = ctxItems.items.filter((i) => {
        return i.id === id;
      })[0];
      totalCost += quantity * +item.price;

      content.push(
        <CartItem
          key={id}
          id={id}
          dispatchEntries={ctxEntries.dispatchEntries}
          name={item.name}
          price={item.price}
          quantity={ctxEntries.entries[id]['quantity']}
        />
      );
    }
  });

  const removeOverlayHandler = (event) => {
    ctxOverlay.clsO[1](ctxOverlay.arr1[1]);
    document.body.style.overflow = "auto";
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
          <button
            disabled={!totalCost}
            onClick={cartOrderHandler}
            className={cls["cart-button"]}
          >
            Order
          </button>
        </li>
      </ul>
    </ul>
  );
};

export default CartItemList;
