import React from "react";

import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <h1>Currency Converter</h1>

      <ul>
        <li>
          <Link to="/">Currency</Link>
        </li>
        <li>
          <Link to="/converter">Converter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
