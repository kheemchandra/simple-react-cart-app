import React, { useContext } from "react";
import ReactDOM from 'react-dom';

import Card from "../UI/Card/Card";
import { ContextOverlay } from "../context/context";

import CartItemList from "../Cart/CartItemList/CartItemList";

import cls from "./Overlay.module.css";

const Overlay = (props) => { 
  const ctxOverlay = useContext(ContextOverlay);
  return ReactDOM.createPortal(
    <div className={ctxOverlay.clsO[0]}>
      <Card className={cls["modal"]}>
        <CartItemList />
      </Card>
    </div>,
    document.body
  );
};

export default Overlay;
