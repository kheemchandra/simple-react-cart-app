import React, { useState, useReducer } from "react";

import cls1 from '../../components/Overlay/Overlay.module.css';

export const ContextEntries = React.createContext({entries:null, dispatchEntries:null});
export const ContextItems = React.createContext({items: null});
export const ContextOverlay = React.createContext({clsO: null, arr1: null});

const arr1 = [
  cls1['overlay'], 
  cls1['overlay'] + ' ' + cls1['hidden']
];

const items = [
  {
    id: "i1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: "22.99",
  },
  {
    id: "i2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: "16.50",
  },
  {
    id: "i3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: "12.99",
  },
  {
    id: "i4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: "18.99",
  },
];

// action = {id: 'i4', quantity: 10}
const entriesReducer = (state, action) => {
  let {id, quantity} = action;
  let newState = {...state};
  newState[id]['quantity'] += quantity;
  return newState;
}; 

export default function ContextProvider(props) {

  const [entries, dispatchEntries] = useReducer(entriesReducer, {
    i1:{
      'quantity': 0
    },
    i2:{
      'quantity': 0
    },
    i3:{
      'quantity': 0
    },
    i4:{
      'quantity': 0
    }
  });

  const clsO = useState(arr1[1]);

  return (
    <ContextEntries.Provider value={{entries:entries, dispatchEntries:dispatchEntries}}>
      <ContextItems.Provider value={{items:items}}>
        <ContextOverlay.Provider value={{clsO:clsO, arr1:arr1}}>
          {props.children}
        </ContextOverlay.Provider>
      </ContextItems.Provider>
    </ContextEntries.Provider>    
  );
}

