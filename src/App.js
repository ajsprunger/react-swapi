import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import ShipList from './pages/ShipList/ShipList';
import ShipDetails from './pages/ShipDetails/ShipDetails';


function App() {
  return (
    <>
      <nav>STARWARS STARSHIPS</nav>
      <Routes>
        <Route path='/' element={<ShipList />} />
        <Route path='/ship' element={<ShipDetails />} />
      </Routes>
    </>
  );
}

export default App;
