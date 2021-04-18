import React,{Component} from 'react';
import './App.css';


class App extends Component{
  constructor(props, context) {
    super(props, context);
    
    this.state= {
      title: "Arindam",
      headerLinks: [
        {title: "Home", path: "/"},
        {title: "About", path: "/about"},
        {title: "Contact", path: "/contact"}
      ]
    }
  }
  
  render(){
    return (
      <div className="App">
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default App;
