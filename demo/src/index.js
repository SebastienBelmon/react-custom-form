import React, {Component} from 'react'
import {render} from 'react-dom'

import { Form, TextField } from '../../src';

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
          <TextField type="text" name="username" label="Username" />
          <TextField type="text" name="city" label="City" />
          <TextField type="checkbox" name="test" label="Test" />
        </Form>
      </div>
    );
  }
}

render(<App/>, document.querySelector('#demo'))
