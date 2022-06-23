import React, { useContext, useState } from "react";
import { pcontext } from "./Productcontext";
import { Context } from "./Authenticationcontext";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Cartcontext } from "./Cardcontext";
import { Merocontext } from "./Themecontext.js";

const Navbar = () => {
  const { shoppingcart, totalprice, qty, dispatch } = useContext(Cartcontext);
  const { themes, themecolor, setthemecolor } = useContext(Merocontext);
  const [themebutton, setthemebutton] = useState(false);
  const [buttonclick, setbuttonclick] = useState(false);
  const [eachmenu, seteachmenu] = useState(false);
  const [hamburger, sethamburger] = useState(true);
  const navigator = useNavigate();
  const datafromauth = useContext(Context);
  const user = datafromauth.user;
  console.log(datafromauth);

  const data = useContext(pcontext);
  const themehandler = () => {
    console.log(themecolor);
    themecolor.color === "black"
      ? setthemecolor(themes.dark)
      : setthemecolor(themes.light);
    setthemebutton(!themebutton);
  };
  const handler = () => {
    setbuttonclick(false);
    sethamburger(true);
  };

  const hamburgerhandler = () => {
    setbuttonclick(!buttonclick);
    sethamburger(!hamburger);
  };

  return (
    <div className="headerii">
      <div className="headersec">
        <div className="logop">
          <h4 onClick={() => navigator("/")}>kinumna</h4>
        </div>
        <div className={buttonclick ? "linksonsmall" : "links"}>
          <NavLink to="/" onClick={handler}>
            Home
          </NavLink>
          <NavLink to="/product" onClick={handler}>
            Product
          </NavLink>

          <NavLink to="/Profile" onClick={handler}>
            Profile
          </NavLink>

          {!user && (
            <NavLink to="/Login" onClick={handler}>
              Login
            </NavLink>
          )}
        </div>
        <NavLink to="/cart">
          <i className="fa-solid fa-cart-arrow-down cart">
            <span className="itemcount"> {shoppingcart.length} </span>
          </i>
        </NavLink>

        {}

        <button className="themebutton" onClick={themehandler}>
          {themebutton ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </button>
        <button  className="hamburger" onClick={hamburgerhandler}>
          {hamburger ? (
            <i class="fa fa-bars" aria-hidden="true"></i>

          ) : (
            <i className="fa-solid fa-xmark "></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
