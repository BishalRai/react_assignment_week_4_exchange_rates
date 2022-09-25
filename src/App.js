import { useState } from 'react';
import './App.css';

//API address and the key has been provided.
const URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=';
const API_KEY ='911b3806a1cbe40dacf96b52c007b3f3'



function App() {
  //define state variable
  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);
  const [rate, setRate] = useState(0);


  //defination of function & fetching a data using async-await method through JSON
  async function convert(e){
    //this section stop to reload the whole page, rather then refresh specific portion.
    e.preventDefault();
    try{
      //setting address and the API key to fetch the data
      const address = URL + API_KEY;
      const response = await fetch(address);

      if(response.ok){
        //fetch the data from given API and put that into const json
        const json = await response.json();

        // this section is for to have a look of the structure of the data that has been fetched from https connection so that specific info can be used.
        // console.log(json);

        //console.log(json.rates.GBP);

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
          <label>1 € = <output>{rate.toFixed(2)}</output> £</label>

        </div>

        <div>
          <label>Euro </label>
          <input type="number" step="0.01"
        value={eur} onChange={e => setEur(e.target.value)} />
        </div>

        <div>
          <label>GBP : </label>
          <output>{gbp.toFixed(2)} £</output>
        </div>

        <div>
          <button>Convert</button>
        </div>

      </form>
    </div>

  );
}

export default App;
