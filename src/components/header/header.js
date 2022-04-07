import React from 'react';
import classes from './header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.heading}>
        <a href="/">Splitwise</a>
        <p>Person</p>
      </div>
    </div>
  );
};

export default Header;
