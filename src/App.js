import React from 'react';
import {originals,action} from './urls'
import './App.css'
import Banner from './Componets/Banner/Banner';
import NavBar from './Componets/NavBar/NavBar';
import RowPost from './Componets/RowPost/RowPost';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
