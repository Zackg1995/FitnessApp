import React from "react";

export default class BMIForm extends React.Component {
  //creating state to hold e.target.values

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      weight: 0,
      bmi: 0,
    };
  }

  changeWeight = (e) => {
    const weight = e.target.value;
    if (!weight || weight.match(/^\d{1,}(\.\d{0,0})?$/)) {
      this.setState(() => ({ weight }));
    }
  };

  changeHeight = (e) => {
    this.setState({ height: e.target.value * e.target.value });
  };

  calculateBmi = () => {
    this.setState({
      bmi: parseInt(this.state.weight) / parseInt(this.state.height),
    });
  };

  render() {
    return (
      <div className="content_container">
        <h3>BMI Calculator</h3>
        <form className="form">
          <input
            type="text"
            placeholder="Height"
            className="bmi_text_input"
            onChange={this.changeHeight}
          ></input>
          <input
            type="text"
            placeholder="Weight"
            className="bmi_text_input"
            onChange={this.changeWeight}
          ></input>
        </form>
        <h3 className="headerOne">Calculated BMI: {this.state.bmi}</h3>
        <button className="addFood" onClick={this.calculateBmi}>
          Submit for BMI!
        </button>
      </div>
    );
  }
}
