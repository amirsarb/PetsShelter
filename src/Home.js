/**
 * @author Amir Sarbazi
 * @email [amir.sarbazi@gmail.com]
 * @create date 2023-02-04 
 * @desc [This is a React project which is using : 
 *        Routes / Route / Navbar / NavLink  
 *        The most important part is how to use a props when calling a component by element]
 */

import React, { Component } from 'react'
import cat from './img/cat.jpg'
import dog from './img/dog.jpg'
import bird from './img/bird.jpg'

class Home extends Component {
  render() {
    return (
        <div Name="container marketing">

        <div className="row pt-5">
          <div className="col-lg-4">
           <img className="img-thumbnail home-image" alt="cat" src={cat}/>
    
            <h2>Cats</h2>
           
            <p><a className="btn btn-secondary" href="/animal/cat">Show Cats »</a></p>
          </div>
          <div className="col-lg-4">
           <img className="img-thumbnail home-image" alt="dog" src={dog}/>
    
            <h2>Dogs</h2>
           
            <p><a className="btn btn-secondary" href="/animal/dog">Show Dogs »</a></p>
          </div>
          <div className="col-lg-4">
           <img className="img-thumbnail home-image" alt="bird" src={bird}/>
    
            <h2>Birds</h2>
           
            <p><a className="btn btn-secondary" href="/animal/bird">Show Birds »</a></p>
          </div>

         
        </div>
        <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5 text-center">
        <h1 className="display-5 fw-bold">PetsShelter</h1>
        <p className=" fs-2">This is a React project which is using : <br/>
         Routes / Route / Navbar / NavLink  <br />
         The most important part is how to use a props when calling a component by element <br/>
         </p>
        <p className = "display-5 text-primary fw-bold primary">Code by Amir Sarbazi</p>
      </div>
    </div>
      </div>
    )
  }
}
export default Home
