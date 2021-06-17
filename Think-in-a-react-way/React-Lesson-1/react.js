const domContainer = document.querySelector('.container')

const myElement = React.createElement(
    'div',null,
    [React.createElement('i',null,'Hello world!'),
    React.createElement('p',null,'Hello world!')]

)

ReactDOM.render(myElement,domContainer)