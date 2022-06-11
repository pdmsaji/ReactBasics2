import React from 'react';
import { useState } from 'react';
import Counter from './Counter';
import Emp from './Emp';


function Compo() {
   
   const [counter,setCount] = useState(0);  
   //let count = 0;

   function addNum() {
    
    setCount( counter+1 )
    //count=count+1; 
    console.log(counter);  
 
   }
 


 
    // return(
    //     <div className='App'>
    //        <button onClick={addNum}>add</button>
    //        <h2>Counter- {counter}</h2>
    //     </div>
    // )


    let emp = [ { name:'Tim', Age:22 },
    { name:'Amy', Age:'33' },
    { name:'Vin', Age:'44' }
    ];

    // return (
    //     <div className='App'>
    //         <button onClick={addNum}>Add Numbers</button>
    //         <Counter {...obj} ></Counter>
             


    //     </div>


    // )



    return (

        <div className='App'>
            <button onClick={addNum}> Increment </button>
            {
                emp.map(

                   (obj,index)=> {

                     return(
                         
                         //<Emp key = {index} nam={obj.name} age={obj.Age}/>
                          <Emp key = {index} {...obj}/>
                         
                     )
                   } 
                )


            }


        </div>
    )
    
}






export default Compo;

// num is an attribute for the html element Counter-pls note this.
// onClick={addNum}- onClick={addNum()} shall not include brackets here-
// remember this point
