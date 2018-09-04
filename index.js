import React from 'react';
import ReactDOM from 'react-dom';
import * as styled from 'styled-components';

console.log("Look ma'! I'm doin' javascript!");

styled.injectGlobal`
html, body {
  margin: 0;
  padding: 0;
  width: auto;
  height: 100vh;
  color: #C0FFEE;
  background-color: #000000;
}

* {
  box-shadow: 1px 1px 3px palegoldenrod;
}

h1 {
  font-family: 'Baloo Tammudu', cursive;
  text-transform: uppercase;
  color: #F17;
}
`;

ReactDOM.render(
  <h1>
    This is the <del>old</del> <strong>shiny</strong> way
  </h1>,
  document.getElementById('root')
);
