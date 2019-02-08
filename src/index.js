import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';


function tick() {
  const element = (
    <div className="tc ph4">
    	<div>
    		<img alt="cats party" src="https://media.giphy.com/media/5wWf7H5pp15X4yOr2ik/giphy.gif" />
    	</div>
    		<h1>It is {new Date().toLocaleTimeString()}.</h1>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);