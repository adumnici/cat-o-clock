import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';

const imagePath = {
  true:"https://media.giphy.com/media/5wWf7H5pp15X4yOr2ik/giphy.gif",
  false:"https://media1.tenor.com/images/cbad6bc097e72d9a04628cbecc576265/tenor.gif?itemid=5368434"
}

const buttonText = {
  true: "It's cat-o-clock time",
  false: "Dammit, the cat party is over"
}

class Clock extends React.Component{
  constructor (props) {
    super (props);
    this.state={
      image: true,
      text: true,
    }
  }

  time = () => {
    return new Date().toLocaleTimeString();
  }
  
  changeImage = () => {
      this.setState(state =>({image: !state.image}))
    }
  changeText = () => {
    this.setState(state =>({text : !state.text}))
  }
  getImageName = () =>this.state.image ? true : false;

  getTextTag = () => this.state.text ? true : false;

  handleClick = () =>{
    this.changeImage();
    this.changeText();
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render () {
    const imageName = this.getImageName();
    const textName = this.getTextTag();
    return (
      <div className="tc ph4 vh-100 dt w-100">
        <div>
          <img alt="cats party" className="dtc" src={imagePath[imageName]} />
        </div>
          <h1>It is {`${this.time()}`}.</h1>
          <button type="button" onClick={this.handleClick}>
          {buttonText[textName]}
          </button>
      </div>
      )
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'))


