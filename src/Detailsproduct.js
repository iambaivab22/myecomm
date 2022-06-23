import React, { useContext,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pcontext } from "./Productcontext";
import { Cartcontext } from "./Cardcontext";
import "./Detailsproduct.css";
import ReactImageMagnify from 'react-image-magnify';
import { Link } from "react-router-dom";


const Detailsproduct = () => {
  const details = useContext(pcontext);
  const { dispatch } = useContext(Cartcontext);
  const navigator = useNavigate();
  const params = useParams();
  const productid = params.productid;
  const meroimage = details[productid - 1].source;
  const filteritem = details.filter(
    (item) => item.maincategory === details[productid - 1].maincategory
  );
  const similaritem = filteritem.filter(
    (item) => item.id !== details[productid - 1].id
  );
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  console.log(similaritem);
  return (
    <div className="container-fluid">
      <div className="row dprow">
        <div className="col-lg-3 col-md-3 col-sm-6 col-6 dpcol style={{width:'342px' height:'513px'}}">
          {/* <img
            src={`/${meroimage}`}
            width="375px"
            height="375px"
            className="img-fluid"
          ></img> */}
<ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: `/${meroimage}`
       
    },
    largeImage: {
        src: `/${meroimage}`,
        width: 1000,
        height: 1200, 

        
    }
    
    
}} />









        </div>

        <div className="col-lg-3 col-md-3 col-sm-6 col-6"></div>

        <div className="col-lg-6 col-md-6 col-sm-6 des col-12">
          <h1 className="name">{details[productid - 1].name}</h1>
          <p className="description">
            description{details[productid - 1].description}
          </p>

          <div className="detailbox">
            <div className="details">
              <p> Price</p>
              <p className="maindata">{`$ ${details[productid - 1].price}`}</p>
            </div>

            <div className="details">
              <p> status</p>
              <p className="maindata">{details[productid - 1].status}</p>
            </div>

            <div className="details">
              <p> Review</p>
              <p className="maindata">{details[productid - 1].review}</p>
            </div>

            <div className="details">
              <p> Category</p>
              <p className="maindata"> {details[productid - 1].category}</p>
            </div>
          </div>

          <div className="row d-flex justify-content-arond">
            <div className="col-6">
              {" "}
              <button
                className="button1"
                onClick={() =>
                  dispatch({
                    type: "Addtocart",
                    id: productid,
                    data: details[productid - 1],
                  })
                }
              >
                Add to Cart
              </button>
            </div>

            <div className="col-6">
              {" "}
              <button className="button2" onClick={() => navigator("/cart")}>
                Go To Card
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center">similar items</h2>
      <hr></hr>

      <div className="row similarrow">
        {similaritem.map((item) => {
          return (
            <>
              <div className=" col-lg-3 col-md-4 col-sm-6 col-6 similarcol ">
                <h4 className="name">{item.name}</h4>

                <h6 className="price">{`$ ${item.price}`}</h6>
                <img
                  src={`/${item.source}`}
                  className="similaritemimage img-fluid"
                ></img>
                <div className="text-center">
                  <Link to={"/home/" + item.id} className="buy_now">
                    Buy Now
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Detailsproduct;
