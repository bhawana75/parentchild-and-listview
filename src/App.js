import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import MultipleInputs from './components/multipleInput';
import Child from './components/ParentChild/Child';

const App = () => {
  return (
    <>
      <Routes>
           <Route exact path='/' component={MultipleInputs} />
           <Route path='/parentchild' component={Child} />
      </Routes>
    

    <div>
      <MultipleInputs />
    </div>
  </> 
  );
}

export default App;

