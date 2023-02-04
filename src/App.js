/**
 * @author Amir Sarbazi
 * @email [amir.sarbazi@gmail.com]
 * @create date 2023-02-04 
 * @desc [This is a React project which is using : 
 *        Routes / Route / Navbar / NavLink  
 *        The most important part is how to use a props when calling a component by element]
 */

import './App.css';
import { Routes, Route, useParams} from 'react-router-dom'
import PetShelter from './PetShelter';
import Navbar from './Navbar'
import Home from './Home';



function GetComponent() {
  let { name } = useParams()
  return <PetShelter name={name} />

}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/animal/:name" element={<GetComponent />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<h1>Error not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
