import React from 'react';

const Actor = props => (
  <div>
    <div><h2>{props.name}</h2>
      <i>{props.role}</i>
    </div>
  </div>
);

export default Actor
