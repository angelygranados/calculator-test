import "./App.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Sum from "./actions/actions";
import OperatorButton from "./components/OperatorButton";
function App({ Sum, number1, number2, result }) {
  const [num1, setNum1] = useState(number1);
  const [num2, setNum2] = useState(number2);

  function SumFunction() {
    const result = Number(num1) + Number(num2);
    Sum(result, num1, num2);
  }
  return (
    <div className="App">
      <h1>Calculadora</h1>
      <input
        type="number"
        name="field1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        name="field2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <OperatorButton typeOperation={"+"} handleOperation={SumFunction} />
      <h2>{result}</h2>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ Sum }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
