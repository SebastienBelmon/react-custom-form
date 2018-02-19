import React from 'react';

const TextField = props => (
  <div>
    <label>{props.label}</label>
    <input
      name={props.name}
      checked={props.type === 'checkbox' ? props.value : undefined}
      value={props.value}
      type={props.type}
      onChange={props.handleChange}
    />
  </div>
);

export default TextField;
