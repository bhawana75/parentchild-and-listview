import React, { useState } from "react";
import Button from "./Button";

const Child = () => {

  const [number, setNumber] = useState(10);

  /* Getting number from the child button */

  const pull_data = (data) => {
    setNumber(data)
  }
    return(
      <>
        <div className="main_div">
            <div className="center_div">
                <h1> The Number is: {number} </h1>
            <div className="btn_div">
              <Button  func = {pull_data} />
                </div>
            </div>
        </div>
      </>

    )
}

export default Child;