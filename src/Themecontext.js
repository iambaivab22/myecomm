import React, { createContext, useState } from "react";

export const themes = {
  light: {
    color: "black",
    backgroundColor: "white",
  },
  dark: {
    color: "white",
    backgroundColor: "black",
  },
};

export const Merocontext = createContext();

const Themecontext = (props) => {
  const [themecolor, setthemecolor] = useState(themes.light);
  return (
    <Merocontext.Provider value={{ themes, themecolor, setthemecolor }}>
      {props.children}
    </Merocontext.Provider>
  );
};

export default Themecontext;
