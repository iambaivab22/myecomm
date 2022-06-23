import React, { useContext } from "react";
import { useNavigate,Outlet,Link } from "react-router-dom";
import { Context } from "./Authenticationcontext";
import "./Profile.css";

const Profile = () => {
  const data = useContext(Context);
  const Navigator = useNavigate();
  console.log(data);
  

  const logouthandler = () => {
    data.logout();

    Navigator("/");
  };
  return (
    <div>
      <div>
        <div className="container-fluid">
          <div className="row mainprofile">
            <div className="col-sm-2 flex jusitfy-content-center p_first">
               <h3>Hello,{data.user}</h3>
               <p className="verified_account col-8">Verified Account</p>
               <h6>Manage My Account</h6>
              <ul>
                <li>My Profile</li>
                <li>Address Book</li>
                <li>My payment Option</li>
                <li>Vouchers</li>
                </ul>

                <h6>My orders</h6>
              <ul>
                <li>My Returns</li>
                
                <li>Cancellations</li>
                </ul>

                <h6>My Review</h6>
                <h6>My wishlist Followed Stores</h6>

             

               

             
            </div>

            <div className="col-sm-10  p_second">
             <h2>Manage My Account</h2>  
              <div className="row d-flex justify-content-space-between">
               
                <div className="col-sm-4 profile_column">
                 <h3>Personal Profile </h3> <Link to="profileeditor" className="edit">
        Edit
        </Link>
                 <Outlet></Outlet> 
                 <h5>{data.user}</h5>
                 <p>Subscribe to our Newsletter</p>
                
                </div>
                <div className="col-sm-3  profile_column1">
                  <h3>Address Book</h3><Link to="/addresseditor" className="edit">
        Add
        </Link>
                
                  <p>Save your shopping address here</p>

                </div>
                <div className="col-sm-2 profile_column1 ">
                   <p>Save your billing address here</p>
                </div>
                <div className="col-sm-1  ">
                <button onClick={logouthandler} className="logout">Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
