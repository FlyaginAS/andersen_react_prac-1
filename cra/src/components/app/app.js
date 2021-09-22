import React, { Component } from 'react';
import './app.css';

class ErrorButton extends Component {
  render() {
    console.log(this.state.foo.bar);
    return <button> Error</button>;
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  state = {
    value: '',
  };

  componentDidMount() {
    console.log('componentDidMount'); // после монтирования
  }

  componentDidUpdate() {
    console.log('componentDidUpdate'); //при изменении инпута
  }

  componentWillUnmount() {
    console.log('componentWillUnmount'); // если внести изменения в код, то при пересборке компонент размонтируется
  }

  componentDidCatch() {
    console.log('componentDidCatch'); //при возникновении ошибки в методах жизненного цикла потомков
  }

  onInputChange = (evt) => this.setState({ value: evt.target.value });

  checkInput = () => {
    //учитывать или нет регистр сказано не было
    return this.state.value.includes('реакт');
  };

  onInputFocus = (evt) => {
    evt.preventDefault();
    this.inputRef.current.focus();
  };

  render() {
    const {
      state: { value },
      onInputChange,
      checkInput,
      onInputFocus,
    } = this;

    return (
      <form className="form">
        <input
          type="text"
          className="input"
          placeholder="Please, enter a text"
          value={value}
          onChange={onInputChange}
          ref={this.inputRef}
        />
        <button className="focus-button" onClick={onInputFocus}>
          Focus on input
        </button>
        <button
          type="submit"
          className="submit-button"
          disabled={checkInput()}
        >
          Submit
        </button>
        {/* <ErrorButton /> */}
      </form>
    );
  }
}
