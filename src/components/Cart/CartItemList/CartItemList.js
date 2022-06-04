import React from 'react';

import CartItem from '../CartItem/CartItem';

import cls from './CartItemList.module.css';

const CartItemList = (props) => {
  let content = [];
  for(let i=0; i<3; ++i){
    content.push(<CartItem />);
  }

  return (
    <ul className={cls['cart-list']}>
      {content}
      <li>
        <ul className={cls['cart-total']}>
          <li className={cls['total-label']}>Total Amount</li>
          <ul className={cls['cart-total-right']}>
            <li className={cls['total-amount']}>$72.49</li>
            <ul>
              <button className={cls['cart-button']}>Close</button>
              <button className={cls['cart-button']}>Order</button>
            </ul>
          </ul>
        </ul>
      </li>
    </ul>
  );

};

export default CartItemList;