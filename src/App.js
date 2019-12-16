import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage.component';

const HatsPage = (props) => {
  console.log(props);
  return(
  <div>
    <h1>HATS</h1>
  </div> );

};

function App() {
  return (
    <div>
      <Route exact path = '/' component={ Homepage }/>
      <Route path='/shop/hats' component={ HatsPage }/>
    </div>
  );
}

export default App;
