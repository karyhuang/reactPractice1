import React from 'react';
import loaderSrc from '../../assets/Pacman.gif';

const Loader = props => (
  <div>
    <img 
      alt="Pacman Loader"
      src={loaderSrc} />
  </div>
);

export default Loader;