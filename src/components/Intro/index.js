import React from 'react';

const Intro = props => (
  <p className="App-intro">
    {props.message}
  </p>
);
/* use () instead of {} to compile to a single element;
{} executes multiple lines of code */

export default Intro;