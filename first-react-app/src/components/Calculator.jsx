import React, { useState } from 'react';

const Calculator = () => {
  // State variables for input values and result
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(null);

  // Function to handle calculation based on operator
  const calculateResult = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operator) {
      case '+':
        setResult(number1 + number2);
        break;
      case '-':
        setResult(number1 - number2);
        break;
      case '*':
        setResult(number1 * number2);
        break;
      case '/':
        setResult(number1 / number2);
        break;
      default:
        setResult(null);
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <label>
        Enter number 1:
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Enter number 2:
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </label>
      <br />
      <label>
        Select operator:
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="">Select</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </label>
      <br />
      <button onClick={calculateResult}>Calculate</button>
      <br />
      {result !== null && (
        <div>
          <h3>Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
