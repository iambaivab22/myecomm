import React, { useContext } from "react";
import Productbox from "./Productbox.js";
import { pcontext } from "./Productcontext";
import Boy from "./Boy";
import Girl from "./Girl";

const All = () => {
  const data = useContext(pcontext);
  const cdata = data.slice(0, 6);
  return (
    <div>
      <div className="row">
        {cdata.map((data) => {
          return (
            <>
              <Productbox data={data}></Productbox>
            </>
          );
        })}
      </div>
      <br></br>
      <Boy></Boy>
      <br></br>
      <Girl></Girl>
    </div>
  );
};

export default All;
