import React from "react";
import { render } from "react-dom";
import App from "./containers/App";
import { AuthProvider } from './components/Authentication/context/AuthProvider';



render(<AuthProvider> <App /> </AuthProvider>, document.getElementById('root'));
