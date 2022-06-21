import React, { createContext, useReducer } from "react";

import { reducer } from "./Usereducer.js";
export const Cartcontext = createContext();

export const Cardcontext = (props) => {
  const [cards, dispatch] = useReducer(reducer, {
    shoppingcart: [],
    totalprice: 0,
    qty: 0,
  });

  return (
    <>
      <Cartcontext.Provider value={{ ...cards, dispatch }}>
        {props.children}
      </Cartcontext.Provider>
    </>
  );
};
