import React, { Component } from "react";
import "./style.css";
import styles from "./Navigation.module.css";

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
interface NavbarState {
  themeClass: themeClass;
}

type theme = "light" | "dark";
type themeClass = "section-light" | "section-dark";

export default class Navbar extends Component<NavbarProps, NavbarState> {
  size: number;
  buttons: JSX.Element[];
  constructor(props) {
    super(props);

    this.buttons = Button.joinIntoLIElements(this.props.content);

    if (this.props.theme == "light") {
      this.setState({ themeClass: "section-light" });
    } else {
      this.setState({ themeClass: "section-dark" });
    }
  }

  render() {
    return (
      <section className={styles.section} style={{ width: window.innerWidth }}>
        {this.buttons}
      </section>
    );
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
