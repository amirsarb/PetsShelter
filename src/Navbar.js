/**
 * @author Amir Sarbazi
 * @email [amir.sarbazi@gmail.com]
 * @create date 2023-02-04 
 * @desc [This is a React project which is using : 
 *        Routes / Route / Navbar / NavLink  
 *        The most important part is how to use a props when calling a component by element]
 */

import React, { Component } from 'react'
import { NavLink,Link } from 'react-router-dom'
import SearchedItem from './SearchedItem'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""

        }

        this.hanldeChange = this.hanldeChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    hanldeChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSearch(){

return <SearchedItem  /> }

    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">PetShelter</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavLink to="/animal/dog" className="nav-item nav-link">
                               Dog
                            </NavLink>
                            <NavLink to="/animal/cat" className="nav-item nav-link">
                                Cat
                            </NavLink>
                            <NavLink to="/animal/bird" className="nav-item nav-link">
                               Bird
                            </NavLink>

                        </ul>
                        <form className="d-flex" role="search">
                           <input name="search" className="search form-control me-2" onChange={this.hanldeChange} value={this.state.search}  type="search" placeholder="Search" aria-label="Search" /> 
                  
                            <Link className="btn btn-outline-success" to={`/animal/${this.state.search}`}>Search</Link>
                            
                        </form>
                    </div>
                </div>
            </nav>
           
            </div>
        )
    }
}

export default Navbar
