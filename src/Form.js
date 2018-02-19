import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  render() {
    const { children } = this.props;
    var childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { handleChange: this.handleChange })
    );

    return (
      <form onSubmit={this.props.onSubmit}>
        {childrenWithProps}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
