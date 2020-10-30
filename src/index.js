import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
//este file es el entry point de la APP
//2 params, el componente & donde voy empujar este componente
ReactDOM.render(<HelloWorld/>, document.getElementById('app'));