import React, { Component } from "react";
import "./style.css";
import "./Navigation.tsx.css";

export class Button {
  text: string;
  href: string;
  constructor(text: string, href: string) {
    this.text = text;
    this.href = href;
  }

  static joinIntoLIElements(buttons: Button[]) {
    var total: JSX.Element[] = [];
    var index = 0;
    for (var btn of buttons) {
      total.push(<Navbutton button={btn} key={index} />);
      index++;
    }
    return total;
  }
}

interface NavbarProps {
  theme: theme;
  content: Array<Button>;
}
interface NavbarState {}

type theme = "light" | "dark";

export default class Navbar extends Component<NavbarProps, NavbarState> {
  size: number;
  buttons: JSX.Element[];
  constructor(props) {
    super(props);

    this.buttons = Button.joinIntoLIElements(this.props.content);
  }

  render() {
    return <section className={this.props.theme}>{this.buttons} style={{width: window.innerWidth}}</section>;
  }
}

interface NavbuttonProps {
  button: Button;
}
interface NavbuttonState {}

class Navbutton extends Component<NavbuttonProps, NavbuttonState> {
  constructor(props) {
    super(props);
  }

  render() {
    return <div onClick={this.goToLink}>{this.props.button.text}</div>;
  }

  goToLink = () => {
    window.location.assign(this.props.button.href);
  };
}
