//import logo from './logo.svg';
import './App.css';
import Samp from './Components/Samp';
import Head from './Components/Header';
import Counter from './Components/Counter'
import UseEff from './Components/UseEffect';
import { useState } from 'react';


function App() {

 const Word = 'Website';

 const [state,setstate] = useState(false);

  return (
    <div className="App"> 
      
      <Head Data={Word}></Head>
      <p> Please Click Below... </p>
      <Samp></Samp>
      

      <button onClick={ ()=> setstate(!state)}>Show/Hide</button>
  
  { state?<UseEff/> :null } 

      
          
    </div>
  );
}

export default App;
 