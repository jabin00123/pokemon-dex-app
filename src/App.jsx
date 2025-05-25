import React from 'react';
import Router from './shared/Router';
import SelectedPokemonProvider from './context/SeletedPokemonContext';


const App = () => {
  return (
    <div>
      <SelectedPokemonProvider>
        <Router />  
      </SelectedPokemonProvider>
 
    </div>
  );
};

export default App;