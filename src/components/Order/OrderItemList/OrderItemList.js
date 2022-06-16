import React, { useContext } from "react";

import { ContextItems } from "../../context/context";

import OrderItem from "../OrderItem/OrderItem";

import cls from "./OrderItemList.module.css";

const OrderItemList = (props) => {
  const ctx = useContext(ContextItems); 

  let orders = ctx.items.map((item) => {
    return (
      <OrderItem
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
