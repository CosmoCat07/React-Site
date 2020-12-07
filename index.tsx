import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Navbar, { Button } from "./Navigation";

interface AppProps {}
interface AppState {
  name: string;
}

var buttons = [
  new Button("Index", "index"),
  new Button("About", "about"),
  new Button("Streams", "twitch")
];
//console.log(buttons[0].joinIntoList(buttons[0], buttons[1]));

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Navbar theme="dark" content={buttons} />
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
