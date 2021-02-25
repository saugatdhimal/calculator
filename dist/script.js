import React from 'react';
import ReactDOM from 'react-dom';

const numbers = {
  "zero": "0",
  "one": "1",
  "two": "2",
  "three": "3",
  "four": "4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine": "9" };


const operators = {
  "add": "+",
  "subtract": "-",
  "multiply": "*",
  "divide": "/" };


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      isDecimal: false };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const length = this.state.display.length < 23;
    if (event.target.id in numbers && length) {
      if (this.state.display === "0") {
        this.setState({ display: numbers[event.target.id] });
      } else {
        this.setState({ display: this.state.display.concat(numbers[event.target.id]) });
      }
      Array.from(event.target.parentNode.children).forEach(x => x.classList.remove("pressed"));
    }

    if (event.target.id === "clear") {
      this.setState({ display: "0", isDecimal: false });
      Array.from(event.target.parentNode.children).forEach(x => x.classList.remove("pressed"));
    }

    if (event.target.id === "decimal") {
      if (this.state.isDecimal === false) {
        this.setState({ display: this.state.display.concat("."), isDecimal: true });
      }
      Array.from(event.target.parentNode.children).forEach(x => x.classList.remove("pressed"));
    }

    if (event.target.id in operators && length) {
      if (Object.values(operators).includes(this.state.display[this.state.display.length - 1]) && event.target.id !== "subtract") {
        let arr = Array.from(this.state.display);
        let arr1 = arr.filter(x => {if (x === "-" || x === "+" || x === "/" || x === "*") {return x;}});
        let index = this.state.display.indexOf(arr1[0]);
        this.setState({ display: this.state.display.substring(0, index).concat(operators[event.target.id]), isDecimal: false });
      } else
      {this.setState({ display: this.state.display.concat(operators[event.target.id]), isDecimal: false });}
      event.target.classList.add("pressed");
    }

    if (event.target.id === "equals") {
      this.setState({ display: eval(this.state.display).toString(), isDecimal: false });
      Array.from(event.target.parentNode.children).forEach(x => x.classList.remove("pressed"));
    }
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "calculator" }, /*#__PURE__*/
      React.createElement("div", { id: "box" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.display), /*#__PURE__*/
      React.createElement("button", { id: "clear", onClick: this.handleClick }, "AC"), /*#__PURE__*/
      React.createElement("button", { id: "divide", onClick: this.handleClick }, "/"), /*#__PURE__*/
      React.createElement("button", { id: "multiply", onClick: this.handleClick }, "x"), /*#__PURE__*/
      React.createElement("button", { id: "seven", onClick: this.handleClick }, "7"), /*#__PURE__*/
      React.createElement("button", { id: "eight", onClick: this.handleClick }, "8"), /*#__PURE__*/
      React.createElement("button", { id: "nine", onClick: this.handleClick }, "9"), /*#__PURE__*/
      React.createElement("button", { id: "subtract", onClick: this.handleClick }, "-"), /*#__PURE__*/
      React.createElement("button", { id: "four", onClick: this.handleClick }, "4"), /*#__PURE__*/
      React.createElement("button", { id: "five", onClick: this.handleClick }, "5"), /*#__PURE__*/
      React.createElement("button", { id: "six", onClick: this.handleClick }, "6"), /*#__PURE__*/
      React.createElement("button", { id: "add", onClick: this.handleClick }, "+"), /*#__PURE__*/
      React.createElement("button", { id: "one", onClick: this.handleClick }, "1"), /*#__PURE__*/
      React.createElement("button", { id: "two", onClick: this.handleClick }, "2"), /*#__PURE__*/
      React.createElement("button", { id: "three", onClick: this.handleClick }, "3"), /*#__PURE__*/
      React.createElement("button", { id: "equals", onClick: this.handleClick }, "="), /*#__PURE__*/
      React.createElement("button", { id: "zero", onClick: this.handleClick }, "0"), /*#__PURE__*/
      React.createElement("button", { id: "decimal", onClick: this.handleClick }, ".")), /*#__PURE__*/

      React.createElement("div", { id: "by" }, /*#__PURE__*/
      React.createElement("span", null, /*#__PURE__*/React.createElement("p", { id: "arr" }, "Click here ", /*#__PURE__*/React.createElement("i", { class: "fa fa-arrow-down" })), /*#__PURE__*/
      React.createElement("a", { href: "https://github.com/saugatdhimal", target: "_top" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-github" }), " by saugatdhimal")))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById("cal"));
