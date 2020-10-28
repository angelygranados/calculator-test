import React from "react";

const OperatorButton = ({ handleOperation, typeOperation }) => {
  return (
    <button type="button" onClick={handleOperation}>
      {typeOperation}
    </button>
  );
};

export default OperatorButton;
