import { useState } from 'react';
import './App.css';

function App() {
  //define state variable
  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);
  const [rate, setRate] = useState(0);


  //defination of function & fetching a data using async-await method through JSON
  async function convert(e){
    
    try{
      //setting address and the API key to fetch the data
      const address = URL + API_KEY;
      const response = await fetch(address);

      if(response.ok){
        //fetch the data from given API and put that into const json
        const json = await response.json();

        console.log(json.rates.GBP);
        setRate(json.rates.GBP);

        //fetching a conversion rate of GBP from AIP and seting a value of GBP by making a calculation
        setGbp(eur * json.rates.GBP);
      }
      else{
        //if the error occure then print response with message.
        alert('Error retrieving exchange rate.')
        console.log(response);
      }

    }catch(err){
      alert(err);
    }
  }



  return (

    //Structure of Page
    <div>
      <h2>Euro To Pound Converter</h2>
      <form onSubmit={convert}>
        <div>
          <label>Exchange Rate: </label>
          <label>1 € = <output>{rate}</output> £</label>

        </div>

        <div>
          <label>Euro </label>
          <input type="number" step=""
            value={eur} onChange={e => setEur(e.target.value)} />
        </div>

        <div>
          <label>GBP : </label>
          <output>{gbp } £</output>
        </div>

        <div>
          <button>Convert</button>
        </div>

      </form>
    </div>

  );
}

export default App;
