import React from "react";
import Header from "./Header";
import Barchart from "./Barchart";

import './App.css';


import {BrowserRouter ,Route,Routes} from 'react-router-dom'

// import {GlobalStyle} from "./GlobalStyle";




const App = () => {
  return (<BrowserRouter>
  {/* <GlobalStyle/> */}
  <Header/>
  <Routes>
   
    <Route path="/" element={<Barchart />}/>

  </Routes>

 
  </BrowserRouter>);
};

export default App;
