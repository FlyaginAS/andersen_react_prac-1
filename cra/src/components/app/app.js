import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  state = {
    value: '',
  };

  onInputChange = (evt) => this.setState({ value: evt.target.value });

  checkInput = () => {
    //учитывать или нет регистр сказано не было
    return this.state.value.includes('реакт');
  };

  render() {
    const {
      state: { value },
      onInputChange,
      checkInput,
    } = this;

    return (
      <form className="form">
        <input
          type="text"
          className="input"
          placeholder="Please, enter a text"
          value={value}
          onChange={onInputChange}
        />
        <button className="focus-button">Focus on input</button>
        <button
          type="submit"
          className="submit-button"
          disabled={checkInput()}
        >
          Submit
        </button>
      </form>
    );
  }
}
