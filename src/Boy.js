import React, { useContext } from "react";
import Productbox from "./Productbox";
import { pcontext } from "./Productcontext";

const Boy = () => {
  const data = useContext(pcontext);
  const boydata = data.filter((filtered) => filtered.mwcategory === "boy");
  return (
    <div>
      <h2 className="text-center">For Boys</h2>
      <hr className="hrstyle" />

      <div className="row">
        {boydata.map((data) => {
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

export default Boy;
