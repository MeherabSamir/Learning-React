import React from 'react';
import ReactDOM from 'react-dom';

const name = 'world';

let num = 1;
function increment() {
    num += 1;
    const elem = (
        <div className="heading">
            <span>
                Hello {name} {new Date().toLocaleTimeString()}
            </span>
            <br />
            <img
                src="https://sm.mashable.com/t/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.960.png"
                alt="Hi cutie!"
            />
            <h2>Number is {num}</h2>
        </div>
    );
    ReactDOM.render(elem, document.getElementById('root'));
}

setInterval(increment, 1000);
