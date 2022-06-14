import React from "react";

import OrderItem from "../OrderItem/OrderItem";

import cls from "./OrderItemList.module.css";

const OrderItemList = (props) => {
  let orders = props.items.map((item) => {
    return (
      <OrderItem
      dispatchCartQ={props.dispatchCartQ}
      obj={props.obj}
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      />
      );
    });
    
  return <ul className={cls["order-list"]}>{orders}</ul>;
};

export default OrderItemList;
