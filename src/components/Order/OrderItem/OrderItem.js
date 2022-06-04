import React from 'react';

import Button from '../../UI/Button/Button';

import cls from './OrderItem.module.css';

let value = 1;

const OrderItem = (props) => {

  const addItemHandler = (event) => {
    props.addItem({value: value});
  }
 
  const changeAmountHandler = (event) => {
    value = +event.target.value;
    console.log('next value is ', value);
    // props.addItem({value: value});
  }

  return (
    <li className={cls['order']}>
      <ul className={cls['order-left']}>
        <li><h4>{props.name}</h4></li>
        <li className={cls['order-left__des']}>{props.description}</li>
        <li><span className={cls['order-left__amount']}>${props.price}</span></li>
      </ul>
      <ul className={cls['order-right']}>
        <li>
          <label><b>Amount</b></label>
          <input onChange={changeAmountHandler} min='1' step='1'   className={cls['order-right__input']} type='number'/>
        </li>
        <li>
          <Button onClick={addItemHandler} className={cls['order-right__button']}>+ Add</Button>
        </li>
      </ul>
    </li>
  );
};

export default OrderItem;