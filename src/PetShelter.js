/**
 * @author Amir Sarbazi
 * @email [amir.sarbazi@gmail.com]
 * @create date 2023-02-04 
 * @desc [This is a React project which is using : 
 *        Routes / Route / Navbar / NavLink  
 *        The most important part is how to use a props when calling a component by element]
 */
import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'



class PetShelter extends Component {
constructor(props){
    super(props)
    this.state={ isLoaded:false }

}




    render() {
   
        return (
            <div><h1>Pet Shelter shows {this.props.name}</h1>
             <img alt={this.props.name} src={`https://loremflickr.com/400/300/${this.props.name}`}
        
             /> 

             <br />
             <NavLink to="/">
             Back to Home
             </NavLink>

 
                {/* <button onClick={this.handleHome}>Go home</button> */}
            </div>
        )
    }
}
export default PetShelter