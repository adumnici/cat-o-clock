import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';

const imagePath = {
  true:"https://media.giphy.com/media/5wWf7H5pp15X4yOr2ik/giphy.gif",
  false:"https://media1.tenor.com/images/cbad6bc097e72d9a04628cbecc576265/tenor.gif?itemid=5368434"
}

class Clock extends React.Component{
  constructor (props) {
    super (props);
    this.state={image: true}
  }
  changeImage = () => {
      this.setState(state =>({image: !state.image}))
    }
  getImageName = () =>this.state.image ? true : false;

  render () {
    const imageName = this.getImageName();
    return (
      <div className="tc ph4 vh-100 dt w-100">
        <div>
          <img alt="cats party" className="dtc" src={imagePath[imageName]} />
        </div>
          <h1>It is {new Date().toLocaleTimeString()}.</h1>
          <button type="button" onClick={this.changeImage}>
          It's cat-o-clock time
          </button>
    </div>
      )
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'))

 

// setInterval(<Clock />, 1000);

