import React from 'react'
import { useNavigate } from 'react-router-dom';
const Addresseditor = () => {
const Navigator=useNavigate();
    const addressupdate=()=>{
        Navigator('/profile');
    }
  return (
    <div>
      <div className="addressdetails d-flex justify-content-around">
          <div className="d-flex justify-content-center flex-column">
              <h4 className="font-weight-bold">Shipping address</h4><br></br>
               <input type="text" placeholder="type here..."></input><br></br>
               <button onClick={addressupdate}>update</button>
              
          </div>
          
          <div className="d-flex justify-content-center flex-column">
            <h4 className="font-weight-bold">Billing Address</h4><br></br>
          <input type="text" placeholder="type here..."></input><br></br>
          <button onClick={addressupdate}>update</button>
          </div>

</div>
      
    </div>
  )
}

export default Addresseditor;
