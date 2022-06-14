import React from 'react';

import CartItem from '../CartItem/CartItem';

import cls from './CartItemList.module.css';

const CartItemList = (props) => {
  let totalCost = 0;
  let content = [];
  let obj = props.obj;
  const entries = Object.entries(props.obj);
  entries.forEach((entry)=>{
    let id = entry[0];
    let value = entry[1].value;
    if(value){
      let item = props.items.filter(i => {
        return i.id === id
      })[0];
      totalCost += value * (+item.price);

      content.push(<CartItem key={item.id} name={item.name} price={item.price} quantity={value}/>);
    }
  });
  
  const removeOverlayHandler = (event) => {
    props.clsO[1](props.arr1[1]);
  };

  const cartOrderHandler = (event) => {
    console.log('Ordering...');
  };

  return (
    <ul className={cls['cart-list']}>
      {content}
      <li>
        <ul className={cls['cart-total']}>
          <li className={cls['total-label']}>Total Amount</li>
          <ul className={cls['cart-total-right']}>
            <li className={cls['total-amount']}>${totalCost.toFixed(2)}</li>
            <ul>
              <button onClick={removeOverlayHandler} className={cls['cart-button']}>Close</button>
              <button onClick={cartOrderHandler} className={cls['cart-button']}>Order</button>
            </ul>
          </ul>
        </ul>
      </li>
    </ul>
  );

};

export default CartItemList;