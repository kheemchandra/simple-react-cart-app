import React from "react";

import Card from "../UI/Card/Card";
import CartItemList from "../Cart/CartItemList/CartItemList";

import cls from "./Overlay.module.css";

const Overlay = (props) => { 

  return (
    <div className={props.clsO[0]}>
      <Card className={cls["modal"]}>
        <CartItemList items={props.items} obj={props.obj}  arr1={props.arr1} clsO={props.clsO} />
      </Card>
    </div>
  );
};

export default Overlay;
