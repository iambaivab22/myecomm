import React, { useContext } from "react";
import Navbar from "./Navbar";
import Productcontext from "./Productcontext.js";
import { ContextProvider } from "./Authenticationcontext";
import Profileeditor from './Profileeditor.js';
import Addresseditor from './Addresseditor.js';

import Cart from "./Cart";
import Home from "./Home";
import { Cardcontext } from "./Cardcontext";

import { Routes, Route } from "react-router-dom";

import Detailsproduct from "./Detailsproduct";
import Profile from "./Profile.js";
import All from "./All.js";
import Boy from "./Boy.js";
import Girl from "./Girl.js";
import Login from "./Login";
import Product from "./Product";
import { Merocontext } from "./Themecontext";
import Footer from "./Footer";

const App = () => {
  const { themes, themecolor, setthemecolor } = useContext(Merocontext);

  return (
    <>
      <div className="maindiv" style={themecolor}>
        <ContextProvider>
          <Productcontext>
            <Cardcontext>
              <Navbar></Navbar>
              <Routes>
                <Route path="/" element={<Home />}>
                  <Route index element={<All />} />
                  <Route path="all" element={<All />} />
                  <Route path="boy" element={<Boy />} />
                  <Route path="girl" element={<Girl />} />
                </Route>
                <Route
                  path="/home/:productid"
                  element={<Detailsproduct />}
                ></Route>
                <Route path="cart" element={<Cart />} />
                <Route path="/addresseditor" element={<Addresseditor />} />
                <Route path="product" element={<Product />}>
                  <Route index element={<All />} />
                  <Route path="all" element={<All />} />
                  <Route path="boy" element={<Boy />} />
                  <Route path="girl" element={<Girl />} />
                </Route>


                <Route path="profile" element={<Profile />}>
                <Route path="profileeditor" element={<Profileeditor />} />
               
                </Route>

                
                <Route path="login" element={<Login />} />
              </Routes>
            </Cardcontext>
          </Productcontext>
        </ContextProvider>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
