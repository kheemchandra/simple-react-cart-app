import React from "react";

import Card from "../UI/Card/Card";

import cls from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
    <div className={cls["header"]}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#3f3f3f" points="0,100 100,0 100,100"/>
    </svg>
    </div>
    
    <Card className={cls.intro}>
    <h1>Delicious Food, Delivered To You</h1>
    <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
    <p>
      All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
    </p>
  </Card>
  
  </header>
  );
};

export default Header;
