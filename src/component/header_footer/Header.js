import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";

import "./header.css";
import adidas from "../../assets/img/adidas.png";
import rwander from "../../assets/img/visit-rwanda.png";
import emirates from "../../assets/img/emirates.png";
function Header() {
  return (
    <header>
      {/* <div className="menu"> */}
      <div className="uppermenu">
        <Link to="#">arsenal women</Link>
        <Link to="#">hospitality</Link>
        <Link to="#">stadium tours</Link>
        <Link to="#">arsenal direct</Link>
        <Link to="#">junnior gunners</Link>
        <div className="icons">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </div>
      </div>
      <div className="menu">
        <div className="logo"></div>
        <div className="menu-category">
          <div className="divider"></div>
          <div className="lowermenu">
            <div className="menus">
              <Link to="#">news</Link>
              <Link to="#">video</Link>
              <Link to="#">teams </Link>
              <Link to="#">matches</Link>
              <Link to="#">ticket & membership</Link>
              <Link to="#">history</Link>
              <Link to="#">the club</Link>
              <Link to="#">fans</Link>
              <Link to="#">store</Link>
            </div>
            <div className="sponsor">
              <a href="https://addidas.co.uk/football">
                <img src={adidas} alt="adidas" />
              </a>
              <a href="https://addidas.co.uk/football">
                <img src={emirates} alt="adidas" />
              </a>
              <a href="https://addidas.co.uk/football">
                <img src={rwander} alt="adidas" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
