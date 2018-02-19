import React from 'react';

const TextField = props => (
  <div>
    <label>{props.label}</label>
    <input
      name={props.name}
      value={props.value}
      onChange={props.handleChange}
    />
  </div>
);

export default TextField;
