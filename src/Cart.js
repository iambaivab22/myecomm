import React, { useContext, useState, createContext,useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Cartcontext } from "./Cardcontext";
import Stripe from "./Stripe";
import "./Cart.css";

const Cart = () => {
  const Navigator = useNavigate();
  const { shoppingcart, totalprice, qty, dispatch } = useContext(Cartcontext);
   const shippingprice=totalprice>0?50:0;
   useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container">
      {/* <div className="continueshopping">
        <h2>shopping cart</h2>
      </div> */}

      <div className="row cartdiv">
        <div className="col-sm-7 col-12 cartitems">
          {shoppingcart.length > 0 ? (
            shoppingcart.map((cart) => (
              <div className="cart" key={cart.id}>
                <div className="container">
                  <div className="row each_cart">
                    <div className=" cart_product_image text center">
                      <img
                        src={cart.source}
                        alt="not found"
                        className="img-fluid productimage"
                      ></img>
                    </div>
                    <div className="cart_product_name">{cart.name}</div>

                    <div className=" product_quantity">
                      QUANTITY
                      <p>{cart.qty}</p>
                      <div>
                        <button
                          className="btns"
                          onClick={() =>
                            dispatch({
                              type: "increment",
                              id: cart.id,
                              cart: cart,
                            })
                          }
                        >
                          <i class="fa-solid fa-plus"></i>
                        </button>

                        <button
                          className="btns"
                          onClick={() =>
                            dispatch({ type: "decrement", id: cart.id, cart })
                          }
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>

                        <button
                          className="btns"
                          onClick={() =>
                            dispatch({ type: "delete", id: cart.id, cart })
                          }
                        >
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                    <div className="cart_product_price">
                      SUBTOTAL
                      <p>{`$ ${cart.eachtotalprice}`}</p>
                    </div>
                  </div>
                  <hr className="hrline"></hr>
                </div>
              </div>
            ))
          ) : (
          <div className="d-flex  empty text-center justify-content-center flex-column ">
            <div><img src="emptycart.png" className="img-fluid emptycart"></img></div>
            <div  className="text-center"><h2 className="oops">oops! your cart is empty</h2></div>
            </div>
          )}
        </div>

        <div className="col-sm-5 col-12 maincols">
          <table id="hamrotable">
            <tr className="tablerow">
              <td>Products</td>
              <td>{`$ ${totalprice}`}</td>
            </tr>
            <hr></hr>

            <tr className="tablerow">
              <td>Shipping</td>
              <td>{shippingprice}</td>
            </tr>
            <hr></hr>
            <tr className="tablerow">
              <td>Tax</td>
              <td>13%</td>
            </tr>
            <hr></hr>

            <tr className="tablerow">
              <td>Total</td>
              <td>{`$ ${totalprice+totalprice*0.13+shippingprice}`}</td>
            </tr>
            <hr></hr>
          </table>
        </div>
      </div>
      <div className="buttons">
        <div>
          <button className="btn1">
            <Link to="/product">Continue shopping</Link>
          </button>
        </div>
        <div className="btn2">
          
          <Stripe price={totalprice}></Stripe>
        </div>
      </div>
    </div>
  );
};

export default Cart;
