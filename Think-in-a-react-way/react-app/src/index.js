import React from 'react';
import ReactDOM from 'react-dom';

const myElem = React.createElement('h1', null, 'hello world!');

ReactDom.render(myElem);

console.log(myElem);
