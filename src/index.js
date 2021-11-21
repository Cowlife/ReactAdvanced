import React from "react";
import ReactDOM from 'react-dom';
import './style/css/index.module.scss';

import App from "./App";

const appRoot = document.getElementById('root');
if(appRoot){
    ReactDOM.render(<App/>, appRoot)
}