import React from "react";
import { Link } from "react-router-dom";
import "./Productbox.css";
const Productbox = (props) => {
  const data = props.data;
  const redstyle = {
    backgroundColor: "green",
    color: "white",
  };

  const bluestyle = {
    backgroundColor: "red",
    color: "white",
  };
  console.log(data.source);

  return (
    <>
    
      <div className="col-md-2 col-lg-2 col-sm-6 col-6 eachcol">
        <div className="eachproduct text-center">
          <div className="imgsection">
            <img
               src={`/${data.source}`}
              
              className=" primage img-fluid mb-4"
            ></img>
            <h6
              className="category_on_image"
              style={data.category === "new" ? redstyle : bluestyle}
            >
              {data.category}
            </h6>
          </div>

          <h5 className=" mb-2">{data.name}</h5>
          <h5 className="mb-4  text-bold">{`$${data.price}`}</h5>

          <Link to={"/home/" + data.id} className="buy_now">
            Buy Now
          </Link>

          {/* <button onClick={()=>dispatch({type:"Addtocart",id:data.id,data:data})}>Add to Cart</button> */}
        </div>
      </div>
    </>
  );
};

export default Productbox;
