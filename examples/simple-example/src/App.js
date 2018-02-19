import React, { Component } from 'react';
import { Form, TextField } from 'react-custom-form';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.form.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <Form ref={form => (this.form = form)} onSubmit={this.handleSubmit}>
          <TextField name="username" label="Username" />
          <TextField name="city" label="City" />
          <TextField name="test" label="Test" />
        </Form>
      </div>
    );
  }
}

export default App;
