import React from "react";

import classes from "./Footer.module.scss";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const copyRightYear = currentYear === 2022 ? 2022 : `2022 - ${currentYear}`;

  return (
    <footer className={classes.footer}>
      <p className={classes.copyRight}>
        © {copyRightYear} | Конвертер валют | Created by{" "}
        <a
          className={classes.copyLink}
          href="https://github.com/GrafSoul/react-currency-converter"
          rel="noreferrer"
          target="_blank"
        >
          GrafSoul
        </a>
      </p>
    </footer>
  );
};

export default Footer;
