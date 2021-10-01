import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables
  const [number1, setNumber1] = useState();
  const number2 = 20;
  const [addition, setAddition] = useState();
  const [subtraction, setSubtraction] = useState();

  // Function to add numbers and update total in state
  function add() {

    setAddition(number1 + number2);
  }
  function sub() {

    setSubtraction(number1 - number2);
  }

  return (

    <div>
      <div className="App">
        <div className="container">
          <div className="container my-5 border-danger ">
            <h3 className="my-5">-: Enter a Value to Add/Subtract with value 20 :-</h3>

            <div className="number-inputs container my-5">
              <input type="number" className="form-control border border-success" placeholder="Enter a Value" value={number1} onChange={e => setNumber1(+e.target.value)} />

              <div className="input-group mb-3">
                <button className="btn btn-outline-light mb-3 my-4 btn-info " onClick={add} type="button" id="button-addon1 btn ">Addition</button>
                <input type="number" className="form-control mb-3 my-4 border border-warning rounded-pill" placeholder="" value={addition} aria-label="Example text with button addon" aria-describedby="button-addon1" />
              </div>

              <div className="input-group mb-3">
                <button className="btn btn-outline-light mb-3 btn-warning  " onClick={sub} type="button" id="button-addon1 btn ">Subtraction</button>
                <input type="number" className="form-control mb-3 border border-warning rounded-pill" placeholder="" value={subtraction} aria-label="Example text with button addon" aria-describedby="button-addon1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
