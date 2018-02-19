import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({ [name]: value });
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
