
import React, { useContext, useState, useEffect } from "react";
import { Cartcontext } from "./Cardcontext";
import { pcontext } from "./Productcontext";
import { Link, Outlet } from "react-router-dom";
import "./Product.css";
import Productbox from "./Productbox";
const Product = () => {

  const data = useContext(pcontext);
  const { dispatch } = useContext(Cartcontext);
  const [searchproduct, setsearchproduct] = useState("  ");
  const [searched, setsearched] = useState([]);
  const[checkclick,setcheckclick]=useState(false);
  const[checkclick2,setcheckclick2]=useState(false);
  const checkarray=["electronics","new","old" ,"boy","girl"];

  
  // const boydata=data.filter(filtered=>filtered.mwcategory==='boy');
  // const bdata=boydata.slice(0,4);
  console.log("initial state ho");
  console.log(searched);

  // const categoryhandler=(category)=>{
  // const newdata=data.filter(filtered=>filtered.mwcategory===category);
  // setcategorydata(newdata);
  // }

  // const cdata=categorydata.slice(0,4);

  function searchhandlerfunction(e) {
    setsearchproduct(e.target.value);
   
    console.log(data);
  }


  useEffect(() => {
    const searcheddata = data.filter((filtered) => {
      return filtered.name.includes(searchproduct);
    });
    console.log("it search garepaxi ko hai");
    console.log(searchproduct);
    console.log(searcheddata);

    // setsearched(searcheddata);

    setsearched(searcheddata);
    console.log(searched);
  }, [searchproduct]);

  const [checkedState, setCheckedState] = useState(
    new Array(checkarray.length).fill(false)
);




  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  }

useEffect(()=>{
  console.log(checkedState);
  const datas=checkedState.reduce((acc,curr,index)=>{
    if(curr === true){
      const merofilter=data.filter((item)=>{
       return item.mwcategory===checkarray[index];

      }
      )
       acc.push(...merofilter);
    }else{
      return acc;
    }
    
    return acc;
  },[])
  console.log("it is filtered data");
  setsearched(datas);
},[checkedState])
  
    
console.log("it is search garepaxi ko hai");
console.log(searched);








  return (
    <>
      <h2 className="mb-3 mt-3 text-center">Latest Product</h2>
      <hr className="text-light mb-3"></hr>

      {/* <div className="categorie text-center">
         <button onClick={()=>setcategorydata(data)} className="btn btn-outline-primary mx-3">All</button>
      <button onClick={()=>categoryhandler('boy')} className="btn btn-outline-primary mx-3">Boy</button>
      <button onClick={()=>categoryhandler('girl')} className="btn btn-outline-primary mx-3">Girl</button> 
         </div> */}

      <div className="search_box text-center">
        <input
          type="text"
          className="search"
          placeholder="search product"
          onChange={searchhandlerfunction}
        ></input>


        <i className="searchicon fa-solid fa-magnifying-glass "></i>
      </div>
      <div className="mainboxes">
       <div className="checkboxes">
      {
     
    checkarray.map((data,index)=>{
      return (
        <div key={index} >
          <input
                    className="eachcheckbox"
                    type="checkbox"
                    
                    value={data}
                    onChange={() => handleOnChange(index)}
                  />{data}
        </div>
      )
    })


      }

      </div>
</div>




      <div className="linkss">
        <Link to="all" className="eachlinks">
          All
        </Link>
        <Link to="boy" className="eachlinks">
          Boy
        </Link>
        <Link to="girl" className="eachlinks">
          Girl
        </Link>
      </div>

      <div className="container-fluid">
        {/* <div className="row"> */}
        {/* {
      
      cdata.map((data)=>{
        
      
  return(
        <>
         <Productbox data={data}></Productbox>

      </>


        )
      }
      )
    }

</div>
   



<br></br>
<h2 className="text-center">For boys</h2>
<div className="row">


<hr></hr>

{
      
      bdata.map((data)=>{
        
      
  return(
        <>
         <Productbox data={data}></Productbox>

      </>


        )
      }
      )
    }
</div>

<br></br>
<h2 className="text-center">For Girls</h2>
<hr></hr>

<div className="row">


{
      
      girldata.map((data)=>{
        
      
  return(
        <>
         <Productbox data={data}></Productbox>

      </>


        )
      }
      )
    }

</div>





   
    
</div> */}

        <div className="row">
          {searched.map((datas) => {
            return (
              <>
                <Productbox data={datas}></Productbox>
              </>
            );
          })}
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Product;
