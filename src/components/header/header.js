import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import classes from './header.module.css';

const Header = ({ theme, darkThemeHandler }) => {
  return (
    <div className={classes.header}>
      <div className={classes.heading}>
        <a href="/">SplitXpense</a>
        <div>
          <span>Person</span>
          <span onClick={darkThemeHandler}>
            {theme === 'light' ? (
              <FontAwesomeIcon icon={faSun} className={classes.theme} />
            ) : (
              <FontAwesomeIcon icon={faMoon} className={classes.theme} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
