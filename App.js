// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  let[value, setValue]= useState("");
  return (
    <div className="container mt-5 bg-dark rounded">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 bg-secondary mt-3 rounded mb-3">
          <div className="calculator mt-3 ">
            <form action="">
              <div className="input mb-3 m-2">
                <input type="text" className="form-control" value={value}/>
              </div>
              <div className="mb-3">
                <input type="button" value="C" className="m-2" onClick={obj=>setValue("")}/>
                <input type="button" value="DEL" className="m-2" onClick={obj=>setValue(value.slice(0,-1))}/>
                <input type="button" value="%" className="m-2" onClick={obj=>setValue(value + obj.target.value)}/>
                <input type="button" value="/" className="m-2" onClick={obj=>setValue( value + obj.target.value)}/>
              </div>
              <div className="mb-3">
                <input type="button" value="7" className="m-2" onClick={obj=>setValue(value + obj.target.value)}/>
                <input type="button" value="8" className="m-2" onClick={obj=>setValue(value + obj.target.value)}/>
                <input type="button" value="9" className="m-2" onClick={obj=>setValue(value + obj.target.value)}/>
                <input type="button" value="*" className="m-2" onClick={obj=>setValue(value + obj.target.value)}/>
              </div>
              <div className="mb-3">
                <input type="button" value="4" className="m-2" onClick={obj=>setValue(value + obj.target.value)}/>
                <input type="button" value="5" className="m-2" onClick={obj=>setValue(value + obj.target.value)}/>
                <input type="button" value="6" className="m-2" onClick={obj=>setValue(value + obj.target.value)}/>
                <input type="button" value="-" className="m-2" onClick={obj=>setValue(value + obj.target.value)}/>
              </div>
              <div className="mb-3">
                <input type="button" value="1" className="m-2" onClick={obj=>setValue(value + obj.target.value)}/>
                <input type="button" value="2" className="m-2" onClick={obj=>setValue(value + obj.target.value)}/>
                <input type="button" value="3" className="m-2" onClick={obj=>setValue(value + obj.target.value)}/>
                <input type="button" value="+" className="m-2" onClick={obj=>setValue(value + obj.target.value)}/>
              </div>
              <div className="mb-3">
                <input type="button" value="00" className="m-2" onClick={obj=>setValue(value + obj.target.value)}/>
                <input type="button" value="0" className="m-2"  onClick={obj=>setValue(value + obj.target.value)}/>
                <input type="button" value="." className="m-2" onClick={obj=>setValue(value + obj.target.value)}/>
                <input type="button" value="=" className="m-2" onClick={obj=>setValue(eval(value))}/>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}

export default App;
