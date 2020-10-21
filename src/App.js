import React, {useState} from 'react';
import {Link , Route} from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Directory from "./components/directory/directory.component";

const HatsPage = () => (
    <div>
        <h1>
            HATS PAGE
        </h1>
    </div>
)
function App() {
  return(
  <div>
        <switch>
            <Route exact path='/' component={HomePage}/>
            <Route  path='/hats' component={HatsPage}/>
        </switch>
  </div>
  )
}



export default App;
