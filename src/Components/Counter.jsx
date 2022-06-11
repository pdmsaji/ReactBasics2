import React from 'react'


function counter(props) {

 const {name,num} = props;
 // destructuring method for variables just like array destructuring.
 // assign props into separate two variables
 

  return (
    <div>
        
        <h1>{name} {num}</h1>
        
     </div>
  )
}

export default counter 


// the passed value from the other component will come to props as an object
// then that object shall be disintegrated to get the individual values from it
// use the key value pair, interms of attributes given at the html element. 