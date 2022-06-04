import React from "react";

import Card from "../UI/Card/Card";
import CartItemList from "../Cart/CartItemList/CartItemList";

import cls from "./Overlay.module.css";

const Overlay = (props) => {
  return (
    <>
      <button id="btn">Click here</button>

      <div className={cls["overlay"]}></div>
      <Card className={cls["modal"]}>
        <CartItemList />
      </Card>
    </>
  );
};

export default Overlay;
