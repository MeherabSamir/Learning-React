const domContainer = document.querySelector('#root')

const myElement = React.createElement(
    'div',null,
    [React.createElement('i',null,'Hello world!'),
    React.createElement('p',null,'Hello world!')]

)

console.log(React)
console.log(ReactDOM)
ReactDOM.render(myElement,domContainer)