import React from "react";
import { Link } from "react-router-dom";

import CustomLink from "./CustomLink/CustomLink";

import classes from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>
        <div className={classes.headerName}>
          <Link to="/">
            <img className={classes.logo} src="images/logo.png" alt="Лого" />
          </Link>
          <span className={classes.name}>Конвертер валют</span>
        </div>

        <nav>
          <ul className={classes.menu}>
            <li className={classes.menuItem}>
              <CustomLink to="/">Валюты</CustomLink>
            </li>
            <li className={classes.menuItem}>
              <CustomLink to="/converter">Конвертер</CustomLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
