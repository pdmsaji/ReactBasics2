import React, { Component } from 'react';


// A functional component

// function Head(props) {
    
//     return(

//         <h2>This is a sample {props.Data}</h2>
//     )
// }

// export default Head;


// a class component

class Head extends Component {
     
    render(){

        return(

            <h2>This is a sample {this.props.Data}</h2>
        )

    }
    


}

export default Head;