import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import axios from "axios";
import Identity from "../lib/identity";

function App() {
  const identity = Identity.get()
  console.log('identity:', identity)

  if(identity) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${identity.token}`;
  }
  
  return (
    <BrowserRouter>
      <Main /> 
    </BrowserRouter>
  );
}

export default App;
