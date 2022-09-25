import { useState } from 'react';
import './App.css';

function App() {
//define state variable
const [eur,setEur] = useState(0);
const [gbp, setGbp] = useState(0);
const[rate,setRate] = useState(0);



  return (

  //Structure of Page
  <div>
    <h2>Euro To Pound Converter</h2>
      <form>
        <div>
        <div>
          <label>Exchange Rate: </label>
          <label>1 € = <output>{rate}</output> £</label>
          
        </div>
          <label>Euro </label>
          <input type = "number" step = ""
          value ={eur} onChange = {e => setEur(e.target.value)}/>
        </div>
        <div>
          <label>GBP : </label>
          <output>{}</output>
        </div>
        <div>
          <button>Convert</button>
        </div>
      </form>
    </div>

  );
}

export default App;
