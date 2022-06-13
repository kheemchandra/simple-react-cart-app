import React, { useState } from "react";

import Button from "../../UI/Button/Button";

import cls from "./OrderItem.module.css";

let value = 1;

const OrderItem = (props) => {
  const [amount, setAmount] = useState(1);

  const addItemHandler = (event) => {
    event.preventDefault();
    let val = +event.target.elements[0].value;
    props.addItem(val);
  };

  const changeAmountHandler = (event) => {
    let value = +event.target.value;
    setAmount(value);
  };

  console.log('Orderitem value: ', amount);

  return (
    <li className={cls["order"]}>
      <ul className={cls["order-left"]}>
        <li>
          <h4>{props.name}</h4>
        </li>
        <li className={cls["order-left__des"]}>{props.description}</li>
        <li>
          <span className={cls["order-left__amount"]}>${props.price}</span>
        </li>
      </ul>
      <form onSubmit={addItemHandler} className={cls["order-right"]}>
        <div>
          <label htmlFor="item">
            <b>Amount</b>
          </label>
          <input
            id="item"
            onChange={changeAmountHandler}
            min="1"
            step="1"
            defaultValue={amount}
            className={cls["order-right__input"]}
            type="number"
          />
        </div>
        <Button type="submit" className={cls["order-right__button"]}>
          + Add
        </Button>
      </form>
    </li>
  );
};

export default OrderItem;
