import React, { useContext } from "react";
import Productbox from "./Productbox";
import { pcontext } from "./Productcontext";

const Girl = () => {
  const data = useContext(pcontext);
  const girldata = data.filter((filtered) => filtered.mwcategory === "girl");
  return (
    <div>
      <h2 className="text-center">For Girls</h2>
      <hr></hr>

      <div className="row">
        {girldata.map((data) => {
          return (
            <>
              <Productbox data={data}></Productbox>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Girl;
