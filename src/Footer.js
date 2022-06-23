import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const Navigator = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row footersec">
        <div className="col-lg-4 col-md-4 col-sm-4 eachf">
          <h3 className="font-weight-bold">Kinbech</h3>
           
          

          <p>
            kinumna.com is FREE online classified which enables individuals as
            well as companies to list wide variety of new or used product
            online. We at kinumna.com believe that Internet is a great
            promotional vehicle as well
          </p>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4 eachf">
          <h3 className="font-weight-bold">Legal</h3>
          <p>Terms & condition</p>
          <p>Privacy Policy</p>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4 eachf">
          <h3 className="font-weight-bold">Contact us</h3>

          <p>Contact No:+977-9848934903</p>
          <p>Kalanki-14 Kathmandu Nepal</p>
          <div className="d-flex flex-direction-row">
            <i className="fa-brands fa-facebook contacticons"></i>
            <i className="fa-brands fa-instagram contacticons"></i>
            <i className="fa-brands fa-youtube contacticons"></i>
          </div>
        </div>
      </div>

      <div className="meroclass container-fluid mt-3">
        <p>
          Already a Customer?<button className="loginbtn" onClick={()=>Navigator('/login')}>login</button>
          {/* <Link to="/Login" className="loginf">
            Login
          </Link> */}

{/* <button onClick={Navigator('/login')}>
            login
          </button> */}
        </p>
        <p className="copyright">copyright@baivab2022</p>
        
        <div className="scroller">
          <a href="#">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
