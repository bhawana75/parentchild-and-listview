import React, { useState } from "react";

const Button = React.memo((props) => {
  const [number, setNumber] = useState(10);

  /* Sending the added number to the parent */

    
  props.func(number);

  /* Incrementing the number */
  const addNum = () => {
    console.log("Number is ", number);
    setNumber(number + 5);
  };
  return (
    <div>
      <button onClick={addNum}> Add 5 </button>
    </div>
  );
});

export default Button;
