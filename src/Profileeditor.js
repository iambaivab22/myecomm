import React,{useContext,useState} from 'react';
import { Context } from "./Authenticationcontext";
import {useNavigate} from 'react-router-dom';
import './Profileeditor.css';
const Profileeditor=()=>{
    const data = useContext(Context);
    const Navigator=useNavigate();
    const [updateuser,setupdateuser]=useState();
  console.log(data.user);

     const updatefunction=(e)=>{
         data.user=setupdateuser(e.target.value);
         
        }

const changesubmit=()=>{
    data.user=updateuser;
    Navigator('/profile');
    console.log(data.user);
}
    return(
<>
<div classname="row">
<label>Username</label><br></br>
<input type="text" onChange={updatefunction} className="inpt"></input><br></br>

<label>Birthday</label><br></br>
<input type="date" className="inpt"></input>
<br></br>
<hr></hr>
<button onClick={changesubmit} className="btn">Save Changes</button>

</div>
</>

    )
}

export default Profileeditor;