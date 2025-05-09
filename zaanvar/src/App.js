// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import PetCards from './components/PetListing'; 
import MatchedProfiles from './components/MatchedProfiles'; 
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <main >
        <PetCards />
        <MatchedProfiles />
      </main>
    </div>
  );
}

export default App;
