import React from "react";

export default class BMIForm extends React.Component {
  //creating state to hold e.target.values

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      weight: 0,
      bmi: 0
    };
  }

  changeWeight = e => {
    const weight = e.target.value;
    if (!weight || weight.match(/^\d{1,}(\.\d{0,0})?$/)) {
      this.setState(() => ({ weight }));
    }
  };

  changeHeight = e => {
    this.setState({ height: e.target.value * e.target.value });
  };

  calculateBmi = () => {
    this.setState({
      bmi: parseInt(this.state.weight) / parseInt(this.state.height)
    });
  };

  render() {
    return (
      <div className="container">
        <div className="contentStyleTwo">
          <h1 className="headerOne">Calculate your BMI!</h1>
          <form>
            <input
              type="text"
              placeholder="Height"
              className="add-bmi"
              onChange={this.changeHeight}
            ></input>
            <input
              type="text"
              placeholder="Weight"
              className="add-bmi"
              onChange={this.changeWeight}
            ></input>
          </form>
          <h1 className="headerOne">Calculated BMI: {this.state.bmi}</h1>
        </div>
        <button className="addBMI" onClick={this.calculateBmi}>
          Submit for BMI!
        </button>
      </div>
    );
  }
}
